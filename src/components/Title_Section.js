import React from 'react';
import Blockchain from '../images/blockchain.png';
import Increase from '../images/plus.png'

const Title_Section = (image, name, ticker, change24h_p) => {
    return (
        <div className='Title-Section-Conainter'>
            <div className='Title-Section-Wrapper'>
                <div className='Title'>
                    <img src={Blockchain} width='70'/>
                    <h1>Daily Crypto</h1>
                </div>
                <div className='Big-Mover'>
                    <div className='Title-Big-Mover'>
                        <img src={Increase}/>
                        <h2>Biggest Mover of the Day</h2>
                    </div>
                    {/* <div className='Big_Mover-Content'>
                        <div>
                            <img src={image}/>
                        </div>
                        <div>
                            <h2>{name} / {ticker}</h2>
                            <h1>{change24h_p}</h1>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}



export default Title_Section;