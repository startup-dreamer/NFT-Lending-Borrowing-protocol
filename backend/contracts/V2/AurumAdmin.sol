// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../openzeppelin/contracts/access/Ownable.sol";

contract AurumAdmin is Ownable {
    // maximum amount user can deposit
    uint256 constant MAX_DEPOSIT_AMOUNT_LIMIT = 1e16;
    // borrowing interest rate in basis points
    uint256 public borrowInterestRate;
    // lending interest rate based on utilization
    uint256 public lendingInterestRate;
    // max loan to value ratio
    uint256 public maxLoanToValue;
    // Total amount in contract
    uint256 public totalSupply;
    // Total Borrowed amount by users
    uint256 public totalBorrowed;
    // Total deposited NFTs
    uint256 public totalDepositedNFTs;

/*************************************** [External Functions] ***************************************/

    /**
     * @return Utilization of pool
     */
    function getUtillization() external view returns(uint256) {
        return (totalSupply == 0 || totalBorrowed == 0) ? 0 : (totalBorrowed / totalSupply) * 100;
    }

/*************************************** [Public Functions] ***************************************/

    /**
     * @dev Set's borrow interest rate
     */
    function setBorrowInterestRate(uint256 borrowInterestRate_) public onlyOwner {
        borrowInterestRate = borrowInterestRate_;
        // lending interest rate based on uttilization of pool in basis point
        lendingInterestRate = borrowInterestRate_ * (totalBorrowed / totalSupply);
    }

    /**
     * @dev Set's loan to value ratio for over collateralization
     */
    function setLoanToValue(uint256 maxLoanToValue_) public onlyOwner {
        maxLoanToValue = maxLoanToValue_;
    }

/*************************************** [Internal Functions] ***************************************/

    /**
     * @dev Calculates interest amount
     */
    function calculateInterest(uint256 amount_, uint256 interestRate_) pure internal returns(uint256) {
        return amount_ * interestRate_ / 10000;
    }
}