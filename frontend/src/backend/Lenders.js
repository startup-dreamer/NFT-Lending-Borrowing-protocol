// import { EthersEvent } from "alchemy-sdk/dist/src/internal/ethers-event";


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