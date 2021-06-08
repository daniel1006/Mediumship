import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const SoloRead = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1520783077-5c05dd1fdc99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}> Private Reading  <Typography variant="h5" className={classes.price} gutterBottom>price: $100 <span className={classes.details}>- (1 person)</span> </Typography></Typography> 
         <Typography variant="h5" className={classes.price} gutterBottom>price: $160 <span className={classes.details}>- (2 persons)</span> </Typography>
         <Typography variant="h6">1 hour</Typography>
         
         <Typography className={classes.description} gutterBottom variant="body1">I am a conduit for the spirit world. I act as the middle spirit between you and your loved ones. For me the Evidence and Validation is an important aspect of spirit communication. It is a honor to be that bridge for you. <br/><br/> I do private reads in person, zoom or by phone.</Typography>
         <Typography className={classes.description2} variant="body1"> </Typography>
        </MuiThemeProvider> 
        
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose1}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>
    
        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default SoloRead
