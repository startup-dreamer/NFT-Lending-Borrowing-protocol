<<<<<<< HEAD
// import { EthersEvent } from "alchemy-sdk/dist/src/internal/ethers-event";
=======
>>>>>>> d4bdbc4c33d14e14fc8b3ce4af573fa139f13351

const deposit_to_pool = async(contract, time, amount) => {
    try {
        await contract.depositToPool(time, { value: amount});
    } catch (e) {
        console.error(e);    
    }
};

const withdraw_to_pool = async(contract, time, depId) => {
    try {
    await contract.withdrawToPool(depId, time);
    } catch (e) {
        console.error(e);
    }
};

export {deposit_to_pool, withdraw_to_pool};

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