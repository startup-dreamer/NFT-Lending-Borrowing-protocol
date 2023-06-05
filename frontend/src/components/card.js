import React from 'react';
import '../static/css/content.css'

const Card = ({Contract, liquidatedNFT}) => {

    const buyNFT = async () => {

    }
    return (
        <div className='card_main'>
            <div className="img_holder_card">
                <img src={liquidatedNFT.imageURL} />
            </div>
            <div className="card_text">
                <div className="card_name">{liquidatedNFT.nftName}</div>
                <div className="card_description">
                    {liquidatedNFT.nftDescription}
                </div>
                <div className="price_holder">
                    <div className="price_card">{liquidatedNFT.CollateralValue} ETH </div>
                    <button onClick={()=>{buyNFT()}}>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
