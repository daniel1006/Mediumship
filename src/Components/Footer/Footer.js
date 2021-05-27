import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Grid, CardMedia, Card, Container } from '@material-ui/core';
import useStyles from './useStyles';

import './Effects.css'

const Footer = () => {
    const classes = useStyles();
    return (
        <Container className="container" maxWidth="lg">  
        
        <Grid className={classes.root} container spacing={4}>
          
          <Grid className={classes.gridItem1} item xs={12} sm={12} md={6} lg={6}>
               <Box className={classes.header} borderBottom={1}>Navigation</Box>
               <Box className={classes.box}><Link className="footer-links" to="/">Home</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/myjourney">My journey</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/testimonials">Testimonials</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/services">Services</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/contact">Contact</Link></Box>
          </Grid>

          <Grid className={classes.gridItem2} item xs={12} sm={12} md={6} lg={6}>
               <Box className={classes.header} borderBottom={1}>Follow Me</Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.instagram.com/spiritualmediumclaudiaremy/" target="_blank" rel="noreferrer">Instagram</a></Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.facebook.com/claudialisa.remy" target="_blank" rel="noreferrer">Facebook</a></Box>
          </Grid>

       
        <Box className={classes.trademark}>LanthierWebDesign &reg; {new Date().getFullYear()}</Box>
        
          
        </Grid>
        </Container>
    )
}

export default Footer
