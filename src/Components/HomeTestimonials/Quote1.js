import React from 'react';
import { Card, Typography, Avatar, makeStyles} from '@material-ui/core';
import useStyles from './QuoteStyles';

const Quote1 = () => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
          <div className={classes.TextAvatar}>
            <Typography variant="h6" gutterBottom><span className={classes.quotation}>"</span>Claudia is a very warm, lovely, compassionate & exceptional medium. She provides very detailed and accurate evidence. Claudia is very sensitive to her clients needs. I had the pleasure to receive many messages from my loved ones in spirit through Claudia, which were mind blowing. Every message was delivered with great integrity. Thank you, Claudia, for being a wonderful messenger for our loved ones in Spirit.<span className={classes.quotation}>"</span></Typography>
            <Avatar className={classes.avatar}>V</Avatar>
          </div>
            <Typography className={classes.name} gutterBottom>Vreny Zumbuhl, 2021 </Typography>
        </Card>
    </>
  )
}

export default Quote1
