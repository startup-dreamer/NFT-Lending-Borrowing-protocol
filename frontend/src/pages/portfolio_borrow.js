import React from 'react';

const PortfolioBorrow = () => {
    return (
        <div className='borrow_history_main_card'>
            <div className="left_borrow_card_history">
                <img src="" alt="" />
            </div>
            <div className="right_borrow_card_history">
                <div className="right_borrow_card_history1">
                    <div className="borrow_card_name">BorrowToken Name</div>
                    <div className="date_borrow_card">24-03-2022 . 18:00</div>
                </div>
                <div className="right_borrow_card_history2">
                    <div>Token Contract <br /><span>DRT_OXGTOken</span></div>
                    <div>TokenID<br /><span>Kh528%71gvvs$$66nbjsbkjbsknla</span></div>
                </div>
                <div className="right_borrow_card_history3">
                    <div>Value<br /><span>$8790</span></div>
                    <div>Description<br /><span>Here is the text which describes the description of hhe borrow taking histories cards</span></div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioBorrow;
