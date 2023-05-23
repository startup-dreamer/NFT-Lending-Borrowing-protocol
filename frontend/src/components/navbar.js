import React, { useState, useEffect } from 'react';
import { Signer, ethers } from "ethers"
// import { connectWallet, ContractInstance } from '../backend';
import nftabi from '../backend/Nft-erc721-abi.json'
import AurumV1core from '../backend/AurumV1core.json'
import "../static/css/navbar.css"
import ether_icon from '../static/img/ether.png'

const Navbar = ({ setProvider, setContract }) => {
  const [isConnected, setConnected] = useState(false);

  // const connectWallet = async () => {
  //   try {
  //     if (!window.ethereum) {
  //       alert("Please install Metamask to use this application.");
  //       return;
  //     }
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const Signer = provider.getSigner()
  //     await provider.send("eth_requestAccounts", []);
  //     await window.ethereum.request({
  //       method: "eth_chainId",
  //     });
  //     const contract = new ethers.Contract('0x3d35b8C010E2Bf8C530cF7DE18cbF3Da50657599', AurumV1core.abi, Signer);      
  //     setProvider(provider);
  //     setContract(contract);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



  // useEffect(() => {
  //     connectWallet();
  // }, [isConnected]);



  // const handelclick = async(e) => {
  //   e.preventDefault();
  //   await connectWallet();
  //   setConnected(true);   
  // }




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
          // onClick={(e) => { handelclick(e) }} 
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
