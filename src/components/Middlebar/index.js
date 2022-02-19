import React from 'react'
import { Grid, makeStyles, InputBase } from "@material-ui/core";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import { blue } from '@material-ui/core/colors';
import Mytable from '../Table'
const useStyles = makeStyles((theme) => ({
    searchingParam: {
        display: 'flex',
        marginTop: theme.spacing(3),
        justifyContent: 'center',
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
    table: {
        backgroundColor: 'aliceBlue',
        height: "100%",
        marginTop: theme.spacing(3),
        // border: '5px solid black'
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
    }

}));

const Middlebar = () => {
    const classes = useStyles()
    return (
        <Box>
            <div className={classes.searchingParam}>
                <div className={classes.search}>
                    <SearchIcon className={classes.searchIcon} />
                    <InputBase placeholder="Search..." className={classes.input} />
                    <CancelIcon className={classes.cancelIcon} />
                </div>

            </div>
            <div className={classes.table}>
                <Mytable />
            </div>
        </Box>
    )
}

export default Middlebar