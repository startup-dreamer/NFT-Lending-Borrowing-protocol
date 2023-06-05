
const deposit_to_pool = async(contract, time, amount) => {
    try {
        const Tx = await contract.depositToPool(time, { value: amount});
        return Tx
    } catch (e) {
        console.error(e);    
    }
};

const withdraw_to_pool = async(contract, depId) => {
    try {
        const Tx = await contract.withdrawFromPool(depId);
        return Tx
    } catch (e) {
        console.error(e);
    }
};

const getDeposits = async (contract, address, depositId) => {
    try {
      const allDeposits = await contract.deposits(address, depositId);
      const amount = parseInt(allDeposits.amount);
      const interest = parseInt(allDeposits.interest);
      const date = parseInt(allDeposits.time);
      return {
        Amount: amount, 
        Interest: interest, 
        Date: date
      }
    } catch (error) {
      console.error("Error in getDeposits(): ", error);
    }
  }

  const getDepositId = async (contract, address) => {
    const individualDepositNum = await contract.individualDepositNum(address);
    const IndividualCOlletralNum = parseInt(individualDepositNum);
    return IndividualCOlletralNum
  }

  const withdrawLiquidateNFT = async(contract, borrowerAddress, loanId) => {
    try{
    const Tx = await contract.withdraw_liquidatNFT(borrowerAddress, loanId);
    return Tx
    }
    catch (e) {
      console.error(e);
    }
  }

export {
    deposit_to_pool, 
    withdraw_to_pool,
    getDeposits,
    getDepositId,
    withdrawLiquidateNFT
};
