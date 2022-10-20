import './Datalist.scss';
import react, {useEffect, useState} from 'react';
import "react-step-progress-bar/styles.css";
// @ts-ignore
import { ProgressBar } from "react-step-progress-bar";
import axios from "axios";

var totalShares: number;
export default function Datalist() {

    const [portfolio, setPortfolio] = useState([]);
    const [holdings, setHoldings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/portfolio/1")
            .then(res => {
                setPortfolio(res.data.id)
                //console.log(res.data)
                setHoldings(res.data.holdings)

                holdings.map((item: { amountShares: number; currentPrice: number; Symbol: any; }) => {

                    let helper = item.amountShares;
                    totalShares += helper;
                })

            })
    }, [portfolio]);

    return(
        <div className="container">
            <ul className="stocklist">
                <li>IBM</li>
                <ProgressBar className="bar" percent={38}/>
                <li>AAPL</li>
                <ProgressBar className="bar" percent={15}/>
                <li>AMZN</li>
                <ProgressBar className="bar" percent={41}/>
            </ul>
        </div>
    );
}