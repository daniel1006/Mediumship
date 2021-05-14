import React from 'react';
import { Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, } from '@material-ui/core';

import Product from './Product';
import useStyles from './ProductsStyles';

const Products = ({ products }) => {
    const classes = useStyles();

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return ( 
    <main className={classes.content}>
        <div className={classes.toolbar} />

        <MuiThemeProvider theme={theme}>
        <Typography align="center" variant="h2" className={classes.upComingTitle}> Upcoming events</Typography>
        </MuiThemeProvider>

        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
             {products.map((product) => (
                 <Grid item key={product.id} sm={12} xs={12} md={4} lg={3}>
                      <Product product={product} />
                 </Grid>
             ))}
        </Grid>
    </main>
    )
}

export default Products;
