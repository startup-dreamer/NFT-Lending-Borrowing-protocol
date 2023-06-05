import React, { useState } from 'react';
import { repay } from '../backend';
import '../static/css/portfolio.css';

const PortfolioBorrow = ({ Contract, loan }) => {
  const [loading, setLoading] = useState(false);

  const Repay = async () => {
    try {
      setLoading(true);
      const amount = loan.Amount + loan.Interest;

      const Tx = await repay(Contract, loan.Id, amount);
      const receipt = await Tx.wait();
      if (receipt.status === 1) {
        console.log("Transaction confirmed with", receipt);
        setLoading(false);
        window.location.reload();
      } else if (receipt.status === 0) {
        setLoading(false);
        alert("Transaction failed please retry");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div className='borrow_history_main_card'>
      <div className="left_borrow_card_history">
        <img src={loan.ImageURL} alt="" />
      </div>
      <div className="right_borrow_card_history">
        <div className="right_borrow_card_history1">
          <div className="borrow_card_name">{loan.NFTName}</div>
          <div className="date_borrow_card">{loan.Time}</div>
        </div>
        <div className="right_borrow_card_history2">
          <div>Token Contract <br /><div className='borrow_small'>{loan.TokenContract}</div></div>
          <div>TokenID<br /><div className='borrow_small'>{loan.TokenId}</div></div>
        </div>
        <div className="right_borrow_card_history3">
          <div>Value<br /><span>{loan.CollateralValue} ETH <small>({(loan.CollateralValue * loan.EthToUsd).toFixed(2)} USD)</small></span></div>
          <div>Description<br /><span>{loan.NFTDescription}</span></div>
        </div>
        {loading ? (
          <button className='portfolio_borrow_bttn'>Loading...</button>
        ) : (
          <button className='portfolio_borrow_bttn' onClick={() => { Repay() }}>Withdraw</button>
        )}
      </div>
    </div>
  );
}

export default PortfolioBorrow;
