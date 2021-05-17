import React from 'react';
import {Grid, Card, CardContent, CardActionArea, Typography, Modal, CardMedia} from '@material-ui/core';

import SoloRead from './SoloRead';

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

    return (
      <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={4} lg={3}>  
      <Card>
        <CardActionArea onClick={handleOpen1}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1617489341387-97b20c1aa852?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwaXJpdHVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Solo read</Typography> 
            <Typography variant="h5" color='textSecondary' className={classes.price}>50$</Typography> 
           </CardContent>
        </CardActionArea>

        <Modal className={classes.modal} open={open1} onClose={handleClose1}>
            <SoloRead handleClose1={handleClose1}/>
        </Modal>  

       </Card> 
      </Grid>
          
      <Grid item sm={11} xs={11} md={4} lg={3}>
        
       <Card>
        <CardActionArea onClick={handleOpen2}>  
          <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1617489341387-97b20c1aa852?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwaXJpdHVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           title="Services"
                           className={classes.media} />
           <CardContent className={classes.cardContent}>
            <Typography variant="h5">Solo read</Typography> 
            <Typography variant="h5" color='textSecondary' className={classes.price}>50$</Typography> 
           </CardContent>
        </CardActionArea>

        <Modal open={open2} onClose={handleClose2}>
            <div>we are here we are here we are here</div>
        </Modal>  

       </Card> 
      </Grid>


        </Grid>
        </div>
    )
}

export default Services
