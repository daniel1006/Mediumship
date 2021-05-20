import React from 'react';
import { Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Grid } from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Quote = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
          <Grid item  xs={12} sm={12} md={12} lg={12}>
             <MuiThemeProvider theme={theme}>
              <Typography variant="h2">"A life that touches others goes on forever"</Typography>
            </MuiThemeProvider>
          </Grid>
        </Grid>
    )
}

export default Quote
