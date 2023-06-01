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
    return 0
  } catch (error) {
    console.log(error);
  }
}

const getUtilization = async (contract) => {
  const utilization = await contract.getUtilization();
  const Utilization = bigNumToNum(utilization);
  return Utilization 
}

const get_ETHtoUSD_Price = async (contract) => {
  const ethtousd = await contract.get_ETHtoUSD_Price();
  const ETHToUSD = bigNumToNum(ethtousd);
  return ETHToUSD
}

export {
  getBorrow_interestRate, 
  getmaxLtv, 
  getLending_interestRate, 
  getOwner, 
  getTotalSupply,
  getTotalBorrow,
  getTotalDepositedNFTs,
  getTotalLiquidatedNFTs,
  bigNumToNum,
  getUtilization,
  get_ETHtoUSD_Price
};


