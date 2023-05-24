import React, { useState } from 'react';
import '../static/css/popup.css';
import { getmetadata, getNftCollateralValue } from '../backend'

const Popup = ({Contract}) => {
  const [tokenContract, setTokenContract] = useState('');
  const [tokenId, setTokenId] = useState(undefined);
  const [NFTValue, setNFTValue] = useState(undefined);
  const [Metadata, setMetadata] = useState(null);

  function hidePopup() {
    try {
      let k = document.getElementsByClassName('lend_popup');
      console.log(k);
      k[0].style.display = 'none';
    } catch {

    }
  }

  const handleClick = async () => {
    if(tokenContract && tokenId !==null){
    const data = await getmetadata(tokenContract, tokenId);
    setMetadata(data);
  }
  else {
    alert("Enter NFT contract Address and Id")
  }
    const nftvalue = await getNftCollateralValue(Contract, '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA', '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA');

    setNFTValue(nftvalue);
    console.log(nftvalue);
  }

  return (
    <div>
      <div className="lend_popup">
        <div className="left_popup">
          {Metadata && tokenContract && tokenId!== null 
            ? <img src={`${Metadata.rawMetadata.image}`} alt="NFT"/> 
            : null
          }
        </div>
        <div className="right_popup">
          <input type="text" placeholder='Enter token contract' onChange={(e) => setTokenContract(e.target.value)} />
          <input type="number" placeholder='Enter token ID' onChange={(e) => setTokenId(e.target.value)} />
          <button onClick={() => {handleClick()}}>Fetch NFT</button>
          <br />
          <input type="text" value={Metadata !== null ? 'Name: ' + Metadata.rawMetadata.name : 'Name: '}/>
          <input type="text" value={Metadata !== null ? 'Description: ' + Metadata.rawMetadata.description : 'Description: '}/>
          <input type="text" value={NFTValue !== undefined ? 'NFTs Value: ' + NFTValue : 'NFTs Value: '}/>
          <input type="text" value={NFTValue !== undefined ? 'NFTs Value: ' + NFTValue : 'NFTs Value: '}/>
          <input type="text" />
          <button>Borrow</button>
        </div>
        <i className='bi bi-x' onClick={hidePopup}></i>
      </div>
    </div>
  );
}

export default Popup;

// 0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA
// tokenId = 11
