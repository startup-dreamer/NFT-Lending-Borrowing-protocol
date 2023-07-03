const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AurumV1core", function() {
  let aurumV1core;
  let testNFT;
  let tokenId = 0;
  let owner;
  let depositor;
  let borrower;
  const depositAmount = ethers.utils.parseEther("0.005");
  const borrowAmount = ethers.utils.parseEther("0.0001");
  const time = 86400; // 1 day

  before(async function() {
    // Deploy the aurumV1core and get the deployed instance
    const AurumV1core = await ethers.getContractFactory("AurumV1core");
    [owner, depositor, borrower] = await ethers.getSigners();
    aurumV1core = await AurumV1core.deploy(200, 200, 5000);
    await aurumV1core.deployed();

    // Deploy the TestNFT aurumV1core
    const TestNFT = await ethers.getContractFactory("TestNFT");
    testNFT = await TestNFT.deploy();
    await testNFT.deployed();
  });

  it("should initialize aurumV1core variable correctly", async function() {
    // Check whether all the aurumV1core variable's initalized correctly
    expect(await aurumV1core.Borrow_interestRate()).to.equal(200);
    expect(await aurumV1core.Lending_interestRate()).to.equal(200);
    expect(await aurumV1core.maxLtv()).to.equal(5000);
    expect(await aurumV1core.owner()).to.equal(owner.address);
    expect(await aurumV1core.totalSupply()).to.equal(0);
    expect(await aurumV1core.totalBorrowed()).to.equal(0);
    expect(await aurumV1core.totalDepositedNFTs()).to.equal(0);
  })

  it("should allow a user to deposit ETH to the pool", async function() {
    const initialBalance = await ethers.provider.getBalance(aurumV1core.address);

    // Depositor makes a deposit to the pool
    await aurumV1core.connect(depositor).depositToPool(time, { value: depositAmount });

    // Check the updated pool balance and the depositor's deposit details
    const finalBalance = await ethers.provider.getBalance(aurumV1core.address);
    const depositorDeposit = await aurumV1core.deposits(depositor.address, 0);

    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount);
    expect(depositorDeposit.amount).to.equal(depositAmount);
    expect(depositorDeposit.time).to.equal(time);
    expect(depositorDeposit.interest).to.equal(depositAmount.mul(await aurumV1core.Lending_interestRate()).div(10000));

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Deposition");
    expect(events.length).to.equal(1);
    expect(events[0].args.amount).to.equal(depositAmount);
    expect(events[0].args.sender).to.equal(depositor.address);
    expect(events[0].args.time).to.equal(time);
  });

  it("should allow a user to withdraw ETH from the pool", async function() {
    const initialBalance = await ethers.provider.getBalance(depositor.address);

    await aurumV1core.connect(depositor).depositToPool(time, { value: depositAmount });

    // Depositor withdraws from the pool
    const depositId = 0; // Assuming the depositor has only made one deposit
    await aurumV1core.connect(depositor).withdrawFromPool(depositId);

    // Check the updated user balance and deposit details
    const finalBalance = await ethers.provider.getBalance(depositor.address);
    const depositorDeposit = await aurumV1core.deposits(depositor.address, depositId);

    expect(depositorDeposit.amount).to.equal(0);
    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount.add(depositorDeposit.interest));

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Withdrawal");
    expect(events.length).to.equal(1);
    expect(events[0].args.depId).to.equal(depositId);
    expect(events[0].args.sender).to.equal(depositor.address);
    expect(events[0].args.amount).to.equal(depositAmount.add(depositorDeposit.interest));
  });

  it("should allow a user to borrow funds against collateral", async function() {
    const initialBorrowed = await aurumV1core.totalBorrowed();
    const initialDepositedNFTs = await aurumV1core.totalDepositedNFTs();

    await testNFT.connect(borrower).mint(tokenId);

    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId)

    // Borrower requests a loan
    await aurumV1core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });

    // Check the updated total borrowed amount and deposited NFTs count
    const finalBorrowed = await aurumV1core.totalBorrowed();
    const finalDepositedNFTs = await aurumV1core.totalDepositedNFTs();

    expect(finalBorrowed.sub(initialBorrowed)).to.equal(borrowAmount);
    expect(finalDepositedNFTs.sub(initialDepositedNFTs)).to.equal(1);

    // Check the borrower's loan details
    const borrowerLoan = await aurumV1core.loans(borrower.address, 0);
    expect(borrowerLoan.borrower).to.equal(borrower.address);
    expect(borrowerLoan.tokenContract).to.equal(testNFT.address);
    expect(borrowerLoan.tokenId).to.equal(tokenId);
    expect(borrowerLoan.amount).to.equal(borrowAmount);
    // Adjust the collateralValue calculation according to your aurumV1core's implementation
    expect(borrowerLoan.collateralValue).to.equal(1000);
    expect(borrowerLoan.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
    expect(borrowerLoan.time).to.equal(time);
    expect(borrowerLoan.active).to.equal(true);

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Borrow");
    expect(events.length).to.equal(1);
    expect(events[0].args.borrower).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(0);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
    expect(events[0].args.time).to.equal(time);
  });

  it("should allow a user to repay a loan", async function() {
    const initialBalance = await ethers.provider.getBalance(borrower.address);
  
    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId);
  
    // Borrower requests a loan
    await aurumV1core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });
  
    const loanId = 0;
  
    // Repay the loan
    await aurumV1core.connect(borrower).repay(loanId, { value: borrowAmount.add(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000)) });
  
    // Check the updated borrower balance and loan status
    const finalBalance = await ethers.provider.getBalance(borrower.address);
    const borrowerLoan = await aurumV1core.loans(borrower.address, loanId);
  
    expect(finalBalance.sub(initialBalance)).to.equal(borrowAmount.mul(2));
    expect(borrowerLoan.active).to.equal(false);
  
    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Repay");
    expect(events.length).to.equal(1);
    expect(events[0].args.sender).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(loanId);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
  });
  
  it("should set borrow interest rate", async function () {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('1.0'); // Amount in ethers
    const transactionData = {
      to: aurumV1core.address,
      value: amountToSend,
    };
    
    await owner.sendTransaction(transactionData);
    await aurumV1core.set_Borrow_InterestRate(300);
    expect(await aurumV1core.Borrow_interestRate()).to.equal(300);
  });

  it("should set loan to collateral ratio", async function () {
    await aurumV1core.setLoanToCollateral(1000);
    expect(await aurumV1core.maxLtv()).to.equal(1000);
  });

  it("should get the utilization of the pool", async function () {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('1.0'); // Amount in ethers
    const transactionData = {
      to: aurumV1core.address,
      value: amountToSend,
    };
    await owner.sendTransaction(transactionData);

    expect(await aurumV1core.getUtilization()).to.equal(0);

    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId)

    // Borrower requests a loan
    await aurumV1core
    .connect(borrower)
    .borrow(borrowAmount, testNFT.address, tokenId, time, { value: borrowAmount });
    
    const utillization = await aurumV1core.getUtilization();
    
    expect(parseInt(utillization)).to.equal(parseInt((0.0001 / 0.9999) * 100));
  });
});
