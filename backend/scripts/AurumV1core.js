const { ethers } = require("hardhat");

async function main() {
  const AumrumV1core = await ethers.getContractFactory("AumrumV1core");
  const contract = await AumrumV1core.deploy(500, 400, 5000);
  await contract.deployed();
  console.log("AumrumV1core deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
