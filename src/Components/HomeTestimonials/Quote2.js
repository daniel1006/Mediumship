import React from 'react';
import { Card, Typography, Avatar } from '@material-ui/core';
import useStyles from './QuoteStyles';

const Quote2 = () => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.card1}>
          <div className={classes.TextAvatar}>
            <Typography variant="h6" gutterBottom><span className={classes.quotation}>"</span>I was blown away by the gift Claudia has I was speechless. I cannot put into words how grateful I was to have this experience because of the recent death in my family. I never thought I would have so many people come through and this helps so much with healing . I wish I could have Claudia next too me 24/7 so I could consistently have contact with the other side . I will recommend her to everyone . & Claudia, thank you so much it was such a pleasure to sit with you!<span className={classes.quotation}>"</span></Typography>
            <Avatar className={classes.avatar}>H</Avatar>
          </div>
            <Typography className={classes.name} gutterBottom>Hailey Galindo, 2021 </Typography>
        </Card>
    </>
  )
}

export default Quote2