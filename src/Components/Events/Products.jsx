import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product';
import useStyles from './ProductsStyles';

const Products = ({ products }) => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5} >
             {products.map((product) => (
                 <Grid item key={product.id} xs={12} sm={12} md={12} lg={12}>
                      <Product product={product} />
                 </Grid>
             ))}
        </Grid>
    </main>
    )
}

export default Products;
