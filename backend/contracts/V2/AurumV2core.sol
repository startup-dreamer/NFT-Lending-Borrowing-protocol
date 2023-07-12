// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;

import "../openzeppelin/contracts/token/ERC721/IERC721.sol";
import "../openzeppelin/contracts/utils/introspection/IERC165.sol";
import "./NFTPrice.sol";
import "./AurumAdmin.sol";
import "./NFTEscrow.sol";
import "hardhat/console.sol";

// Custom error for failed value transfer
error ValueTransferFailed(string message);

// Custom error for unsupported token type
error UnsupportedTokenType();

contract AurumV2core is AurumAdmin, NFTEscrow, NFTPrice {
    // Struct to store deposit details
    struct Deposit {
            uint256 amount;
            uint256 duration;
            uint256 lastUpdateTimestamp;
    }

    // Mapping to store deposits by user address
    mapping(address => Deposit[]) public deposits;

    // Mapping to store the number of deposits per user
    mapping(address => uint256) public userDepositNum;

    // Struct to store loan details
    struct Loan {
        address borrower;
        address tokenContract;
        uint256 tokenId;
        uint256 amount;
        uint256 collateralValue;
        uint256 lastUpdateTimestamp;
        uint256 duration;
        bool isActive;
    }

    // Mapping to store loans by user address
    mapping(address => Loan[]) public loans;

    // Mapping to store the number of collaterals per user
    mapping(address => uint256) public userColleteralNum;

    // Events
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
        uint256 duration
    );
    event Repay(
        address indexed borrower,
        uint256 indexed loanId,
        uint256 indexed amount,
        uint256 interest
    );

    // Constructor
    constructor(
        uint256 borrowInterestRate_,
        uint256 lendingInterestRate_,
        uint256 maxLoanToValue_
    ) payable {
        borrowInterestRate = borrowInterestRate_;
        lendingInterestRate = lendingInterestRate_;
        maxLoanToValue = maxLoanToValue_;
    }

    // Fallback function to reject any incoming calls with invalid function signatures
    fallback() external payable {
        revert("ERR_FUNCTION_SIGNATURE_NOT_FOUND");
    }

    // Receive function to receive ETH
    receive() external payable {
        totalSupply += msg.value;
    }

