import React from 'react'
import { Grid, makeStyles, InputBase, Paper } from "@material-ui/core";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { blue } from '@material-ui/core/colors';
import Mytable from '../Table'
import Leftbar from "../Leftbar";

const useStyles = makeStyles((theme) => ({
    searchingParam: {
        display: 'flex',
        marginTop: theme.spacing(3),
        justifyContent: 'space-evenly',
        boxShadow: '4',
        // justifyContent: 'space-evenly',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    search: {
        height: '7vh',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black'
    },
    paper: {
        // backgroundColor: 'aliceBlue',
        // marginTop: theme.spacing(3),
        // height: '100%'
        // border: '5px solid black'
    },
    box: {
        // height: '100%',
        // [theme.breakpoints.down("md")]: {
        //     width: '80%',
        // },
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        width: '30vw',

    },
    cancelIcon: {
        margin: theme.spacing(2)
    },
    searchIcon: {
        margin: theme.spacing(2)
    },

}));

const Middlebar = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.box} >
            <Grid item xs={1}>
                <div style={{ height: '100%', backgroundColor: 'blue' }}>

                </div>
                <Leftbar />
            </Grid>
            <Grid item xs={11} >
                <div className={classes.searchingParam}>
                    <div className={classes.search}>
                        <SearchIcon className={classes.searchIcon} />
                        <InputBase placeholder="Search..." className={classes.input} />
                        <CancelIcon className={classes.cancelIcon} />
                    </div>

                </div>
                <Paper elevation={5} className={classes.paper} >
                    <Mytable />
                </Paper>
            </Grid>

        </Grid>
    )
}

export default Middlebar