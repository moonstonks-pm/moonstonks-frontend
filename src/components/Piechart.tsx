import React from "react";
import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import 'chartjs-plugin-datalabels';

import './Piechart.scss';

Chart.register(ArcElement);

/* const labels = data.map((data) => {
    data.holdings.map((holdings) => {
        holdings.Symbol;
    })
});

const portfolioName = data.map((data) => {
    data.name;
});

const portfolioAmount = data.map((data) => {
    data.holdings.map((holdings) => {
        holdings.amountShares;
    })
});

*/

const options = {
    plugins: {
        datalabels: {
            color: '#36A2EB'
        }
    }
};

const pieData = {
    labels: ['AMZN', 'AAPL'],
    datasets: [
        {
            label: '# of shares',
            data: [300, 50],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
            ],
            hoverOffset: 4,
        },
    ],
    resonsive: false,
};

export default function Piechart() {
    return(
        <div className="donut">
            <Doughnut data={pieData} options={options} />
        </div>
    );
};