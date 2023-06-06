import React, { useState } from 'react';
import '../static/css/content.css';
import { withdrawLiquidateNFT } from '../backend';

const Card = ({ Contract, liquidatedNFT }) => {
  const [loading, setLoading] = useState(false);

  const buyNFT = async () => {
    try {
      const Tx = await withdrawLiquidateNFT(Contract, liquidatedNFT.Borrower, liquidatedNFT.TokenId);
      const receipt = await Tx.wait();
      if (receipt.status === 1) {
        console.log("Transaction confirmed with", receipt);
        setLoading(false);
        window.location.reload();
      } else if (receipt.status === 0) {
        setLoading(false);
        alert("Transaction failed, please retry");
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }
  };

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
          {loading ? (
            <button>Loading...</button>
          ) : (
            <button onClick={() => { buyNFT() }}>Buy</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
