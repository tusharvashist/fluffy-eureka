import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import country from './data/country';
function App() {

  const getCountries = (searchText) => {
    return new Promise((resolve) => {
      return resolve(country)
    }).then((res)=>{
      return res.filter(el=> el.toLowerCase().includes(searchText.toLowerCase()))
    })

  }

  const [serchedCountry, setSerchedCountry]=useState('');

  // let showCountry = getCountries(serchedCountry).then(res=>{return res})
  
  
  return (
    <div className="App">
      <Search setSerchedCountry={setSerchedCountry} serchedCountry={serchedCountry} getCountries={getCountries} />
    </div>
  );
}

export default App;
