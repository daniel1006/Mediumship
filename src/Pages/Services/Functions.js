import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Functions = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}>Events, corporate, & private functions<Typography variant="h5" className={classes.price} gutterBottom>price: $80+</Typography>
         <Typography variant="h6">Price is dependent on platform size and space</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">I love to spend the time connecting and bridging two amazing worlds together. No matter how small or large I love to bring in as many messages as possible from our loved ones in spirit. I want people to witness and to know that our loved ones are still with us and that life does continue on. I love an evening where people leave with their hearts full and enjoyed there time in a group experience. <br/><br/> Public events for small groups are held at various venues around the B.C area. <br/><br/> These events run for 2 hours</Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose5}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default Functions