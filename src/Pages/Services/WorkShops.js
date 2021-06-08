import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const WorkShops = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1445878411228-61748c536703?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}>Teachings / Workshops<Typography variant="h5" className={classes.price} gutterBottom>price: $80+</Typography>
         <Typography variant="h6">Price is dependent on platform size and space</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">These events are for those who are seeking to further develop their mediumship or psychic abilities. Whether you are a beginner, advance, or just starting off on your journey I can offer a safe and fun environment to learn in. I love to teach mediumship and spread the knowledge of what I have learned over the years. It is my desire to share what I love to do with everyone no matter where or who you are.</Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose7}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default WorkShops