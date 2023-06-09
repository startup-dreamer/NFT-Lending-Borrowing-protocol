import { React, useState, useEffect, useRef } from 'react';
import {motion} from "framer-motion";
import Card from './card';
import Popup from './popup';
import ether_big from '../static/img/ether_big.png';
import {
    getLiquidatedNFTs, 
    getBorrow_interestRate, 
    getTotalBorrow, getTotalSupply, 
    getLending_interestRate, 
    getTotalDepositedNFTs, 
    get_ETHtoUSD_Price, 
    getmaxLtv 
} from '../backend'
import "../static/css/content_card.css";
import "../static/css/content.css";

const Content = ({ Contract, Provider }) => {
    const nftStatsRef = useRef(null);
    const [nftStatsVisible, setNftStatsVisible] = useState("hidden");
    const [liquidatedLoans, setLiquidatedLoans] = useState([{
        TokenContract: "-",
        Borrower: "-",
        TokenId: "-",
        CollateralValue: "0",
        imageURL: "https://cdn.pixabay.com/photo/2018/06/02/14/36/blockchain-3448502_1280.jpg",
        nftName: "NFT Name",
        nftDescription: "NFT Description",
    }]);
    const [data, setData] = useState({
        totalSupply: 0,
        totalBorrow: 0,
        LIR: "-",
        BIR: "-",
        liquidatedNFTs: "-",
        toalDepositedNFTs: "-",
        maxLtV: 0,
        utilization: "-",
        ethTousd: 0
    });

    const nftStatsVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };


    useEffect(() => {
        const ref = nftStatsRef.current;
        if (ref) {
            const onScroll = () => {
                const { offsetTop, offsetHeight } = ref;
                const halfHeight = offsetHeight * 0.8;
                const isVisible =
                    window.scrollY > offsetTop - halfHeight &&
                    window.scrollY < offsetTop + halfHeight;
                setNftStatsVisible(isVisible ? "visible" : "hidden");
            };
            window.addEventListener("scroll", onScroll);
            return () => window.removeEventListener("scroll", onScroll);
        }
    }, []);

    useEffect(() => {
        if (Contract !== null) {
            const fetchData = async () => {
                const totalsupply = await getTotalSupply(Contract);
                const totalborrow = await getTotalBorrow(Contract);
                const lendinginterestrate = await getLending_interestRate(Contract);
                const borrowinginterestrate = await getBorrow_interestRate(Contract);
                const totaldepositednfts = await getTotalDepositedNFTs(Contract);
                const maxLtV = await getmaxLtv(Contract);
                const utilization = totalborrow / totalsupply * 100;
                const liquidatedNFTs = await getLiquidatedNFTs(Contract);
                const totalliquidatednfts = liquidatedNFTs === undefined ? 0 : liquidatedNFTs.length;
                const ethTousd = await get_ETHtoUSD_Price(Contract);

                if(liquidatedNFTs){
                    console.log(liquidatedNFTs);
                    setLiquidatedLoans(liquidatedNFTs);
                }

                setData({
                    totalSupply: totalsupply / 1e18,
                    totalBorrow: totalborrow / 1e18,
                    LIR: lendinginterestrate / 100,
                    BIR: borrowinginterestrate / 100,
                    liquidatedNFTs: totalliquidatednfts,
                    toalDepositedNFTs: totaldepositednfts,
                    maxLtV: maxLtV / 1e2,
                    utilization: utilization,
                    ethTousd: ethTousd / 1e8
                });
            }
            fetchData();
        }
    }, [Contract])

    function borrowPopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            k[0].style.display = 'flex';
            let hide_div = document.getElementsByClassName('hide_div');
            hide_div[0].style.display = 'block';
            window.scrollTo(0,0);
            document.body.style.height = '100%';
            document.body.style.overflowY = 'hidden';
        } catch { }
    }

    function lendPopup() {
        try {
            let k = document.getElementsByClassName('lend_popup');
            k[0].style.display = 'flex';
            let hide_div = document.getElementsByClassName('hide_div');
            hide_div[0].style.display = 'block';
            window.scrollTo(0,0);
            document.body.style.height = '100%';
            document.body.style.overflowY = 'hidden';
        } catch { }
    }

    function listLeft() {
        try {
            let a = document.getElementsByClassName('list_holder')[0];
            a.scroll({
                left: (a.scrollLeft - 850),
                behavior: 'smooth'
            })
        } catch { }
    }

    function listRight() {
        try {
            let a = document.getElementsByClassName('list_holder')[0];
            a.scroll({
                left: (a.scrollLeft + 850),
                behavior: 'smooth'
            })
        } catch { }
    }

    return (
        <div className="content_holder">
            <div className="contn">
                NFT Lending <br /> Borrowing Platform
                <div>Unlock the Value of Your NFTs with Seamless Lending and Borrowing.</div>
                <div className="bttn_holder">
                    <input className='bttn_holder_1' type='button' value={'Lend'} onClick={lendPopup} />
                    <input className='bttn_holder_2' type='button' value={'Borrow'} onClick={borrowPopup} />
                </div>
            </div>
            <div className="img_contn">
                <img src={ether_big} alt="" />
            </div>

            <motion.div
                className="nft_stats"
                ref={nftStatsRef}
                initial={nftStatsVariants.hidden}
                animate={nftStatsVariants[nftStatsVisible]}
                transition={{ duration: 0.4 }}
            >
                <div className="left_stats">
                    <div className="left_stats_one">
                        Protocol's
                    </div>
                    <div className="left_stats_two">
                        Statistics
                    </div>
                    <br />
                    <div className="left_stats_three">
                        To ensure you stay informed and don't miss any <br /> important updates.
                    </div>
                </div>
                <div className="right_stats" style={{ 'color': 'white' }}>
                    <div className="right_stats_card">
                        <div className="total_stats_card" style={{ 'display': 'flex', 'columnGap': '50px' }}>
                            <div>Total Supply<br /><span>{(data.totalSupply)} ETH <small> <br />({(data.totalSupply * data.ethTousd).toFixed(2)} USD)</small></span></div>
                            <div>Total Borrow<br /><span>{(data.totalBorrow)} ETH <small> <br />({(data.totalBorrow * data.ethTousd).toFixed(2)} USD)</small></span></div>
                        </div>
                        <div className="interest_rates_card">
                            <div className="left_card_interest">
                                <div>Lending Interest rate</div>
                                <div>Borrow Interest rate</div>
                            </div>
                            <div className="right_card_interest">
                                <div>{data.LIR} % APY</div>
                                <div>{data.BIR} % APY</div>
                            </div>
                        </div>
                        <div className="details_card">
                            <div className="details_card_left">
                                <div>Utilization</div>
                                <div>Liquidated NFTs</div>
                                <div>Total Deposited NFTs</div>
                                <div>Loan To Value Ratio</div>
                            </div>
                            <div className="details_interest">
                                <div>{(data.utilization.toString()).substring(0,6)} %</div>
                                <div>{data.liquidatedNFTs}</div>
                                <div>{data.toalDepositedNFTs}</div>
                                <div>{data.maxLtV} %</div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* List */}
            <div className="card_list">
                <div className="heading_cards">
                    NFTs Auction
                </div>
                <i className="bi bi-chevron-left" onClick={listLeft}></i>
                <i className="bi bi-chevron-right" onClick={listRight}></i>
                <div className="list_holder">
                    <div className="list_card_container">{
                        (liquidatedLoans.map((liquidatedLoan, key) => {
                            return (<Card Contract={Contract} liquidatedNFT={liquidatedLoan} key={key} />)
                        }))
                    }
                    </div>
                </div>
            </div>
            {/* Popup divs */}
            <div>
                <Popup protocolContract={Contract} Provider={Provider} totalSupply={data.totalSupply} totalBorrow={data.totalBorrow} LIR={data.LIR} ETHtoUSD={data.ethTousd} />
            </div>
        </div>
      );
      
}

export default Content;
