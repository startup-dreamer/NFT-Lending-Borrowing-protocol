import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function App() {
  const [nfts, setNfts] = useState([]);

  // Connect to Metamask and request permission to access the user's wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      getNfts(address, provider);
    }
  };

  const getNfts = async () => {
    // Request permission to access the user's Metamask wallet
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  
    // Get the signer's address and provider object
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const userAddress = await signer.getAddress();
  
    // Retrieve all NFT data associated with the user's address
    const allNfts = [];
    const logs = await provider.getLogs({
      fromBlock: 0,
      toBlock: 'latest',
      topics: [
        ethers.utils.id('TransferSingle(address,address,address,uint256,uint256)'),
        null,
        ethers.utils.hexZeroPad(userAddress, 32),
        null,
        null
      ]
    });
  
    for (let i = 0; i < logs.length; i++) {
      const contractAddress = logs[i].address;
      const tokenId = logs[i].data;
      allNfts.push({ contractAddress, tokenId });
    }
  
    setNfts(allNfts);
  }
  
  useEffect(async () => {
    // Check if the user is already connected to Metamask
    if (typeof window.ethereum !== 'undefined' && window.ethereum.selectedAddress) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      getNfts(address, provider);
    }
  }, []);

  return (
    <div>
      {nfts.length > 0 ? (
        <ul>
          {nfts.map((nft) => (
            <li key={nft.tokenId}>
              <p>Token ID: {nft.tokenId}</p>
              <p>Token URI: {nft.tokenURI}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No NFTs found</p>
      )}

      <button onClick={connectWallet}>Connect to Metamask</button>
    </div>
  );
}

export default App;
