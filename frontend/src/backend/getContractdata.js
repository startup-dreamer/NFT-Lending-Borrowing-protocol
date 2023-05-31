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
  }
}

const getmaxLtv = async (contract) => {
  try {
    const MaxLtV = await contract.maxLtv();
    const integer = bigNumToNum(MaxLtV);
    return integer;
  } catch (error) {
    console.error("Error in getmaxLtv(): ", error);
  }
}

const getLending_interestRate = async (contract) => {
  try {
    const Lending_interestRate = await contract.Lending_interestRate();
    const integer = bigNumToNum(Lending_interestRate);
    return integer;
  } catch (error) {
    console.error("Error in getLending_interestRate(): ", error);
  }
}

const getOwner = async (contract) => {
  try {
    const owner = await contract.owner();
    return owner;
  } catch (error) {
    console.error("Error in getOwner(): ", error);
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
  }
}
const getTotalSupply = async (contract) => {
  try {
    const totalsupply = await contract.totalSupply();
    const TotalSupply = bigNumToNum(totalsupply);
    return TotalSupply
  } catch (error) {
    console.log(error);
  }
}

const getTotalBorrow = async (contract) => {
  try {
    const totalborrow = await contract.totalBorrowed();
    const TotalBorrow = bigNumToNum(totalborrow);
    return TotalBorrow
  } catch (error) {
    console.log(error);
  }
}

const getTotalDepositedNFTs = async (contract) => {
  try {
    const totaldepositednfts = await contract.totalDepositedNFTs()
    const TotalDepositedNFTs = bigNumToNum(totaldepositednfts);
    return TotalDepositedNFTs
  } catch (error) {
    console.log(error);
  }
}

const getTotalLiquidatedNFTs = async (contract) => {
  try {
    return 10
  } catch (error) {
    console.log(error);
  }
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
  getTotalLiquidatedNFTs,
  bigNumToNum
};


