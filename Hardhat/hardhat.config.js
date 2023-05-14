require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    sepolia: {
      url: `https://purple-smart-moon.ethereum-sepolia.discover.quiknode.pro/557da8fbcf9ffb0a99b8690e6a4b0fc2185e4024/`,
      accounts: [`695443873d058db7e263d01779d068b2fdb1863556ad7d14c953de97dbe35119`]
    },
  }
};
