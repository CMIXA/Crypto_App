import React from 'react';
// import './Crypto.css';

const Crypto_Row = ({rank, image, name, ticker, price, change24h_p, change24h_$, market_cap}) => {
    return (
        <div className='crypto_container'>
            <div className='crypto_wrapper'>
                <div className='crypto'>
                    <h3>#{rank}</h3>
                    <img src={image}/>
                    <h3>{name} / {ticker}</h3>
                    <p>${price}</p>
                    <p>{change24h_p}% / ${change24h_$}</p>
                    <p>${market_cap}</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto_Row