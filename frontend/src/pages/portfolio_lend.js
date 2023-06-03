import React, {useEffect, useState} from 'react';
import '../static/css/portfolio.css'
// import { getDepositId, getDeposits, withdraw_to_pool } from '../backend';

const PortfolioLend = (Contract, account, Provider) => {
//     const [loading, setLoading] = useState(false);
//     const [deposits, setDeposits] = useState([{
//         Id: "-",
//         Amount: "-", 
//         Interest: "-", 
//         Date: "-"
//       }]);

//     useEffect(()=>{
//         const setdeposits = async () =>{
//             if (Provider !== null && account !== "0x") {
//                 setLoading(true);
//                 const depositId = await getDepositId(Contract, account);                
//                 const deposits = [];
//                 for(let i = 0; i < depositId; i++) {
//                     const deposit = await getDeposits(Contract, account, i);
//                     deposits.push({
//                         Id: i,
//                         Amount: deposit.Amount, 
//                         Interest: deposit.Interest ,
//                         Date: deposit.Date});
//                 }
//                 setDeposits(deposits);
//                 console.log(deposits);
//             }
//         }
//         setdeposits()
//         console.log(deposits);
        

//     },[Contract, Provider, account])
    
    
// const withdrawFromPool = async (Contract, depositId) => {
//     setLoading(true);
//     const Tx = await withdraw_to_pool(Contract, depositId);
//     const receipt = await Tx.wait();
//     if (receipt.status === 1) {
//         console.log("Transaction confirmed with", receipt);
//         setLoading(false);
//     }
//     else if (receipt.status === 0) {
//         setLoading(false);
//         alert("Transaction failed please retry");
//     }
// }
    return (
        <div className='lend_history_card'>
            <div className="lend_history_name">TranstionX</div>
            <div className="lend_history_content1">
                <div>Amount <br /><span>$9000</span></div>
                <div>Interest <br /><span>12%</span></div>
            </div>
            <div className="lend_history_content2">
                Date <br /><span>24 - 05 - 2023</span>
            </div>
        </div>
    );
}

export default PortfolioLend;
