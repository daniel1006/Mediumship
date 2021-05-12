import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Collapse, Tooltip, Menu, Button, Paper} from '@material-ui/core';

import useStyles from './useStyles'

const HomeBio = () => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
         
         <Grid item sm={12} xs={12} md={8} lg={8} className={classes.root}>
           <Card className={classes.card}>
            <div className={classes.cardDirection}>
              <Typography className={classes.text} variant="h3" gutterBottom>Claudia Remy</Typography>
              <Typography className={classes.text2} variant="body1">You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her. I don't know how I know, but I just do.
              </Typography>
              <Link to="/myjourney" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
               <Button className={classes.button} variant="contained">My journey</Button>
              </Link>
            </div>
             <CardContent >
              <CardMedia   component="img"
                           image="https://previews.dropbox.com/p/thumb/ABJ4VtLLiLccsjzoT9R2VawQwAtAXW3bstxubZt8x2E93QPgczjb2Q3mWJC-Kp4rsNZvM2MlnwA34BJ08EuQ41AsAAHzc8nN3kk4BAQuEP3F_i7L7lWRnCWnTMPZPVlbM00pxRTuA0PCJrWQoNM6kOXQ63XewNvrXymMzrTperb7439SAFwSQUHeYz0tv9fp_FJD4fxTGrwdZ0l2DITwJcahyiJPEI1Dk-O0EbofvQmwIVbp1xY-K-_YL-iwyY5cbZcfGZa2zmCZGK_WGVOmwi57ciJusWBHl9nnLzML2t4IWeu6JsVKJwA9AaG6xYn86brHXYIQNboFaWChQH_Y04UvZX5o2_Gx7dl3K0Vk1JXOYA/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />
            </CardContent>               
            </Card>  
         </Grid>

        </Grid>
        
    )
}

export default HomeBio
