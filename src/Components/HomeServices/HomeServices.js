import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardActions, CardContent, Button, Typography,  } from '@material-ui/core';
import useStyles from './styles';

import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';

const HomeServices = () => {
  const classes = useStyles();

    return (
    <div>   
        <Grid className={classes.grid} container direction="row" justify="center" alignItems="center" spacing={3}>

          <Grid item sm={12} xs={12} md={6} lg={6}>
          <Card className={classes.root}>
            <CardContent className={classes.cardContent}> 
            <Typography variant="h2" gutterBottom className={classes.serviceTitle}> Services </Typography>
                <CardMedia component="img"
                           image="https://images.unsplash.com/photo-1617489341387-97b20c1aa852?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHNwaXJpdHVhbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                           title="Services"
                           className={classes.media} />
            </CardContent>        
          </Card>                
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>
            <Card className={classes.root2}>
              <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over</Typography>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over The wolves stopped in their tracks, sizing </Typography>
                  <Typography gutterBottom variant="body1" className={classes.textField}>The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over  </Typography>
                  <ArrowDownwardRoundedIcon fontSize="medium" className={classes.arrow}/>
                  <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
                    <Button variant="contained" size="large" className={classes.button}> View Services </Button>
                  </Link>
            </CardContent>
           </Card>
          </Grid>

          <CardActions disableSpacing className={classes.cardActions}>      
          </CardActions>
       </Grid>
    </div>
    )
}

export default HomeServices
