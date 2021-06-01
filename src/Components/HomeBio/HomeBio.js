import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container } from '@material-ui/core';

import useStyles from './useStyles'

const styles = {
  root: {
    "& .MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-evenly": {
      width: 'auto',
      margin: 'auto'
   }
  }
};

const HomeBio = () => {
    const classes = useStyles();

    return (
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
         
         <Grid item sm={12} xs={12} md={12} lg={12} className={classes.grid}>
           <Card className={classes.card}>
           <CardContent className={classes.content} >
              <CardMedia   component="img"
                           image="https://previews.dropbox.com/p/thumb/ABLoq6ut3-3nzh7_8U8QnVT11B87AvIHiyyXzktX-myOqBmQtBeb7ZkQv-_ndTfNRpYYqataEFPH5f3GbEffjlvd4Y9gOAGQgNOfstbnewDabr2RFj9mHaFm1DQPtjEkOUN-Y9Uh3b8QBnAt4vmCK5TJjuwpvNzjHcDCTdpXvhjlYb4JZzBUsUo68hNxIEE52dfs7VNi8Z7BUVCCBbnCeYZLdXQNk-N3wh0KAzgz3j8WZLqtq_czaP-4QHSTWGfyx8KDMsTgws7tgAzsx-YuzxxYB1CA29tOd8rXZXxieFOxtfUDl5AXEsvwScCBwvOdVPsLLQ706IPC3_WcCYsiu9Nss5huDSuCqAm5IBYe370mJQ/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />
            </CardContent>            
            <div className={classes.cardDirection}>
              <Typography className={classes.text} variant="h3" gutterBottom>Claudia Remy</Typography>
              <Typography className={classes.text2} variant="h6">Hi, my name is Claudia Remy, and I am medium!  I believe the purpose of mediumship is to console the bereaved by demonstrating that life lives on in the Spirit world. I help show people that our loved ones are safe, happy and that mediumship can provide comfort, support and closure for the living as well as for the souls of our loved ones on the other side.</Typography>
              <Link to="/myjourney" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>
               <Button className={classes.button} variant="outlined">Read More ABout My journey</Button>
              </Link>
            </div>        
            </Card>  
         </Grid>

        </Grid>
        </Container>
    )
}

export default HomeBio
