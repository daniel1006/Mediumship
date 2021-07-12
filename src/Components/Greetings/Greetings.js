import React from 'react';
import { Card, Grid, Typography, CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes,} from '@material-ui/core';
import useStyles from './useStyles';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import './Style.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Greetings = () => {
    const classes = useStyles();

    var example = ['Claudia Remy', 'An evidential Spiritul Medium',];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 5000); // 5 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }

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
              <div className={classes.title2}>
                <Typography id="sequence" style={{fontSize: '30px', }}></Typography>
              </div>

              <div className={classes.iconContainer}>
              <KeyboardArrowDownOutlinedIcon className={classes.icon}></KeyboardArrowDownOutlinedIcon> 
              <Typography variant="h6" className={classes.icon2}>Scroll</Typography>
              </div>

            </MuiThemeProvider>  

              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Greetings
