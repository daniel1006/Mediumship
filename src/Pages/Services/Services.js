import React from 'react';
import {Grid, Card, CardContent, CardActionArea, Typography, Modal, CardMedia, Container, Paper} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SoloRead from './SoloRead';
import GroupRead from './GroupRead';
import LargeGroupRead from './LargeGroupRead';
import CorporateEvents from './CorporateEvents';
import Functions from './Functions';
import Teachings from './Teachings';
import WorkShops from './WorkShops';
import TwoPersonRead from './TwoPersonRead';
import Fundraisers from './Fundraisers';

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
  const [open2, setOpen2] = React.useState(false);

  const handleOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  //
  const [open3, setOpen3] = React.useState(false);

  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };
  //
  const [open4, setOpen4] = React.useState(false);

  const handleOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
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
  const [open6, setOpen6] = React.useState(false);

  const handleOpen6 = () => {
    setOpen6(true);
  };

  const handleClose6 = () => {
    setOpen6(false);
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
const [open8, setOpen8] = React.useState(false);

const handleOpen8 = () => {
  setOpen8(true);
};

const handleClose8 = () => {
  setOpen8(false);
};
//
const [open9, setOpen9] = React.useState(false);

const handleOpen9 = () => {
  setOpen9(true);
};

const handleClose9 = () => {
  setOpen9(false);
};


    return (
      <Container maxWidth="lg">
      <Grid className={classes.mainContainer} container justify="center" alignItems="center" spacing={5}>

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
        <CardActionArea onClick={handleOpen8}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Two Person Reading</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen8}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open8} onClick={handleClose8}>
            <TwoPersonRead handleClose8={handleClose8}/>
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
        <CardActionArea onClick={handleOpen3}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Demonstrations</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen3}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open3} onClick={handleClose3}>
            <LargeGroupRead handleClose3={handleClose3}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={12} xs={12} md={5} lg={5}>   
       <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen4}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1515923152115-758a6b16f35e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Corporate Events</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen4}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open4} onClick={handleClose4}>
            <CorporateEvents handleClose4={handleClose4}/>
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
            <Typography className={classes.eventName} variant="h5">Functions</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen5}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open5} onClick={handleClose5}>
            <Functions handleClose5={handleClose5}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid  item sm={12} xs={12} md={5} lg={5}>  
      <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen9}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Fundraisers</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen9}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open9} onClick={handleClose9}>
            <Fundraisers handleClose9={handleClose9}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={12} xs={12} md={5} lg={5}>   
       <Card className={classes.cardBackground}>
        <CardActionArea onClick={handleOpen6}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1569852178898-9605dfd85b4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography className={classes.eventName} variant="h5">Teachings</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen6}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open6} onClick={handleClose6}>
            <Teachings handleClos6={handleClose6}/>
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
            <Typography className={classes.eventName} variant="h5">Workshops</Typography> 
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
