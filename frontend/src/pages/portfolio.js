import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import AurumV1core from '../backend/AurumV1core.json';
import PortfolioBorrow from './portfolio_borrow';
import PortfolioLend from './portfolio_lend';
import user_img from '../static/img/user.png';
import demo_img from '../static/img/galaxy.png';
import no_history from '../static/img/blank_history.jpg'
import {
  getDepositId, 
  getLoanId, 
  getDeposits, 
  getLoans, 
  getmetadata, 
  get_ETHtoUSD_Price
} from '../backend';
import '../App.css';
import '../static/css/portfolio.css';

const Portfolio = ({ setConnected }) => {
  const [Contract, setContract] = useState(null);
  const [Provider, setProvider] = useState(null);
  const [account, setAccount] = useState('0x');
  const [deposits, setDeposits] = useState([
    {
      Id: "-",
      Amount: "-",
      Interest: "-",
      Date: "-",
      EthToUsd: 0
    }
  ]);
  const [loans, setLoans] = useState([
    {
      Id: "-",
      Borrower: "-",
      TokenContract: "-",
      TokenId: "-",
      CollateralValue: 0,
      Interest: "-",
      Time: "--/--/--",
      Active: "-",
      ImageURL: demo_img,
      NFTName: "NFT Name",
      NFTDescription: "-",
      EthToUsd: 0
    }
  ]);

  const [userData, setUserData] = useState({
    Chain: "-",
    WalletBalance: "-",
    Address: "-"
  });

  function getTimeFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dateString =
      ('0' + day).slice(-2) +
      '-' +
      ('0' + month).slice(-2) +
      '-' +
      year.toString() +
      ' ' +
      ('0' + hours).slice(-2) +
      ':' +
      ('0' + minutes).slice(-2);

    return dateString;
  }

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const Provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.send('eth_requestAccounts');
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setAccount(accounts[0]);
        const { chainId } = await Provider.getNetwork();
        const chainName =
          ({
            1: 'Mainnet',
            3: 'Ropsten',
            4: 'Rinkeby',
            5: 'Goerli',
            42: 'Kovan',
            11155111: 'Sepolia',
            80001: 'Mumbai Polygon'
          }[chainId]) || `chainId ${chainId}`;
        const signer = Provider.getSigner();
        const balance = await signer.getBalance();
        const Balance = (parseInt(balance._hex) / 1e18).toFixed(3);
        const contractInstance = new ethers.Contract("0xff0AF63633f2FEeB37a9E6bD46013A6333B20460", AurumV1core, signer);
        if (chainId !== 11155111) {
          alert("Please switch to Sepoli Testnet");
          setConnected(false);
          return
        }
        setProvider(Provider);
        setContract(contractInstance);
        setConnected(true);

        setUserData({
          Chain: chainName,
          WalletBalance: Balance,
          Address: accounts[0]
        });
      }
    }
    init();
  }, [account]);

  useEffect(() => {
    const setAccounts = async () => {
      if (Provider !== null && account !== "0x") {
        const depositId = await getDepositId(Contract, account);
        const deposits = [];
        const ethTousd = await get_ETHtoUSD_Price(Contract);
        for (let i = 0; i < depositId; i++) {
          const deposit = await getDeposits(Contract, account, i);
          const date = getTimeFromSeconds(deposit.Date);
          deposits.push({
            Id: i,
            Amount: deposit.Amount,
            Interest: deposit.Interest,
            Date: date,
            EthToUsd: ethTousd / 1e8
          });
        }
        setDeposits(deposits);

        const loanId = await getLoanId(Contract, account);
        const loans = [];
        for (let i = 0; i < loanId; i++) {
          const loan = await getLoans(Contract, account, i);
          const NFTData = await getmetadata(loan.TokenContract, loan.TokenId);
          const date = getTimeFromSeconds(loan.Time);
          if (Object.keys(NFTData.rawMetadata).length !== 0) {
            const image = NFTData.rawMetadata.image.includes('ipfs://')
              ? `https${NFTData.rawMetadata.image.replace('ipfs', '')}.ipfs.dweb.link/`
              : NFTData.rawMetadata.image;
            loans.push({
              Id: i,
              Borrower: loan.Borrower,
              TokenContract: loan.TokenContract,
              TokenId: loan.TokenId,
              CollateralValue: loan.CollateralValue,
              Amount: loan.Amount,
              Interest: loan.Interest,
              Time: date,
              Active: loan.Active,
              ImageURL: image,
              NFTName: NFTData.contract.name,
              NFTDescription: NFTData.description,
              EthToUsd: ethTousd / 1e8
            });
          }
        }
        setLoans(loans);
      }
    };
    setAccounts();
  }, [Provider, Contract, account]);

  /********************************************************** [Portfolio Data] **********************************************************/
  return (
    <div className='portfolio_main'>
      <div className="user_portfolio_section">
        <div className="user_section_head">
          User Portfolio
        </div>
        <div className="user_content">
          <div className="left_content">
            <img src={user_img} alt="" />
          </div>
          <div className="right_content">
            <div className="right_content1">
              <div>ChainID <br /><span>{userData.Chain}</span></div>
              <div>Total Amount <br /><span>{userData.WalletBalance} {userData.Chain} ETH</span></div>
            </div>
            <div className="right_content2">
              Address <br /><span>{(userData.Address).toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      <br /> <br />

      <div className="lend_history">
        <div className="lend_history_head">Lend Transactions History</div>
        <div className="lend_history_card_holder">
          {deposits[0] ? 
          <>
            {deposits.map((deposit, key) => {
              return (
                deposit.Amount === 0 ? <></> :
                  <PortfolioLend Contract={Contract} deposit={deposit} key={key} />
              );
            })}
          </>
            : <div className='no_history_div'>
              <img src={no_history} alt="" />
              <div>No Lend <br /> Transactions to show</div>
            </div>}
        </div>
      </div>

      <br /> <br /> <br />

      <div className="borrow_history">
        <div className="borrow_history_head">Borrow Transactions History</div>
        <div className="borrow_history_card_holder">
          {loans[0] ? <>
            {loans.map((loan, key) => {
              return (
                loan.Active !== true && loan.CollateralValue !== 0 ?
                  <div style={{ 'color': 'white', "fontSize": '35px' }}></div> :
                  (loan.CollateralValue === 0 ? <div> </div> :
                    <PortfolioBorrow Contract={Contract} loan={loan} key={key} />)
              );
            })}
          </>
            : <>
              <br />
            <div className='no_history_div'>
              <img src={no_history} alt="" />
              <div>No Borrow <br /> Transactions to show</div>
            </div>
            </>}
        </div>
      </div>
    </div>
  );
}

export { Portfolio };
