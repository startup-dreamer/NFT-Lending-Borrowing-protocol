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
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const duration = 86400; // 1 day
  const depositTime = currentTimestamp + duration;

  beforeEach(async function() {
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
    await aurumV1core
      .connect(depositor)
      .depositToPool(depositTime, { value: depositAmount });

    // Check the updated pool balance and the depositor's deposit details
    const finalBalance = await ethers.provider.getBalance(aurumV1core.address);
    const depositorDeposit = await aurumV1core.deposits(depositor.address, 0);

    expect(finalBalance.sub(initialBalance)).to.equal(depositAmount);
    expect(depositorDeposit.amount).to.equal(depositAmount);
    expect(depositorDeposit.time).to.equal(depositTime);
    expect(depositorDeposit.interest).to.equal(depositAmount.mul(await aurumV1core.Lending_interestRate()).div(10000));

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Deposition");
    expect(events.length).to.equal(1);
    expect(events[0].args.amount).to.equal(depositAmount);
    expect(events[0].args.sender).to.equal(depositor.address);
    expect(events[0].args.time).to.equal(depositTime);
  });

  it("should allow a user to withdraw ETH from the pool before maturity", async function() {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('0.001'); // Amount in ethers
    const transactionData = {
      to: aurumV1core.address,
      value: amountToSend,
    };    
    await owner.sendTransaction(transactionData);

    await aurumV1core
      .connect(depositor)
      .depositToPool(depositTime, { value: depositAmount });

    const depositId = 0; // Assuming the depositor has only made one deposit
    const depositorDeposit = await aurumV1core.deposits(depositor.address, depositId);

    expect(depositAmount).to.equal(depositorDeposit.amount);
    expect(depositorDeposit.time).to.equal(depositTime);

    // Depositor withdraws from the pool
    await aurumV1core
      .connect(depositor)
      .withdrawFromPool(depositId);
    const depositorDepositAfterWithdraw = await aurumV1core.deposits(depositor.address, depositId);

    expect(depositorDepositAfterWithdraw.amount).to.equal(0);
    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Withdrawal");
    expect(events.length).to.equal(1);
    expect(events[0].args.depoId).to.equal(depositId);
    expect(events[0].args.lender).to.equal(depositor.address);
    // Return amount before maturity is equal to deposit amount
    expect(events[0].args.amount).to.equal(depositAmount);
  });

  it("should allow a user to withdraw ETH from the pool after maturity", async function() {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('0.001'); // Amount in ethers
    const transactionData = {
      to: aurumV1core.address,
      value: amountToSend,
    };
    await owner.sendTransaction(transactionData);

    await aurumV1core
      .connect(depositor)
      .depositToPool(depositTime, { value: depositAmount });

    // Wait for the loan to become liquidatable
    await ethers.provider.send("evm_increaseTime", [duration]);

    const depositId = 0; // Assuming the depositor has only made one deposit
    const depositorDeposit = await aurumV1core.deposits(depositor.address, depositId);

    expect(depositAmount).to.equal(depositorDeposit.amount);
    expect(depositorDeposit.time).to.equal(depositTime);

    // Depositor withdraws from the pool
    await aurumV1core
      .connect(depositor)
      .withdrawFromPool(depositId);

    const depositorDepositAfterWithdraw = await aurumV1core.deposits(depositor.address, depositId);
    expect(depositorDepositAfterWithdraw.amount).to.equal(0);

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Withdrawal");
    expect(events.length).to.equal(1);
    expect(events[0].args.depoId).to.equal(depositId);
    expect(events[0].args.lender).to.equal(depositor.address);
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
      .borrow(borrowAmount, testNFT.address, tokenId, depositTime, { value: borrowAmount });

    // Check the updated total borrowed amount and deposited NFTs count
    const finalBorrowed = await aurumV1core.totalBorrowed();
    const finalDepositedNFTs = await aurumV1core.totalDepositedNFTs();
    // Calculate the collateral value for liquidation
    const collateralValue = await aurumV1core.getNftCollateralValue(testNFT.address, tokenId);

    expect(finalBorrowed.sub(initialBorrowed)).to.equal(borrowAmount);
    expect(finalDepositedNFTs.sub(initialDepositedNFTs)).to.equal(1);

    // Check the borrower's loan details
    const borrowerLoan = await aurumV1core.loans(borrower.address, 0);
    expect(borrowerLoan.borrower).to.equal(borrower.address);
    expect(borrowerLoan.tokenContract).to.equal(testNFT.address);
    expect(borrowerLoan.tokenId).to.equal(tokenId);
    expect(borrowerLoan.amount).to.equal(borrowAmount);
    expect(borrowerLoan.collateralValue).to.equal(collateralValue);
    expect(borrowerLoan.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
    expect(borrowerLoan.time).to.equal(depositTime);
    expect(borrowerLoan.active).to.equal(true);

    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Borrow");
    expect(events.length).to.equal(1);
    expect(events[0].args.borrower).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(0);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
    expect(events[0].args.time).to.equal(depositTime);
  });

  it("should allow a user to repay a loan", async function() {
    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId);
    const borrowTime = depositTime + duration;

    // Borrower requests a loan
    await aurumV1core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, borrowTime, { value: borrowAmount });

    const loanId = 0;
    const borrowerLoan = await aurumV1core.loans(borrower.address, loanId);

    expect(borrowerLoan.active).to.equal(true);
    // Repay the loan
    await aurumV1core
        .connect(borrower)
        .repay(loanId, { value: borrowerLoan.amount.add(borrowerLoan.interest) });
    
    // Check the updated borrower balance and loan status
    expect(borrowerLoan.active).to.equal(true); 
    // Check that the event was emitted correctly
    const events = await aurumV1core.queryFilter("Repay");
    expect(events.length).to.equal(1);
    expect(events[0].args.borrower).to.equal(borrower.address);
    expect(events[0].args._loanId).to.equal(loanId);
    expect(events[0].args.amount).to.equal(borrowAmount);
    expect(events[0].args.interest).to.equal(borrowAmount.mul(await aurumV1core.Borrow_interestRate()).div(10000));
  });

  it("should set borrow interest rate", async function () {
    // Define the transaction parameters
    const amountToSend = ethers.utils.parseEther('0.001'); // Amount in ethers
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
    const amountToSend = ethers.utils.parseEther('0.001'); // Amount in ethers
    const transactionData = {
      to: aurumV1core.address,
      value: amountToSend,
    };
    await owner.sendTransaction(transactionData);

    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId);
    const borrowTime = depositTime + duration;

    // Borrower requests a loan
    await aurumV1core
    .connect(borrower)
    .borrow(borrowAmount, testNFT.address, tokenId, borrowTime, { value: borrowAmount });
    
    const totalSupply = await aurumV1core.totalSupply();
    const totalBorrowed = await aurumV1core.totalBorrowed();
    
    expect(parseFloat(totalSupply / totalBorrowed)).to.equal(parseFloat(0.001 / 0.0001));
  });

  it("should allow liquidation of a loan and transfer of NFT", async function() {
    // Create a loan with a borrower
    await testNFT.connect(borrower).mint(tokenId);
    await testNFT.connect(borrower).approve(aurumV1core.address, tokenId);
    const borrowTime = depositTime + duration;

    await aurumV1core
      .connect(borrower)
      .borrow(borrowAmount, testNFT.address, tokenId, borrowTime, { value: borrowAmount });

    // Wait for the loan to become liquidatable
    await ethers.provider.send("evm_increaseTime", [duration]);

    // Calculate the collateral value for liquidation
    const collateralValue = await aurumV1core.getNftCollateralValue(testNFT.address, tokenId);

    // Liquidate the loan and transfer the NFT
    await aurumV1core
      .connect(owner)
      .withdraw_liquidateNFT(borrower.address, 0, { value: collateralValue });

    // Check that the loan is no longer active
    const loan = await aurumV1core.loans(borrower.address, 0);
    expect(loan.active).to.equal(false);

    // Check that the NFT has been transferred to the liquidator
    const liquidatorBalance = await testNFT.balanceOf(owner.address);
    expect(liquidatorBalance).to.equal(1);
  });
});
