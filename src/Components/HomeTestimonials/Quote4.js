import React from 'react';
import { Card, Typography, Avatar } from '@material-ui/core';
import useStyles from './QuoteStyles';

const Quote4 = () => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <div className={classes.TextAvatar}>
              <Typography variant="h6" gutterBottom><span className={classes.quotation}>"</span>Believe it or not, Claudia can communicate with our beloved loved ones on the other side. I met Claudia about 3 years ago after struggling with the loss of our little Trixie girl. She has the special ability to connect and bring wonderful messages from the other side, an invaluable gift when you are grieving. With a loving and often playful way, she provides evidential proof they truly are here with us. The messages that she has delivered were so accurate, absolutely no one else would have known those private and specific details. I now think that my family and friends (including my Dogs) on the other side must have a direct line to dial her up. I highly encourage you to book a reading with Claudia, you will not be disappointed!<span className={classes.quotation}>"</span></Typography>
              <Avatar className={classes.avatar}>L</Avatar>
            </div>
              <Typography className={classes.name} gutterBottom>Leanne S, 2021</Typography>
        </Card>
    </>
  )
}

export default Quote4