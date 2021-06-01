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
                           src="https://previews.dropbox.com/p/thumb/ABJn8jWLbwx7Rzg71TOfZit8oZKqLILM3VRuqlNA0yyjLgl5XIRrWIi5m8XHlA2HrE1mzTrUUUUR8NPk73pZktb7dwYdjI7ad2b1CshYXx07C38Fo-7v_fjMRaqzvlM4-bg7fvLmfQEaaYn1vIrgyLKGf7JsQ_qBEtdyYzsZS_o2-5fDFlroMW3DM15N3jcfJbt10qlP80ecJRVbP7LsiQJh0xfNGAP60N8_sW-pa98cNcId2hTULiIZcLJnIE9-MLVy3dqzBqeSsQexBQpNj5fkNq_8K3CYNpjYk3BJglGPv5CfZc4_jvn0CD8n7pqqoM82LR8ggPcPCPgHT4qlTQFsOpd7d_-60OIsWIsuJxaZzQ/p.png?fv_content=true&size_mode=5"
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
