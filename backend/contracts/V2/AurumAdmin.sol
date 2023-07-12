// SPDX-License-Identifier: MIT
pragma solidity 0.8.12;
    /**
     * @notice The interest calculation is based on Aave V2 and for WadRayMath library also all credits to aave contract team :)
     */

import "../openzeppelin/contracts/access/Ownable.sol";
import "./WadRayMath.sol";

contract AurumAdmin is Ownable {
    using WadRayMath for uint256;

    uint256 internal constant SECONDS_PER_YEAR = 356 days;
    // maximum amount user can deposit
    uint256 internal constant MAX_DEPOSIT_AMOUNT_LIMIT = 1e16;
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
     * @dev calculates the pool utilization of the pool.
     * @return Utilization of pool.
     */
    function getUtillization() external view returns(uint256) {
        return (totalSupply == 0 && totalBorrowed == 0) ? 0 : (totalBorrowed / totalSupply) * 100;
    }

/*************************************** [Public Functions] ***************************************/

    /**
     * @dev Set's borrow and lending interest rate based on utilization.
     * @param borrowInterestRate_ The borrow interest rate set by protocols governace.
     */
    function setBorrowInterestRate(uint256 borrowInterestRate_) public onlyOwner {
        borrowInterestRate = borrowInterestRate_;
        // lending interest rate based on uttilization of pool in basis point
        lendingInterestRate = borrowInterestRate_ * (totalBorrowed / totalSupply);
    }

    /**
     * @dev Set's loan to value ratio for over collateralization.
     * @param maxLoanToValue_ maximum loan to value of NFTs set by protocols governace.
     */
    function setLoanToValue(uint256 maxLoanToValue_) public onlyOwner {
        maxLoanToValue = maxLoanToValue_;
    }

/*************************************** [Internal Functions] ***************************************/

    // /**
    //  * @dev Calculates interest amount.
    //  * @param interestRate_ Amount of funds to calculate interest. 
    //  * @param   for calculation of interest.
    //  */
    function calculateInterest(uint256 interestRate_, uint256 lastUpdateTimestamp, uint256 currentTimestamp) internal pure returns(uint256) {
    uint256 exp = currentTimestamp - lastUpdateTimestamp;

    if (exp == 0) {
      return WadRayMath.ray();
    }

    uint256 expMinusOne = exp - 1;

    uint256 expMinusTwo = exp > 2 ? exp - 2 : 0;

    uint256 ratePerSecond = interestRate_ / SECONDS_PER_YEAR;

    uint256 basePowerTwo = ratePerSecond.rayMul(ratePerSecond);
    uint256 basePowerThree = basePowerTwo.rayMul(ratePerSecond);

    uint256 secondTerm = (exp * expMinusOne * basePowerTwo) / 2;
    uint256 thirdTerm = (exp * expMinusOne * expMinusTwo * basePowerThree) / 6;

    return WadRayMath.ray() + (ratePerSecond * exp) + secondTerm + thirdTerm;
  }
}