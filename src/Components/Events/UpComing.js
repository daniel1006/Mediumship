import React from 'react';
import { Grid } from '@material-ui/core';

import Events from './Events';
import useStyles from './UpComingStyles';

const events = [
    {id: 1, name: 'shoes', description: 'running' , price: '€5' },
    {id: 2, name: 'shoes', description: 'running' , price: '€10'},
]

const UpComing = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5} zeroMinWidth >
             {events.map((events) => (
                 <Grid item key={events} xs={4} sm={1} md={1} lg={2}>
                      <Events events={events} />
                 </Grid>
             ))}
        </Grid>
    </main>
    )
}

export default UpComing;
