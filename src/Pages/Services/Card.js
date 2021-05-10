import React from 'react';
import {Grid, Card, CardContent, Typography, Button, Popover} from '@material-ui/core';

import SoloRead from './SoloRead';

import useStyles from './ServiceStyle';

const Services = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
      <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
        <Grid item sm={12} xs={12} md={6} lg={4}>
        
          <Card>
           <CardContent>
             <Typography variant="h5" gutterBottom>Solo reading</Typography>
             <Typography variant="h6" color='textSecondary' gutterBottom>She had a difficult time owning up to her own crazy self.</Typography>
             <Typography variant="h7" gutterBottom className={classes.price}>Price: 25$</Typography>
            <Button onClick={handleClick}>Details</Button>
           </CardContent>

          <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} className={classes.popOver1}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          PaperProps={{
            style: {width: '65%'}
          }}>
            <SoloRead/>
          </Popover>

          </Card> 
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={4}>
        
        <Card>
         <CardContent>
           <Typography variant="h5" gutterBottom>Solo reading</Typography>
           <Typography variant="h6" color='textSecondary' gutterBottom>She had a difficult time owning up to her own crazy self.</Typography>
           <Typography variant="h7" gutterBottom className={classes.price}>Price: 25$</Typography>
          <Button onClick={handleClick}>Details</Button>
         </CardContent>

        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
      anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}>
          <Card/>
        </Popover>

        </Card> 
        </Grid>

        <Grid item sm={12} xs={12} md={6} lg={4}>
        
          <Card>
           <CardContent>
             <Typography variant="h5" gutterBottom>Solo reading</Typography>
             <Typography variant="h6" color='textSecondary' gutterBottom>She had a difficult time owning up to her own crazy self.</Typography>
             <Typography variant="h7" gutterBottom className={classes.price}>Price: 25$</Typography>
            <Button onClick={handleClick}>Details</Button>
           </CardContent>

          <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}>
            
          </Popover>

          </Card> 
          </Grid>

        </Grid>
        </div>
    )
}

export default Services
