import { bigNumToNum } from "./getContractdata";

const deposit_to_pool = async(contract, time, amount) => {
    try {
        const Tx = await contract.depositToPool(time, { value: amount});
        return Tx
    } catch (e) {
        console.error(e);    
    }
};

const withdraw_to_pool = async(contract, time, depId) => {
    try {
        const Tx = await contract.withdrawToPool(depId, time);
        return Tx
    } catch (e) {
        console.error(e);
    }
};

const getDeposits = async (contract, address, depositId) => {
    try {
      const allDeposits = await contract.deposits(address, depositId);
      const amount = parseInt(allDeposits.amount);
      const time = parseInt(allDeposits.time);
      const interest = parseInt(allDeposits.interest);
      return ({
        Amount: amount, 
        Time: time, 
        Interest: interest
        });
    } catch (error) {
      console.error("Error in getDeposits(): ", error);
    }
}
  
const getIndividualDepositNum = async (contract, address) => {
    const individualDepositNum = contract.individualDepositNum(address);
    const IndividualDepositNum = bigNumToNum(individualDepositNum);
    return IndividualDepositNum
}

export {
    deposit_to_pool, 
    withdraw_to_pool, 
    getDeposits,
    getIndividualDepositNum
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