require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://tame-burned-dream.ethereum-goerli.discover.quiknode.pro/c290002455b85c6d7c4d198b12c155ba2515f9be/`,
      accounts: [`489ea11b3aa52feb68430c13b7461a7d534efa745f46ee29fac83403eebac97c`]
    }
  }
};
