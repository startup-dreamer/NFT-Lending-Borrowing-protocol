import React, {useState} from 'react';
import { repay } from '../backend';
import '../static/css/portfolio.css'

const PortfolioBorrow = ({Contract, loan}) => {
    const [loading, setLoading] = useState(false);

const Repay = async () => {
    try{
    setLoading(true);
    const amount = loan.Amount + loan.Interest
    console.log(amount);
    
    const Tx = await repay(Contract, loan.Id, amount);
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
catch (error) {
    console.error(error);
}
}

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
                    <div>Token Contract <br /><span>{loan.TokenContract}</span></div>
                    <div>TokenID<br /><span>{loan.TokenId}</span></div>
                </div>
                <div className="right_borrow_card_history3">
                    <div>Value<br /><span>{loan.CollateralValue}</span></div>
                    <div>Description<br /><span>{loan.NFTDescription}</span></div>
                    {(loading ? <button>Loading...</button> : <button onClick={()=>{Repay()}}>Click Here</button>)}
                </div>
            </div>
        </div>
    );
}

export default PortfolioBorrow;
