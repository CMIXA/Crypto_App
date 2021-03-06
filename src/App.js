import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Crypto_Row from './components/Crypto_Row';
import Star from './images/trophy.png';
import Blockchain from './images/blockchain.png';


function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  const cryptolistKey = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  // API Get-Function for 100 Crypto of the Day
  useEffect(() => {
    axios
      .get(
        cryptolistKey
      )
      .then(res => {
        setCrypto(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCrypto = crypto.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // big-mover function
  // - take in array
  // 

  return (
    <div className='crypto-page'>
      <div className='title-section-conainter'>
        <div className='title-section-wrapper'>
          <div className='title'>
            <img src={Blockchain} width='70'/>
            <h1>Daily Crypto</h1>
          </div>
        </div>
        <div className='big-mover'>
          <div className='big-mover-content'>

          </div>
        </div>
      </div>
      <div className='crypto-search'>
        <div className='crypto-search-title'>
          <img src={Star}/>
          <h1>Top 100 Crypto of the day</h1>
        </div>
        <form className='crypto-search-form'>
          <input
            className='crypto-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCrypto.map(crypto => {
        return (
          <Crypto_Row
            rank={crypto.market_cap_rank}
            image={crypto.image}
            name={crypto.name}
            ticker={crypto.symbol.toUpperCase()}
            price={crypto.current_price.toLocaleString()}
            change24h_p={crypto.price_change_percentage_24h.toFixed(2)}
            change24h_$={crypto.price_change_24h.toFixed(4)}
            market_cap={crypto.market_cap.toLocaleString()}
          />
        );
      })}
    </div>
  );
}

export default App;
