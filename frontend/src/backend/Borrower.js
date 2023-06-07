import { bigNumToNum } from "./getContractdata";

const borrow = async (contract, amount, tokenContract, tokenId, time) => {
    try {
        const Tx = await contract.borrow(amount * 1e18, tokenContract, tokenId, time);
        return Tx
    } catch (e) {
        console.error(e);
    }
}

const repay = async (contract, loanId, amount) => {
    try {
        const Tx = await contract.repay(loanId, {value: amount});
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

const getLoans = async (contract, address, loanId) => {
    try {
      const allLoans = await contract.loans(address, loanId);
      const borrower = allLoans.borrower;
      const tokenContract = allLoans.tokenContract;
      const tokenId = parseInt(allLoans.tokenId);
      const amount = parseInt(allLoans.amount);
      const collateralValue = parseInt(allLoans.collateralValue);
      const interest = parseInt(allLoans.interest);
      const time = parseInt(allLoans.time);
      const active = allLoans.active;
      return {
        Borrower: borrower, 
        TokenContract: tokenContract, 
        TokenId: tokenId, 
        Amount: amount, 
        CollateralValue: collateralValue / 1e6, 
        Interest: interest, 
        Time: time, 
        Active: active
    };
    } catch (error) {
      console.error("Error in getLoans(): ", error);
    }
  }

const getLoanId = async (contract, address) => {
    const loanId = await contract.individualColletralNum(address);
    const LoanId = parseInt(loanId);
    return LoanId
}

export {
    borrow,
    repay, 
    getNftCollateralValue, 
    getPrice, 
    approveToken,
    getLoans,
    getLoanId
}


// 0xa86Dc302F1Ba19c5f372cCa85633D779a741c07D