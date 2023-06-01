import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../static/css/popup.css';
import galaxy from '../static/img/galaxy.png'
import space from '../static/img/Lend_main.jpg'
import { getNftCollateralValue, deposit_to_pool, getmetadata, getmaxLtv, approveToken, borrow } from '../backend';

const Popup = ({ Contract, handleChange, totalSupply, totalBorrow, LIR }) => {
    const navigate = useNavigate();

    /**************************************************** LEND ****************************************************/
    const [Amount, setAmount] = useState(0);
    const [Time, setTime] = useState(0);

    function getEpochTime(value) {
        const date = new Date(value.replace(' ', 'T'));
        const epochTime = Math.floor(date.getTime() / 1000);
        setTime(epochTime);
    }

    function hidelendPopup() {
        try {
            let k = document.getElementsByClassName('lend_popup');
            k[0].style.display = 'none';
        } catch { }
        setMetadata({});
    }

    const Lend = async () => {
        try {
            if ((Amount && Time !== 0) && Amount <= 0.01) {
                const amount = Amount * 1e18;
                const time = Time;
                const Tx = await deposit_to_pool(Contract, time, amount);
                const receipt = await Tx.wait();
                if (receipt.status === 1) {
                    console.log("Transaction confirmed with", receipt);
                    navigate('/portfolio');
                }
                else if (receipt.status === 0) {
                    alert("transaction failed please retry")
                }
            }
            else if (Amount > 0.01) {
                alert("Only 0.01 ETH of less than could be deposited in beta testing");
            }
            else {
                alert("Enter Amount and Time of lending");
            }
        }
        catch (e) {
            console.error(e);
        }
    };

    // closing popup by esc key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            try {
                let k1 = document.getElementsByClassName('borrow_popup');
                let k2 = document.getElementsByClassName('lend_popup');
                k1[0].style.display = 'none';
                k2[0].style.display = 'none';
            } catch (e) {
                console.error(e);
            }
        }
    });

    /**************************************************** BORROW ****************************************************/
    const [metadata, setMetadata] = useState({});
    const [tokenContract, setTokenContract] = useState('');
    const [tokenId, setTokenId] = useState(undefined);
    const [NFTValue, setNFTValue] = useState(undefined);
    const [BorrowingPower, setBorrwingPower] = useState(undefined);
    const [borrowAmount, setBorrowAmount] = useState(0);
    const [borrowTime, setBorrowTime] = useState(0);
    const [loading, setLoading] = useState(false);
    const [approving, setApproving] = useState(false);

    function hideborrowPopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            if (k.length > 0) {
                k[0].style.display = 'none';
            }
        } catch (e) {
            console.error(e);
        }
        setMetadata({});
    }

    const handleFetchNFT = async () => {
        setLoading(true); // Set loading to true when fetching metadata
        if (tokenContract && tokenId !== null) {
            const data = await getmetadata(tokenContract, tokenId);
            const nftvalue = await getNftCollateralValue(Contract, '0xcBF0232a0b8Cb5f0b41a0a9736332223faB338cA', tokenId);
            const maxltv = await getmaxLtv(Contract);
            const borrowingpower = (maxltv * nftvalue) / 1e22;
            setMetadata(data);
            setNFTValue(nftvalue / 1e18);
            setBorrwingPower(borrowingpower);
            setLoading(false); // Set loading to false after metadata is fetched
        }
        else {
            setLoading(false);
            alert("Enter NFT contract Address and Id")
        }
    }

    function getBorrowEpochTime(value) {
        const date = new Date(value.replace(' ', 'T'));
        const epochTime = Math.floor(date.getTime() / 1000);
        setBorrowTime(epochTime);
    }

    const Borrow = async () => {
        setLoading(true);
        setApproving(true);
        const Tx1 = await approveToken(Contract, "0x98490bD0924C2E4B8C2316e03AD04BBaDf69AE27", tokenId);
        const receipt1 = await Tx1.wait();
        if (receipt1.status === 1) {
            console.log("Transaction confirmed with", receipt1);
            setApproving(false);
            const Tx2 = await borrow(Contract, borrowAmount, tokenContract, tokenId, borrowTime);
            const receipt2 = await Tx2.wait();
            if (receipt2.status === 1) {
                console.log("Transaction confirmed with", receipt2);
            }
            else if (receipt2.status === 0) {
                alert("Transfer failed please retry")
            }
            else if (receipt1.status === 0) {
                alert("Approval failed please retry")
            }
            setLoading(false);
        }
    }

    return (
        <>
            <div className="borrow_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media === undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' onChange={(e) => setTokenContract(e.target.value)} />
                    <input type="text" placeholder='Enter token ID' onChange={(e) => setTokenId(e.target.value)} />
                    {(loading ?
                        <button>Loading...</button> :
                        <button className='borrow_bttn_popup' onClick={() => { handleFetchNFT() }}>Fetch NFT</button>
                    )}
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
                                    <span>{NFTValue} ETH</span>
                                    <span>{BorrowingPower} ETH</span>
                                    <span>{metadata.description}</span>
                                </div>
                            </div>
                            <div className="input_borrow">
                                <input type="float" placeholder='Enter Amount in ETH' onChange={(e) => { setBorrowAmount(e.target.value) }} />
                                <input type="datetime-local" defaultValue={'2023-05-30 11:59'} onChange={(e) => { getBorrowEpochTime(e.target.value) }} />
                            </div>
                            {/* {loading ? <button onClick={()=>{Borrow()}}>Lend</button> :
                            <button onClick={()=>{Borrow()}}>Lend</button>
                            } */}
                            {/* // a ? b : (c ? d : e) */}
                        </div>
                    )}
                </div>
                <i className='bi bi-x' onClick={() => hideborrowPopup()}></i>
            </div>
            <div className="lend_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(space)})` }}>
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
                                <span>{totalSupply} ETH</span>
                                <span>{totalBorrow} ETH</span>
                                <span>{LIR} % APY</span>
                            </div>
                        </div>
                        <div className="input_borrow">
                            <input type="float" placeholder='Enter Amount in ETH' onChange={(e) => { setAmount(e.target.value) }} />
                            <input type="datetime-local" defaultValue={'2023-05-30 11:59'} onChange={(e) => { getEpochTime(e.target.value) }} />
                        </div>
                        <button className='lend_bttn_popup' onClick={() => { Lend() }}>Lend</button>
                    </div>
                </div>
                <i className='bi bi-x' onClick={() => hidelendPopup()}></i>
            </div>
            <div className="hide_div"></div>
        </>
    );
}
export default Popup;
