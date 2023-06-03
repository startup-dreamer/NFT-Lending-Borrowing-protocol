import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {getDepositId, getLoanId, getDeposits, getLoans, repay, withdraw_to_pool, getmetadata } from '../backend';
import '../App.css';
import '../static/css/portfolio.css'
import PortfolioLend from './portfolio_lend';
import PortfolioBorrow from './portfolio_borrow';

const Portfolio = ({Contract, Provider, Connected}) => {
    const location = useLocation();
    const [account, setAccount] = useState('0x');
    const [loading, setLoading] = useState(false);
    const [deposits, setDeposits] = useState([{
        Id: "-",
        Amount: "-", 
        Interest: "-", 
        Date: "-"
      }]);
      {/*yahan par default url likh dena*/}
    const [loans, setLoans] = useState([{
        Id: "-",
        Borrower: "-", 
        TokenContract: "-", 
        TokenId:"-",  
        CollateralValue: "-", 
        Interest: "-", 
        Time: "-", 
        Active: "-",
        ImageURL: "default url",
        NFTName: "NFT Name",
        NFTDescription: "Description"
    }]);
    
    const [userData, setUserData] = useState({
    Chain: "-",
    WalletBalance: "-",
    Address: "-"
})
  
    useEffect(() => {
      async function init() {
        if (window.ethereum && Provider !== null && Connected !== false) {
          await window.ethereum.send('eth_requestAccounts');
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setAccount(accounts[0]);
          const { chainId } = await Provider.getNetwork()
          const chainName = ({
            1: 'Mainnet',
            3: 'Ropsten',
            4: 'Rinkeby',
            5: 'Goerli',
            42: 'Kovan',
            11155111: 'Sepolia',
            80001: 'Mumbai Polygon'
          })[chainId] || `chainId ${chainId}`;
          const signer = await Provider.getSigner();
          const balance = await signer.getBalance();
          const Balance = (parseInt(balance._hex) / 1e18).toFixed(3);
          setUserData({
            Chain: chainName,
            WalletBalance: Balance,
            Address: accounts[0]
          })
          
        }
      }
      init();
    }, [account, Connected]);
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
                        Date: deposit.Date
                    });
                }
                setDeposits(deposits);
                console.log(deposits);
                  
                const loanId = await getLoanId(Contract, account);
                const loans = [];
                for(let i = 0; i < loanId; i++) {
                    const loan = await getLoans(Contract, account, i);
                    const NFTData = await getmetadata(loan.TokenContract, loan.TokenId);
                    loans.push({
                                Id: i,
                                Borrower: loan.Borrower, 
                                TokenContract: loan.TokenContract, 
                                TokenId: loan.TokenId,  
                                CollateralValue: loan.CollateralValue, 
                                Interest: loan.Interest, 
                                Time: loan.Time, 
                                Active: loan.Active,
                                ImageURL: NFTData.media[0].gateway,
                                NFTName: NFTData.contract.name,
                                NFTDescription: NFTData.description
                    });
                }
                setLoans(loans);                
                console.log(loans);
                setLoading(false);
            }
        };
        setAccounts();
    },[Provider, Contract, account, Connected])  

/********************************************************** [Portfolio Data] **********************************************************/

    return (
        <div className='portfolio_main'>
            <div className="user_portfolio_section">
                <div className="user_section_head">
                    Portfolio
                </div>

                <br />

                <div className="user_content">
                    <div className="left_content">
                        <img src="" alt="" />
                    </div>
                    <div className="right_content">
                        <div className="right_content1">
                            <div>ChainID <br /><span>{userData.Chain}</span></div>
                            <div>Total Amount <br /><span>{userData.WalletBalance} {userData.Chain} ETH</span></div>
                        </div>
                        
                        <br />
                        <div className="right_content2">
                            Address <br /><span>{(userData.Address).toUpperCase()}</span>
                        </div>
                    </div>
                </div> 
            </div>

            <br /> <br />

            <div className="lend_history">
                <div className="lend_history_head">Lend Transactions History</div>
                <div className="lend_history_card_holder">{(deposits.map((deposit, key)=>{
                    return <PortfolioLend deposit={deposit} key={key}/>;
                })      
                )}
                </div>
            </div>

            <br />

            <div className="borrow_history">
                <div className="borrow_history_head">Borrow Transactions History</div>
                <div className="borrow_history_card_holder">{(loans.map((loan)=>{
                    return <PortfolioBorrow loan={loan} key={key}/>
                })
                )}    
                </div>
            </div>
        </div>
    );
}

export {Portfolio};
