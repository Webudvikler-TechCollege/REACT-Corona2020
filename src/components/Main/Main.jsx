import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: -240,
    }
}));

export default function Main(props) {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Paper>
                {props.children}
            </Paper>
        </main>
    )
}