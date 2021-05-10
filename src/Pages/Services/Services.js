import React from 'react';
import {Grid, Card, CardContent, Typography, Button, Modal, ModalContainer} from '@material-ui/core';

import SoloRead from './SoloRead';

import useStyles from './ServiceStyle';
import './CardBackground.css';

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
        <Grid item sm={12} xs={12} md={6} lg={4}>
        
          <Card>
          <CardContent>
            <div id="cardContainer">
           
             <Typography variant="h5" gutterBottom>Solo reading</Typography>
             <Typography variant="h6" color='textSecondary' gutterBottom>She had a difficult time owning up to her own crazy self.</Typography>
             <Typography variant="h7" gutterBottom className={classes.price}>Price: 25$</Typography>
                
            </div>
            <Button id="button" variant="contained" onClick={handleOpen1}>Details</Button> 
            </CardContent>

          <Modal open={open1} onClose={handleClose1}>
            <SoloRead handleClose1={handleClose1}/>
          </Modal>  

          </Card> 
          </Grid>
          
          <Grid item sm={12} xs={12} md={6} lg={4}>
        
        <Card className={classes.cardContainer}>
         <CardContent>
           <Typography variant="h5" gutterBottom>Solo reading</Typography>
           <Typography variant="h6" color='textSecondary' gutterBottom>She had a difficult time owning up to her own crazy self.</Typography>
           <Typography variant="h7" gutterBottom className={classes.price}>Price: 25$</Typography>
          <Button variant="contained" onClick={handleOpen2}>Details</Button>
         </CardContent>

        <Modal open={open2} onClose={handleClose2}>
         <div>I am number 2</div>
        </Modal>  

        </Card> 
        </Grid>


        </Grid>
        </div>
    )
}

export default Services
