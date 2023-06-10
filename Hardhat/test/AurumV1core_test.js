const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AurumV1core", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const AurumV1core = await ethers.getContractFactory("AurumV1core");
    contract = await AurumV1core.deploy(10, 5, 80);
    await contract.deployed();
  });

  it("should initialize contract variables correctly", async function () {
    expect(await contract.Borrow_interestRate()).to.equal(10);
    expect(await contract.Lending_interestRate()).to.equal(5);
    expect(await contract.maxLtv()).to.equal(80);
    expect(await contract.owner()).to.equal(owner.address);
    expect(await contract.totalSupply()).to.equal(0);
    expect(await contract.totalBorrowed()).to.equal(0);
    expect(await contract.totalDepositedNFTs()).to.equal(0);
  });

  it("should deposit ETH to the pool", async function () {
    const amount = ethers.utils.parseEther("0.01");
    const time = Math.floor(Date.now() / 1000);

    const depositToPoolTx = await contract.depositToPool(time, {
      value: amount,
    });
    await depositToPoolTx.wait();

    expect(await contract.totalSupply()).to.equal(amount);
    expect(await contract.individualDepositNum(owner.address)).to.equal(1);

    const deposits = await contract.deposits(owner.address);
    expect(deposits[0].amount).to.equal(amount);
    expect(deposits[0].time).to.equal(time);
    expect(deposits[0].interest).to.equal(amount.mul(5).div(10000));
  });

  it("should withdraw ETH from the pool", async function () {
    const amount = ethers.utils.parseEther("0.01");
    const time = Math.floor(Date.now() / 1000);

    await contract.depositToPool(time, { value: amount });

    const withdrawFromPoolTx = await contract.withdrawFromPool(0);
    await withdrawFromPoolTx.wait();

    expect(await contract.totalSupply()).to.equal(0);
    expect(await contract.individualDepositNum(owner.address)).to.equal(0);

    const deposits = await contract.deposits(owner.address);
    expect(deposits[0].amount).to.equal(0);
  });

  it("should borrow funds against collateral", async function () {
    const amount = ethers.utils.parseEther("1");
    const time = Math.floor(Date.now() / 1000);

    const borrowTx = await contract.borrow(
      amount,
      "0xTokenContract",
      1,
      time,
      { value: amount }
    );
    await borrowTx.wait();

    expect(await contract.totalBorrowed()).to.equal(amount);
    expect(await contract.totalDepositedNFTs()).to.equal(1);

    const loans = await contract.loans(owner.address);
    expect(loans[0].borrower).to.equal(owner.address);
    expect(loans[0].amount).to.equal(amount);
    expect(loans[0].active).to.equal(true);
  });

  it("should repay borrowed funds", async function () {
    const amount = ethers.utils.parseEther("1");
    const time = Math.floor(Date.now() / 1000);

    await contract.borrow(amount, "0xTokenContract", 1, time, { value: amount });

    const repayTx = await contract.repay(0, { value: amount });
    await repayTx.wait();

    expect(await contract.totalBorrowed()).to.equal(0);
    expect(await contract.totalDepositedNFTs()).to.equal(0);

    const loans = await contract.loans(owner.address);
    expect(loans[0].active).to.equal(false);
  });

  it("should set borrow interest rate", async function () {
    await contract.set_Borrow_InterestRate(15);
    expect(await contract.Borrow_interestRate()).to.equal(15);
  });

  it("should set loan to collateral ratio", async function () {
    await contract.setLoanToCollateral(90);
    expect(await contract.maxLtv()).to.equal(90);
  });

  it("should get the utilization of the pool", async function () {
    await contract.depositToPool(Math.floor(Date.now() / 1000), {
      value: ethers.utils.parseEther("0.01"),
    });
    expect(await contract.getUtilization()).to.equal(0);

    await contract.borrow(
      ethers.utils.parseEther("0.005"),
      "0xTokenContract",
      1,
      Math.floor(Date.now() / 1000),
      { value: ethers.utils.parseEther("0.005") }
    );
    expect(await contract.getUtilization()).to.equal(50);
  });

  it("should withdraw and liquidate NFT collateral", async function () {
    const amount = ethers.utils.parseEther("1");
    const time = Math.floor(Date.now() / 1000);

    await contract.borrow(amount, "0xTokenContract", 1, time, { value: amount });

    const withdrawLiquidateNFTTx = await contract.withdraw_liquidateNFT(
      owner.address,
       0,
      { value: amount }
    );
    await withdrawLiquidateNFTTx.wait();

    const loans = await contract.loans(owner.address);
    expect(loans[0].active).to.equal(false);

    // Verify NFT transfer
    const NFTContract = await ethers.getContractFactory("NFTContract");
    const nftContract = await NFTContract.deploy();
    await nftContract.deployed();

    const ownerBalanceBefore = await nftContract.balanceOf(owner.address);
    expect(ownerBalanceBefore).to.equal(0);

    await nftContract.transferFrom(contract.address, owner.address, 1);

    const ownerBalanceAfter = await nftContract.balanceOf(owner.address);
    expect(ownerBalanceAfter).to.equal(1);
  });
});
