import { ethers } from 'ethers'
import {Web3Modal} from 'web3modal';
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
const AurumV1core = require('./AurumV1core.json');
// const contractAbi = require('./contractAbi.json'); // replace with your actual contract ABI

const ProviderOptions = {
  metamask: {
    id: "injected",
    name: "MetaMask",
    type: "ethereum",
    check: "isMetaMask"
  },
}
// connect to Metamask provider and return it
const connectWallet = async() => {
  try {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      ProviderOptions
    })
    const web3modal = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(web3modal);
    const network = await web3Provider.listAccounts();
    return (web3Provider, network)
  } catch (e) {
    console.log(e);
    
  }
}
console.log();


// create a contract instance using the provided provider and contract address
function contractInstance(provider, contractAddress) {
  const contract = new ethers.Contract(contractAddress, AurumV1core.abi, provider.GetSigner());
  return contract;
}

export {
  connectWallet,
  contractInstance
};
