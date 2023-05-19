pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";



contract AurumV1core {
    using SafeMath for uint256;
    uint256 public Borrow_interestRate;
    uint256 public maxLtv;
    uint256 MAX_AMOUNT_LIMIT = 1e16;
    uint256 public Lending_interestRate;
    address public owner;
    
    struct deposit {
            uint256 amount;
            uint256 time;
            uint256 interest;
    }
    mapping(address => deposit[]) public deposits;

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


    event Borrow(address indexed borrower, uint256 indexed _loanId, uint256 indexed amount, uint256 interest, uint256 time);
    event Repay(address indexed borrower, uint256 indexed _loanId, uint256 indexed amount, uint256 interest);
    event Withdrawal(uint256 indexed, address indexed , uint256 indexed);
    event WithdrawalFailed(uint256 indexed, address indexed , uint256 indexed);


    constructor(uint256 _Borrow_interestRate, uint256 _Lending_interestRate, uint256 _maxLtv) payable  {
        Borrow_interestRate = _Borrow_interestRate;
        Lending_interestRate = _Lending_interestRate;
        maxLtv = _maxLtv;
        owner = msg.sender;
    }

    function depositToPool(uint256 _time) external payable {
        require(msg.value > 0, "Amount must be greater than 0");
        require(msg.value <= MAX_AMOUNT_LIMIT, "Can't deposit more than 0.01 ETH");

        uint256 interest = msg.value.mul(Lending_interestRate).div(10000);

        deposit memory dep = deposit({
            amount: msg.value,
            time: _time,
            interest: interest
        });

        deposits[msg.sender].push(dep);

    }


    function withdrawToPool(uint256 _depId) external {
        deposit storage dep = deposits[msg.sender][_depId];
        require(dep.amount > 0, "Deposit not found or already withdrawn");

        uint256 amountToReturn = dep.interest + dep.amount;
        if (block.timestamp < dep.time) {
            amountToReturn = dep.amount;
        }

        dep.amount = 0;

        (bool success, ) = (msg.sender).call{value : amountToReturn}("");
        if (success) {
            emit Withdrawal(_depId, msg.sender, amountToReturn);
        } else {
            dep.amount = amountToReturn;
            emit WithdrawalFailed(_depId, msg.sender, amountToReturn);
            revert("Internal error: funds not transferred");
        }
    }
   

    function depositERC721Collateral(address borrower, address _tokenContract, uint256 tokenId) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(msg.sender == borrower, "Only borrower can deposit collateral");
        require(token.balanceOf(borrower) > 0, "Borrower has no tokens");
        require(token.ownerOf(tokenId) == borrower, "Borrower is not the owner of the token");
        require(collateralBalances[borrower][_tokenContract].add(1) <= token.balanceOf(borrower), "Borrower has no remaining collateral slots");
        token.transferFrom(borrower, address(this), tokenId);
        collateralBalances[borrower][_tokenContract] = collateralBalances[borrower][_tokenContract].add(1);
    }

    function withdrawERC721Collateral(address borrower, address _tokenContract, uint256 tokenId) internal {
        IERC721Enumerable token = IERC721Enumerable(_tokenContract);
        require(msg.sender == borrower, "Only borrower can withdraw collateral");
        require(collateralBalances[borrower][_tokenContract] > 0, "Borrower has no collateral to withdraw");
        require(token.ownerOf(tokenId) == address(this), "Token is not being used as collateral");
        token.transferFrom(address(this), borrower, tokenId);
        collateralBalances[borrower][_tokenContract] = collateralBalances[borrower][_tokenContract].sub(1);
    }

    function borrow(uint256 _amount, address _tokenContract, uint256 _tokenId, uint256 _time, address _priceFeed) external payable {
        require(_amount > 0, "Amount must be greater than 0");

        uint256 collateralValue = getNftCollateralValue(_tokenContract, _priceFeed);
        uint256 borrowingPower = collateralValue.mul(maxLtv).div(10000);

        require(_amount <= borrowingPower, "Amount exceeds borrowing power");

        if (IERC165(_tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            depositERC721Collateral(msg.sender, _tokenContract, _tokenId);
        }
        else {
            revert("Unsupported token type");
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

        (bool success, ) = (msg.sender).call{value : _amount}("");
        require(success, "Internal error funds not transferred");

        emit Borrow(msg.sender, loans[msg.sender].length - 1, _amount, interest, _time);
    }

    function repay(uint256 _loanId, uint256 _time) external payable {
        Loan storage loan = loans[msg.sender][_loanId];
        require(_time <= loan.time, "NFT liquidated debt not paid in time");
        require(msg.sender == loan.borrower, "Only borrower can repay the loan");
        require(loan.active, "Loan is already closed");

        uint256 amountToRepay = loan.amount.add(loan.interest);

        if (IERC165(loan.tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        } 
        else {
            revert("Unsupported token type");
        }
        loan.active = false;

        (bool success, ) = (address(this)).call{value: amountToRepay}("");
        require(success, "Internal error funds not transferred");

        emit Repay(msg.sender, _loanId, loan.amount, loan.interest);
    }


    function getNftCollateralValue(address _tokenContract, address _priceFeed) public view returns (uint256) {
        uint256 price = getPrice(_priceFeed);
        if (IERC165(_tokenContract).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price;
        }
        else {
            revert("Unsupported token type");
        }
    }

    function getPrice(address _priceFeed) public view returns (uint256) {
        // AggregatorV3Interface priceFeed = AggregatorV3Interface(_priceFeed);
        // (, int256 price, , , ) = priceFeed.latestRoundData();
        return uint256(1000);
    }

    function set_Borrow_InterestRate(uint256 _Borrow_interestRate) external {
        require(msg.sender == owner);
        Borrow_interestRate = _Borrow_interestRate;
    }

    function set_Lend_InterestRate(uint256 _Lending_interestRate) external {
        require(msg.sender == owner);
        Lending_interestRate = _Lending_interestRate;
    }

    function setLoanToCollateral(uint256 _maxLtv) external {
        require(msg.sender == owner);
        maxLtv = _maxLtv;
    }
    
    fallback() external payable {
    }

    receive() external payable {
    }
}

// 0x287696aaCA295aBD45f7BDD20C3F7BA67Bc6370C

// msg.sender 0x01751bd851599d98ed52CB75AA2682a31D79AaD6

// NFT Contract 0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA