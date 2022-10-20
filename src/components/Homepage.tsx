import "./Homepage.scss"
import Piechart from "./Piechart";
import Searchbar from "./Searchbar";
import React, {useEffect, useState} from "react";
import Linechart from "./Linechart";
import axios from "axios";

var stockValue = 0;
var portfolioRevenue = 0;
export default function Homepage() {
    const [portfolio, setPortfolio] = useState([]);
    const [holdings, setHoldings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/portfolio/1")
            .then(res => {
                setPortfolio(res.data.id)
                setHoldings(res.data.holdings)
                portfolioRevenue = res.data.revenue
                stockValue = res.data.value
                holdings.map((item: {
                    amountShares: number;
                    currentPrice: number;
                    Symbol: any; }) => {

                })

            })

    }, [portfolio]);
    return (
        <div className="homescreen">
            <div className="searchbar">
                <Searchbar />
            </div>
            <div className="infos">
                <Piechart />
            </div>
            <div className="info">
                <h1>Toms Portfolio</h1>
                <p>2 Assets</p>
                <p>&#x2022;</p>
                <p>3 Holdings</p>
                <p>&#x2022;</p>
                <p>EUR</p>
            </div>
            <div className="overview">
                <div className="general">
                    <p>General overview</p>
                    <div className="up">
                        <p>69%</p>
                    </div>

                </div>
                <h2>{stockValue}</h2>
                <div className="revenue">
                    <p>Revenue:</p>
                    <h2>{portfolioRevenue}</h2>
                    <p>Dividends: <div className="dividends">0€</div></p>
                </div>
            </div>
            <div className="linechart">
                <Linechart />
            </div>

        </div>
    );
}