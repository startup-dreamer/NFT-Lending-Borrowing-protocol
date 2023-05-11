// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const Hardhat = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await Hardhat.run('compile');

  // We get the contract to deploy
  const Lending = await Hardhat.ethers.getContractFactory("Lending");
  const lending = await Lending.deploy("0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA",500,5000,"0xF49f8F5b931B0e4B4246E4CcA7cD2083997Aa83d");

  await lending.deployed();

  console.log("Lending is deployed to:", lending.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
