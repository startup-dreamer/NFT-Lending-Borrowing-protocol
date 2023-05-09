require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const TEST_ACCOUNT_ADDRESS = '0x0123456789012345678901234567890123456789';

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://purple-smart-moon.ethereum-sepolia.discover.quiknode.pro/557da8fbcf9ffb0a99b8690e6a4b0fc2185e4024/`,
      accounts: [``]
    },
    hardhat: {
      faucet: {
        [TEST_ACCOUNT_ADDRESS]: "10000000000000000000" // 10 Ether
      }
    }
  }
};
