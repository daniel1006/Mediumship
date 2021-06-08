import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import ReactShareSocial from 'react-share-social' ;
import { Card, CardMedia, CardContent, CardActionArea, Typography, IconButton, Collapse, Tooltip, Menu, Button, Modal} from '@material-ui/core';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './ProductStyles';

const Product = ({ product }) => {
    const classes = useStyles();

//More button
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
     };

// Share Button
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const style = {
        background: 'none',
        color: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        padding: 15,
    }

    return (
       <>
        <Card className={classes.card}>  
            <CardMedia className={classes.media} image={product.media.source} />
             <CardContent>

              <div>
                <Typography className={classes.eventName} variant="h5" gutterBottom> { product.name } </Typography>
             </div>

             <Tooltip title="Share" arrow>
                <IconButton aria-label="share" aria-controls="simple-menu" aria-haspopup="true">
                   <ShareIcon className={classes.share}/>
                </IconButton>
            </Tooltip>

            </CardContent>
        </Card>
        </>
    )
}

export default Product
