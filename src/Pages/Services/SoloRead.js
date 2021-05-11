import React from 'react';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const CardDetails = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={10} xs={10} md={5} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1617489341387-97b20c1aa852?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwaXJpdHVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h5" gutterBottom className={classes.title}> Solo Read  -<span className={classes.price}>price: 50$</span></Typography>
         <Typography className={classes.description} variant="body1">I inadvertently went to See's Candy last week (I was in the mall looking for phone repair), and as it turns out, See's Candy now charges a dollar -- a full dollar -- for even the simplest of their wee confection offerings. I bought two chocolate lollipops and two chocolate-caramel-almond things. The total cost was four-something. I mean, the candies were tasty and all, but let's be real: A Snickers bar is fifty cents. After this dollar-per-candy revelation, I may not find myself wandering dreamily back into a See's Candy any time soon.
        </Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="contained" size="large" onClick={props.handleClose1}>Close</Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default CardDetails
