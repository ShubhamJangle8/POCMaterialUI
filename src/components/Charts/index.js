import React from 'react'
import { makeStyles, Box, Container, Toolbar, Typography, Paper } from "@material-ui/core";
import './styles.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LeftChart from './LeftChart'
import Navbar from '../Navbar'
import RightChart from './RightChart'

const Charts = () => {
    return (
        <Container component={Box}>
            <Navbar />
            <Box className="status" sx={{ marginTop: 70}}>
                <Paper className="status-item main">Open</Paper>
                <Paper className="status-item">In Progress</Paper>
                <Paper className="status-item">On Hold</Paper>
                <Paper className="status-item">Cancelled</Paper>
                <Paper className="status-item">Withdrawn</Paper>
                <Paper elevation={5} className="arrow-forward"><ArrowForwardIosIcon /></Paper>
            </Box>
            <div className='chart-container'>
                <div className="left-chart">
                    <LeftChart />
                </div>
                <div className="right-chart">
                    <RightChart />
                </div>
            </div>
        </Container>
    )
}

export default Charts