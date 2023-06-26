const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AurumV2core", function() {
  let aurumV2core;
  let testNFT;
  let tokenId = 0;
  let owner;
  let depositor;
  let borrower;
  const depositAmount = ethers.utils.parseEther("0.005");
  const borrowAmount = ethers.utils.parseEther("0.0001");
  const time = 86400; // 1 day

  beforeEach(async function() {
    // Deploy the aurumV2core and get the deployed instance
    const AurumV2core = await ethers.getContractFactory("AurumV2core");
    [owner, depositor, borrower] = await ethers.getSigners();
    aurumV2core = await AurumV2core.deploy(200, 200, 5000);
    await aurumV2core.deployed();

    // Deploy the TestNFT aurumV2core
    const TestNFT = await ethers.getContractFactory("TestNFT");
    testNFT = await TestNFT.deploy();
    await testNFT.deployed();
  });

  it("should initialize aurumV2core variable correctly", async function() {
    // Check whether all the aurumV2core variable's initalized correctly
    expect(await aurumV2core.borrowInterestRate()).to.equal(200);
    expect(await aurumV2core.lendingInterestRate()).to.equal(200);
    expect(await aurumV2core.maxLoanToValue()).to.equal(5000);
    expect(await aurumV2core.owner()).to.equal(owner.address);
    expect(await aurumV2core.totalSupply()).to.equal(0);
    expect(await aurumV2core.totalBorrowed()).to.equal(0);
    expect(await aurumV2core.totalDepositedNFTs()).to.equal(0);
  });

  it("should deposit ETH to the pool", async function () {
    const initialBalance = await ethers.provider.getBalance(aurumV2core.address);

    // Deposits ETH to the pool
    await aurumV2core.connect(depositor).depositToPool(time, {value: depositAmount});

    // Checks for the pool conditions
    const finalBalance = await ethers.provider.getBalance(aurumV2core.address);
    const depositorDeposit = await aurumV2core.deposits(depositor.address, 0);

    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount);
    expect(depositorDeposit.amount).to.equal(depositAmount);
    expect(depositorDeposit.duration).to.equal(time);
    expect(depositorDeposit.interest).to.equal(depositAmount.mul(await aurumV2core.lendingInterestRate()).div(10000));

    // Check that the event was emitted correctly
    const events = await aurumV2core.queryFilter("Deposition");
    expect(events.length).to.equal(1);
    expect(events[0].args.amount).to.equal(depositAmount);
    expect(events[0].args.sender).to.equal(depositor.address);
    expect(events[0].args.duration).to.equal(time);
  });

  it("should withdraw ETH from the pool", async function() {
    const initialBalance = await ethers.provider.getBalance(depositor.address);

    await aurumV2core.connect(depositor).depositToPool(time, { value: depositAmount });

    // Depositor withdraws from the pool
    const depositId = 0; // Assuming the depositor has only made one deposit
    await aurumV2core.connect(depositor).withdrawFromPool(depositId);

    // Check the updated user balance and deposit details
    const finalBalance = await ethers.provider.getBalance(depositor.address);
    const depositorDeposit = await aurumV2core.deposits(depositor.address, depositId);

    expect(depositorDeposit.amount).to.equal(0);
    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount.add(depositorDeposit.interest));

    // Check that the event was emitted correctly
    const events = await aurumV2core.queryFilter("Withdrawal");
    expect(events.length).to.equal(1);
    expect(events[0].args.depId).to.equal(depositId);
    expect(events[0].args.sender).to.equal(depositor.address);
    expect(events[0].args.amount).to.equal(depositAmount.add(depositorDeposit.interest));
  });

  it("should allow a user to borrow funds against collateral", async function() {
    const initialBorrowed = await aurumV2core.totalBorrowed();
    const initialDepositedNFTs = await aurumV2core.totalDepositedNFTs();

    await testNFT.connect(borrower).mint(tokenId);

    await testNFT.connect(borrower).approve(aurumV2core.address, tokenId)

    // Borrower requests a loan
    await aurumV2core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });

    // Check the updated total borrowed amount and deposited NFTs count
    const finalBorrowed = await aurumV2core.totalBorrowed();
    const finalDepositedNFTs = await aurumV2core.totalDepositedNFTs();

    expect(finalBorrowed.sub(initialBorrowed)).to.equal(borrowAmount);
    expect(finalDepositedNFTs.sub(initialDepositedNFTs)).to.equal(1);

    // Check the borrower's loan details
    const borrowerLoan = await aurumV2core.loans(borrower.address, 0);
    expect(borrowerLoan.borrower).to.equal(borrower.address);
    expect(borrowerLoan.tokenContract).to.equal(testNFT.address);
    expect(borrowerLoan.tokenId).to.equal(tokenId);
    expect(borrowerLoan.amount).to.equal(borrowAmount);
    // Adjust the collateralValue calculation according to your aurumV2core's implementation
    expect(borrowerLoan.collateralValue).to.equal(1000);
    expect(borrowerLoan.interest).to.equal(borrowAmount.mul(await aurumV2core.borrowInterestRate()).div(10000));
    expect(borrowerLoan.duration).to.equal(time);
    expect(borrowerLoan.isActive).to.equal(true);

    // Check that the event was emitted correctly
    const events = await aurumV2core.queryFilter("Borrow");
    expect(events.length).to.equal(1);
    expect(events[0].args.borrower).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(0);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV2core.borrowInterestRate()).div(10000));
    expect(events[0].args.duration).to.equal(time);
  });

  it("should allow a user to repay a loan", async function() {
    const initialBalance = await ethers.provider.getBalance(borrower.address);
  
    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV2core.address, tokenId);
  
    // Borrower requests a loan
    await aurumV2core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });
  
    const loanId = 0;
  
    // Repay the loan
    await aurumV2core.connect(borrower).repay(loanId, { value: borrowAmount.add(borrowAmount.mul(await aurumV2core.Borrow_interestRate()).div(10000)) });
  
    // Check the updated borrower balance and loan status
    const finalBalance = await ethers.provider.getBalance(borrower.address);
    const borrowerLoan = await aurumV2core.loans(borrower.address, loanId);
  
    expect(finalBalance.sub(initialBalance)).to.equal(borrowAmount.mul(2));
    expect(borrowerLoan.isActive).to.equal(false);
  
    // Check that the event was emitted correctly
    const events = await aurumV2core.queryFilter("Repay");
    expect(events.length).to.equal(1);
    expect(events[0].args.sender).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(loanId);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV2core.borrowInterestRate()).div(10000));
  });
  
  it("should set borrow interest rate", async function () {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('1.0'); // Amount in ethers
    const transactionData = {
      to: aurumV2core.address,
      value: amountToSend,
    };
    
    await owner.sendTransaction(transactionData);
    await aurumV2core.setBorrowInterestRate(300);
    expect(await aurumV2core.borrowInterestRate()).to.equal(300);
  });

  it("should set loan to collateral ratio", async function () {
    await aurumV2core.setLoanToValue(1000);
    expect(await aurumV2core.maxLoanToValue()).to.equal(1000);
  });

  it("should get the utilization of the pool", async function () {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('0.01'); // Amount in ethers
    const transactionData = {
      to: aurumV2core.address,
      value: amountToSend,
    };
    await owner.sendTransaction(transactionData);

    expect(await aurumV2core.getUtillization()).to.equal(0);

    await testNFT.connect(borrower).mint(tokenId);
    // await testNFT.connect(borrower).approve(aurumV2core.address, tokenId)

    // Borrower requests a loan
    await aurumV2core
    .connect(borrower)
    .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });
    
    const utillization = await aurumV2core.getUtillization();
    
    expect(parseInt(utillization)).to.equal(parseInt((0.0001 / 0.9999) * 100));
  });
});
