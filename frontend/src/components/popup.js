import React, { useState } from 'react';
import '../static/css/popup.css';
import galaxy from '../static/img/galaxy.png'
import space from '../static/img/Lend_main.jpg'

const Popup = ({ Contract, totalSupply, totalBorrow, lendingInterestRate }) => {

    const [metadata, setMetadata] = useState({});
    const [tokenContract, setTokenContract] = useState('');
    const [tokenId, setTokenId] = useState(undefined);
    const [NFTValue, setNFTValue] = useState(undefined);
    const [BorrowingPower, setBorrwingPower] = useState(undefined);
    const [loading, setLoading] = useState(false); // Add this state for loading
    const [Approving, setApproving] = useState(false);


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

    const handleFetchNFT = async () => {
        setLoading(true); // Set loading to true when fetching metadata
        if (tokenContract && tokenId !== null) {
            const data = await getmetadata(tokenContract, tokenId);
            const nftvalue = await getNftCollateralValue(Contract, '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA', tokenId);
            const maxltv = await getmaxLtv(Contract);
            const borrowingpower = (maxltv*nftvalue)/10000;
            setMetadata(data);
            setNFTValue(nftvalue);
            setBorrowing(borrowingpower);
            console.log(Contract);
            console.log(nftvalue);
            setLoading(false); // Set loading to false after metadata is fetched
        }
        else {
            setLoading(false);
            alert("Enter NFT contract Address and Id")
        }
    }

    const handleBorrow = async () => {
        setLoading(true);
        setApproving(true);
        
        setApproving(false);
        setLoading(false);

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
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media === undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' />
                    <input type="text" placeholder='Enter token ID' />
                    <button onClick={() => handleClick()}>Fetch NFT</button>
                    <br />
                    {(metadata.contract === undefined ?
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
                                    <span>${NFTValue}</span>
                                    <span>{BorrowingPower}</span>
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
            <div className="lend_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media == undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                        <div className="lend_section">
                            <div className="fetch_info">
                                <div className="left_info_popup">
                                    <span>Total Supply</span>
                                    <span>Total Borrow</span>
                                    <span>Lending Interest Rate</span>
                                </div>
                                <div className="right_info_popup">
                                    {/* Sumit yaha spans pe Total supply borrow and IR ka { function value } insert kardio */}
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="input_borrow">
                                <input type="number" placeholder='Enter Amount' />
                                <input type="datetime-local" defaultValue={'2023-05-30 11:59'} />
                            </div>
                            <button>Lend</button>
                        </div>
                </div>
                <i className='bi bi-x' onClick={() => hidelendPopup()}></i>
            </div>
        </div>
    );
}

export default Popup;
