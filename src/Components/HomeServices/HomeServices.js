import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardActions, CardContent, Button, Typography, Container, Paper } from '@material-ui/core';
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
            <Paper elevation="10">
                <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1619968987544-0f93d551d5de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
            </Paper>               
            </CardContent>        
          </Card>                
          </Grid>

          <Grid item sm={12} xs={12} md={11} lg={11}>
            <Card className={classes.card2}>
              <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h6" className={classes.textField}>The emphasis of my work is mediumship: making connections with and delivering messages from people who are no longer living to those who still are. I receive information primarily and directly from the dead, spirit guides and angels. I like to say that I act as the bridge between the spiritual and physical world, helping to heal our connections between them.</Typography>
                  <Typography gutterBottom variant="h6" className={classes.textField}>Take a look at the different kinds of services I offer and the ways I can help you and your loved ones.</Typography>
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
