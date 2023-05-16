import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import './App.css';
import Navbar from './components/navbar';
import Content from './components/content';
// import nftAbi from './Nft-erc721-abi.json'


function App() {

  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState(null); // state variables for provider and contract instance
  const [contract, setContract] = useState(null);

  // const connectWallet = async () => {
  //   try {
  //     if (!window.ethereum){
  //       alert("Please install Metamask to use this application.");
  //       return;
  //     }
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.send("eth_requestAccounts", []);
  //     await window.ethereum.request({
  //       method: "eth_chainId",
  //     });
  //     // const instance = new ethers.Contract(
  //     //   CONTRACT_ADDRESS,
  //     //   ItemManagerContract.abi,
  //     //   provider.getSigner(),
  //     // );
  //     setProvider(provider);
  //     setConnected(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const approveToken = async (sender_address, token_id) => {
  //   const contract = new ethers.Contract(
  //     "0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA",
  //        nftAbi,
  //        provider.getSigner(),
  //      );
  //      setContract(contract);
  //   try {
  //     const tx = await contract.approve(sender_address, token_id);
  //     console.log('Transaction hash:', tx.hash);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // useEffect(() => {
    
  //   connectWallet();
  // }, [connected]);

const transferto = async (from,address, id) => {
  const tx = await contract.transferFrom(from,address, id);
  console.log('Transaction hash:', tx.hash);
}

  return (
    <div className='App'>
      <Navbar/>
      <Content/>
    </div>
  
  
  
  // <div>
  //    <label>Token address </label>
  //    <input type="text" id="identifier" />
  //    <label>Token id </label>
  //    <input type="number" id="cost" />
  //    <button onClick={() => {approveToken(document.getElementById("identifier").value, document.getElementById("cost").value)}}>Approve Token</button>
  //    <button onClick={() => {transferto("0x01751bd851599d98ed52CB75AA2682a31D79AaD6",document.getElementById("identifier").value, document.getElementById("cost").value)}}>transfer Token</button>
  // </div>
  );

}


export default App;
