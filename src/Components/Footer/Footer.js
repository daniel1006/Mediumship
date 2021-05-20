import React from 'react';
import {Link} from 'react-router-dom';
import { Box, Grid, CardMedia, Card, Container } from '@material-ui/core';
import useStyles from './useStyles';

import './Effects.css'

const Footer = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
        <Grid className={classes.root} container spacing={4}>
          
          <Grid className={classes.gridItem1} item xs={12} sm={3} md={4} lg={4}>
               <Box className={classes.header} borderBottom={1}>Navigation</Box>
               <Box className={classes.box}><Link className="footer-links" to="/">Home</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/myjourney">My journey</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/testimonials">Testimonials</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/services">Services</Link></Box>
               <Box className={classes.box}><Link className="footer-links" to="/contact">Contact</Link></Box>
          </Grid>

          <Grid className={classes.gridItem2} item xs={12} sm={3} md={4} lg={4}>
               <Box className={classes.header} borderBottom={1}>Follow Me</Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.instagram.com/spiritualmediumclaudiaremy/" target="_blank" rel="noreferrer">Instagram</a></Box>
               <Box className={classes.box}><a className="footer-links" href="https://www.facebook.com/claudialisa.remy" target="_blank" rel="noreferrer">Facebook</a></Box>
          </Grid>

          <Grid className={classes.gridItem1} item xs={12} sm={3} md={4} lg={4}>
               <Card className={classes.media}>
               <CardMedia   component="img"
                           image="https://previews.dropbox.com/p/thumb/ABIY8C5bXruLd4o6zgqW6OX4pOokkD7OJUO4vRq4uJydOfvnWSLD6T7HtnW2gteVPzrOonUSSJK0mrUy8MyPVrSIfsVjGgbRDotU5KPKv573smZWXbfIEfqIbcu6rL4wT2kh57qTmAdASIjH-0fwVmYUe8ROTh3AxTER6vWIHm1blldYd1Rlle52oZxyRQz2Zn3E1oCxhtYZjSw7L5KXavE76f6ULSsPizCQ0nOBdHONL_VY8j3vtdn1m1DdhD-cJO1FtU64cuIqdZmicHAq6NK8_mPDn4y215af13BwsPze1kOmxz1yOP3JqKd0rYGVZTgzqBUBN1ckC6kRPVTYKzPo7mvN45TzzbMlhBdYx24gsw/p.png?fv_content=true&size_mode=5"
                           title="Services"
                           />
               </Card> 
               <Box className={classes.trademark}>LanthierWebDesign &reg; {new Date().getFullYear()}</Box>
          </Grid>
          
        </Grid>
        </Container>
    )
}

export default Footer
