import React from 'react';
import {Grid, Card, CardContent, CardActionArea, Typography, Modal, CardMedia, Container, Paper} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SoloRead from './SoloRead';
import GroupRead from './GroupRead';
import Functions from './Functions';
import WorkShops from './WorkShops';
import TwoPersonRead from './TwoPersonRead';

import useStyles from './ServiceStyle';

const Services = () => {
  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  //
  const [open5, setOpen5] = React.useState(false);

  const handleOpen5 = () => {
    setOpen5(true);
  };

  const handleClose5 = () => {
    setOpen5(false);
  };
  //
  const [open7, setOpen7] = React.useState(false);

  const handleOpen7 = () => {
    setOpen7(true);
  };

  const handleClose7 = () => {
    setOpen7(false);
  };
//
const [open2, setOpen2] = React.useState(false);

const handleOpen2 = () => {
  setOpen2(true);
};

const handleClose2 = () => {
  setOpen2(false);
};


    return (
      <Container maxWidth="lg">
      <Grid className={classes.mainContainer} container justify="center" alignItems="center" spacing={3}>

      <Grid item sm={12} xs={12} md={12} lg={12}>  
        <Paper className={classes.paper} elevation="3">
        <Typography variant="h2">Services</Typography>
        </Paper>
      </Grid>  

      <Grid item sm={12} xs={12} md={5} lg={5}>  
      <Card className={classes.cardBackground}> 
        <CardActionArea onClick={handleOpen1}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1520783077-5c05dd1fdc99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Private Reading</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen1}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open1} onClick={handleClose1}>
            <SoloRead handleClose1={handleClose1}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={12} xs={12} md={5} lg={5}>   
       <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen2}>  
          <CardMedia component="img"
                           image="https://dl.dropboxusercontent.com/s/dwpwrpmrbs6pn29/unnamed.jpg?dl=0"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Private Group Reading</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen2}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open2} onClick={handleClose2}>
            <GroupRead handleClose2={handleClose2}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={12} xs={12} md={5} lg={5}>   
       <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen5}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Events</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen5}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open5} onClick={handleClose5}>
            <Functions handleClose5={handleClose5}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={12} xs={12} md={5} lg={5}>   
       <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen7}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1445878411228-61748c536703?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Teachings / Workshops</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen7}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open7} onClick={handleClose7}>
            <WorkShops handleClos7={handleClose7}/>
        </Modal>  

       </Card> 
      </Grid>

        </Grid>
        </Container>
    )
}

export default Services
