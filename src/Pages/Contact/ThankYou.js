import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Grid, Typography,createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia, Card} from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ThankYou = () => {
    const classes = useStyles();
    return (
        <div>
             <style jsx global>{`body { margin: 0px; padding: 0px;}`}</style>
       
        <Grid className={classes.greetings} >
            <Grid className={classes.form} item sm={12} xs={12} md={12} lg={12}>
            <Card className={classes.container}>

            <CardMedia  component="img"
                           src="https://dl.dropboxusercontent.com/s/w6y37cq0g9axreu/hummingbird%20see%20through%20adapted%20for%20colored%20background.png?dl=0"
                           title="Services"
                           className={classes.media2} /> 

            <MuiThemeProvider theme={theme}>
               <Typography className={classes.heading} variant="h3" gutterBottom>Thanks for messaging me I'll get back to you as soon as I can.</Typography>
               <Typography className={classes.heading2} variant="h3">May you be happy</Typography>
               <Button className={classes.button1} variant="outlined" size="large"><Link to="/" style={{color:"white", textDecoration: "none"}}>Home</Link></Button>
            </MuiThemeProvider>   

            </Card>
            </Grid>
        </Grid>

        </div>
    )
}

export default ThankYou
