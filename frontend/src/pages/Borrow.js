import React, { useState, useEffect } from 'react';
import demo_img from '../static/img/galaxy.png';
import no_history from '../static/img/blank_history.jpg'
import PortfolioBorrow from './portfolio_borrow';
import '../static/css/portfolio.css';
import '../static/css/lend_borrow.css';

const Borrow = ({ Contract }) => {

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

    return (
        <div className='lend_borrow_main'>
            {loans[0] ? <>
                <div className="borrow_history">
                    <div className="borrow_history_head">Borrow Transactions History</div>
                    <div className="borrow_history_card_holder">
                        {loans.map((loan, key) => {
                            return (
                                loan.Active !== true && loan.CollateralValue !== 0 ?
                                    <div style={{ 'color': 'white', "fontSize": '35px' }}></div> :
                                    (loan.CollateralValue === 0 ? <div> </div> :
                                        <PortfolioBorrow Contract={Contract} loan={loan} key={key} />)
                            );
                        })}
                    </div>
                </div>
            </>
                : <>
                    <div className='no_history_div_main'>
                        <img src={no_history} alt="" />
                        <div>No Borrow Transactions to show</div>
                    </div>
                </>}
        </div>
    );
}

export { Borrow };
