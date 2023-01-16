import React, { useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar,Line } from 'react-chartjs-2';
import { Data } from "../Utils/Data";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            max: 200,
            ticks: {
            callback: value => value
            }
        },
        y: {
            max: 200000,
            ticks: {
            callback: value => `${value / 10}`
            }
        }
    },
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
  };
  
const labels = ["status","start_date"];

export const data = {
labels,
datasets: [
    {
    label: 'Actual Qty',
    data: Data.filter(data=>data.make == "Apple").map(
        data=>({
            x: data.device_name,
            y: data.actual_qty
        })
    ),
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    // label: 'Dataset 2',
    // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    // backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
]
};
export default function StockGraph() {
    const [graphData, setGraphData] = useState(

    );
    return (
        <div className="chart-container">
            <Line options={options} data={data} />
        </div>
    );
}