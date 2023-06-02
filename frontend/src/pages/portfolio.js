import React, {useState, useEffect} from 'react';
import {call, getDepositId, getLoanId, getDeposits, getLoans, repay, withdraw_to_pool } from '../backend';
import '../App.css';
import '../static/css/portfolio.css'
import PortfolioLend from './portfolio_lend';
import PortfolioBorrow from './portfolio_borrow';

const Portfolio = ({Contract, Provider}) => {
    const [account, setAccount] = useState('0x');
    const [loading, setLoading] = useState(false);
    const [deposits, setDeposits] = useState([{
        Amount: "-", 
        Currency: "-", 
        Date: "-"
      }]);
    const [loans, setLoans] = useState([{
        Borrower: "-", 
        TokenContract: "-", 
        TokenId: "-", 
        Amount: "-", 
        CollateralValue: "-", 
        Interest: "-", 
        Time: "-", 
        Active: "-"
    }])

    useEffect(() => {
        if (Provider !== null) {
        const accountChange = async () => {
            window.ethereum.on('accountChanged', (a) => {
                setAccount(a);
                console.log(a);
                
                window.location.reload()
            });         
        }
        accountChange();
    }
    });

useEffect(() => {
    if (Provider !== null) {
    const setAccount = async () => {
        const accounts = await Provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]); 
        window.ethereum.on('accountChanged', (a) => {
            setAccount(a);
            window.location.reload()
        });         
    }
    setAccount();
}
},[Provider, Contract])

useEffect(() => {
    if (Provider !== null && account !== "0x") {
    const setAccounts = async () => {
        setLoading(true);
        const depositId = await getDepositId(Contract, account);
        const deposits = [];
        for(let i = 0; i < depositId; i++) {
            const deposit = await getDeposits(Contract, account, i);
            deposits.push(deposit);
        }
        setDeposits(deposits);
        
        const loanId = await getLoanId(Contract, account);
        const loans = [];
        for(let i = 0; i < loanId; i++) {
            const loan = await getLoans(Contract, account, i);
            loans.push(loan);
        }
        setLoans(loans);
        setLoading(false);        
    }
    setAccounts();     
}
},[account])
  
const Repay = async (Contract, loanId) => {
    setLoading(true);
    const Tx = await repay(Contract, loanId);
    const receipt = await Tx.wait();
    if (receipt.status === 1) {
        console.log("Transaction confirmed with", receipt);
        setLoading(false);
    }
    else if (receipt.status === 0) {
        setLoading(false);
        alert("Transaction failed please retry");
    }
}

const withdrawFromPool = async (Contract, depositId) => {
    setLoading(true);
    const Tx = await withdraw_to_pool(Contract, depositId);
    const receipt = await Tx.wait();
    if (receipt.status === 1) {
        console.log("Transaction confirmed with", receipt);
        setLoading(false);
    }
    else if (receipt.status === 0) {
        setLoading(false);
        alert("Transaction failed please retry");
    }
}

call();
    return (
        <div className='portfolio_main'>
            <div className="user_portfolio_section">
                <div className="user_section_head">
                    User Portfolio
                </div>

                <br />

                <div className="user_content">
                    <div className="left_content">
                        <img src="" alt="" />
                    </div>
                    <div className="right_content">
                        <div className="right_content1">
                            <div>ChainID <br /><span>Dut_deox</span></div>
                            <div>Total Amount <br /><span>$5000</span></div>
                        </div>
                        
                        <br />

                        <div className="right_content2">
                            Address <br /><span>Kgstsbu$%6t2762y##6bdjbskjbk</span>
                        </div>
                    </div>
                </div>
            </div>

            <br /> <br />

            <div className="lend_history">
                <div className="lend_history_head">Lend Transactions History</div>
                <div className="lend_history_card_holder">
                        <PortfolioLend/>
                </div>
            </div>

            <br />

            <div className="borrow_history">
                <div className="borrow_history_head">Borrow Transactions History</div>
                <div className="borrow_history_card_holder">
                        <PortfolioBorrow/>
                </div>
            </div>
        </div>
    );
}

export {Portfolio};
