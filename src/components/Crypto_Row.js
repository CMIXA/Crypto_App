import React from 'react';
// import './Crypto.css';

const Crypto_Row = ({rank, image, name, ticker, price, change24h_p, change24h_$, market_cap}) => {
    return (
        <div className='crypto_container'>
            <div className='crypto_wrapper'>
                <div className='crypto'>
                    <h3 className='crypto-rank'>#{rank}</h3>
                    <img src={image}/>
                    <p className='crypto-name'>{name} - {ticker}</p>
                    <p className='crypto-price'>${price}</p>
                    <p className='crypto-change'>{change24h_p}% | ${change24h_$}</p>
                    <p className='crypto-cap'>${market_cap}</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto_Row