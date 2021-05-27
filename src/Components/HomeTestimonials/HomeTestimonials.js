import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Button, Card } from '@material-ui/core';
import useStyles from './useStyles';

import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';

import { Swiper, SwiperSlide,  } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./styles.css";
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const HomeTestimonials = () => {
    const classes = useStyles();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
      <Container className={classes.container} maxWidth="lg">
        <Grid container justify="center" alignItems="strech" direction="row" spacing={5}>

        <Grid className={classes.title} item xs={12} sm={12} md={8} lg={8}> 
              <Typography variant="h3">Customer Testimonials</Typography>
        </Grid>

        <Grid item sm={12} xs={12} md={12} lg={12}> 
         <Card className={classes.mainCard}>
         <Swiper onSwiper={setThumbsSwiper}
                 pagination={{ clickable: true }}
                 watchSlidesVisibility 
                 watchSlidesProgress 
                 navigation={true} 
                 className="mySwiper">
           
           <SwiperSlide> <Quote2/> </SwiperSlide>
           <SwiperSlide> <Quote3/> </SwiperSlide>
           <SwiperSlide> <Quote1/> </SwiperSlide>

        </Swiper>
        </Card>
        <Button className={classes.button} size="large" variant="outlined"><Link to="/testimonials" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> View More </Link></Button> 
        </Grid>

       </Grid>
    </Container>
   
    )
}

export default HomeTestimonials