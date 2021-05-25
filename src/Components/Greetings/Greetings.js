import React from 'react';
import { Card, Grid, Typography,  CardMedia, createMuiTheme, MuiThemeProvider, responsiveFontSizes,} from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Greetings = () => {
    const classes = useStyles();
    return (
      <div>
      <style jsx global>{`body { margin: 0px; padding: 0px;}`}</style>

        <Grid className={classes.greetings}>
            <Grid className={classes.item} item xs={12} sm={12} md={12} lg={12}>
              <Card className={classes.container}>
               <CardMedia  component="img"
                           src="https://images.unsplash.com/photo-1493918767339-f968bf7bfd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} /> 
            <MuiThemeProvider theme={theme}>
              <Typography variant="h1" className={classes.title}>A voice for Spirit</Typography> 
               <CardMedia  component="img"
                           src="https://previews.dropbox.com/p/thumb/ABIY8C5bXruLd4o6zgqW6OX4pOokkD7OJUO4vRq4uJydOfvnWSLD6T7HtnW2gteVPzrOonUSSJK0mrUy8MyPVrSIfsVjGgbRDotU5KPKv573smZWXbfIEfqIbcu6rL4wT2kh57qTmAdASIjH-0fwVmYUe8ROTh3AxTER6vWIHm1blldYd1Rlle52oZxyRQz2Zn3E1oCxhtYZjSw7L5KXavE76f6ULSsPizCQ0nOBdHONL_VY8j3vtdn1m1DdhD-cJO1FtU64cuIqdZmicHAq6NK8_mPDn4y215af13BwsPze1kOmxz1yOP3JqKd0rYGVZTgzqBUBN1ckC6kRPVTYKzPo7mvN45TzzbMlhBdYx24gsw/p.png?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media2}/> 
              <Typography variant="h4" className={classes.title2}>An Evidential Spiritual Medium</Typography>  
            </MuiThemeProvider>  
              </Card>     
            </Grid>
        </Grid>
       </div>

    )
}

export default Greetings
