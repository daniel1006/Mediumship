import React, { useRef } from 'react';
import { Container, Avatar, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, Card, Paper, IconButton, Collapse, Tooltip, Button } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './useStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Testimonials = () => {
    const classes = useStyles();

    //More button
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
    setExpanded(!expanded);
     };

     const [expanded2, setExpanded2] = React.useState(false);

    const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
     };

     const [expanded3, setExpanded3] = React.useState(false);

     const handleExpandClick3 = () => {
     setExpanded3(!expanded3);
      };

      const [expanded4, setExpanded4] = React.useState(false);

      const handleExpandClick4 = () => {
      setExpanded4(!expanded4);
       };

       const [expanded5, setExpanded5] = React.useState(false);

       const handleExpandClick5 = () => {
       setExpanded5(!expanded5);
        };

    const myRef = useRef(null)
   
    const executeScroll = () => myRef.current.scrollIntoView()   
    // run this function from an event handler or an effect to execute scroll 

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Container className={classes.container} maxWidth="lg">

        <MuiThemeProvider theme={theme}>
         <Paper className={classes.paper} elevation="3">
          <Typography className={classes.title} variant="h2">Testimonials</Typography>  
         </Paper>

          <Grid container justify="center" alignItems="center" direction="row" spacing={5} ref={myRef}>

          <Grid item sm={12} xs={12} md={6} lg={6}>  
          <Grid container direction="column">   
          <Card className={classes.card1}>

        <Typography className={classes.name} variant="h6" gutterBottom> The Northcott, 2021 </Typography> 

            <div className={classes.TextAvatar}>
              <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>There is one constant in life .... we will all experience a loss...<span className={classes.quotation}>"</span></Typography>
              <Avatar className={classes.avatar}>NC</Avatar>
            </div>

          <Tooltip title="More" arrow>
            <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded, })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"> 
               <ExpandMoreIcon className={classes.more} />
            </IconButton>
          </Tooltip> 

          <Collapse in={expanded} timeout="auto" unmountOnExit >
            <Typography variant="h6" className={classes.quote}><span className={classes.quotation}>"</span>There is one constant in life .... we will all experience a loss of a loved one at one time. The ensuing journey of grief following is not linear - nor is it time stamped. Dependent on the nuances of a particular relationship, we may find ourselves inundated with wildly fluctuating emotives. Highs and lows never felt before. In the last 5 years of our family's life, we have experienced the significant loss of - a mother, grandmother, great grandmother; a husband (soulmate), a father and loving and adored 'Bumpa'; and, a few months ago, a daughter, sister, mother, mother in law, aunt and simply beautiful soul. It is with our deepest gratitude our family was able to receive readings from CLAUDIA - a truly gifted, compassionate and authentic medium. Her passion, enthusiasm and commitment is apparent and contagious. Her readings not only made us both laugh and cry but more importantly, gave us the gift of comfort and peace knowing everlasting love and life eternal exists. Highly recommend Claudia. Our love and gratitude dear friend The Northcott<span className={classes.quotation}>"</span></Typography>       
            <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick();}}> Close </Button> 
          </Collapse>

          </Card>
          </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>  
          <Grid container direction="column">   
          <Card className={classes.card1}>

          <Typography className={classes.name} variant="h6" gutterBottom> The odd Orcale aka Tiffany Smith, 2021 </Typography> 

           <div className={classes.TextAvatar}>
             <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>I fist met Claudia, in October 2019. I was wanting to connect to my loved...<span className={classes.quotation}>"</span></Typography>
             <Avatar className={classes.avatar}>T</Avatar>
          </div>

          <Tooltip title="More" arrow>
           <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded2, })} onClick={handleExpandClick2} aria-expanded={expanded2} aria-label="show more"> 
             <ExpandMoreIcon className={classes.more} />
           </IconButton>
          </Tooltip> 

          <Collapse in={expanded2} timeout="auto" unmountOnExit >
           <Typography variant="h6" gutterBottom className={classes.quote}><span className={classes.quotation}>"</span>I fist met Claudia, in October 2019. I was wanting to connect to my loved in spirt. Claudia, for lack of better terms Claudia, "Blew my mind". Not only was she able to connect with my family in Spirt, she was able to describe shared memories, and capture the true essence of my loved ones. Claudia, knew things there is now way she could of know!! What impressed me was her delivery of the messages. She was kind and gentle,I felt supported and safe. At no point did I feel uncomfortable nor judged, Not only is she an incredible medium, she is truly a humble human and a gentle soul. The reading truly was a healing experience for me. I highly recommend Claudia Remy, she truely is an outstanding Spiritual Medium. Claudia, is very well know and has an excellent reputation in the Spirtiual community. As an intuitive and developing medimum, I joined her circle in September 2020. She is so accurate and can provide strong edvience of persons in spirt, that I wanted to learn from her. I have had unbelievably growth in her circle. She pushed me in areas I needed to be pushed. However, did it in such a way I felt safe at no time did I feel pressured. Claudia, really cares about her students, and really supports their development. She is a true servant of Spirt. Not only did she help my development, but she helped with my confidence. She encouraged me to be me, not only was she a coach, she was my cheerleader. I felt encouraged every step of the way!!! She truly is an outstanding mentor/coach.<span className={classes.quotation}>"</span></Typography>       
           <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick2();}}> Close </Button> 
          </Collapse>

          </Card>
          </Grid>
          </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography className={classes.quote} gutterBottom><span className={classes.quotation}>"</span>I have seen Claudia read people...She is AMAZING and bang on!<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>A</Avatar>
                </div>
                  <Typography className={classes.name} variant="h6" gutterBottom>Amirault Susani, July 14, 2019 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography className={classes.quote} gutterBottom><span className={classes.quotation}>"</span>By far the most accurate and amazing medium I have ever had a reading from.<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>M</Avatar>
                </div>
                  <Typography className={classes.quote} variant="h6" className={classes.name} gutterBottom>Mari Provan-Strauss, 2020 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={4} lg={4}>  
            <Grid container direction="column">   
            <Card className={classes.card1}>
                <div className={classes.TextAvatar}>
                  <Typography className={classes.quote} gutterBottom><span className={classes.quotation}>"</span>Claudia had some very accurate insight through her reading with me! Amazing experience.<span className={classes.quotation}>"</span></Typography>
                  <Avatar className={classes.avatar}>J</Avatar>
                </div>
                  <Typography className={classes.name} variant="h6" gutterBottom>Jaimie Rankin, February 23, 2019 </Typography>
            </Card>
             </Grid>
           </Grid>

           <Grid item sm={12} xs={12} md={6} lg={6}>  
           <Grid container direction="column">   
           <Card className={classes.card1}>

             <Typography className={classes.name} variant="h6" gutterBottom>Diane Bridges, 2021</Typography> 

               <div className={classes.TextAvatar}>
                <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>For anyone considering a visit with a medium - please please do not hesitate. My first visit with Claudia was a gift...<span className={classes.quotation}>"</span></Typography>
                <Avatar className={classes.avatar}>D</Avatar>
               </div>

              <Tooltip title="More" arrow>
               <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded3, })} onClick={handleExpandClick3} aria-expanded={expanded3} aria-label="show more"> 
                <ExpandMoreIcon className={classes.more} />
               </IconButton>
              </Tooltip> 

              <Collapse in={expanded3} timeout="auto" unmountOnExit >
                <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>For anyone considering a visit with a medium - please please do not hesitate. My first visit with Claudia was a gift from my daughter a year after my son died. My life was a mess and I really didn't want to see anyone, but I did go many months later. Since then I have had 2 other readings , my husband, my daughter , my 3 grandchildren each have gone. Each one experienced such so much healing as all of us were so closely connected with my son , their brother and their uncle. A heavy weight filled with so much anger was lifted from each of us as Claudia relayed messages filled with love from him. I wish I could go into detail of what passed to us in the 2 hrs , but no room here. I just will tell you that the greatest impact was to my grandson who at that time was almost 15 and who was so very close to his uncle was suffering from major anger issues and so withdrawn and after his visit with Claudia in a matter of a few days turned around completely- and still to this day is a loving caring young man who we treasure and keep close ️Claudia is very spiritual and so believes in the transitions of our souls , we truly love this special person.<span className={classes.quotation}>"</span></Typography>       
                <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick3();}}> Close </Button> 
              </Collapse>

          </Card>
          </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={6} lg={6}>  
          <Grid container direction="column">   
          <Card className={classes.card1}>

       <Typography className={classes.name} variant="h6" gutterBottom>Elena, 2021</Typography> 

         <div className={classes.TextAvatar}>
          <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>As a bereaved mother I know that an experience with a medium, sometimes, is a matter of death and life...<span className={classes.quotation}>"</span></Typography>
          <Avatar className={classes.avatar}>E</Avatar>
        </div>

        <Tooltip title="More" arrow>
         <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded4, })} onClick={handleExpandClick4} aria-expanded={expanded4} aria-label="show more"> 
          <ExpandMoreIcon className={classes.more} />
         </IconButton>
        </Tooltip> 

        <Collapse in={expanded4} timeout="auto" unmountOnExit >
          <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>As a bereaved mother I know that an experience with a medium, sometimes, is a matter of death and life. If a medium gives the wrong or nonevidential reading a bereaved mother will suffer great harm, loos all the hope, and it might be irreversible. My experience with Claudia Remy was one of the best experiences I have ever encountered! Claudia Is an amazing, fun loving, vibrant, and very Gifted Person! She connects on a level of no doubt and gives evidence you cannot deny! The way Claudia described my loved ones was unbelievable. She not only had all the facts, but Claudia also gives specifics about the deceased person, as if they were friends with Claudia! If you are grieving and want to have a reading, I recommend Claudia Remy as the best medium and caring, and supportive person. She made me laugh and cry but most of all her reading brought me a sense of peace that I do not think I would have gotten from anything else. Although, I am still grieving, I feel such comfort knowing now that my son is still living in spirit, and one day we will be together again. Thank you Claudia, your readings are healing!<span className={classes.quotation}>"</span></Typography>       
          <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick4();}}> Close </Button> 
        </Collapse>

        </Card>
        </Grid>
        </Grid>

        <Grid item sm={12} xs={12} md={6} lg={6}>  
          <Grid container direction="column">   
          <Card className={classes.card1}>

       <Typography className={classes.name} variant="h6" gutterBottom>Patricia Longman, 2021</Typography> 

         <div className={classes.TextAvatar}>
          <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>I have had the pleasure of enjoying two mediumship readings with Claudia thus far in 2021...<span className={classes.quotation}>"</span></Typography>
          <Avatar className={classes.avatar}>P</Avatar>
        </div>

        <Tooltip title="More" arrow>
         <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded5, })} onClick={handleExpandClick5} aria-expanded={expanded5} aria-label="show more"> 
          <ExpandMoreIcon className={classes.more} />
         </IconButton>
        </Tooltip> 

        <Collapse in={expanded5} timeout="auto" unmountOnExit >
          <Typography className={classes.quote} variant="h6" gutterBottom><span className={classes.quotation}>"</span>I have had the pleasure of enjoying two mediumship readings with Claudia thus far in 2021. She is an incredibly gifted, sensitive and loving Soul. Our sessions felt more like time spent with an old friend and the time flew by far too quickly! She accurately described close friends and beloved family members who were present and came forward during the readings. Claudia and I shared laughter and some tears as I recalled stories and verified those eager to speak to me. The love and messages she shared from them during our times together are invaluable to me and I treasure each one. I have no hesitation whatsoever in recommending Claudia to anyone seeking a mediumship reading. I’m already looking forward to our next session together. ♥️<span className={classes.quotation}>"</span></Typography>       
          <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick5();}}> Close </Button> 
        </Collapse>

        </Card>
        </Grid>
        </Grid>
         
          </Grid>  
          </MuiThemeProvider>
         </Container>     
    )
}

export default Testimonials