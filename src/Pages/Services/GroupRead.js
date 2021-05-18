import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const GroupRead = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://previews.dropbox.com/p/thumb/ABL9Db4fCVHh-NchZz9KTxxkXSQ-X_cc1_o4sSgL0kMbfoD2S06Z5v4hq8VSnrJYgbeB3t2x-gtJ0PSqmM-YcICx3sr0izYFx3jBWSOtNzUQ-tpqQ68XAG4C2Pofh6BtKknOdxb6dMxXpvy6iA5-cIlSGHI0Ix2k01er0uo8iG-cjTMPpPlOew6gK6LEEh5uJkXpngfa0YippkFFmHS9UjDebM9oJaup0gLrkDVPu_8u-QcXXhjGezVTEWFvpoEmDnss1BoBl027KM-VHRRacrcd0yRpA6vnjqk5dhgBh_ta6AREaMaWC2yNAgRBcHVn8N92vTgiRO3Q2MnvifH4uni9Vd2wuJ43aB6_EksdJnwqCA/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}> Group Reading (4-6 people)<Typography variant="h5" className={classes.price} gutterBottom>price: $60</Typography>
         <Typography variant="h6">Per Individual</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily.
        </Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose2}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default GroupRead
