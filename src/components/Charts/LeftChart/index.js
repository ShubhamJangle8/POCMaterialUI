import React from 'react'
import { Bar } from 'react-chartjs-2';
import './styles.css'

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function LeftChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Cluster Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: ['blue'],
                backgroundColor: ['#9AD0F5'],
                borderWidth: 2,
            }
        ]
    };


    const options = {
        title: {
            display: true,
            text: 'Average Rainfall per month',
            fontSize: 20
        },

        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 1,
                        max: 100,
                        stepSize: 1,
                    },
                },

            ]
        }
    }

    return (
        <Bar data={data} options={options} style={{height: '100%'}}/>
    )
}

export default LeftChart