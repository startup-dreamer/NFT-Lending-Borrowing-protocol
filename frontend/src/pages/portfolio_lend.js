import React, { useState } from 'react';
import '../static/css/portfolio.css';
import { withdraw_to_pool } from '../backend';

const PortfolioLend = ({ Contract, deposit }) => {
  const [loading, setLoading] = useState(false);

  const withdrawFromPool = async () => {
    setLoading(true);
    try {
      const Tx = await withdraw_to_pool(Contract, deposit.Id);
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
      console.error("Withdrawal failed:", error);
    }
  };

  return (
    <div className='lend_history_card'>
      <div className="lend_history_name">Deposit #{deposit.Id}</div>
      <div className="lend_history_content1">
        <div>Amount <br /><span>{deposit.Amount} ETH <small>({(deposit.Amount * deposit.EthToUsd).toFixed(2)} USD)</small></span></div>
        <div>Interest <br /><span>{deposit.Interest} ETH <small>({(deposit.Interest * deposit.EthToUsd).toFixed(2)} USD)</small></span></div>
      </div>
      <div className="lend_history_content2">
        Date <br /><span>{deposit.Date}</span>
      </div>
      {loading ? (
        <button className='portfolio_lend_bttn'>Loading...</button>
      ) : (
        <button className='portfolio_lend_bttn' onClick={() => { withdrawFromPool() }}>Withdraw</button>
      )}
    </div>
  );
}

export default PortfolioLend;

