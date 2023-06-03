import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {getDepositId, getLoanId, getDeposits, getLoans, repay, withdraw_to_pool } from '../backend';
import '../App.css';
import '../static/css/portfolio.css'
import PortfolioLend from './portfolio_lend';
import PortfolioBorrow from './portfolio_borrow';

const Portfolio = ({Contract, Provider}) => {
    const location = useLocation();
    const [account, setAccount] = useState('0x');
    const [loading, setLoading] = useState(false);
    const [deposits, setDeposits] = useState([{
        Id: "-",
        Amount: "-", 
        Interest: "-", 
        Date: "-"
      }]);
    const [loans, setLoans] = useState([{
        Id: "-",
        Borrower: "-", 
        TokenContract: "-", 
        TokenId: "-", 
        Amount: "-", 
        CollateralValue: "-", 
        Interest: "-", 
        Time: "-", 
        Active: "-"
    }]);
  
    useEffect(() => {
      async function init() {
        if (window.ethereum) {
          await window.ethereum.send('eth_requestAccounts');
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setAccount(accounts[0]);
            console.log(account);
        }
      }
      init();
    }, [location.pathname]);
    // console.log(location.pathname);
  
    useEffect(() => {
        const setAccounts = async () => {
            if (Provider !== null && account !== "0x") {
                setLoading(true);
                const depositId = await getDepositId(Contract, account);                
                const deposits = [];
                for(let i = 0; i < depositId; i++) {
                    const deposit = await getDeposits(Contract, account, i);
                    deposits.push({
                        Id: i,
                        Amount: deposit.Amount, 
                        Interest: deposit.Interest ,
                        Date: deposit.Date});
                }
                setDeposits(deposits);
                // console.log(deposits);
                  
                const loanId = await getLoanId(Contract, account);
                const loans = [];
                for(let i = 0; i < loanId; i++) {
                    const loan = await getLoans(Contract, account, i);
                    loans.push({
                                Id: i,
                                Borrower: loan.Borrower, 
                                TokenContract: loan.TokenContract, 
                                TokenId: loan.TokenId, 
                                Amount: loan.Amount, 
                                CollateralValue: loan.CollateralValue, 
                                Interest: loan.Interest, 
                                Time: loan.Time, 
                                Acti: loan.Active
                    });
                }
                setLoans(loans);                
                // console.log(loans);
                setLoading(false);
            }
        };
        setAccounts();
    },[Provider, Contract, account])  

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
                        <PortfolioLend Contract={Contract} account={account} Provider={Provider}/>
                </div>
            </div>

            <br />

            <div className="borrow_history">
                <div className="borrow_history_head">Borrow Transactions History</div>
                <div className="borrow_history_card_holder">
                    return <PortfolioBorrow Contract={Contract} account={account} Provider={Provider}/>   
                </div>
            </div>
        </div>
    );
}

export {Portfolio};
