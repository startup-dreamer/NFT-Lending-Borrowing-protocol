import React from 'react';
import "../static/css/content.css";
import "../static/css/content_card.css";
import Card from './card';
import ether_big from '../static/img/ether_big.png'
import Popup from './popup';

const Content = ({ Contract }) => {

    function borrowPopup() {
        try {
            let k = document.getElementsByClassName('borrow_popup');
            k[0].style.display = 'flex';
        } catch { }
    }
    function lendPopup() {
        try {
            let k = document.getElementsByClassName('lend_popup');
            k[0].style.display = 'flex';
        } catch { }
    }

    function listLeft() {
        try {
            let a = document.getElementsByClassName('list_holder')[0];
            a.scroll({
                left: (a.scrollLeft-850),
                behavior:'smooth'
            })
        } catch { }
    }

    function listRight() {
        try {
            let a = document.getElementsByClassName('list_holder')[0];
            a.scroll({
                left: (a.scrollLeft+850),
                behavior:'smooth'
            })
        } catch { }
    }

    return (
        <div className="content_holder">
            <div className="contn">
                NFT's Lending <br /> Borrowing Platform
                <div>Unlock the future of digital ownership and join the <br /> revolution with our cutting-edge our platform</div>
                <div className="bttn_holder">
                    <input className='bttn_holder_1' type='button' value={'Lend'} onClick={lendPopup} />
                    <input className='bttn_holder_2' type='button' value={'Borrow'} onClick={borrowPopup} />
                </div>
            </div>
            <div className="img_contn">
                <img src={ether_big} alt="" />
            </div>

            <div className="nft_stats">
                <div className="left_stats">
                    <div className="left_stats_one">
                        NFT
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
                        {/* Tere ko yaha se apna content add karna hai */}
                        <div className="total_stats_card">
                            <div>Total Supply<br /><span>$8000</span></div>
                            <div>Total Borrow<br /><span>$8000</span></div>
                        </div>
                        <div className="interest_rates_card">
                            <div className="left_card_interest">
                                <div>Lending Interest rate</div>
                                <div>Borrow Interest rate</div>
                            </div>
                            <div className="right_card_interest">
                                <div>11%</div>
                                <div>8%</div>
                            </div>
                        </div>
                        <div className="details_card">
                            <div className="details_card_left">
                                <div>Utilization</div>
                                <div>Liquidated NFTs</div>
                                <div>Total Deposited NFTs</div>
                            </div>
                            <div className="details_card_right">
                                <div>$1457</div>
                                <div>$34567</div>
                                <div>$56789</div>
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
                <i className="bi bi-chevron-left" onClick={listLeft}></i>
                <i className="bi bi-chevron-right" onClick={listRight}></i>
                <div className="list_holder">
                    <div className="list_card_container">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>


            {/* Popup divs */}
            <Popup />
        </div>
    );
}

export default Content;
