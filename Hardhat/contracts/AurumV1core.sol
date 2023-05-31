pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "./getProceFeed.sol";



contract AurumV1core is NFTPrice {
    using SafeMath for uint256;
    uint256 public Borrow_interestRate;
    uint256 public maxLtv;
    uint256 MAX_AMOUNT_LIMIT = 1e16;
    uint256 public Lending_interestRate;
    address public owner;
    uint256 public totalSupply;
    uint256 public totalBorrowed;
    
    struct deposit {
            uint256 amount;
            uint256 time;
            uint256 interest;
    }
    mapping(address => deposit[]) public deposits;

    struct DepositedNFTs {
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 time;
        bool active;
    }
    // add the public visibility specifier here
    DepositedNFTs[] public totalDepositedNFTs;

    struct Loan {
        address borrower;
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 collateralValue;
        uint256 interest;
        uint256 time;
        bool active;
    }
    mapping(address => Loan[]) public loans;
    mapping(address => mapping(address => uint256)) public collateralBalances;


    event Borrow(
        address indexed borrower, 
        uint256 indexed _loanId, 
        uint256 indexed amount, 
        uint256 interest, 
        uint256 time);
    event Repay(
        address indexed borrower, 
        uint256 indexed _loanId, 
        uint256 indexed amount, 
        uint256 interest);

    constructor(
        uint256 _Borrow_interestRate, 
        uint256 _Lending_interestRate, 
        uint256 _maxLtv
        ) payable  {
        Borrow_interestRate = _Borrow_interestRate;
        Lending_interestRate = _Lending_interestRate;
        maxLtv = _maxLtv;
        owner = msg.sender;
    }   

    function depositERC721Collateral(
        address borrower, 
        address _tokenContract, 
        uint256 tokenId
        ) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(
            msg.sender == borrower, 
            "Only borrower can deposit collateral"
            );
        require(
            token.balanceOf(borrower) > 0, 
            "Borrower has no tokens"
            );
        require(
            token.ownerOf(tokenId) == borrower, 
            "Borrower is not the owner of the token"
            );
        require(
            collateralBalances[borrower][_tokenContract].add(1) <= token.balanceOf(borrower), 
            "Borrower has no remaining collateral slots"
            );

        token.transferFrom(borrower, address(this), tokenId);
        collateralBalances[borrower][_tokenContract] = collateralBalances[borrower][_tokenContract].add(1);
    }

    function withdrawERC721Collateral(
        address borrower, 
        address _tokenContract, 
        uint256 tokenId
        ) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(
            msg.sender == borrower, 
            "Only borrower can withdraw collateral"
            );
        require(
            collateralBalances[borrower][_tokenContract] > 0, 
            "Borrower has no collateral to withdraw"
            );
        require(
            token.ownerOf(tokenId) == address(this), 
            "Token is not being used as collateral"
            );

        token.transferFrom(address(this), borrower, tokenId);
        collateralBalances[borrower][_tokenContract] = collateralBalances[borrower][_tokenContract].sub(1);
    }

    function borrow(
        uint256 _amount, 
        address _tokenContract, 
        uint256 _tokenId, 
        uint256 _time, 
        address _priceFeed
        ) external payable {
        require(
            _amount > 0, 
            "Amount must be greater than 0"
            );

        uint256 collateralValue = getNftCollateralValue(_tokenContract, _tokenId);
        uint256 borrowingPower = collateralValue.mul(maxLtv).div(10000);

        require(
            _amount <= borrowingPower, 
            "Amount exceeds borrowing power"
            );

        if (IERC165(_tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            depositERC721Collateral(msg.sender, _tokenContract, _tokenId);
        }
        else {
            revert(
                "Unsupported token type"
                );
        }
        uint256 interest = _amount.mul(Borrow_interestRate).div(10000);
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: _tokenContract,
            tokenId: _tokenId,
            amount: _amount,
            collateralValue: 1000,
            interest: interest,
            time: _time,
            active: true
        });
        loans[msg.sender].push(loan);
        totalBorrowed += _amount;

        (bool success, ) = (msg.sender).call{value : _amount}("");
        require(
            success, 
            "Internal error funds not transferred"
            );

        emit Borrow(msg.sender, loans[msg.sender].length - 1, _amount, interest, _time);
    }

    function repay(
        uint256 _loanId
        ) external payable {
        Loan storage loan = loans[msg.sender][_loanId];
        require(
            loan.time >= block.timestamp, 
            "NFT liquidated debt not paid in time"
            );
        require(
            msg.sender == loan.borrower, 
            "Only borrower can repay the loan"
            );
        require(
            loan.active, 
            "Loan is already closed"
            );

        uint256 amountToRepay = loan.amount.add(loan.interest);
        if (IERC165(loan.tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        }
        else {
            revert("Unsupported token type");
        }
        loan.active = false;
        totalBorrowed -= amountToRepay;

        (bool success, ) = (address(this)).call{value: amountToRepay}("");
        require(success, "Internal error funds not transferred");

        emit Repay(msg.sender, _loanId, loan.amount, loan.interest);
    }


    function getNftCollateralValue(
        address _tokenContract, 
        uint256 tokenId
        ) public view returns (uint256) {
        uint256 price = getNFTPrice(_tokenContract, tokenId);
        if (IERC165(_tokenContract).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price;
        }
        else {
            revert("Unsupported token type");
        }
    }
}

// 0x287696aaCA295aBD45f7BDD20C3F7BA67Bc6370C

// msg.sender 0x01751bd851599d98ed52CB75AA2682a31D79AaD6

// NFT Contract 0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA