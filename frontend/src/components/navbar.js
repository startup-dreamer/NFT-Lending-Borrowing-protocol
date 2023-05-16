import React from 'react';
import "../static/css/navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
           <div className="left_nav">
                <div>NFT World</div>
           </div>
           <div className="right_nav">
                <button>Lending</button>
                <button>Borrowing</button>
                <input type='button' value={'Connect'}/>
           </div>
        </div>
    );
}

export default Navbar;
