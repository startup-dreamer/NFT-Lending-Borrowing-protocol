import React, { useState, useEffect } from 'react';
import { Signer, ethers } from 'ethers';
import nftabi from './Nft-erc721-abi.json'
import "../static/css/navbar.css"

const Navbar = ({ setProvider }) => {
  const [isConnected, setConnected] = useState(false);
  // const [Signer, setSginer] = useState(false);


  const handleInputClick = (e) => {
    e.preventDefault();
    // connectWallet();
  }

  // const connectWallet = async () => {
  //     try {
  //         if (!window.ethereum){
  //             alert("Please install Metamask to use this application.");
  //             return;
  //         }
  //         const provider = new ethers.providers.Web3Provider(window.ethereum);
  //         await provider.send("eth_requestAccounts", []);
  //         await window.ethereum.request({
  //             method: "eth_chainId",
  //         });
  //         setProvider(provider);
  //         setSginer(provider.getSigner())
  //         setConnected(true);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };

  // useEffect(() => {
  //     connectWallet();
  // }, [isConnected]);

  const approveToken = async (sender_address, token_id) => {
    const contract = new ethers.Contract(
      "0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA",
      nftabi,
      Signer,
    );
    try {
      const tx = await contract.approve(sender_address, token_id);
      console.log('Transaction hash:', tx.hash);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  //   console.log(Signer);



  return (
    <div className='navbar'>
      <div className="left_nav">
        <a href="/">Aurum</a>
      </div>
      <div className="right_nav">
        <button
        // onClick={() => {approveToken("0x4DAb9d32ea93a0085c5333b0553CA813d0AcEE35", 4)}}
        ><a href="/lend">Lending</a></button>
        <button><a href="/borrow">Borrowing</a></button>
        <button><a href="/portfolio">Portfolio</a></button>
        {isConnected ? <input type='button' value={'Connected'} /> :
          <input type='button' value={'Connect'} onClick={(e) => { handleInputClick(e) }} />
        }
      </div>
    </div>
  );
}

export default Navbar;
