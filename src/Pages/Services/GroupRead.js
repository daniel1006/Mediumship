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
                           image="https://dl.dropboxusercontent.com/s/dwpwrpmrbs6pn29/unnamed.jpg?dl=0"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}> Group Reading, 2 hour sessions (10-12 people)<Typography variant="h5" className={classes.price} gutterBottom>price: $30</Typography>
         <Typography variant="h6">Per Individual</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">These intimate sessions are a place where friends or family can come together to share their experiences. I work with each member of the group and communicate with their loved ones in spirit within the privacy of their own homes.</Typography>
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
