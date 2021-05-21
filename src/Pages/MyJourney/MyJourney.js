import React from 'react';
import {Grid, Card, Typography, CardMedia, Container,createMuiTheme, MuiThemeProvider, responsiveFontSizes, Paper} from '@material-ui/core';
import useStyles from './useStyles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const MyJourney = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container} maxWidth="lg">

       <MuiThemeProvider theme={theme}>
       <Paper className={classes.paper} elevation="3">
         <Typography className={classes.title} variant="h2">My Journey So Far</Typography>  
         </Paper>
         <Grid className={classes.grid} container justify="center" alignItems="center" direction="row" spacing={3}>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">   
             <Typography body="1">My spiritual journey began in 2013. Though I’ve been sensitive to Spirit since I was a child, it was only after marriage, children and a career that my mediumship started to unfold. When you get to a point where Spirit is whispering in your ear telling you, “It’s Time!” and the universe starts sending you messages, I figured I should begin listening. My awareness to spirits as well as people’s emotions or thoughts (even the ones they didn’t know for themselves) sent me searching for answers.  I started reading everything relevant that I could get my hands on sending me on the most amazing and exciting journey ever!</Typography>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Card>
              <CardMedia   component="img"
                           image="https://previews.dropbox.com/p/thumb/ABLK4ODXBlJPxyKfgA4da8bX1S6Kr0qpg2Ff_AMdY-wbnFz1UX9I2ou6J9c4WirahciuTyPaWZuFUG1A71uxP6ubpomB_tgzrlq-fnSef2pXoTcougIDUed_vy_CQ2ngjUAvSE4uNCtKYHUrcTwrY6VwYnX6ZdGjXYHZqAZ46l1UN4KobOLn0vYSRLIr3paLcvNJVtDl31-tPXqiB6E8zb_I7TnR60RatrnJO8hIe-dqPrgAe67M16LnQL9AcGfIFRZIMTELs2Q3W3wuJCr8k57asuvkWRncfJ2_XYFknH2NQWKDXfREAJLc2fkWTweIDkdJddAhFqiEZSSsuxzwtNoraAdv2SxnPfuA2ZIh_jO4YA/p.jpeg?fv_content=true&size_mode=5"
                           title="Services"
                           className={classes.media} />
             </Card>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography body="1">As a child, I always knew I was different. I grew up in a very strict Roman Catholic household where I was the fifth of six children, the youngest being my twin sister.  I came from a family where my great uncle on my father's side was a medium and a history of psychics were apparent on my mother’s side.  I could always sense Spirit around me. Whether it was chills or a warm feeling. I always sensed that I wasn't alone. My curiosity about the spirit world, angels and death is something that has been an innate part of me. I remember spirits coming into my room at night scaring the heck out of me. My earliest memory was when I was in my crib. I remember seeing a very tall man standing before me trying to settle in bed.... I saw him again when I was playing with my twin sister outside of our home in Montreal, Quebec. He was watching my sister and I play. I remember looking confused because I could see right through him... I think at that point is when I really started to get curious about what happens to us after we die. </Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography body="1">I was nine years old when my maternal grandmother died, and I remember it as though it was yesterday. It wasn't too long after her death. I awoke in the middle of the night.... I remember her waking me up. She was beautiful. For a nine-year-old it was as though someone was shining down this light above her, she just sparkled. It was breathtaking to see. she took my hand and started stroking it. She didn't speak but telepathically I could hear everything she said to me. She told me never to worry and that she will always be with me to guide me through my journey... From that night on my grandmother has been by my side and has continued to guide and support me.</Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Card>
              <CardMedia   component="img"
                           image=" https://images.unsplash.com/photo-1570645053711-5767083d2518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                           title="Services"
                           className={classes.media} />
             </Card>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Typography body="1">I dreamt of my first child at 12 and knew I was going have a girl. I understood exactly how she was going to look like. The same thing happened with my son. It was Spirit who came to me those nights. I also dreamed of my uncle Ralph, after he passed away.  He guided me on a journey to the other side. Another experience happened when a friend from high school died. She came to me after she passed and still continues to come and support me. I’ve also been confronted with events that have not yet come to pass. One such example is when I envisioned a car crash. I was staring at the corner of an intersection and from the initial impact knew it deadly. I recognized that this was bound to happen. The very next day I was driving by that same intersection heading to work and saw the accident.</Typography>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography body="1">I always felt and knew that life continued after death. I can’t explain why, but I always had a knowing...It took many years until I was in my 40’s that I had to do something... I spent years hiding my gifts and afraid to speak to anyone about them because I was afraid people would think I was a lunatic.</Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
          <Card>
              <CardMedia   component="img"
                           image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                           title="Services"
                           className={classes.media} />
             </Card>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography className={classes.ending} body="1">Today I continue to facilitate and volunteer my time between two Calgary-based Spiritual Churches. In addition, I volunteer to do platforms, message services, demonstrations, mini readings and special events whilst participating in weekly mediumship circles. While there are a few different forms of mediumship, I work as a mental medium, which means I communicate with spirits through the use of telepathy. Spirits impress my mind and body with thoughts and feelings that come in the form of "clairs." I mentally "hear" (clairaudience), "see" (clairvoyance), "know" (claircognizance) and/or "feel" (clairsentience) messages from spirits.  This work allows me to be a voice and a conduit of the spirit world, and it brings me great joy to help others heal while bringing relief and comfort to everyone I connect with.</Typography>
          </Grid>

         </Grid>  
         </MuiThemeProvider>
        </Container>     
    )
}

export default MyJourney
