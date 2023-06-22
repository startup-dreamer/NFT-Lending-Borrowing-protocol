// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

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
    uint256 public totalBorrowe;
    // Total deposited NFTs
    uint256 public totalDepositedNFTs;

/*************************************** [External Functions] ***************************************/

    /**
     * @return Utilization of pool
     */
    function getUtillization() external view returns(uint256) {
        return (totalSupply == 0 || totalBorrowe == 0) ? 0 : (totalBorrowe / totalSupply) * 100;
    }

/*************************************** [Public Functions] ***************************************/

    /**
     * @dev set's borrow interest rate
     */
    function setBorrowInterestRate(uint256 borrowInterestRate_) public onlyOwner {
        borrowInterestRate = borrowInterestRate_;
        // lending interest rate based on uttilization of pool in basis point
        lendingInterestRate = borrowInterestRate_ * (totalBorrowe / totalSupply);
    }

    /**
     * @dev set's loan to value ratio for over colletralization
     */
    function setLoanToValue(uint256 maxLoanToValue_) public onlyOwner {
        maxLoanToValue = maxLoanToValue_;
    }

/*************************************** [Internal Functions] ***************************************/

    /**
     * Calculate the Annual Percentage Yield (APY) based on the interest rate, compounding frequency,
     * and number of years.
     *
     * @param rate The interest rate as a decimal value (e.g., 0.05 for 5%)
     * @param compoundingFrequency The number of times the interest is compounded per year
     * @param timePeriod The number of years the investment is held for
     * @return The Annual Percentage Yield (APY) as a decimal value
     */
    function calculateAPY(uint256 rate, uint256 compoundingFrequency, uint256 timePeriod) pure external returns (uint256) {
        uint256 compoundedRate = (1 + rate / compoundingFrequency) ** (compoundingFrequency * timePeriod);
        uint256 apy = (compoundedRate - 1) * 100;
        return apy;
    }

    /**
     *
     */
    function calculateAPR() internal returns(uint256) {
        
    }
}