/*************************************** [Public Functions] ***************************************/

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

        // Create a new deposit with the given deposition details
        Deposit memory deposit = Deposit({
            amount: msg.value,
            duration: duration_,
            lastUpdateTimestamp: block.timestamp
        });

        deposits[msg.sender].push(deposit);
        userDepositNum[msg.sender] += 1;

        // Emit the Deposition event
        emit Deposition(deposits[msg.sender].length - 1, msg.sender, duration_, msg.value);
    }

    /**
     * @dev Withdraw deposit from pool.
     * @param depositId_ Id of the deposit to be withdrawn.
     */
    function withdrawFromPool(uint256 depositId_) external {
        // Get the deposit object from the deposits mapping for the user
        Deposit storage deposit = deposits[msg.sender][depositId_];

        require(
            deposit.amount > 0,
            "AMOUNT_IS_ALREADY_PAID"
        );

        uint256 interest = calculateInterest(lendingInterestRate, deposit.lastUpdateTimestamp, block.timestamp);
        uint256 withdrawAmount = deposit.amount + interest;
        // Updating the time stanp as the variable name suggests
        deposit.lastUpdateTimestamp = block.timestamp;

        // Attempt to transfer the funds to the user
        (bool success, ) = payable(msg.sender).call{value: withdrawAmount}("");
        if (!success) {
            // If the transfer fails, update the deposit amount and revert
            deposit.amount = withdrawAmount;
            revert ValueTransferFailed("FUNDS_NOT_TRANSFERED");
        }

        // Update the total supply and emit the Withdrawal event
        totalSupply -= withdrawAmount;
        emit Withdrawal(depositId_, msg.sender, withdrawAmount);

        // Remove the deposit from the deposits after the withdrawal
        delete deposits[msg.sender][depositId_];
    }

    /**
     * @dev Borrow funds by providing ERC721 collateral.
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
        // Check if the amount is greater than zero
        require(
            amount_ > 0,
            "AMOUNT_SHOULD_BE_GREATER_THAN_ZERO"
        );
        
        // Get the collateral value of the ERC721 token
        uint256 collateralValue = getNftCollateralValue(tokenContract_, tokenId_);
        
        // Calculate the borrowing power based on the collateral value and maxLoanToValue ratio
        uint256 borrowingPower = (collateralValue * maxLoanToValue) / 10000;
    
        // Check if the requested amount exceeds the borrowing power
        if (amount_ > borrowingPower) {
            revert("AMOUNT_EXCEEDS_BORROWING_POWER");
        }
        
        // Create a new Loan struct with the loan details
        Loan memory loan = Loan({
            borrower: msg.sender,
            tokenContract: tokenContract_,
            tokenId: tokenId_,
            amount: amount_,
            collateralValue: collateralValue,
            lastUpdateTimestamp: block.timestamp,
            duration: duration_,
            isActive: true
        });
        
        // Deposit the ERC721 collateral into this contract
        depositERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        
        loans[msg.sender].push(loan);
        
        // Update the totalBorrowed and totalDepositedNFTs variables
        totalBorrowed += amount_;
        totalDepositedNFTs += 1;
        
        // Increment the user's collateral count
        userColleteralNum[msg.sender] += 1;
    
        // Transfer the borrowed amount to the borrower
        (bool success, ) = (payable(msg.sender)).call{value: loan.amount}("");
        if (!success) {
            revert ValueTransferFailed("FUNDS_NOT_TRANSFERRED");
        }
    
        // Emit the Borrow event
        emit Borrow(msg.sender, loans[msg.sender].length - 1, loan.amount, loan.duration);
    }
    
    /**
     * @dev Repay the loan.
     * @param loanId_ Id of the loan to be repaid.
     */
    function repay(uint256 loanId_) external payable {
        // Retrieve the loan details from the loans mapping
        Loan storage loan = loans[msg.sender][loanId_];
        
        // Check if the loan duration has not expired
        require(
            loan.duration > block.timestamp,
            "NFT_LIQUIDATED_DEBT_NOT_PAID_IN_TIME"
        );
        
        // Check if the caller is the borrower
        require(
            msg.sender == loan.borrower,
            "ONLY_OWNER_CAN_REPAY_THE_LOAN"
        );
        
        // Check if the loan is still active
        require(
            loan.isActive,
            "LOAN_IS_ALREADY_PAID"
        );
    
        uint256 interest = calculateInterest(borrowInterestRate, loan.lastUpdateTimestamp, block.timestamp);
        // Calculate the total amount to repay (loan amount + interest)
        uint256 amountToRepay = loan.amount + interest;
        // Updating the time stanp as the variable name suggests
        loan.lastUpdateTimestamp = block.timestamp;
        
        // Check if the correct amount has been transferred
        require(amountToRepay == msg.value, "INCORRECT_VALUE_TRANSFERRED");

        // Transfer the repayment amount to the contract
        (bool success, ) = (address(this)).call{ value: msg.value }("");
        require(success, "FUNDS_NOT_TRANSFERED");
    
        // Withdraw the ERC721 collateral from the contract
        withdrawERC721Collateral(msg.sender, loan.tokenContract, loan.tokenId);
        
        // Update the totalBorrowed and totalDepositedNFTs variables
        totalBorrowed -= loan.amount;
        totalDepositedNFTs -= 1;
        
        // Delete the loan after the payment of debt
        delete loans[msg.sender][loanId_];
        
        // Emit the Repay event
        emit Repay(msg.sender, loanId_, loan.amount, interest);
    }

/*************************************** [Public Functions] ***************************************/

    /**
     * @notice Calculates collateral value of a ERC721 token based on its price.
     * @param tokenContract_ Address of the ERC721 token contract.
     * @param tokenId_ Id of the ERC721 token.
     * @return Collateral value of the token.
     */
    function getNftCollateralValue(address tokenContract_, uint256 tokenId_) public view returns (uint256) {
        // Get the price of the ERC721 token
        uint256 price = getNFTPrice(tokenContract_, tokenId_);
        
        // Check if the token contract supports the ERC721Metadata interface
        if (IERC165(tokenContract_).supportsInterface(type(IERC721Metadata).interfaceId)) {
            return price;
        } else {
            revert UnsupportedTokenType();
        }
    }
}
