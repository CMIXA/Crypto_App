import React from 'react';

const Crypto_Row = ({rank, image, name, ticker, price, change24h_p, change24h_$, market_cap}) => {
    const index = 1;
    return (
        <div className='crypto-container'>
            <div className='crypto-wrapper'>
                <div className='crypto'>
                    <h3 className='crypto-rank'>#{rank}</h3>
                    <img src={image}/>
                    <p className='crypto-name'>{ticker} - {name}</p>
                    <p className='crypto-price'>${price}</p>
                    <div className='crypto-change'>
                        {change24h_p < 0 ? (
                            <p className='crypto-pchange-negative'> {change24h_p}%</p>
                        ) : (
                            <p className='crypto-pchange-positive'> +{change24h_p}%</p>
                        )}
                        <p className='crypto-change-divider'>|</p>
                        {change24h_p < 0 ? (
                            <p className='crypto-dchange-negative'> -{change24h_$.substring(1, index) + '$' + change24h_$.substring(index)}</p>
                        ) : (
                            <p className='crypto-dchange-positive'> +${change24h_$}</p>
                        )}
                    </div>
                    <p className='crypto-cap'>${market_cap}</p>
                </div>
            </div>
        </div>
    )
}

export default Crypto_Row