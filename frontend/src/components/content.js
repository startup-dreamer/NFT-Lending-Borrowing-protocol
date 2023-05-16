import React from 'react';
import "../static/css/content.css";
import im from "../static/img/main-remove.jpg"
import Card from './card';

const Content = () => {
    return (
        <div className="content_holder">
            <div className="contn">
                NFT's <br />
                Lending Borrowing Platform
                <div>To explore, purchase and sale</div>
                <div className="bttn_holder">
                    <input className='bttn_holder_2' type='button' value={'Lend'} />
                    <input className='bttn_holder_2' type='button' value={'Borrow'} />
                </div>
            </div>
            {/* <div className="img_contn">
            </div> */}

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
        </div>
    );
}

export default Content;
