const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTCollateral", function () {
  let nftCollateral;
  let tokenContract;
  let tokenId;
  let borrower;

  // Deploy a new instance of the contract and an ERC721 token before each test
  beforeEach(async function () {
    const NFTCollateral = await ethers.getContractFactory("NFTCollateral");
    nftCollateral = await NFTCollateral.deploy();
    await nftCollateral.deployed();

    // Deploy a new ERC721 token contract
    const ERC721Token = await ethers.getContractFactory("MyERC721Token");
    const erc721Token = await ERC721Token.deploy("Token Name", "TOKEN");
    await erc721Token.deployed();

    // Mint a new token to the borrower for testing purposes
    const accounts = await ethers.getSigners();
    borrower = accounts[0].address;
    tokenId = 1;
    await erc721Token.mint(borrower, tokenId);

    // Use the address of the deployed ERC721 token contract
    tokenContract = erc721Token.address;
  });

  // ERC721 Tests
  describe("ERC721", function () {

    it("Should deposit ERC721 collateral", async function () {
      // Deposit collateral
      await expect(
        nftCollateral.depositERC721Collateral(borrower, tokenContract, tokenId)
      ).to.emit(token, "Transfer");

      // Check that the borrower's collateral balance has been updated
      expect(await nftCollateral.collateralBalances(borrower, tokenContract)).to.equal(1);
    });

    it("Should withdraw ERC721 collateral", async function () {
      // Withdraw collateral
      await expect(
        nftCollateral.withdrawERC721Collateral(borrower, tokenContract, tokenId)
      ).to.emit(token, "Transfer");

      // Check that the borrower's collateral balance has been updated
      expect(await nftCollateral.collateralBalances(borrower, tokenContract)).to.equal(0);
    });
  });
});
