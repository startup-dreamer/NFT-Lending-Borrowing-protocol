import React from 'react';
import '../static/css/content.css'

const Card = () => {
    return (
        <div className='card_main'>
            {/* Yaha image ayegi */}
            <img src="https://img.freepik.com/premium-vector/nft-nonfungible-token-illustration-with-red-blue-glowing-lights-dark-blue-background_92863-809.jpg" alt="" />
            <div className="card_text">
                <div className="card_name">{'Yaha Crypto ka name ayega'}</div>
                <div className="card_description">{'Yaha Crypto ki description'}</div>
                <div className="price_holder" style={{'display':'flex'}}>
                    <div className="price_card">{'Yaha price ayega nft ka'}</div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
