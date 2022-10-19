import React from "react";
import CanvasJSReact from "../canvasjs.react";

import './Piechart.scss';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Piechart() {
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
            innerRadius: "75%",
            yValueFormatString: "#,###'%'",
            //API here
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }

    return(
        <div className="donut">
            <CanvasJSChart options = {options} />
        </div>
    );
};