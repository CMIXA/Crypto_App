import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Big_Mover from './components/Big_Mover'
import Crypto_Row from './components/Crypto_Row';
import Star from './images/trophy.png';
import Blockchain from './images/blockchain.png';
import Increase from './images/plus.png';


function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');
  const [mover, setMover] = useState([]);

  const cryptolistKey = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const bigmoverKey = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

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

  // // API Get-Function for Big Mover of the Day
  useEffect(() => {
    axios
      .get(
        bigmoverKey
      )
      .then(res => { 
        setMover(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCrypto = crypto.filter(crypto =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredCrypto2 = mover.filter(mover =>
    mover.name.toLowerCase()
  );

  // console.log(filteredCrypto2)

  // 

//   let games = [
//     { id: 1, name: 'Star Wars: Imperial Assault', company: company.Fantasy_Flight, available: true, category: Category.SciFi, votes: 3},
//     { id: 2, name: 'Game of Thrones: Second Edition', company: 'Fantassy Flight', available: false, category: Category.Fantasy, votes: 4 },
//     { id: 3, name: 'Merchans and Marauders', company: 'Z-Man Gaming', available: true, category: Category.Pirates, votes: 5 },
//     { id: 4, name: 'Eclipse', company: 'Lautapelit', available: false, category: Category.SciFi, votes: 6 },
//     { id: 5, name: 'Fure of Dracula', company: 'Fantasy Flight', available: true, category: Category.Fantasy, votes: 2 }
// ]


// function selectMostPopular():string {
//     const allGames = getAllGames();
//     let mostPopular: string = Math.max.apply(Math, allGames.map(function (o) { return o.votes; }));
//     console.log(mostPopular);
//     return mostPopular;
// };

  // let maxPercentage = filteredCrypto.reduce((max, move) => max.price_change_percentage_24h > move.price_change_percentage_24h ? max : move);

  // console.log(maxPercentage)

// let maxGame = games.reduce((max, game) => max.votes > game.votes ? max : game);




  // const filteredCrypto2 = Math.max(...mover.map(o => o.price_change_percentage_24h)
  // );

  // const filteredCrypto2 = Math.max(...filteredCrypto.map(o => o.price_change_percentage_24h)
  // );

  // 


  // const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];



  // const percentage_24h = filteredCrypto2.map(object => {
  //   return object.market_cap_change_percentage_24h;
  // });
  // console.log(percentage_24h); 

  // const Max = Math.max(...percentage_24h);
  // console.log(Max); 

  // console.log(mover)
  // console.log(mover)





  // if (mover = Max)
  //   console.log(mover)

  // if mover == max

  // if


  // const arr = [{id: 1}, {id: 7}, {id: 3}, {id: 14}];

  // const ids = arr.map(object => {
  //   return object.id;
  // });
  // console.log(ids); // 👉️ [1, 7, 3, 14]

  // const max = Math.max(...ids);
  // console.log(max); // 👉️ 14


  // Create a function 

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // const highestPercentage = filteredCrypto.

  // maxPercentage = Math.max(...filteredCrypto.map(o => o.price_change_percentage_24h))

  return (
    <div className='crypto-page'>
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
            {filteredCrypto2.map(mover => {
              return (
                <Big_Mover
                  image={mover.image}
                  name={mover.name}
                  ticker={mover.symbol.toUpperCase()}
                  change24h_p={mover.price_change_percentage_24h.toFixed(2)}
                />
              );
            })}
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
      {/* Use if statement inside */}
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
