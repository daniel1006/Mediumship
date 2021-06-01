import React from 'react';
import { Card, Typography, Avatar } from '@material-ui/core';
import useStyles from './QuoteStyles';

const Quote3 = () => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <div className={classes.TextAvatar}>
              <Typography variant="h6" gutterBottom><span className={classes.quotation}>"</span>Claudia is a highly respected and sought-after medium at Gateway in Calgary. I was in her mediumship class and really enjoyed her creative practice activities. One would not want to miss her classes. She is a gifted medium and teacher. She tunes into us when we are working and knows what direction to encourage us to improve our readings. We couldn’t get away with anything as Claudia tunes into what we are doing and where we are at energetically. Loved Claudia’s teaching as she pushed me beyond what I thought were my limits. Great Medium, Great teacher, Loved by all.<span className={classes.quotation}>"</span></Typography>
              <Avatar className={classes.avatar}>B</Avatar>
            </div>
              <Typography className={classes.name} gutterBottom>Barb Wright, 2021</Typography>
        </Card>
    </>
  )
}

export default Quote3