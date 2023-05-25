import React, { useState, useEffect } from 'react';
import { ethers } from "ethers"
import nftabi from '../backend/Nft-erc721-abi.json'
import AurumV1core from '../backend/AurumV1core.json'
import "../static/css/navbar.css"
import ether_icon from '../static/img/ether.png'

const Navbar = ({ setProvider, setContract, setAccounts }) => {
  const [isConnected, setisConnected] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install Metamask to use this application.");
      return;
    }
  
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const accounts = await provider.send("eth_requestAccounts", []);
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (!accounts || !accounts[0]) {
        return;
      }
      const contract = new ethers.Contract(
        "0x998A67E159fb1086Acecf587c48a92dA0acE40E6",
        AurumV1core,
        signer
      );
      setProvider(provider);
      setContract(contract);
      setAccounts(accounts);
      setisConnected(true);
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleConnectWallet = async (e) => {
    e.preventDefault();
    await connectWallet();
  };




  return (
    <div className='navbar'>
      <div className="left_nav">
        <img src={ether_icon} alt="" />
        <a href="/">Aurum</a>
      </div>
      <div className="right_nav">
        <button>Lending</button>
        <button>Borrowing</button>
        <button>Portfolio</button>
        {isConnected ? <input type='button' value={'Connected'} /> :
          <input type='button' value={'Connect'} 
          onClick={(e) => { handleConnectWallet(e) }} 
          />
        }
        {/* {loading ? <p>Loading NFT...</p> : error ? <p>Error loading NFT...</p> : (
          <NftProvider fetcher={["providers", { providers }]}>
            <div>
              <img src={nft.image} alt={nft.name} style={{ maxWidth: "100px" }} />
            </div>
          </NftProvider>
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
