import React from "react";
import { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function DoughnutChart() {
    const data = {
        // labels: [
        //     'Red',
        //     'Blue',
        //     'Yellow'
        // ],
        datasets: [{
            label: 'Satisfaction',
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
                'rgba(150, 0, 0, 0.6)',
            ],
            hoverOffset: 4
        }, {
            label: 'Fill',
            data: [80, 20],
            backgroundColor: [
                'rgb(227, 0, 0)',
                'rgba(255, 255, 255, 0.2)',
            ],
          }]
    }

    const options = {
        elements: {
            arc: {
                borderColor: 'rgb(243 244 246)',
                borderWidth: 12,
            },
        },
        plugins: {
            datalabels: {
                formatter: (value) => {
                    return value + '%';
                },
            },
        },
    }

    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 240).toFixed(1.5);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var texta = "98.8%",
                textaX = Math.round((width - ctx.measureText(text).width) / 2),
                textaY = height / 2 - 25 ;
            var text = "Satisfaction",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) + 25 ;
            ctx.fillText(text, textX, textY);
            var fontSize = (height / 140).toFixed(1.5);
            ctx.font = fontSize + "em sans-serif";
            ctx.fillText(texta, textaX, textaY);
            ctx.save();
        }
    }]

    // to reference jx's hook

    return (
        <Doughnut
            type="doughnut"
            data={data}
            options={options}
            plugins={plugins}
        />
    );
};

export default DoughnutChart;
