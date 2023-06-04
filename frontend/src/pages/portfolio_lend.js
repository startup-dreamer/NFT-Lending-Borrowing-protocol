import React, {useEffect, useState} from 'react';
import '../static/css/portfolio.css'
import {withdraw_to_pool} from '../backend';

const PortfolioLend = ({Contract, deposit}) => {
    const [loading, setLoading] = useState(false);
    
const withdrawFromPool = async () => {
    setLoading(true);
    const Tx = await withdraw_to_pool(Contract, deposit.Id);
    const receipt = await Tx.wait();
    if (receipt.status === 1) {
        console.log("Transaction confirmed with", receipt);
        setLoading(false);
        window.location.reload();
    }
    else if (receipt.status === 0) {
        setLoading(false);
        alert("Transaction failed please retry");
    }
}

    return (
        <div className='lend_history_card'>
            <div className="lend_history_name">Deposit #{deposit.Id}</div>
            <div className="lend_history_content1">
                <div>Amount <br /><span>{deposit.Amount / 1e18}</span></div>
                <div>Interest <br /><span>{deposit.Interest / 1e18}</span></div>
            </div>
            <div className="lend_history_content2">
                Date <br /><span>{deposit.Date}</span>
                {(loading ? <button>Loading...</button> : <button onClick={()=>{withdrawFromPool()}}>Click Here</button>)}
            </div>
        </div>
    );
}

export default PortfolioLend;
