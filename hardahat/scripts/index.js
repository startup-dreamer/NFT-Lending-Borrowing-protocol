// import { URL } from '../constants/index,js'
const contract = require('../artifacts/contracts/NFTColletral.sol/NFTCollateral.json')
const URL = `https://purple-smart-moon.ethereum-sepolia.discover.quiknode.pro/557da8fbcf9ffb0a99b8690e6a4b0fc2185e4024/`;
const PRIVATE_KEY = `695443873d058db7e263d01779d068b2fdb1863556ad7d14c953de97dbe35119`
const CONTRACT_ADDRESS = `0xB49A86114654DA367858BF35348bFf9B50cFad24`
const alchemyProvider = new ethers.providers.JsonRpcProvider(URL);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const nftcolletral_contract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

