pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
interface NFTCollateral {
    function depositERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external;
    function withdrawERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external;
    function depositERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external;
    function withdrawERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external;
}
contract Borrowing {
    using SafeMath for uint256;
    NFTCollateral public nftCollateral;
    uint256 public interestRate;
    uint256 public maxLtv;
    AggregatorV3Interface public priceFeed;
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
    event Borrow(address indexed borrower, uint256 indexed _loanId, uint256 amount, uint256 interest, uint256 time);
    event Repay(address indexed borrower, uint256 indexed _loanId, uint256 amount, uint256 interest);
    constructor(address _nftCollateral, uint256 _interestRate, uint256 _maxLtv, address _priceFeed) {
        nftCollateral = NFTCollateral(_nftCollateral);
        interestRate = _interestRate;
        maxLtv = _maxLtv;
        priceFeed = AggregatorV3Interface(_priceFeed);
    }
    function borrow(uint256 _amount, address _tokenContract, uint256 _tokenId, uint256 _time) external payable {
        require(_amount > 0, "Amount must be greater than 0");

        uint256 collateralValue = getNftCollateralValue(_tokenContract);
        uint256 borrowingPower = collateralValue.mul(maxLtv).div(10000);

        require(_amount <= borrowingPower, "Amount exceeds borrowing power");

        if (IERC165(_tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            nftCollateral.depositERC721Collateral(msg.sender, _tokenContract, _tokenId);
        } 
        else {
            revert("Unsupported token type");
        }
        uint256 interest = _amount.mul(interestRate).div(10000);
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: _tokenContract,
            tokenId: _tokenId,
            amount: _amount,
            collateralValue: collateralValue,
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
        require(_time <= _time, "NFT liquidated debt not paid in time");
        require(msg.sender == loan.borrower, "Only borrower can repay the loan");
        require(loan.active, "Loan is already closed");

        uint256 amountToRepay = loan.amount.add(loan.interest);
        IERC20 token = IERC20(loan.tokenContract);
        require(token.transferFrom(msg.sender, address(this), amountToRepay), "Failed to transfer funds");

        if (IERC165(loan.tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            nftCollateral.withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        } 
        else {
            revert("Unsupported token type");
        }
        loan.active = false;

        (bool success, ) = (address(this)).call{value : amountToRepay}("");
        require(success, "Internal error funds not transferred");

        emit Repay(msg.sender, _loanId, loan.amount, loan.interest);
    }
    function getNftCollateralValue(address _tokenContract) public view returns (uint256) {
        uint256 price = getPrice();
        if (IERC165(_tokenContract).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price.mul(1).div(1 ether);
        } 
        else {
            revert("Unsupported token type");
        }
    }
    function getPrice() public view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return uint256(price);
    }
    function setInterestRate(uint256 _interestRate) external {
        interestRate = _interestRate;
    }
    function setLoanToCollateral(uint256 _maxLtv) external {
        maxLtv = _maxLtv;
    }
    
    fallback() external payable {

}

    receive() external payable {
        
    }

}
