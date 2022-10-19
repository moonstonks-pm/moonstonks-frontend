//!TODO Piemetadata scss and adjacent list

import React from "react";
import CanvasJSReact from "../canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Piemetadata() {
    const stockValue = 69.757 + " €";
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
            innerRadius: "60%",
            yValueFormatString: "#,###'%'",
            indexLabel: "{y}",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            //API here
            dataPoints: [
                { name: "AAPL", y: 5 },
                { name: "BTC", y: 31 },
                { name: "ETH", y: 40 },
                { name: "AMZN", y: 17 },
                { name: "SAP", y: 7 }
            ]
        }]
    }

    return(
        <div className="donut">
            <CanvasJSChart options = {options} />
        </div>
    );
};