import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import ReactShareSocial from 'react-share-social' ;
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Collapse, Tooltip, Menu, Button} from '@material-ui/core';

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
            <CardContent >

             <div>
              <Typography variant="h5" gutterBottom> { product.name } </Typography>
              <Typography className={classes.carddate} variant="h7" gutterBottom> {product.seo.title} </Typography>
            </div>
            
        <Tooltip title="Share" arrow>
            <IconButton aria-label="share" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <ShareIcon/>
            </IconButton>
        </Tooltip>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} getContentAnchorEl={null} onClose={handleClose} 
         anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
            <ReactShareSocial 
            url ="url_to_share.com" 
            socialTypes={['facebook','twitter','reddit','linkedin', ]} 
            style={style}/>
        </Menu>

        <Tooltip title="More" arrow>
            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded, })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"> 
               <ExpandMoreIcon className={classes.more} />
            </IconButton>
        </Tooltip>
        
        
        <Collapse in={expanded} timeout="auto" unmountOnExit >
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary" className={classes.cardText}/>
                <div className={classes.cardContent}>
                    <Typography style={{paddingTop: 6}} body="h1">
                        Price: {product.price.formatted_with_symbol}
                    </Typography>
                    <Button className={classes.button} variant="outlined"><Link to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}>Contact</Link></Button>
                </div>     
        </Collapse>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>      
            </CardActions>
        </Card>
        </>
    )
}

export default Product
