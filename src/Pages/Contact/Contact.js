import React from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia, Card, CircularProgress, Container } from '@material-ui/core';
import useStyles from './useStyles';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_ATLikbsUbE9p1oF2JazwA")

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const Contact = () => {
    const classes = useStyles();
    
    // email api
    const { register, formState: { errors }, handleSubmit } = useForm();
  

    const onSubmit = (data) =>  {
        sendForm('default_service', 'template_sorw188', '#Claudia_Mediumship')
        .then(function(response) {
        document.location = "/thankyou"
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
      }

      // loading animation

      const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();


  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

      
    return (
      <Container className={classes.container} maxWidth="lg">
        <Grid className={classes.root} container direction="row" justify="space-around" alignItems="center" spacing={3}>
          
          <Grid item sm={11} xs={11} md={5} lg={5}>
          <Card>
          <CardMedia   component="img"
                           image="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                           title="Services"
                           className={classes.media} />
          </Card>                 
          </Grid>
          

         <Grid item sm={11} xs={11} md={6} lg={6}> 
          <MuiThemeProvider theme={theme}>
           <Typography className={classes.title1} gutterBottom variant="h3">Have any questions?</Typography>
           <Typography className={classes.title2} gutterBottom color="textSecondary" variant="h6">Be sure to specify any <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline", fontSize: 24, textDecorationColor:"#8cd16f"}}>services</Link> or upcoming <Link to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline", fontSize: 24, textDecorationColor:"#6d78ae"}}>events</Link> you're wondering about.
           </Typography>
          </MuiThemeProvider> 

          <Grid className={classes.grid3} item sm={12} xs={12} md={12} lg={12}> 
         <form className={classes.form}
               id='Claudia_Mediumship'
               lassName="form" 
               onSubmit={handleSubmit(onSubmit)}>         
        <div>
                <TextField
                       className={classes.textInput}
                       variant="outlined"
                       margin="normal"
                       label="Name"
                       type='text' 
                       name='user_name' 
                       error={errors.user_name}
                       helperText={errors.user_name && "Name is required"}
                       {...register('user_name', { required: true, maxLength:20})}/> 
          </div>
           <div> 
                <TextField 
                      className={classes.textInput}
                      variant="outlined"
                       margin="normal"
                       label="Email"
                       type='email' 
                       name='user_email' 
                       error={errors.user_email}
                       helperText={errors.user_email && "Email is not valid"}
                      {...register('user_email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}/> 
          </div>
           <div>
                 <TextField 
                          className={classes.textInput}
                          margin="normal"
                          variant="outlined"
                          name='topic' 
                          label="Subject" 
                          error={errors.topic}
                          helperText={errors.topic && "Must enter a subject matter"}
                          {...register('topic', { required: true, maxLength:20})}/> 
          </div>
           <div>
                <TextField 
                          className={classes.message}
                          margin="normal"
                          variant="outlined"
                          name='message' 
                          label="Message" 
                          multiline 
                          error={errors.message}
                          helperText={errors.message && "Must enter a message"}
                          {...register('message', { required: true, maxLength:3000})}/> 
           </div>
 
               <div className={classes.wrapper}>
                <Button className={classes.button} variant="outlined" size="large" type='submit' value='Send'  onClick={handleButtonClick}>Send</Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>

               </form>
             </Grid>  
       </Grid>        
       </Grid>
    </Container>   
    )
}

export default Contact
