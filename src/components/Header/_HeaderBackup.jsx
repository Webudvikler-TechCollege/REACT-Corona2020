import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import routes from '../Router/routes';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Header(props) {
    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }    

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />                        
                    </IconButton>
                    <Menu
                        id="simple-menu" 
                        anchorEl={anchorEl} 
                        keepMounted 
                        open={Boolean(anchorEl)} 
                        onClose={handleClose}
                    >
                        {routes.map((navelm, i) => {
                            return (
                                <MenuItem key={navelm.path} onClick={handleClose}>
                                    <NavLink to={navelm.path} exact={navelm.exact}>
                                        {navelm.name}
                                    </NavLink>                                        
                                </MenuItem>
                            )
                        })}
                    </Menu>

                    <Typography variant="h6" className={classes.title}>
                        Corona News
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>       
    )
}