import React from 'react';
import "../static/css/content.css";
import Card from './card';
import ether_big from '../static/img/ether_big.png'
import Popup from './popup';

const Content = ({Contract}) => {

    function borrowPopup(){
        try{
        let k = document.getElementsByClassName('borrow_popup');
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
                    <input className='bttn_holder_1' type='button' value={'Lend'} />
                    <input className='bttn_holder_2' type='button' value={'Borrow'}  onClick={borrowPopup} />
                </div>
            </div>
            <div className="img_contn">
                <img src={ether_big} alt="" />
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
            <Popup/>
        </div>
    );
}

export default Content;
