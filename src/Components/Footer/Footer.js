import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import useStyles from './useStyles';

import './Effects.css'

const Footer = () => {
    const classes = useStyles();
    return (
        <Container  maxWidth="lg">  
        
        <Grid className={classes.root} alignContent="center" justify="center" container spacing={3}>
          
          <Grid className={classes.gridItem1} item xs={12} sm={12} md={6} lg={6}>
               <Box className={classes.header} borderBottom={1}><Typography variant="h5">Navigation</Typography></Box>
               <Box className={classes.box}><Link className="footer-links" to="/"><Typography>Home</Typography></Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/myjourney"><Typography>My Journey</Typography></Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/testimonials"><Typography>Testimonials</Typography></Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/services"><Typography>Services</Typography></Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/contact"><Typography>Contact</Typography></Link></Box>
          </Grid>

          <Grid className={classes.gridItem2} item xs={12} sm={12} md={6} lg={6}>
               <Box className={classes.header} borderBottom={1}><Typography variant="h5">Follow Me</Typography></Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.instagram.com/spiritualmediumclaudiaremy/" target="_blank" rel="noreferrer"><Typography>Instagram</Typography></a></Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.facebook.com/claudialisa.remy" target="_blank" rel="noreferrer"><Typography>Facebook</Typography></a></Box>
          </Grid>

        <Box className={classes.trademark}>LanthierWebDesign &reg; {new Date().getFullYear()}</Box>        
          
        </Grid>
        </Container>
    )
}

export default Footer
