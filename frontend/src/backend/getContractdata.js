import { ethers } from "ethers";


const bigNumToNum = (bigNumberString) => {
    const bigNumber = ethers.BigNumber.from(bigNumberString);
    const integer = bigNumber.toNumber();
    return integer;
}

const getBorrow_interestRate = async (contract) => {
  try {
    const Borrow_interestRate = await contract.Borrow_interestRate();
    const number = bigNumToNum(Borrow_interestRate);
    return number;
  } catch (error) {
    console.error("Error in getBorrow_interestRate(): ", error);
    throw new Error("Failed to retrieve borrow interest rate");
  }
}


const getmaxLtv = async (contract) => {
  try {
    const MaxLtV = await contract.maxLtv();
    const integer = bigNumToNum(MaxLtV);
    return integer;
  } catch (error) {
    console.error("Error in getmaxLtv(): ", error);
    throw new Error("Failed to retrieve max LTV");
  }
}


const getLending_interestRate = async (contract) => {
  try {
    const Lending_interestRate = await contract.Lending_interestRate();
    const integer = bigNumToNum(Lending_interestRate);
    return integer;
  } catch (error) {
    console.error("Error in getLending_interestRate(): ", error);
    throw new Error("Failed to retrieve Lending_interestRate");
  }
}


const getOwner = async (contract) => {
  try {
    const owner = await contract.owner();
    return owner;
  } catch (error) {
    console.error("Error in getOwner(): ", error);
    throw new Error("Failed to retrieve owner");
  }
}



const getDeposits = async (contract, address) => {
  try {
    const allDeposits = await contract.deposits(address, 0);
    const amount = parseInt(allDeposits.amount);
    const currency = parseInt(allDeposits.time);
    const date = parseInt(allDeposits.interest);
    return [amount, currency, date];
  } catch (error) {
    console.error("Error in getDeposits(): ", error);
    throw new Error("Failed to retrieve deposits");
  }
}

const getLoans = async (contract, address) => {
  try {
    const allLoans = await contract.loans(address, 0);
    const borrower = parseInt(allLoans.borrower);
    const tokenContract = parseInt(allLoans.tokenContract);
    const tokenId = parseInt(allLoans.tokenId);
    const amount = parseInt(allLoans.amount);
    const collateralValue = parseInt(allLoans.collateralValue);
    const interest = parseInt(allLoans.interest);
    const time = parseInt(allLoans.time);
    const active = allLoans.active;
    return [borrower, tokenContract, tokenId, amount, collateralValue, interest, time, active];
  } catch (error) {
    console.error("Error in getLoans(): ", error);
    throw new Error("Failed to retrieve loans");
  }
}

const getTotalSupply = async (contract) => {
  return await contract.totalSupply();
}

const getTotalBorrow = async (contract) => {
  return await contract.totalBorrowed();
}

const getTotalDepositedNFTs = async (contract) => {
  return await contract.totalDepositedNFTs()
}

const getTotalLiquidatedNFTs = async (contract) => {

}

export {
  getBorrow_interestRate, 
  getmaxLtv, 
  getLending_interestRate, 
  getOwner, 
  getLoans, 
  getDeposits,
  getTotalSupply,
  getTotalBorrow,
  getTotalDepositedNFTs,
  getTotalLiquidatedNFTs
};


