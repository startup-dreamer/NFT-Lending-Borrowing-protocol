import React, { useState } from 'react';
import '../static/css/lend_borrow.css';
import '../static/css/portfolio.css';
import no_history from '../static/img/blank_history.jpg'
import PortfolioLend from './portfolio_lend';
import { deposit_to_pool, withdraw_to_pool } from '../backend'

const Lend = ({ Contract }) => {

    const [deposits, setDeposits] = useState([
        {
            Id: "-",
            Amount: "-",
            Interest: "-",
            Date: "-",
            EthToUsd: 0
        }
    ]);

    return (
        <div className='lend_borrow_main'>
            {deposits[0] ?
                <>
                    <div className="lend_history">
                        <div className="lend_history_head">Lend Transactions History</div>
                        <div className="lend_history_card_holder">
                            {deposits.map((deposit, key) => {
                                return (
                                    deposit.Amount === 0 ? <></> :
                                        <PortfolioLend Contract={Contract} deposit={deposit} key={key} />
                                );
                            })}
                        </div>
                    </div>
                </>
                : <div className='no_history_div_main'>
                    <img src={no_history} alt="" />
                    <div>No Lend Transactions to show</div>
                </div>}
        </div>
    );
}

export { Lend };
