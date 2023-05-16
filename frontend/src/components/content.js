import React from 'react';
import "../static/css/content.css";
import im from "../static/img/main-remove.jpg"
import Card from './card';

const Content = () => {
    return (
        <div className="content_holder">
            <div className="contn">
                NFT's <br />
                Biggest Marketplace
                <div>To explore, purchase and sale</div>
                <div className="bttn_holder">
                    <input className='bttn_holder_1' type='button' value={'Explore'} />
                    <input className='bttn_holder_2' type='button' value={'Connect'} />
                </div>
            </div>
            {/* <div className="img_contn">
            </div> */}

            {/* List */}
            <div className="card_list">
                <div className="heading_cards">
                    Cards List
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
