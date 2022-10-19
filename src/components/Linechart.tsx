import React, { Component } from 'react';
import CanvasJSReact from "../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Linechart() {
        const options = {
            animationEnabled: true,
            exportEnabled: false,
            backgroundColor: null,
            width: 1400,
            height: 300,
            theme: "dark2",

            axisY: {
                title: "Bounce Rate",
                titleFontColor: "white",
                suffix: "%",
            },
            axisX: {
                title: "Week of Year",
                titleFontColor: "white",
                prefix: "W",
                interval: 2
            },
            legend: {
              horizontalAlign: "center",
              verticalAlign: "bottom",
              fontSize: 15,
            },
            data: [{
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                showInLegend: true,
                legendText: "AAPL",
                dataPoints: [
                    { x: 1, y: 64 },
                    { x: 2, y: 61 },
                    { x: 3, y: 64 },
                    { x: 4, y: 62 },
                    { x: 5, y: 64 },
                    { x: 6, y: 60 },
                    { x: 7, y: 58 },
                    { x: 8, y: 59 },
                    { x: 9, y: 53 },
                    { x: 10, y: 54 },
                    { x: 11, y: 61 },
                    { x: 12, y: 60 },
                    { x: 13, y: 55 },
                    { x: 14, y: 60 },
                    { x: 15, y: 56 },
                    { x: 16, y: 60 },
                    { x: 17, y: 59.5 },
                    { x: 18, y: 63 },
                    { x: 19, y: 58 },
                    { x: 20, y: 54 },
                    { x: 21, y: 59 },
                    { x: 22, y: 64 },
                    { x: 23, y: 59 }
                ]
            },{
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                showInLegend: true,
                legendText: "BTC",
                dataPoints: [
                    { x: 1, y: 20 },
                    { x: 2, y: 30 },
                    { x: 3, y: 45 },
                    { x: 4, y: 23 },
                    { x: 5, y: 46 },
                    { x: 6, y: 23 },
                    { x: 7, y: 16 },
                    { x: 8, y: 85 },
                    { x: 9, y: 23 },
                    { x: 10, y: 53 },
                    { x: 11, y: 33 },
                    { x: 12, y: 33 },
                    { x: 13, y: 44 },
                    { x: 14, y: 55 },
                    { x: 15, y: 46 },
                    { x: 16, y: 23 },
                    { x: 17, y: 59.5 },
                    { x: 18, y: 34 },
                    { x: 19, y: 34 },
                    { x: 20, y: 34 },
                    { x: 21, y: 12 },
                    { x: 22, y: 25 },
                    { x: 23, y: 75 }
                ]
            }]
        }
        return (
            <div>
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
}