import React from 'react';

const Crypto_Row = ({rank, image, name, ticker, price, change24h_p, change24h_$, market_cap}) => {
    return (
        <div className='crypto-container'>
            <div className='crypto-wrapper'>
                <div className='crypto'>
                    <h3 className='crypto-rank'>#{rank}</h3>
                    <img src={image}/>
                    <p className='crypto-name'>{ticker} - {name}</p>
                    <p className='crypto-price'>${price}</p>
                    <p className='crypto-change'>{change24h_p}% | ${change24h_$}</p>
                    <p className='crypto-cap'>${market_cap}</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto_Row