// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";
import "./NFTPrice.sol";
import "./AurumAdmin.sol";
import "./NFTEscrow.sol";

error ValueTransferFailed(string message);
error UnsupportedTokenType();

contract AurumV2core is AurumAdmin, NFTEscrow, NFTPrice {

    struct Deposit {
            uint256 amount;
            uint256 interest;
            uint256 duration;
    }
    mapping(address => Deposit[]) public deposits;
    mapping(address => uint256) public userDepositNum;

    struct Loan {
        address borrower;
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 collateralValue;
        uint256 interest;
        uint256 duration;
        bool isActive;
    }
    mapping(address => Loan[]) public loans;
    mapping(address => uint256) public userColleteralNum;

/*************************************** [Events] ***************************************/

    event Deposition(
        uint256 indexed depoId,
        address indexed sender,
        uint256 indexed duration,
        uint256 amount
    );
    event Withdrawal(
        uint256 indexed depoId, 
        address indexed lender, 
        uint256 indexed amount
        );
    event Borrow(
        address indexed borrower, 
        uint256 indexed loanId, 
        uint256 indexed amount, 
        uint256 interest, 
        uint256 duration
        );
    event Repay(
        address indexed borrower, 
        uint256 indexed loanId, 
        uint256 indexed amount, 
        uint256 interest
        );

/*************************************** [Constructor] ***************************************/

    constructor(
        uint256 borrowInterestRate_, 
        uint256 lendingInterestRate_, 
        uint256 maxLoanToValue_
        ) payable  {
        borrowInterestRate = borrowInterestRate_;
        lendingInterestRate = lendingInterestRate_;
        maxLoanToValue = maxLoanToValue_;
    }
        
    fallback() external payable {
        totalSupply += msg.value;
    }
    
    receive() external payable {
        totalSupply += msg.value;
    }

    /**
     * @dev Deposit ETH into the pool.
     * @param duration_ Duration of the deposit in seconds.
     */
    function depositToPool(uint256 duration_) external payable {
        require(
            msg.value <= MAX_DEPOSIT_AMOUNT_LIMIT, 
            "DEPOSITION_LIMIT_REACHED"
        );
        require(
            msg.value > 0,
            "AMOUNT_SHOULD_BE_GREATER_THAN_ZERO"
        );
        uint256 interest = calculateInterest(msg.value, lendingInterestRate);
    
        Deposit memory deposit = Deposit({
            amount: msg.value,
            interest: interest,
            duration: duration_
        });
    
        deposits[msg.sender].push(deposit);
        userDepositNum[msg.sender] += 1;
        emit Deposition(deposits[msg.sender].length - 1, msg.sender, duration_, msg.value);
    }
    
    /**
     * @dev Withdraw deposit from pool.
     * @param depositId_ Id of the deposit to be withdrawn.
     */
    function withdrawFromPool(uint256 depositId_) external {
        Deposit storage deposit = deposits[msg.sender][depositId_];
        require(
            deposit.amount > 0,
            "AMOUNT_IS_ALREADY_PAID"
        );
        uint256 interest = calculateInterest(deposit.amount, lendingInterestRate);
        uint256 withdrawAmount = deposit.amount + interest;
    
        (bool success, ) = payable(msg.sender).call{value: withdrawAmount}("");
        if (!success) {
            deposit.amount = withdrawAmount;
            revert ValueTransferFailed("FUNDS_NOT_TRANSFERED");
        }

        totalSupply -= withdrawAmount;
        emit Withdrawal(depositId_, msg.sender, withdrawAmount);
        delete deposits[msg.sender][depositId_];
    }
    
    /**
     * @dev Borrow funds by providing ERC721 colletral.
     * @param amount_ Amount of funds to borrow.
     * @param tokenContract_ Address of the token contract used as collateral.
     * @param tokenId_ Id of the token used as collateral.
     * @param duration_ Duration of the loan in seconds.
     */
    function borrow(
        uint256 amount_, 
        address tokenContract_, 
        uint256 tokenId_, 
        uint256 duration_
    ) external payable {
        require(
            amount_ > 0,
            "AMOUNT_SHOULD_BE_GREATER_THAN_ZERO"
        );
        uint256 collateralValue = getNftCollateralValue(tokenContract_, tokenId_);
        uint256 borrowingPower = (collateralValue * maxLoanToValue) / 10000;
    
        if (amount_ > borrowingPower) {
            revert("AMOUNT_EXCEEDS_BORROWING_POWER");
        }
        uint256 interest_ = calculateInterest(amount_, borrowInterestRate);
    
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: tokenContract_,
            tokenId: tokenId_,
            amount: amount_,
            collateralValue: collateralValue,
            interest: interest_,
            duration: duration_,
            isActive: true
        });
        depositERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        loans[msg.sender].push(loan);
        totalBorrowed += amount_;
        totalDepositedNFTs += 1;
        userColleteralNum[msg.sender] += 1;
    
        (bool success, ) = (payable(msg.sender)).call{value: loan.amount}("");
        if (!success) {
            revert ValueTransferFailed("FUNDS_NOT_TRANSFERRED");
        }
    
        emit Borrow(msg.sender, loans[msg.sender].length - 1, loan.amount, loan.interest, loan.duration);
    }
    
    /**
     * @dev Repay the loan.
     * @param loanId_ Id of the loan to be repaid.
     */
    function repay(uint256 loanId_) external payable {
        Loan storage loan = loans[msg.sender][loanId_];
        require(
            loan.duration > block.timestamp,
            "NFT_LIQUIDATED_DEBT_NOT_PAID_IN_TIME"
        );
        require(
            msg.sender == loan.borrower,
            "ONLY_OWNER_CAN_REPAY_THE_LOAN"
        );
        require(
            loan.isActive,
            "LOAN_IS_ALREADY_PAID"
        );
    
        uint256 amountToRepay = loan.amount + loan.interest;
        require(amountToRepay == msg.value, "INCORRECT_VALUE_TRANSFERRED");
    
        withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        totalBorrowed -= loan.amount;
        totalDepositedNFTs -= 1;
        delete loans[msg.sender][loanId_];
        
        emit Repay(msg.sender, loanId_, loan.amount, loan.interest);
    }

/*************************************** [Public Functions] ***************************************/

    /**
     * @notice Calculates collateral value of a ERC721 token based on its price
     * @param tokenContract_ Address of the ERC721 token contract
     * @param tokenId_ Id of the ERC721 token
     * @return Collateral value of the token
     */
    function getNftCollateralValue(address tokenContract_, uint256 tokenId_) public view returns (uint256) {
        uint256 price = getNFTPrice(tokenContract_, tokenId_);
        if (IERC165(tokenContract_).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price;
        } else {
            revert UnsupportedTokenType();
        }
    }

}
