import React, {useEffect, useState} from "react";
import CanvasJSReact from "../canvasjs.react";

import './Piechart.scss';
import axios from "axios";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints: { name: String; y: number; }[] = [];
var stockValue: number = 0;

export default function Piechart() {
    const [portfolio, setPortfolio] = useState([]);
    const [holdings, setHoldings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/portfolio/1")
            .then(res => {
                setPortfolio(res.data.id)
                //console.log(res.data)
                setHoldings(res.data.holdings)
                console.log(holdings)
                console.log(holdings[0])
                stockValue = res.data.value
                holdings.map((item: {
                    amountShares: number;
                    currentPrice: number;
                    Symbol: any; }) => {
                    console.log(item.Symbol)
                    dataPoints.push({
                        name: item.Symbol,
                        y: item.amountShares * item.currentPrice
                    })
                })

            })

    }, [portfolio]);

    const options = {
        backgroundColor: null,
        animationEnabled: true,
        subtitles: [{
            text: stockValue,
            fontColor: "#FFF",
            fontFamily: "Arial",
            verticalAlign: "center",
            fontSize: 36,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            radius: "90%",
            innerRadius: "75%",
            yValueFormatString: "#,###'€'",
            //API here
            dataPoints: dataPoints
        }]
    }

    return(
        <div className="donut">
            <CanvasJSChart options = {options} />
        </div>
    );
};