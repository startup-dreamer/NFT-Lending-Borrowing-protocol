import {React, useState, useEffect} from 'react';
import "../static/css/content.css";
import Card from './card';
import ether_big from '../static/img/ether_big.png';
import {getBorrow_interestRate, getTotalBorrow, getTotalSupply, getLending_interestRate, getTotalDepositedNFTs, getTotalLiquidatedNFTs} from '../backend'
import Popup from './popup';

const Content = ({Contract}) => {
    const [data, setData] = useState({
                                totalSupply: null,
                                totalBorrow: null,
                                LIR: null,
                                BIR: null,
                                liquidatedNFTs: null,
                                toalDepositedNFTs: null,
                                uttilization: null
                            });


useEffect( () => {
        const fetchData = async () => {
            // const totalsupply = await getTotalSupply(Contract);
            // const totalborrow = await getTotalBorrow(Contract);
            // const lendinginterestrate = await getLending_interestRate(Contract);
            // const borrowinginterestrate = await getBorrow_interestRate(Contract);
            // const totaldepositednfts = await getTotalDepositedNFTs(Contract);
            // const totalliquidatednfts = await getTotalLiquidatedNFTs(Contract);
            // setData({
            //     totalSupply: totalsupply,
            //     totalBorrow: totalborrow,
            //     LIR: lendinginterestrate,
            //     BIR: borrowinginterestrate,
            //     liquidatedNFTs: totalliquidatednfts,
            //     toalDepositedNFTs: totaldepositednfts,
            //     uttilization: (totalsupply/totalborrow) * 100

            // });
            setData({
                totalSupply: 0,
                totalBorrow: 10,
                LIR: 5,
                BIR: 6,
                liquidatedNFTs: 4,
                toalDepositedNFTs: 8,
                uttilization: (9/2) * 100
            })
        };
        fetchData();
}, )

    function borrowPopup(){
        try{
        let k = document.getElementsByClassName('borrow_popup');
        console.log(k);
        k[0].style.display = 'flex';
        } catch{}
    }

    function lendPopup(){
        try{
        let k = document.getElementsByClassName('lend_popup');
        console.log(k);
        k[0].style.display = 'flex';

        } catch{}
    }

    return (
        <div className="content_holder">
            <div className="contn">
                NFT's Lending <br /> Borrowing Platform
                <div>Unlock the future of digital ownership and join the <br /> revolution with our cutting-edge our platform</div>
                <div className="bttn_holder">
                    <input className='bttn_holder_1' type='button' value={'Lend'} onClick={lendPopup} />
                    <input className='bttn_holder_2' type='button' value={'Borrow'}  onClick={borrowPopup} />
                </div>
            </div>
            <div className="img_contn">
                <img src={ether_big} alt="" />
            </div>

            <div className="nft_stats">
                <div className="left_stats">

                </div>
                <div className="right_stats" style={{'color':'white'}}>
                    <br />
                    <br /> <br />
                    <div className="right_stats_card">
                        {/* Tere ko yaha se apna content add karna hai */}
                        <div className="total_stats_card" style={{'display':'flex', 'columnGap':'28px'}}>
                            <div>Total Supply<br /><span>{data.totalSupply}</span></div>
                            <div>Total Borrow<br /><span>{data.totalBorrow}</span></div>
                        </div>
                        <br />
                        <div className="interest_rates_card" style={{'display':'flex', 'columnGap':'28px'}}>
                            <div className="left_card_interest">
                                <div>Lending Interest rate</div>
                                <div>Borrow Interest rate</div>
                            </div>
                            <div className="right_card_interest">
                                <div>{data.LIR}</div>
                                <div>{data.BIR}</div>
                            </div>
                        </div>
                            <br />
                        <div className="details_card" style={{'display':'flex', 'columnGap':'28px'}}>
                            <div className="details_interest">
                                <div>Utilization</div>
                                <div>Liquidated NFTs</div>
                                <div>Total Deposited NFTs</div>
                            </div>
                            <div className="details_interest">
                                <div>{data.uttilization}</div>
                                <div>{data.liquidatedNFTs}</div>
                                <div>{data.toalDepositedNFTs} %</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* List */}
            <div className="card_list">
                <div className="heading_cards">
                    NFTs Auction
                </div>
                <div className="list_holder">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>


            {/* Popup divs */}
            <Popup Contract={Contract} totalSupply={data.totalSupply} totalBorrow={data.totalBorrow} lendingInterestRate={data.LIR}/>
        </div>
    );
}

export default Content;
