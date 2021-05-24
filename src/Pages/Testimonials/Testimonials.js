import React from 'react';
import { Container, Avatar, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Card, Paper } from '@material-ui/core';
import useStyles from './useStyles';

const Testimonials = () => {
    const classes = useStyles();

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Container className={classes.container} maxWidth="lg">

        <MuiThemeProvider theme={theme}>
         <Paper className={classes.paper} elevation="3">
          <Typography className={classes.title} variant="h2">Testimonials</Typography>  
         </Paper>

          <Grid container justify="center" alignItems="center" direction="row" spacing={5}>

           <Grid item sm={12} xs={12} md={6} lg={6}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography gutterBottom><span className={classes.quotation}>"</span>Claudia is a very warm, lovely, compassionate & exceptional medium. She provides very detailed and accurate evidence. Claudia is very sensitive to her clients needs. I had the pleasure to receive many messages from my loved ones in spirit through Claudia, which were mind blowing. Every message was delivered with great integrity. Thank you, Claudia, for being a wonderful messenger for our loved ones in Spirit.<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>V</Avatar>
                </div>
                  <Typography className={classes.name} gutterBottom>Vreny Zumbuhl, 2021 </Typography>
            </Card>
             </Grid>
           </Grid>
 
           <Grid item sm={12} xs={12} md={6} lg={6}>  
             <Grid container direction="column">   
             <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography gutterBottom><span className={classes.quotation}>"</span>I was blown away by the gift Claudia has I was speechless. I cannot put into words how grateful I was to have this experience because of the recent death in my family. I never thought I would have so many people come through and this helps so much with healing . I wish I could have Claudia next too me 24/7 so I could consistently have contact with the other side . I will recommend her to everyone . & Claudia, thank you so much it was such a pleasure to sit with you!<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>H</Avatar>
                </div>
                <Typography className={classes.name} gutterBottom>Hailey Galindo, 2021 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={12} lg={12}>  
             <Grid container direction="column">   
             <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                 <Typography gutterBottom><span className={classes.quotation}>"</span>I fist met Claudia, in October 2019. I was wanting to connect to my loved in spirt. Claudia, for lack of better terms Claudia, "Blew my mind". Not only was she able to connect with my family in Spirt, she was able to describe shared memories, and capture the true essence of my loved ones. Claudia, knew things there is now way she could of know!! What impressed me was her delivery of the messages. She was kind and gentle,I felt supported and safe. At no point did I feel uncomfortable nor judged, Not only is she an incredible medium, she is truly a humble human and a gentle soul. The reading truly was a healing experience for me. I highly recommend Claudia Remy, she truely is an outstanding Spiritual Medium. Claudia, is very well know and has an excellent reputation in the Spirtiual community. As an intuitive and developing medimum, I joined her circle in September 2020. She is so accurate and can provide strong edvience of persons in spirt, that I wanted to learn from her. I have had unbelievably growth in her circle. She pushed me in areas I needed to be pushed. However, did it in such a way I felt safe at no time did I feel pressured. Claudia, really cares about her students, and really supports their development. She is a true servant of Spirt. Not only did she help my development, but she helped with my confidence. She encouraged me to be me, not only was she a coach, she was my cheerleader. I felt encouraged every step of the way!!! She truly is an outstanding mentor/coach.<span className={classes.quotation}>"</span></Typography>
                 <Avatar className={classes.avatar}>T</Avatar>
               </div>
                <Typography className={classes.name} gutterBottom>The odd Orcale aka Tiffany Smith, 2021 </Typography>
          </Card>    
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography gutterBottom><span className={classes.quotation}>"</span>By far the most accurate and amazing medium I have ever had a reading from.<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>M</Avatar>
                </div>
                  <Typography className={classes.name} gutterBottom>Mari Provan-Strauss, February 11, 2020 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography gutterBottom><span className={classes.quotation}>"</span>I have seen Claudia read people...She is AMAZING and bang on!<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>A</Avatar>
                </div>
                  <Typography className={classes.name} gutterBottom>Amirault Susani, July 14, 2019 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography gutterBottom><span className={classes.quotation}>"</span>Claudia had some very accurate insight through her reading with me! Amazing experience.<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>V</Avatar>
                </div>
                  <Typography className={classes.name} gutterBottom>Jaimie Rankin, February 23, 2019 </Typography>
            </Card>
             </Grid>
           </Grid>
         
          </Grid>  
          </MuiThemeProvider>
         </Container>     
    )
}

export default Testimonials
