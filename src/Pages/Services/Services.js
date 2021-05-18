import React from 'react';
import {Grid, Card, CardContent, CardActionArea, Typography, Modal, CardMedia, Container} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import SoloRead from './SoloRead';
import GroupRead from './GroupRead';
import LargeGroupRead from './LargeGroupRead';
import CorporateEvents from './CorporateEvents';
import Functions from './Functions';
import Teachings from './Teachings';
import WorkShops from './WorkShops';

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


    return (
      <Container maxWidth="lg">
      <Grid className={classes.root} container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
        <Typography variant="h2">Services</Typography>

      <Grid  item sm={11} xs={11} md={4} lg={4}>  
      <Card>
        <CardActionArea onClick={handleOpen1}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1520783077-5c05dd1fdc99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Private Reading</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen1}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open1} onClick={handleClose1}>
            <SoloRead handleClose1={handleClose1}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen2}>  
          <CardMedia component="img"
                           image="https://previews.dropbox.com/p/thumb/ABL9Db4fCVHh-NchZz9KTxxkXSQ-X_cc1_o4sSgL0kMbfoD2S06Z5v4hq8VSnrJYgbeB3t2x-gtJ0PSqmM-YcICx3sr0izYFx3jBWSOtNzUQ-tpqQ68XAG4C2Pofh6BtKknOdxb6dMxXpvy6iA5-cIlSGHI0Ix2k01er0uo8iG-cjTMPpPlOew6gK6LEEh5uJkXpngfa0YippkFFmHS9UjDebM9oJaup0gLrkDVPu_8u-QcXXhjGezVTEWFvpoEmDnss1BoBl027KM-VHRRacrcd0yRpA6vnjqk5dhgBh_ta6AREaMaWC2yNAgRBcHVn8N92vTgiRO3Q2MnvifH4uni9Vd2wuJ43aB6_EksdJnwqCA/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Group Reading</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen2}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open2} onClick={handleClose2}>
            <GroupRead handleClose2={handleClose2}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen3}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Demonstrations</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen3}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open3} onClick={handleClose3}>
            <LargeGroupRead handleClose3={handleClose3}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen4}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1515923152115-758a6b16f35e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Corporate Events</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen4}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open4} onClick={handleClose4}>
            <CorporateEvents handleClose4={handleClose4}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen5}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Functions</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen5}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open5} onClick={handleClose5}>
            <Functions handleClose5={handleClose5}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen6}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1569852178898-9605dfd85b4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Teachings</Typography> 
            <ExpandMoreIcon className={classes.more} onClick={handleOpen6}/>
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open6} onClick={handleClose6}>
            <Teachings handleClos6={handleClose6}/>
        </Modal>  

       </Card> 
      </Grid>

      <Grid item sm={11} xs={11} md={4} lg={4}>   
       <Card>
        <CardActionArea onClick={handleOpen7}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1445878411228-61748c536703?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Workshops</Typography> 
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
