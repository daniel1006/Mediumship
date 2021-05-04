import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@material-ui/core';

import useStyles from './EventStyles';

const Events = ({ events }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={events.image} title={events.name} />
            <CardContent >
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom >
                        {events.name}
                    </Typography>
                    <Typography variant="h5">
                        {events.price}
                    </Typography>
                </div>
            <Typography variant="body2" color="textSecondary">{events.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              
            </CardActions>
        </Card>
    )
}

export default Events
