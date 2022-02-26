import React from 'react'
import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem,
  Drawer,
  Divider,
  Hidden,
  Box,
  Paper,
  TextField
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import Avatar from '@mui/material/Avatar';
import Add from '../Add'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import DemandTrackerLogo from '../../img/demandlogo.ico'
import { useState } from "react";
import { deepOrange, indigo, lime } from '@mui/material/colors';
import Mytable from '../Table'
import MyAccordian from '../Accordian'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const drawerWidth = 250

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: 'white'
  },
  appbar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    backgroundColor: 'white',
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuFilter: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: '50%',
    },
    backgroundColor: 'white'
  },
  menu: {
    //   display: "none",
    // height: '3rem',
    // width: '7rem',
    cursor: 'pointer',
    [theme.breakpoints.up("md")]: {
      height: '3rem',
      // width: '5rem',
      display: "none",

    },
  },
  mainLogo: {
    marginLeft: '1rem'
  },
  logo: {
    height: '3.5rem',
    width: '7rem',
    marginLeft: '1rem'
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    // [theme.breakpoints.down("sm")]: {
    //     display: "none",
    // },
  },


  div: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: drawerWidth
    },
  },
  drawer: {
    '& .MuiPaper-root': {
      backgroundColor: 'white'
    }
  },
  list: {
    width: drawerWidth,
    marginTop: '1rem',
    // '& .css-1elwnq4-MuiPaper-root-MuiAccordion-root.Mui-expanded': {
    //   margin: '0px'
    // },
    '& .css-1elwnq4-MuiPaper-root-MuiAccordion-root:before': {
      // backgroundColor: 'white'
    },
    // '& :hover':{
    //   backgroundColor: 'white'
    // },
    // '& .MuiPaper-root': {
    //   backgroundColor: 'blue'
    // }
  },
  accordion: {
    width: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',

    '& .css-1elwnq4-MuiPaper-root-MuiAccordion-root': {
      boxShadow: 'none'
    },
    '&.MuiExpansionPanel-root:before': {
      display: 'none',
    },
    '&.css-1elwnq4-MuiPaper-root-MuiAccordion-root:before': {
      display: 'none',
    },
    '& .MuiAccordionSummary-root': {
      backgroundColor: 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: '#E4E4E4'
      }
    },
    '&.MuiAccordion-root': {
      padding: '0'
    }
  },
  accordionDetails: {
    '& .MuiAccordionDetails-root': {
      backgroundColor: 'white',
      color: 'black'
    }
  },
  search: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: '2rem',
    marginBottom: '1rem',
    [theme.breakpoints.down("sm")]: {
      marginRight: '0px',
      display: 'block'
    },
  }



}));

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#0F67B9',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#0F67B9',
    },
  },
  typography: {
    fontFamily: 'Mulish, 500',
  }
});

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const [expanded, setExpanded] = useState(false);


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const drawerItems = (
    <>
      <Toolbar />
      <Divider />
      <List className={classes.list}>
        {/* <ListItem style={{ width: "15rem" }}> */}
        <Paper elevation={4} component={Box}>
          <Accordion expanded={expanded === 'panel1'} elevation={0} sx={{ border: '0' }} onChange={handleChange('panel1')} className={classes.accordion}>
            <AccordionSummary elevation={0}
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Status
              </Typography>
            </AccordionSummary>

            <Paper className={classes.accordionDetails} component={Box}>
              <AccordionDetails >
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                </FormGroup>
              </AccordionDetails>
            </Paper>
          </Accordion>
        </Paper>

        {/* </ListItem> */}
        {/* <ListItem style={{ width: "15rem" }}> */}
        <Paper elevation={4} component={Box}>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Grade</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper elevation={4} component={Box}>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Cluster
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper elevation={4} component={Box}>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>SubCluster</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Paper>
        <Paper elevation={4} component={Box}>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Dates</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="date1" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="date2" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="date3" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="date4" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="date5" />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </Paper>
        {/* </ListItem> */}
      </List>
      {/* <MyAccordian className={classes.drawer}/> */}
    </>
  )
  return (
    <ThemeProvider theme={theme}>
      <Hidden mdUp implementation="css" style={{ backgroundColor: '#e0e0e0' }}>
        <Drawer open={open} onClose={() => setOpen(false)} variant="persistent" className={classes.drawer}>
          {
            drawerItems
          }
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer variant='permanent' className={classes.drawer}>
          {
            drawerItems
          }
        </Drawer>
      </Hidden>

      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.menuFilter}>
            <div className={classes.menu} >
              {open ? <CancelIcon onClick={() => { setOpen(!open) }} color="primary" style={{ marginTop: '0.5rem' }} /> : <MenuIcon onClick={() => { setOpen(!open) }} color="secondary" style={{ marginTop: '0.5rem' }} />}
            </div>
            <img src={DemandTrackerLogo} alt="image" className={classes.logo} />
            {/* <h2 className={classes.mainLogo}>demand</h2> */}
          </div>
          <div className={classes.icons}>
            <Badge badgeContent={4} color="secondary" className={classes.badge}>
              <HomeIcon style={{ color: "black" }} fontSize="large" />
            </Badge>
            <Badge badgeContent={2} color="secondary" className={classes.badge}>
              <Notifications style={{ color: "black" }} fontSize="large" />
            </Badge>
            <Avatar sx={{ bgcolor: deepOrange[500], height: 40 }}>SJ</Avatar>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.div}>
        <Toolbar />
        <Toolbar />
        <Box className={classes.search}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Search Entries
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchSharpIcon />
              </InputAdornment>
            }
          />
        </Box>
        <Mytable />
      </div>
      <Add />
    </ThemeProvider>
  )
}

export default Dashboard



