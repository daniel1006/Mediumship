import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Grid, Typography, Button, Card } from '@material-ui/core';
import useStyles from './useStyles';

import Quote1 from './Quote1';
import Quote2 from './Quote2';
import Quote3 from './Quote3';
import Quote4 from './Quote4';

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

const HomeTestimonials = () => {
    const classes = useStyles();

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
      <Container className={classes.container} maxWidth="lg">
        <Grid className={classes.mainGrid} container justify="center" alignItems="strech" direction="row" spacing={3}>

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
           <SwiperSlide> <Quote4/> </SwiperSlide>
           <Button className={classes.button} size="large" variant="outlined"><Link to="/testimonials" style={{color:"white", textDecoration: "none"}}> View More </Link></Button>

        </Swiper>
        
        </Card>
        
        </Grid>

       </Grid>
    </Container>
   
    )
}

export default HomeTestimonials