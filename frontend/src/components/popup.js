import React, { useState } from 'react';
import '../static/css/popup.css';
import galaxy from '../static/img/galaxy.png'

const Popup = () => {

    const [metadata, setMetadata] = useState({});
    const [tokenContract, setTokenContract] = useState('');
    const [tokenId, setTokenId] = useState(undefined);
    const [NFTValue, setNFTValue] = useState(undefined);

    function hidePopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            console.log(k);
            k[0].style.display = 'none';
        } catch { }
        setMetadata({});
    }

    // function fetchNFT() {
    //     setMetadata({
    //         contract: {
    //             address: "0xcbf0232a0b8cb5f0b41a0a9736332223fab338ca",
    //             contractDeployer: undefined,
    //             deployedBlockNumber: undefined,
    //             name: "Crypto Devs"
    //         },
    //         description: "Crypto Dev is a collection of developers in crypto",
    //         media: [
    //             { gateway: 'https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/11.svg', raw: 'https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/11.svg' }]
    //     })
    // }

    function getNFTColletralValue() {
        return 8000;
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
            <div className="borrow_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media == undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' />
                    <input type="text" placeholder='Enter token ID' />
                    <button onClick={() => handleClick()}>Fetch NFT</button>
                    <br />
                    {(metadata.contract == undefined ?
                        <div className="lend_absent">

                        </div> :
                        <div className="borrow_section">
                            <div className="fetch_info">
                                <div className="left_info_popup">
                                    <span>Name :</span>
                                    <span>Current Value :</span>
                                    <span>Borrowing Power :</span>
                                    <span>Description :</span>
                                </div>
                                <div className="right_info_popup">
                                    <span>{metadata.contract.name}</span>
                                    <span>${getNFTColletralValue()}</span>
                                    <span>$11590</span>
                                    <span>{metadata.description}</span>
                                </div>
                            </div>
                            <div className="input_borrow">
                                <input type="number" placeholder='Enter Amount' />
                                <input type="datetime-local" defaultValue={'2023-05-30 11:59'} />
                            </div>
                            <button>Borrow</button>
                        </div>
                    )}
                </div>
                <i className='bi bi-x' onClick={() => hidePopup()}></i>
            </div>
        </div>
    );
}

export default Popup;
