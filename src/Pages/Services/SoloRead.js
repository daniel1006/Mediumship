import React from 'react';
import { Grid, Card, CardMedia, CardActions, CardContent, Button, Typography, Divider, } from '@material-ui/core';
import useStyles from './ServiceStyle';

const CardDetails = props => {
    const classes = useStyles();
    return (
        <div  style={{paddingTop: '15%'}}>
            <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

<Grid item sm={12} xs={12} md={6} lg={6}>
<Card className={classes.root}>
  <CardContent className={classes.cardContent}> 
  <Typography variant="h2" gutterBottom className={classes.serviceTitle}> Solo Read </Typography>
  <Button onClick={props.handleClose1}>Close</Button>
   
  </CardContent>        
</Card>                
</Grid>
</Grid>
        </div>
    )
}

export default CardDetails
