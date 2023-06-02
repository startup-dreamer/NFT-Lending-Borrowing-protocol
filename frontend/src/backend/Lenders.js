
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
        const Tx = await contract.withdrawToPool(depId);
        return Tx
    } catch (e) {
        console.error(e);
    }
};

const getDeposits = async (contract, address, depositId) => {
    try {
      const allDeposits = await contract.deposits(address, depositId);
      const amount = parseInt(allDeposits.amount);
      const currency = parseInt(allDeposits.time);
      const date = parseInt(allDeposits.interest);
      return {
        Amount: amount, 
        Currency: currency, 
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

export {
    deposit_to_pool, 
    withdraw_to_pool,
    getDeposits,
    getDepositId
};

// {
        // totalsupply: in ETH
        // totalBorrow: in ETH
        // Lending_interestRate: in APY
// }


// {
    // totalSupply: in Eth
    // totalBorrow: in Eth
    // Lending_interestRate: in APY
    // Borrowing_interestRate: in APY
    // Utilization: totalBoorow/totalSupply
    // total deposited NFTs: 
    // Liquidated NFTs:
// }