import React from 'react';
import { Card, CardMedia, CardContent, CardHeader, CardActions, Typography } from '@material-ui/core';

import useStyles from './ProductStyles';

const Product = ({ product }) => {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
     };

    return (
        <Card className={classes.root}>
            <CardHeader title={product.name} />
            <CardMedia className={classes.media} image={product.media.source} />
            <CardContent >
                <Typography variant="h5"> {product.seo.title} </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                <div className={classes.cardContent}>
                    <Typography variant="h6">
                        Price: {product.price.formatted_with_symbol}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
              
            </CardActions>
        </Card>
    )
}

export default Product
