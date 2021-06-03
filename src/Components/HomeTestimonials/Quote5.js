import React from 'react';
import { Card, Typography, Avatar } from '@material-ui/core';
import useStyles from './QuoteStyles';

const Quote4 = () => {
  const classes = useStyles();

  return (
    <>
        <Card className={classes.root}>
            <div className={classes.TextAvatar}>
              <Typography className={classes.quoteText} variant="h6" gutterBottom><span className={classes.quotation}>"</span>Claudia is one of the most gifted mediums I have gone to. The information she brought through was accurate and specific. She was able to pick up on things that nobody else knew but me. She was extremely generous with her time and ethical in her delivery. She kindly booked me in for a free follow-up chat about one of the messages that had come through in a previous reading to provide clarity. I left my reading full of hope and at peace. She is truly gifted!<span className={classes.quotation}>"</span></Typography>
              <Avatar className={classes.avatar}>N</Avatar>
            </div>
              <Typography className={classes.name} gutterBottom variant="h6">Neena T, 2021</Typography>
        </Card>
    </>
  )
}

export default Quote4