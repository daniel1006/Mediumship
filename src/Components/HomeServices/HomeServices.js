import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import useStyles from './styles';

const HomeServices = () => {
  const classes = useStyles();
    return (
    <div>   
        <Grid container direction="row" justify="space-between" alignItems="center" spacing={5}>
          <Grid item xs={5}>
            <Card className={classes.root}>
              <Typography variant="h3" gutterBottom>Services</Typography>
              <CardActionArea>
                <CardMedia component="img"
                           src="https://images.unsplash.com/photo-1505079403222-b5bbf1484f19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                           title="Services image"
                           className={classes.media} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={5}>
            second
          </Grid>
          <CardActions disableSpacing className={classes.cardActions}>      
          </CardActions>
       </Grid>
    </div>
    )
}

export default HomeServices
