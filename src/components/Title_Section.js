import React from 'react';
import Blockchain from '../images/blockchain.png';

const Title_Section = () => {
    return (
        <div className='Title-Section-Conainter'>
            <div className='Title-Section-Wrapper'>
                <div className='Title'>
                    <img src={Blockchain} width='70'/>
                    <h1>Daily Crypto</h1>
                </div>
                <div className='Title-Big-Mover'>
                    <div className='Big_Mover'>
                        <h2>Biggest Mover of the Day</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title_Section;