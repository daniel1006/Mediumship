import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Avatar, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Button, Box } from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const HomeTestimonials = () => {
    const classes = useStyles();

    const quotes = {
       
       1: {
        client: "Mari Provan-Strauss",
        date: "February, 11 2020",
        quote: "By far the most accurate and amazing medium I have ever had a reading from.",
    },
    2: {
        client: "Jaimie Rankin",
        date: "February, 23 2019",
        quote: "Claudia had some very accurate insight through her reading with me! Amazing experience.",
    }
    }


    return (
        <Container className={classes.container} maxWidth="lg">
        <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={4}>
     
          <Grid className={classes.grid1} item xs={12} sm={12} md={8} lg={8}> 
              <Typography variant="h3">Customer Testimonials</Typography>
          </Grid>

          <Grid className={classes.grid2} item xs={12} sm={12} md={8} lg={8}>
            <MuiThemeProvider theme={theme}>  
              <Typography gutterBottom>"Claudia is one of the most gifted mediums I have gone to. The information she brought through was accurate and specific. She was able to pick up on things that nobody else knew but me. She was extremely generous with her time and ethical in her delivery. She kindly booked me in for a free follow-up chat about one of the messages that had come through in a previous reading to provide clarity. I left my reading full of hope and at peace. She is truly gifted!"</Typography>
              <Avatar className={classes.avatar}>N</Avatar>
            </MuiThemeProvider>  
          </Grid>    
          
          <Grid className={classes.grid3} item xs={12} sm={12} md={8} lg={8}>
              <div className={classes.dateTime}>
              <Typography className={classes.name} gutterBottom>Nenna Tiwanna, </Typography>
              <Typography className={classes.date} gutterBottom>May, 14 2021</Typography>  
              </div>
              <Button className={classes.button} variant="outlined"><Link to="/testimonials" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> View More </Link></Button> 
          </Grid>  

        </Grid>
        </Container>      
    )
}

export default HomeTestimonials