import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardActions, CardContent, Button, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

const styles = {
  root: {
    "& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-evenly": {
      width: 'auto',
      margin: 'auto'
   }
  }
};

const HomeServices = () => {
  const classes = useStyles();

    return (
      <Container maxWidth="lg">  
        <Grid className={classes.grid} container direction="column" justify="center" alignItems="center" spacing={3}>

          <Grid item sm={12} xs={12} md={11} lg={11}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}> 
            <Typography variant="h2" gutterBottom className={classes.serviceTitle}> Services </Typography>
                <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1619968987544-0f93d551d5de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
            </CardContent>        
          </Card>                
          </Grid>

          <Grid item sm={12} xs={12} md={11} lg={11}>
            <Card className={classes.card2}>
              <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over</Typography>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over The wolves stopped in their tracks, sizing </Typography>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over  </Typography>
                  <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                    <Button variant="outlined" className={classes.button}> View Services </Button>
                  </Link>
            </CardContent>
           </Card>
          </Grid>

          <CardActions  className={classes.cardActions}>      
          </CardActions>
       </Grid>
    </Container>
    )
}

export default HomeServices
