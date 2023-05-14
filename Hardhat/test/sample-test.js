const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Borrowing", function () {
  const COLLATERAL_VALUE = 1000;
  const INTEREST_RATE = 500;
  const MAX_LTV = 5000;
  const AMOUNT = 100;

  const TOKEN_CONTRACT_ERC721 = "0x0000000000000000000000000000000000000001";
  const TOKEN_ID_ERC721 = 1;

  const PRICE_FEED_ADDRESS = "0x0000000000000000000000000000000000000003";

  let lending;
  let collateral;
  let priceFeed;

  beforeEach(async function () {
    const Collateral = await ethers.getContractFactory("NFTCollateralMock");
    const collateralMock = await Collateral.deploy();
    const Lending = await ethers.getContractFactory("Borrowing");
    lending = await Lending.deploy(collateralMock.address, INTEREST_RATE, MAX_LTV, PRICE_FEED_ADDRESS);
    collateral = collateralMock;
    priceFeed = await ethers.getContractAt("AggregatorV3Interface", PRICE_FEED_ADDRESS);
  });

  it("should allow borrowing ERC721", async function () {
    const collateralValue = await getCollateralValue(TOKEN_CONTRACT_ERC721);
    const borrowingPower = collateralValue * MAX_LTV / 10000;

    await collateral.setCollateralValue(COLLATERAL_VALUE);

    await collateral.depositERC721Collateral(await ethers.provider.getSigner(0).getAddress(), TOKEN_CONTRACT_ERC721, TOKEN_ID_ERC721);

    const expectedAmount = AMOUNT;
    const expectedInterest = expectedAmount * INTEREST_RATE / 10000;

    await lending.borrow(expectedAmount, TOKEN_CONTRACT_ERC721, TOKEN_ID_ERC721, await getCurrentTimestamp());

    const loan = await lending.loans(await ethers.provider.getSigner(0).getAddress(), 0);

    expect(loan.borrower).to.equal(await ethers.provider.getSigner(0).getAddress());
    expect(loan.tokenContract).to.equal(TOKEN_CONTRACT_ERC721);
    expect(loan.tokenId).to.equal(TOKEN_ID_ERC721);
    expect(loan.amount).to.equal(expectedAmount);
    expect(loan.collateralValue).to.equal(collateralValue);
    expect(loan.interest).to.equal(expectedInterest);
    expect(loan.time).to.equal(await getCurrentTimestamp());
    expect(loan.active).to.equal(true);

    expect(await getBalance()).to.equal(expectedAmount);
  });

  it("should allow borrowing ERC1155", async function () {
    const collateralValue = await getCollateralValue(TOKEN_CONTRACT_ERC1155);
    const borrowingPower = collateralValue * MAX_LTV / 10000;

    await collateral.setCollateralValue(COLLATERAL_VALUE);

    const amount = 10;
    const expectedAmount = amount;
    const expectedInterest = expectedAmount * INTEREST_RATE / 10000;

    const data = [];

    await collateral.depositERC1155Collateral(await ethers.provider.getSigner(0).getAddress(), TOKEN_CONTRACT_ERC1155, TOKEN_ID_ERC1155, amount, data);

    await lending.borrow(expectedAmount, TOKEN_CONTRACT_ERC1155, TOKEN_ID_ERC1155, await getCurrentTimestamp());

    const loan = await lending.loans(await ethers.provider.getSigner(0).getAddress(), 0);

    expect(loan.borrower).to.equal(await ethers.provider.getSigner(0).getAddress());
    expect(loan.tokenContract).to.equal(TOKEN_CONTRACT_ERC1155);
    expect(loan.tokenId).to.equal(TOKEN_ID_ERC1155);
    expect(loan.amount).to.equal(expectedAmount);
    expect(loan.collateralValue).to.equal(collateralValue);
    expect(loan.interest).to.equal(expectedInterest);
    expect(loan.time).to.equal(await getCurrentTimestamp());
    expect(loan.active).to.equal(true);

    expect(await getBalance()).to.equal(expectedAmount);
  });

  it("should allow repayment", async function () {
    const collateralValue = await getCollateralValue(TOKEN_CONTRACT_ERC721);

    await collateral.setCollateralValue(COLLATERAL_VALUE);

    const expectedAmount = AMOUNT;
    const expectedInterest = expectedAmount * INTEREST_RATE / 10000;

    await collateral.depositERC721Collateral(await ethers.provider.getSigner(0).getAddress(), TOKEN_CONTRACT_ERC721, TOKEN_ID_ERC721);

    await lending.borrow(expectedAmount, TOKEN_CONTRACT_ERC721, TOKEN_ID_ERC721, await getCurrentTimestamp());

    await lending.repay(0, await getCurrentTimestamp());

    const loan = await lending.loans(await ethers.provider.getSigner(0).getAddress(), 0);

    expect(loan.active).to.equal(false);

    expect(await getBalance()).to.equal(0);
  });

  async function getBalance() {
    return await ethers.provider.getBalance(await ethers.provider.getSigner(0).getAddress());
  }

  async function getCollateralValue(tokenContract) {
    const latestRoundData = await priceFeed.latestRoundData();
    return latestRoundData.answer * COLLATERAL_VALUE / 1e18;
  }

  async function getCurrentTimestamp() {
    const block = await ethers.provider.getBlock(await ethers.provider.getBlockNumber());
    return block.timestamp;
  }
});