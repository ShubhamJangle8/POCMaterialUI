import React from 'react'
import Leftbar from "../Leftbar";
import Navbar from "../Navbar";
import Box from '@mui/material/Box';
import Middlebar from '../Middlebar'
import { Grid, makeStyles } from "@material-ui/core";
import { borders } from '@mui/system';
import Add from '../Add'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  container: {
    paddingTop: theme.spacing(8),
    display: "flex",
    // alignItems: "center"
  },
  left: {
    // display: "flex",
    // justifyContent: "center",
  }


}));

const Dashboard = () => {
  const classes = useStyles();
  return (

    <div>
      <Navbar />
      <Grid className={classes.container}>
        <Grid item md={2} xs={2} className={classes.left}>
          <Box sx={{ height: '91.4vh' }} className={classes.left}>
            <Leftbar />
          </Box>
        </Grid>
        <Grid item md={10} xs={10}>
          <Middlebar />
        </Grid>
      </Grid>
      <Add />
    </div>
  )
}

export default Dashboard