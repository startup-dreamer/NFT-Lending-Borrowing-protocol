pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Interface for NFT collateral contract
interface NFTCollateral {
function depositERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external;
function withdrawERC721Collateral(address borrower, address tokenContract, uint256 tokenId) external;
function depositERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external;
function withdrawERC1155Collateral(address borrower, address tokenContract, uint256 tokenId, uint256 amount, bytes calldata data) external;
}


contract Lending {
    using SafeMath for uint256;

    // NFT collateral contract
    NFTCollateral public nftCollateral;

    // Interest rate in basis points (0.01%)
    uint256 public interestRate;

    // Maximum loan to collateral ratio in basis points (0.01%)
    uint256 public maxLtv;

    // Chainlink ETH/USD price feed
    AggregatorV3Interface public priceFeed;

    // Loans
    struct Loan {
        address borrower;
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 collateralValue;
        uint256 interest;
        bool active;
    }
    Loan[] public loans;

    // Events
    event Borrow(address indexed borrower, uint256 indexed loanId, uint256 amount, uint256 interest);
    event Repay(address indexed borrower, uint256 indexed loanId, uint256 amount, uint256 interest);

    // Constructor
    constructor(address _nftCollateral, uint256 _interestRate, uint256 _maxLtv, address _priceFeed) {
        nftCollateral = NFTCollateral(_nftCollateral);
        interestRate = _interestRate;
        maxLtv = _maxLtv;
        priceFeed = AggregatorV3Interface(_priceFeed);
    }

    // Borrowing function
    function borrow(uint256 amount, address tokenContract, uint256 tokenId) external {
        require(amount > 0, "Amount must be greater than 0");

        // Calculate borrowing power based on NFT collateral value
        uint256 collateralValue = getNftCollateralValue(msg.sender, tokenContract, tokenId);
        uint256 borrowingPower = collateralValue.mul(maxLtv).div(10000);

        require(amount <= borrowingPower, "Amount exceeds borrowing power");

        // Transfer NFT collateral to lending contract
        if (IERC165(tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            nftCollateral.depositERC721Collateral(msg.sender, tokenContract, tokenId);
        } else if (IERC165(tokenContract).supportsInterface(type(IERC1155).interfaceId)) {
            nftCollateral.depositERC1155Collateral(msg.sender, tokenContract, tokenId, 1, "");
        } else {
            revert("Unsupported token type");
        }

        // Calculate interest
        uint256 interest = amount.mul(interestRate).div(10000);

        // Create loan
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: tokenContract,
            tokenId: tokenId,
            amount: amount,
            collateralValue: collateralValue,
            interest: interest,
            active: true
        });
        loans.push(loan);

        emit Borrow(msg.sender, loans.length - 1, amount, interest);
    }

    // Repayment function
    function repay(uint256 loanId) external {
        Loan storage loan = loans[loanId];

        require(msg.sender == loan.borrower, "Only borrowercan repay the loan");
        require(loan.active, "Loan is already closed");
            // Transfer borrowed amount + interest from borrower to contract
        uint256 amountToRepay = loan.amount.add(loan.interest);
        IERC20 token = IERC20(loan.tokenContract);
        require(token.transferFrom(msg.sender, address(this), amountToRepay), "Failed to transfer funds");

        // Transfer NFT collateral from contract to borrower
        if (IERC165(loan.tokenContract).supportsInterface(type(IERC721).interfaceId)) {
            nftCollateral.withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        } else if (IERC165(loan.tokenContract).supportsInterface(type(IERC1155).interfaceId)) {
            nftCollateral.withdrawERC1155Collateral(msg.sender, loan.tokenContract, loan.tokenId, 1, "");
        } else {
            revert("Unsupported token type");
        }

        // Mark loan as closed
        loan.active = false;

        emit Repay(msg.sender, loanId, loan.amount, loan.interest);
    }

    // Get NFT collateral value based on Chainlink price feed
    function getNftCollateralValue(address owner, address tokenContract, uint256 tokenId) public view returns (uint256) {
    uint256 price = getPrice();
    uint256 decimals = IERC20(tokenContract).decimals();

    if (IERC165(tokenContract).supportsInterface(type(IERC721Metadata).interfaceId)) {
        return price.mul(10**decimals).mul(1).div(1 ether);
    } else if (IERC165(tokenContract).supportsInterface(type(IERC1155MetadataURI).interfaceId)) {
        uint256 supply = IERC1155(tokenContract).balanceOf(owner, tokenId);
        return price.mul(10**decimals).mul(supply).div(1 ether);
    } else {
        revert("Unsupported token type");
    }
    }

    // Get ETH/USD price from Chainlink price feed
    function getPrice() public view returns (uint256) {
    (, int256 price, , , ) = priceFeed.latestRoundData();
    return uint256(price);
    }
}






