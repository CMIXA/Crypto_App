import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Title_Section from './components/Title_Section';
import Crypto_Row from './components/Crypto_Row';
import star from './images/star.png'


function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCrypto(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCoins = crypto.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className='crypto-page'>
    <Title_Section/>
      <div className='crypto-search'>
        <div className='crypto-search-title'>
          <img src={star}/>
          <h1>Top 100 Crypto of the day</h1>
        </div>
        <form>
          <input
            className='crypto-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      {filteredCoins.map(crypto => {
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
