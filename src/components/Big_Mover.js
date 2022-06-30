import React from 'react';

const Big_Mover = ({image, name, ticker, change24h_p}) => {
    return (
        <div>
            <div className='Big-Mover-Content'>
                <div>
                    <img src={image}/>
                </div>
                <div className='Big-Mover-Content-Text'>
                    <h2>{name} / {ticker}</h2>
                    <h1>{change24h_p}</h1>
                </div>
            </div>
        </div>
    )
}

export default Big_Mover