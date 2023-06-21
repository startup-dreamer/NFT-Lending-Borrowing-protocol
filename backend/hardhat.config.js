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
      accounts: [`231470531281029c7ff44196b913bcc6ab62ab6a04ccebcdc99366cf031be0c8`]
    },
  }
};
