import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './Conponends/Cards';
import Countrylist from './Conponends/countrylist';
import { CovidData } from './Context/context';
import 'bootstrap/dist/css/bootstrap.min.css';

function App()
{
  const [list, setList] = useState([]);
  useEffect(() =>
  {
    async function Call()
    {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => setList(data));
    }
    Call();
  }, [])
  // console.log("22 ", list)

  return (
    <div className="App">
      <CovidData.Provider value={list}>
        <Countrylist />
        {/* <Cards /> */}
      </CovidData.Provider>
    </div>
  );
}

export default App;
