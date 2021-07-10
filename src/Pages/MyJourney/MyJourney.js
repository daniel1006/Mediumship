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
             <Typography className={classes.text} body="1">My spiritual journey began in 2013. Though I’ve been sensitive to Spirit since I was a child, it was only after marriage, children and a career that my mediumship began to unfold. When Spirit whispers in your ear “It’s Time!” and the universe starts sending you messages, I figured I should listen. My awareness of spirits as well as people’s emotions or thoughts (even the ones they didn’t know for themselves) sent me searching for answers. I started reading everything relevant that I could get my hands on, sending me on the most amazing and exciting journey ever!</Typography>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Card>
              <CardMedia   component="img"
                           image="https://dl.dropboxusercontent.com/s/umlepvny8165t4d/unnamed-1.jpg?dl=0"
                           title="Services"
                           className={classes.media} />
             </Card>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography className={classes.text} body="1">As a child, I always knew I was different. I grew up in a very strict Roman Catholic household where I was the fifth of six children, the youngest being my twin sister.  I came from a family where my great grand-father on my father's side was a medium and a history of psychics were apparent on my mother’s side.  I could always sense Spirit around me. Whether it was chills or a warm feeling. I always sensed that I wasn't alone. My curiosity about the spirit world, angels and death is something that has been an innate part of me. I remember spirits coming into my room at night scaring the heck out of me. My earliest memory was when I was in my crib. I remember seeing a very tall man standing before me trying to settle in bed.... I saw him again when I was playing with my twin sister outside of our home in Montreal, Quebec. He was watching my sister and I play. I remember looking confused because I could see right through him... I think at that point is when I really started to get curious about what happens to us after we die. </Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography className={classes.text} body="1">I was nine years old when my maternal grandmother died, and I remember it as though it was yesterday. It wasn't too long after her death that I awoke in the middle of the night.... I remember her waking me up. She was beautiful. For a nine-year-old it was as though someone was shining down this light above her, she just sparkled. It was breathtaking to see, She took my hand and started stroking it. She didn't speak but telepathically I could hear everything she said to me. She told me never to worry and that she will always be with me to guide me through my journey... From that night on my grandmother has been by my side and has continued to guide and support me.</Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Card>
              <CardMedia   component="img"
                           image="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                           title="Services"
                           className={classes.media} />
             </Card>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={5} lg={5}>  
           <Grid container direction="column">
             <Typography className={classes.text} body="1">I have had many amazing experiences with Spirits and the spirit world - more than I can count. I can honestly say, it’s such a blessing for me to be able to communicate with the world of Spirit. When I was twelve, I was awakened from my sleep. Believe it or not, I was having a conversation with my guardian angel Zachariah. It’s hard to believe, but it is true. He told me about the little girl I was going to have, and he even showed me what she would look like. He explained to me that she would bring so much love into my life. I’ve also had the experience of traveling to the other side with my uncle Ralph, my mom’s brother whom I adore so very much. Back then, I always asked the spirit world to show me what the other side was like. I guess they got tired of me asking because in the night not long after my uncle died, I got a visit from him. He told me he was taking me on an adventure and showed me what it was like on the other side. It was the most beautiful experience I have ever encountered. I didn't want to come back. My uncle assured me there would be more opportunities for me in the future and he was right. I’ve had and continue to have many more amazing occurrences.</Typography>
           </Grid>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography className={classes.text} body="1">The most challenging experience for me was when my friend from High School passed away of cancer in her forties. Even though we lived provinces apart we always kept in touch. Her death was very difficult for me. She was the most caring and loving friend I knew. The great gift I got from her was when she came to visit me before she died. I cherish the time I had with her then and treasure the memories we shared even more now. She continues to always and be around me whenever I need her the most.</Typography>
          </Grid>

          <Grid item sm={12} xs={12} md={10} lg={10}>
              <Typography className={classes.text} body="1">I always felt and knew that life continued after death. I can’t explain why, but I always had a knowing...It took many years, and it was not until I was in my forties that I knew had to do something... I spent years hiding my gifts and afraid to speak to anyone about them because I was afraid people would think I was a lunatic.</Typography>
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
              <Typography className={classes.ending} body="1">Today I continue to facilitate, volunteer and do platforms, message services, demonstrations, mini readings and special events whilst participating in weekly mediumship circles. While there are a few different forms of mediumship, I work as a mental medium, which means I communicate with spirits through the use of telepathy. Spirits impress my mind and body with thoughts and feelings that come in the form of "clairs." I mentally "hear" (clairaudience), "see" (clairvoyance), "know" (claircognizance) and/or "feel" (clairsentience) messages from spirits.  This work allows me to be a voice and a conduit of the spirit world, and it brings me great joy to help others heal while bringing relief and comfort to everyone I connect with.</Typography>
          </Grid>

         </Grid>  
         </MuiThemeProvider>
        </Container>     
    )
}

export default MyJourney
