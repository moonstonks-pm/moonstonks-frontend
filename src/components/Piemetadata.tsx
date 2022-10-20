import React, {useEffect, useState} from "react";
import CanvasJSReact from "../canvasjs.react";
import axios from "axios";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints: { name: String; y: number; }[] = [];
var stockValue: number = 0;
var totalShares: number = 10;

export default function Piemetadata() {
    const [portfolio, setPortfolio] = useState([]);
    const [holdings, setHoldings] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/portfolio/1")
            .then(res => {
                setPortfolio(res.data.id)
                //console.log(res.data)
                setHoldings(res.data.holdings)
                stockValue = res.data.value;
                holdings.map((item: {
                    amountShares: number;
                    currentPrice: number;
                    Symbol: any; }) => {
                    //console.log(item.Symbol)
                    dataPoints.push({
                        name: item.Symbol,
                        y: (item.amountShares*100) / totalShares
                    })
                    let helper = item.amountShares;
                    totalShares += helper;
                })

            })
    }, [portfolio]);

    const options = {
        backgroundColor: null,
        animationEnabled: true,
        height: 400,
        width: 400,
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
            radius: "100%",
            innerRadius: "65%",
            yValueFormatString: "#,###'%'",
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
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