import React from 'react';
import { Card, Container, Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia,} from '@material-ui/core';
import useStyles from './useStyles';

const Greetings = () => {
    const classes = useStyles();
    return (
      <div>
      <style jsx global>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid className={classes.greetings}>
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.container}>
               <CardMedia  component="img"
                           image="https://images.unsplash.com/photo-1493918767339-f968bf7bfd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} /> 
              <Typography variant="h1" className={classes.title}>Claudia Remy</Typography> 
              <Typography variant="h4" className={classes.title2}>Evidential Spiritual Medium</Typography>  
              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Greetings
