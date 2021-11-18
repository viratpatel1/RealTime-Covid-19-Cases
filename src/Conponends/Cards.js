import React, { useContext, useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, CardActions, Button } from "@material-ui/core";
import { CovidData } from "../Context/context"
import * as ReactBootStrap from "react-bootstrap";
import "../Css/Cards.css"
import Countrylist from './countrylist';


const Cards = (countrylist) =>
{
    const context = useContext(CovidData)
    const [collectData, setCollectData] = useState([])
    // const [datas, setDatas] = useState()

    useEffect(() =>
    {
        async function API()
        {
            await fetch("https://disease.sh/v3/covid-19/all")
                .then((res) => res.json())
                .then((data) =>
                {
                    setCollectData(data)
                    // setDatas(countrylist.countrylist)
                });

        }
        API();
    }, [setCollectData])
    // console.log("25 ", collectData)

    return (
        <div>
            {context ? (<>{context.map((data, i) =>
            {
                return (
                    <>
                        {/* {(countrylist.countrylist) == context[i].country ? (<>{countrylist.countrylist}{context[i].updated}</>) : (<>No<br /></>)} */}

                        {(countrylist.countrylist) == context[i].country ? (
                            <>
                                <div key={context[i]} className="Card">
                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(184, 40, 241, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Infected Today</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].todayCases.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p> Number of Infected cases</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].cases.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>

                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(37, 199, 240, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Recovered Today</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].todayRecovered.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p>Number of people recovered</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].recovered.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>

                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(241, 26, 26, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Today's Deaths</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].todayDeaths.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p>Number of Deaths</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{context[i].deaths.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                                    {/* <p>{countrylist}</p> */}
                                </div>
                                <h1 style={{ margin: "20px 0 -16px 0" }}>Globally</h1>
                                <div key={context[i]} className="Card">
                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(184, 40, 241, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Infected Today</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.todayCases.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p> Number of Infected cases</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.cases.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>

                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(37, 199, 240, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Recovered Today</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.todayRecovered.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p>Number of people recovered</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.recovered.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>

                                    <ReactBootStrap.Card className="InnerCard" style={{ width: '18rem', boxShadow: "12px 12px 2px 1px rgba(241, 26, 26, 0.979)" }}>
                                        <ReactBootStrap.Card.Body>
                                            <ReactBootStrap.Card.Text><p>Today's Deaths</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.todayDeaths.toLocaleString()}</h5><hr />
                                            </ReactBootStrap.Card.Text>
                                            <ReactBootStrap.Card.Text>
                                                <p>Number of Deaths</p>
                                                <h5 style={{ margin: "-15px 0 0 0" }}>{collectData.deaths.toLocaleString()}</h5>
                                            </ReactBootStrap.Card.Text>
                                        </ReactBootStrap.Card.Body>
                                    </ReactBootStrap.Card>
                                    {/* <p>{countrylist}</p> */}
                                </div></>) : (<></>)}


                    </>
                )
            })}</>) : "Loading the name.."}



            {/* <p>{context[i].country}</p> */}
            {/* <h3>{countrylist.countrylist}</h3> */}

            {/* <h3>Card</h3> */}
            {/* <h3>{collectData.updated}</h3> */}
        </div>
    )
}

export default Cards

{/* {context.filter(country => country.country == countrylist).map(countryname =>
            {
                return (
                    <>
                        {countryname ? (<>{countryname}</>) : "Not Found"}
                    </>
                )
            })} */}