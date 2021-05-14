import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Grid, CardMedia, Card, Container } from '@material-ui/core';
import useStyles from './useStyles';

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
        <Grid className={classes.root} container spacing={4}>
          
          <Grid className={classes.gridItem1} item xs={12} sm={3} md={4} lg={4}>
               <Box borderBottom={1}>Navigation</Box>
               <Box className={classes.box}><Link className={classes.link} to="/myjourney">My journey</Link></Box>
               <Box className={classes.box}><Link className={classes.link} to="/testinomials">Testimonials</Link></Box>
               <Box className={classes.box}><Link className={classes.link} to="/services">Services</Link></Box>
               <Box className={classes.box}><Link className={classes.link} to="/contact">Contact</Link></Box>
          </Grid>

          <Grid className={classes.gridItem2} item xs={12} sm={3} md={4} lg={4}>
               <Box borderBottom={1}>Follow Me</Box>
               <Box className={classes.box}><a className={classes.link} href="https://www.instagram.com/spiritualmediumclaudiaremy/" target="_blank" rel="noreferrer">Instagram</a></Box>
               <Box className={classes.box}><a className={classes.link} href="https://www.facebook.com/claudialisa.remy" target="_blank" rel="noreferrer">Facebook</a></Box>
          </Grid>

          <Grid className={classes.gridItem1} item xs={12} sm={3} md={4} lg={4}>
               <Card>
               <CardMedia  component="img"
                           image="https://images.unsplash.com/photo-1520638023360-6def43369781?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                           title="Services"
                           className={classes.media} />
               </Card> 
               <Box className={classes.trademark}>LanthierWebDesign &reg; {new Date().getFullYear()}</Box>
          </Grid>
          
        </Grid>
        </Container>
    )
}

export default Footer
