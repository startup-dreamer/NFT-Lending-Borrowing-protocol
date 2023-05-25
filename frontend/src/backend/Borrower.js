
const borrow = async (contract, amount, tokenContract, tokenId, time, priceFeed) => {
    try {
        await contract.borrow(amount, tokenContract, tokenId, time, priceFeed);
    } catch (e) {
        console.error(e);
    }
}

const repay = async (contract, loanId, time) => {
    try {
    await contract.repay(loanId, time);
    } catch (e) {
        console.error(e);
    }
}

const getNftCollateralValue = async (contract, tokenContract, tokenId) => {
    try {
    return await contract.getNftCollateralValue(tokenContract, tokenId);
    } catch (e) {
        console.error(e);
    }
}

const getPrice = async (contract, priceFeed) => {
    try {
    return await contract.getPrice(priceFeed);
    } catch (e) {
        console.error(e);
    }
}


const approveToken = async (contract, senderAddress, tokenId) => {
    try {
      const tx = await contract.approve(senderAddress, tokenId);
      console.log('Transaction hash:', tx.hash);
    } catch (e) {
      console.error(e);
    }
}

export {borrow, repay, getNftCollateralValue, getPrice, approveToken}


// 0x3d35b8C010E2Bf8C530cF7DE18cbF3Da50657599