import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Button, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import useStyles from './ModalStyle';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const GroupRead = props => {
    const classes = useStyles();
    return (

    <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

      <Grid item sm={11} xs={11} md={7} lg={5}>
       <Card className={classes.root}>
        <CardContent className={classes.cardContent}> 

        <CardMedia component="img"
                           image="https://previews.dropbox.com/p/thumb/ABJrTkyZOCVjMX5GJwSJBv6GMwp5q78rJvhDkz7THlKL0Asr9vu_TMmCp4QBqCiOiTF07HxOawYBWOorcBTCJAAerCVKbM5s_9eW1XnmAAlL4AHB1744BtTo6lDeQx1kwraiGVAoHPSF20B3ndMEvkzMe9T0qZAhejB2spaxaL9AQ3Jr6S9ScRkspXa1rAR0zeYy8fIeGTO57sRl_RngopOpjCvsAoIUCq8ja6MF36gTL9QFk9LTsC-UOvWIHvEw92vBtv6F9fpE7lR-anZKhGIQ_GUl_6y-GCW1uraovVCd60B5jNh7KFURQb8JNPmsadruBUXnnPOXHDuSUVLkTqowyOO6MPuyS-wHHETZhL1FwA/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />    
        <MuiThemeProvider theme={theme}>                          
         <Typography variant="h4" gutterBottom className={classes.title}> Group Reading (4-10 people)<Typography variant="h5" className={classes.price} gutterBottom>price: $60</Typography>
         <Typography variant="h6">Per Individual</Typography>
         </Typography>
         <Typography className={classes.description} variant="body1">There’s a lot of laughter and love at these events! Gather a group of family or friends together and connect with your loved ones, privately or in a group setting.
        </Typography>
        </MuiThemeProvider> 
           
         <Button className={classes.button} variant="outlined" size="large" onClick={props.handleClose2}>Close</Button>
         <Button className={classes.button2} variant="outlined" size="large"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>

        </CardContent>  
       </Card>                
      </Grid>
    </Grid>
    )
}

export default GroupRead
