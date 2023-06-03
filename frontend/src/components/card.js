import React from 'react';
import '../static/css/content.css'

const Card = () => {
    return (
        <div className='card_main'>
            <div className="img_holder_card">
                <img src="https://media.istockphoto.com/id/1372146767/photo/nft-hexagons-pixelated-concept.jpg?b=1&s=170667a&w=0&k=20&c=tNjLIQgkCcETa0w_nun-Bj0l3FZF0Vr-IQ6Ql0yRTzI=" />
            </div>
            <div className="card_text">
                <div className="card_name">Crypto Devs</div>
                <div className="card_description">
                    Crypto Dev is a collection of developers in crypto
                </div>
                <div className="price_holder">
                    <div className="price_card">$8000</div>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
