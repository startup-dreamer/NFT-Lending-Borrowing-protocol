import React from 'react';
import '../static/css/popup.css';

const Popup = () => {
    function hidePopup(){
        try{
            let k = document.getElementsByClassName('lend_popup');
            console.log(k);
            k[0].style.display = 'none';
        } catch{}
        
    }
    return (
        <div>
            <div className="lend_popup">
                <div className="left_popup">
                </div>
                <div className="right_popup">
                    <input type="text" placeholder='Enter token contract' />
                    <input type="text" placeholder='Enter token ID' />
                    <button>Fetch NFT</button>
                    <br />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <button>Borrow</button>
                </div>
                <i className='bi bi-x' onClick={()=>hidePopup()}></i>
            </div>
        </div>
    );
}

export default Popup;
