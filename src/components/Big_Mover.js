// import React, {useState, useEffect} from 'react';
import React from 'react';

const Big_Mover = (image, name, ticker, change24h_p) => {
    return (
        <div>
            <div className='Big_Mover-Content'>
                <div>
                    <img src={image}/>
                </div>
                <div>
                    <h2>{name} / {ticker}</h2>
                    <h1>{change24h_p}</h1>
                </div>
            </div>
        </div>
    )
}

export default Big_Mover