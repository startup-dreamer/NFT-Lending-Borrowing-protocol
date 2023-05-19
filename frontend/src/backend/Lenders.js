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

