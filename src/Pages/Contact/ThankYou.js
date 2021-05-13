import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia, Card } from '@material-ui/core';
import useStyles from './useStyles';

const ThankYou = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container direction="Column" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid className={classes.form} item sm={11} xs={11} md={11} lg={11}>
               <Typography variant="h3" gutterBottom>Thanks for messaging me I'll get back to you as soon as I can.</Typography>
               <Button className={classes.button} variant="contained" size="large"><Link to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Home</Link></Button>
               <Typography variant="h4">May you be happy</Typography>
            </Grid>
        </Grid>
    )
}

export default ThankYou
