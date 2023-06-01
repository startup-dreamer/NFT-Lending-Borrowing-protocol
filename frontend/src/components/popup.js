import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ethers} from "ethers"
import '../static/css/popup.css';
import galaxy from '../static/img/galaxy.png';
import space from '../static/img/Lend_main.jpg';
import nftABI from '../backend/Nft-erc721-abi.json';
import {getNftCollateralValue, deposit_to_pool, getmetadata, getmaxLtv, approveToken, borrow} from '../backend';


const Popup = ({ protocolContract, Provider, totalSupply, totalBorrow, LIR, ETHtoUSD}) => {
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
            let hide_div = document.getElementsByClassName('hide_div');
            hide_div[0].style.display = 'none';
            document.body.style.height = 'auto';
            document.body.style.overflowY = 'overlay';
        } catch { }
        setMetadata({});
    }

    const Lend = async () => {
        try {
            if ((Amount && Time !== 0) && Amount <= 0.01) {
                const amount = Amount * 1e18;
                const time = Time;
                const Tx = await deposit_to_pool(protocolContract, time, amount);
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


/**************************************************** BORROW ****************************************************/
    const [metadata, setMetadata] = useState({});
    const [tokenContract, setTokenContract] = useState('');
    const [tokenId, setTokenId] = useState(undefined);
    const [NFTValue, setNFTValue] = useState(undefined);
    const [BorrowingPower, setBorrwingPower] = useState(undefined);
    const [borrowAmount, setBorrowAmount] = useState(0);
    const [borrowTime, setBorrowTime] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [approving, setApproving] = useState(false);

    function hideborrowPopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            if (k.length > 0) {
                k[0].style.display = 'none';
                let hide_div = document.getElementsByClassName('hide_div');
                hide_div[0].style.display = 'none';
                document.body.style.height = 'auto';
                document.body.style.overflowY = 'overlay';
            }
        } catch (e) {
            console.error(e);
        }
        setMetadata({});
    }
    
    const handleFetchNFT = async () => {
        try {
            setFetching(true);
            if (tokenContract && tokenId !== null) {
                const data = await getmetadata(tokenContract, tokenId);
                const nftvalue = await getNftCollateralValue(protocolContract, tokenContract, tokenId);
                const maxltv = await getmaxLtv(protocolContract);
                const borrowingpower = (maxltv * nftvalue) / 1e22;
                setMetadata(data);
                setNFTValue(nftvalue / 1e18);
                setBorrwingPower(borrowingpower);
                setFetching(false);
                console.log(data);
            console.log(maxltv); 
        }
        else {
            setFetching(false);
            alert("Enter NFT contract Address and Id")
        }
    } catch (e) {
        console.log(e);        
    }
}

function getBorrowEpochTime(value) {
    const date = new Date(value.replace(' ', 'T'));
    const epochTime = Math.floor(date.getTime() / 1000);
    setBorrowTime(epochTime);
}

const Borrow = async () => {
    try{
        if ((borrowAmount && borrowTime !== 0) && (borrowAmount <= BorrowingPower)){
            setLoading(true);
            setApproving(true);
            const signer = Provider.getSigner();
            const contract = new ethers.Contract(
                tokenContract,
                nftABI,
                signer
                );
                const Tx1 = await approveToken(contract, "0x481f5ecF06933713bBBF60433fd0cADAD921db3b", tokenId);
                const receipt1 = await Tx1.wait();
                if (receipt1.status === 1) {
                    console.log("Transaction confirmed with", receipt1);
                    setApproving(false);
                    const Tx2 = await borrow(protocolContract, borrowAmount, tokenContract, tokenId, borrowTime);
                    const receipt2 = await Tx2.wait();
                    if (receipt2.status === 1) {
                        setLoading(false);
                        console.log("Transaction confirmed with", receipt2);
                        navigate('/portfolio');
                    }
                    else if (receipt2.status === 0) {
                        alert("Transfer failed please retry");
                        setLoading(false);
                    }
                }
                else if (receipt1.status === 0) {
                    setApproving(false);
                    alert("Approval failed please retry")
                }
            }
            else {
                alert(`Enter Amount and Time correctly, Amount should br less than ${BorrowingPower}`, BorrowingPower);
            }
        } 
        catch (e) {
            console.error(e);
        }
    }
    // closing popup by esc key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            try {
                let k1 = document.getElementsByClassName('borrow_popup');
                let k2 = document.getElementsByClassName('lend_popup');
                k1[0].style.display = 'none';
                k2[0].style.display = 'none';
                let hide_div = document.getElementsByClassName('hide_div');
                hide_div[0].style.display = 'none';
                document.body.style.height = 'auto';
                document.body.style.overflowY = 'overlay';
            } catch (e) {
                console.error(e);
            }
        }
    });
    
    return (
        <>
            <div className="borrow_popup">
                <div className="left_popup" style={{ 'backgroundImage': `url(${(metadata.media === undefined ? galaxy : metadata.media[0].gateway)})` }}>
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' onChange={(e) => setTokenContract(e.target.value)} />
                    <input type="text" placeholder='Enter token ID' onChange={(e) => setTokenId(e.target.value)} />
                    {(fetching ?
                        <button className='borrow_bttn_popup'>Loading...</button> :
                        <button className='borrow_bttn_popup' onClick={() => {handleFetchNFT()}}>Fetch NFT</button>
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
                                    <span>{NFTValue} ETH <small>({(NFTValue * ETHtoUSD).toFixed(3)} USD)</small></span>
                                    <span>{BorrowingPower} ETH <small>({(BorrowingPower * ETHtoUSD).toFixed(3)} USD)</small></span>
                                    <span>{metadata.description}</span>
                                </div>
                            </div>
                            <div className="input_borrow">
                                <input type="float" placeholder='Enter Amount in ETH' onChange={(e) => {setBorrowAmount(e.target.value)}} />
                                <input type="datetime-local" onChange={(e) => {getBorrowEpochTime(e.target.value)}} />
                            </div>
                            <button onClick={()=>{Borrow()}}>{loading ? (approving ? 'Approving...' : 'Transfering...') : 'Borrow'}</button>
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
                                <sub></sub>
                                <span>Total Borrow</span>
                                <sub></sub>
                                <span>Lending Interest Rate</span>
                            </div>
                            <div className="right_info_popup">
                                <span>{totalSupply} ETH <small>({(totalSupply * ETHtoUSD).toFixed(2)} USD)</small></span>
                                <span>{totalBorrow} ETH <small>({(totalBorrow * ETHtoUSD).toFixed(2)} USD)</small></span>
                                <sub style={{'fontSize':'15px', 'marginLeft': '5px', 'marginTop': '-5px'}}>$ {totalBorrow * ETHtoUSD}</sub>
                                <span>{LIR} % APY</span>
                            </div>
                        </div>
                        <div className="input_borrow">
                            <input type="float" placeholder='Enter Amount in ETH' onChange={(e) => { setAmount(e.target.value) }} />
                            <input type="datetime-local" onChange={(e) => { getEpochTime(e.target.value) }} />
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
