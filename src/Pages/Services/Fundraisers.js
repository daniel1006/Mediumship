import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Fundraisers = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}> Fundraisers <Typography variant="h5" className={classes.price} gutterBottom>price: $60</Typography>
         <Typography variant="h6">Per Individual</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">There’s a lot of laughter and love at these events! Gather a group of family or friends together and connect with your loved ones, privately or in a group setting.
        </Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose9}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default Fundraisers
