import React from 'react'
import { Line } from 'react-chartjs-2';
import { makeStyles, Box, Container, Toolbar, Typography, Paper, Divider } from "@material-ui/core";
import { Chart, registerables } from 'chart.js';
import './styles.css'
Chart.register(...registerables);

function RightChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '',
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
        <Box className="right-box">
            <Line data={data} options={options} />
            <div className="data">
                <Typography className="data-heading" variant="h6">Planning & Experience</Typography>
                <Typography className="data-heading" variant="h6">ISell</Typography>
                <Typography className="data-heading" variant="h6">Integration</Typography>
            </div>
        </Box>

    )
}

export default RightChart