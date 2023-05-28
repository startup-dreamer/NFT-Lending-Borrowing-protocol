import React, { useEffect, useState } from 'react';
import '../static/css/popup.css';
import galaxy from '../static/img/galaxy.png'
import space from '../static/img/Lend_main.jpg'

const Popup = () => {

    const [metadata, setMetadata] = useState({});
    const [tokenContract, setTokenContract] = useState('');
    const [tokenId, setTokenId] = useState(undefined);
    const [NFTValue, setNFTValue] = useState(undefined);

    function hidePopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            k[0].style.display = 'none';
        } catch { }
        setMetadata({});
    }
    function hidelendPopup() {
        try {
            let k = document.getElementsByClassName('lend_popup');
            k[0].style.display = 'none';
        } catch { }
        setMetadata({});
    }
    
    // closing popup by esc key
    document.addEventListener('keydown',()=>{
        try{
            let k1 = document.getElementsByClassName('borrow_popup');
            let k2 = document.getElementsByClassName('lend_popup');

            k1[0].style.display = 'none';
            k2[0].style.display = 'none';
        }catch{}
    })

    function handleClick() {
        setMetadata({
            contract: {
                address: "0xcbf0232a0b8cb5f0b41a0a9736332223fab338ca",
                contractDeployer: undefined,
                deployedBlockNumber: undefined,
                name: "Crypto Devs"
            },
            description: "Crypto Dev is a collection of developers in crypto",
            media: [
                { gateway: 'https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/11.svg', raw: 'https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/11.svg' }]
        })
    }

    function getNFTColletralValue() {
        return 8000;
    }

    // const handleClick = async () => {
    //   if(tokenContract && tokenId !==null){
    //   const data = await getmetadata(tokenContract, tokenId);
    //   setMetadata(data);
    // }
    // else {
    //   alert("Enter NFT contract Address and Id")
    // }
    //   const nftvalue = await getNftCollateralValue(Contract, '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA', '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA');

    //   setNFTValue(nftvalue);
    //   console.log(nftvalue);
    // }

    return (
        <div>
            <div className="borrow_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media == undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' />
                    <input type="text" placeholder='Enter token ID' />
                    <button className='borrow_bttn_popup' onClick={() => handleClick()}>Fetch NFT</button>
                    <br />
                    {(metadata.contract == undefined ?
                        <div className="borrow_absent">

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
                            <button className='borrow_bttn_popup'>Borrow</button>
                        </div>
                    )}
                </div>
                <i className='bi bi-x' onClick={() => hidePopup()}></i>
            </div>
            <div className="lend_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media == undefined ? space : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <div className="fetch_info_lend">
                        <div className="lend_info">
                            <div> Total Supply <br /><span>$5000</span></div>
                            <div> Total Borrow <br /><span>$5000</span></div>
                        </div>
                        <div> Lending Interest Rate <br /><span>$5000</span></div>
                    </div>
                    <div className="input_borrow_lend">
                        <input type="number" placeholder='Enter Amount' />
                        <input type="datetime-local" defaultValue={'2023-05-30 11:59'} />
                    </div>
                    <button className='lend_bttn_popup'>Lend</button>
                </div>
                <i className='bi bi-x' onClick={() => hidelendPopup()}></i>
            </div>
        </div>
    );
}

export default Popup;
