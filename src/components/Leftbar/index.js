import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import MyAccordian from '../Accordian'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const useStyles = makeStyles((theme) => ({
    left: {
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid black'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: '30px',
        // backgroundColor: 'black'
    },
    button: {
        backgroundColor: purple
    },
    cancel: {
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5)
    }
}));

export default function Leftbar() {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 255 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* <List>
                {['Status', 'Grade', 'Cluster', 'Sub Cluster', 'Grades'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            <div className={classes.cancel}>
                <CancelOutlinedIcon fontSize='large' color='primary' onClick={toggleDrawer(anchor, false)} />
            </div>
            <MyAccordian />
            <Divider />
            <div className={classes.buttons}>
                <Button variant='contained' className={classes.button}>Apply</Button>
                <Button variant='contained' className={classes.button}>Reset</Button>
            </div>

        </Box>
    );

    return (
        <Box className={classes.left}>
            {
                ['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button variant='contained' onClick={toggleDrawer(anchor, true)} ><OpenInFullIcon /></Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            variant='persistent'
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))
            }
        </Box >
    );
}