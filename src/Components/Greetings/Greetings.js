import React from 'react';
import { Card, Grid, Typography, CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes,} from '@material-ui/core';
import useStyles from './useStyles';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import './Style.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Greetings = () => {
    const classes = useStyles();
    return (
      <div>
      <style jsx global>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid className={classes.greetings}>
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.container}>

              <CardMedia  component="img"
                           src="https://images.unsplash.com/photo-1538859947109-a81f6eb1945d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} /> 

            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>A voice for Spirit</Typography> 
              <Typography variant="h4" className={classes.title2} id="flikering"></Typography>

              <div className={classes.iconContainer}>
              <KeyboardArrowDownOutlinedIcon className={classes.icon}></KeyboardArrowDownOutlinedIcon> 
              <Typography variant="h6">Scroll</Typography>
              </div>

              <Typography variant="h1" className={classes.title}>Hello</Typography>

            </MuiThemeProvider>  

              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Greetings
