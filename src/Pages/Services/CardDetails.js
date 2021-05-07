import React from 'react';
import { Grid, Card, CardMedia, CardActions, CardContent, Button, Typography, Divider, } from '@material-ui/core';
import useStyles from './ServiceStyle';

const CardDetails = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

<Grid item sm={12} xs={12} md={6} lg={6}>
<Card className={classes.root}>
  <CardContent className={classes.cardContent}> 
  <Typography variant="h2" gutterBottom className={classes.serviceTitle}> Services </Typography>
  <Divider variant="middle" />
      <CardMedia component="img"
                 image="https://images.unsplash.com/photo-1617489341387-97b20c1aa852?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwaXJpdHVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                 title="Services"
                 className={classes.media} />
  </CardContent>        
</Card>                
</Grid>
</Grid>
        </div>
    )
}

export default CardDetails
