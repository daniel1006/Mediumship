import React from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Grid, Typography, createMuiTheme, MuiThemeProvider, responsiveFontSizes, CardMedia, Card } from '@material-ui/core';
import useStyles from './useStyles';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_ATLikbsUbE9p1oF2JazwA")

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const Contact = () => {
    const classes = useStyles();
    
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

      
    return (
        <Grid className={classes.root} container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
          
          <Grid item sm={11} xs={11} md={5} lg={5}>
          <Card>
          <CardMedia   component="img"
                           image="https://images.unsplash.com/photo-1476725974034-6788d424c132?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                           title="Services"
                           className={classes.media} />
          </Card>                 
          </Grid>
          

         <Grid item sm={11} xs={11} md={6} lg={6}> 
          <MuiThemeProvider theme={theme}>
           <Typography className={classes.title1} gutterBottom variant="h3">Have any questions?</Typography>
           <Typography className={classes.title2} gutterBottom color="textSecondary" variant="h6">Be sure to specify any <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline green"}}>services</Link> or upcoming <Link to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline red"}}>events</Link> you may be wondering about.
           </Typography>
          </MuiThemeProvider> 

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
 
                <Button className={classes.button} variant="contained" size="large" type='submit' value='Send'>Send</Button>
                
               </form>
       </Grid>        
       </Grid>
    )
}

export default Contact
