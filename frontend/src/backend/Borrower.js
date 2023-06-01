import { bigNumToNum } from "./getContractdata";

const borrow = async (contract, amount, tokenContract, tokenId, time) => {
    try {
        const Tx = await contract.borrow(amount, tokenContract, tokenId, time);
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


const approveToken = async (contract, approvingAddress, tokenId) => {
    try {
      const Tx = await contract.approve(approvingAddress, tokenId);
      return Tx
    } catch (e) {
      console.error(e);
    }
}

const getLoans = async (contract, address, depositId) => {
    try {
      const allLoans = await contract.loans(address, depositId);
      const borrower = parseInt(allLoans.borrower);
      const tokenContract = parseInt(allLoans.tokenContract);
      const tokenId = parseInt(allLoans.tokenId);
      const amount = parseInt(allLoans.amount);
      const collateralValue = parseInt(allLoans.collateralValue);
      const interest = parseInt(allLoans.interest);
      const time = parseInt(allLoans.time);
      const active = allLoans.active;
      return ({
        Borrower: borrower, 
        TokenContract: tokenContract, 
        TokenId: tokenId, 
        Amount: amount, 
        CollateralValue: collateralValue, 
        Interest: interest, 
        Time: time, 
        Active: active
        });

    } catch (error) {
      console.error("Error in getLoans(): ", error);
    }
}

const getindividualCOlletralNum = async (contract, address) => {
    const individualColletralNum = await contract.individualCOlletralNum(address)
    const IndividualColletralNum = bigNumToNum(individualColletralNum);
    return IndividualColletralNum
}

export {
    borrow, 
    repay, 
    getNftCollateralValue, 
    getPrice, 
    approveToken, 
    getLoans, 
    getindividualCOlletralNum
}


// 0x3d35b8C010E2Bf8C530cF7DE18cbF3Da50657599