import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
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