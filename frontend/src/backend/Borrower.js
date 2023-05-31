import { bigNumToNum } from "./getContractdata";

const borrow = async (contract, amount, tokenContract, tokenId, time, priceFeed) => {
    try {
        const Tx = await contract.borrow(amount, tokenContract, tokenId, time, priceFeed);
        return Tx
    } catch (e) {
        console.error(e);
    }
}

const repay = async (contract, loanId, time) => {
    try {
        const Tx = await contract.repay(loanId, time);
        return Tx
    } catch (e) {
        console.error(e);
    }
}

const getNftCollateralValue = async (contract, tokenContract, tokenId) => {
    try {
    const bigNFTValue = await contract.getNftCollateralValue(tokenContract, tokenId);    
    const nftValue = bigNumToNum(bigNFTValue._hex);
    return nftValue
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
      const Tx = await contract.approve(senderAddress, tokenId);
      return Tx
    } catch (e) {
      console.error(e);
    }
}

export {borrow, repay, getNftCollateralValue, getPrice, approveToken}


// 0x3d35b8C010E2Bf8C530cF7DE18cbF3Da50657599