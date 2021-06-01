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
<Grid container direction="row" justify="center" alignItems="center" spacing={3}>
 
 <Grid item sm={12} xs={12} md={12} lg={12} className={classes.grid}>
   <Card className={classes.card}>
          
    <div className={classes.cardDirection}>
      <Typography className={classes.text} variant="h3" gutterBottom>Services</Typography>
      <Typography className={classes.text2} variant="h6">The emphasis of my work is mediumship: making connections with and delivering messages from people who are no longer living to those who still are. I receive information primarily and directly from the dead, spirit guides and angels. I like to say that I act as the bridge between the spiritual and physical world, helping to heal our connections between them.</Typography>
      <Typography className={classes.text2} variant="h6">Take a look at the different kinds of services I offer and the ways I can help you and your loved ones.</Typography>
      <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
       <Button className={classes.button} variant="outlined">View All Services</Button>
      </Link>
    </div>    

    <CardContent className={classes.content} >
      <CardMedia   component="img"
                   image="https://images.unsplash.com/photo-1582107208835-973713624596?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=281&q=80"
                   title="Services"
                   className={classes.media} />
    </CardContent>   
    </Card>  

 </Grid>
</Grid>
</Container>
    )
}

export default HomeServices
