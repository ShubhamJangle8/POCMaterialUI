import {
    alpha,
    AppBar,
    Badge,
    InputBase,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import DemandTrackerLogo from '../../img/demandlogo.ico'
import { useState } from "react";
import { deepOrange, deepPurple } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    logo: {
        //   display: "none",
        height: '3rem',
        width: '7rem',
        [theme.breakpoints.down("sm")]: {
            height: '3rem',
            width: '5rem',
        },
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
    input: {
        color: "white",
        marginLeft: theme.spacing(1),
    },
    cancel: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    icons: {
        alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
    },
    badge: {
        marginRight: theme.spacing(2),
        cursor: "pointer",
    },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({ open });
    return (
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                <img src={DemandTrackerLogo} alt="image" className={classes.logo} />

                <div className={classes.icons}>
                    <Badge badgeContent={4} color="secondary" className={classes.badge}>
                        <HomeIcon />
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ bgcolor: deepOrange[500], height: 40 }}>SJ</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
