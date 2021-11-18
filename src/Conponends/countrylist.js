import React, { useContext, useEffect, useState } from 'react'
import { CovidData } from '../Context/context';
import Cards from './Cards';

const Countrylist = () =>
{
    const context = useContext(CovidData)
    const [countrylist, setCountrylist] = useState();

    return (
        <div >
            <h4>Select Country</h4>
            {context.length > 0 ? (<> <select style={{ margin: "5px 0 0 0" }} value={countrylist} onChange={(e) => setCountrylist(e.target.value)}>
                {context.map((data, i) =>
                {
                    return (
                        <>
                            <option key={context[i]}>{context[i].country}</option>
                        </>
                    )
                })}
            </select></>) : "Loading..."}

            <h1 style={{ margin: "20px 0 0 0" }}>{countrylist}</h1>
            <Cards countrylist={countrylist} />
        </div>
    )
}

export default Countrylist

// useEffect(() =>
// {
//     async function Call()   
//     {
//         const data = await context;
//         setList(data)
//         console.log("16 ", list)
//     }
//     Call();
// }, [])
// const [list, setList] = useState([]);
// useEffect(() =>
// {
//     async function Call()
//     {
//         await fetch("https://disease.sh/v3/covid-19/countries")
//             .then((res) => res.json())
//             .then((data) => setList(data));
//     }
//     Call();
// }, [])
// setList(context)