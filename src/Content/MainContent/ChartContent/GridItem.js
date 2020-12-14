import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function NestedGrid({ trackName, trackImage, artistName, artistUrl }) {
    const classes = useStyles();

    return (
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <h2 className="trackName">{trackName}</h2>
                    <img src={trackImage}/>
                    <div className="artistName">About <Link to={`/about/${artistName}`}>{artistName}</Link></div>
                    <h4><a className="artistLink" href={artistUrl}>About artist on Last.fm</a></h4>
                </Paper>
            </Grid>
    );
}