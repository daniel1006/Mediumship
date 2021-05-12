import React from 'react';
import {Link} from 'react-router-dom';
import { TextField, Button, Grid, MenuItem, Typography } from '@material-ui/core';
import useStyles from './useStyles';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_ATLikbsUbE9p1oF2JazwA")

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
        <Grid className={classes.root} container direction="column" justify="space-evenly" alignItems="center" spacing={3}>

          <Typography variant="h5">I'm here to answer any questions you may have so, don't feel shy to ask.</Typography>
          <Typography variant="h6">Be sure to specify any <Link to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline green"}}>services</Link> or <Link to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "underline red"}}>upcoming events</Link> you may be wondering about.
          </Typography>
         <form id='Claudia_Mediumship'
               lassName="form" 
               onSubmit={handleSubmit(onSubmit)}>         
        <div>
                <TextField
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
                 <TextField margin="normal"
                          variant="outlined"
                          name='topic' 
                          label="Subject" 
                          error={errors.topic}
                          helperText={errors.topic && "Must enter a topic"}
                          {...register('topic', { required: true, maxLength:20})}/> 
          </div>
           <div>
                <TextField margin="normal"
                          variant="outlined"
                          name='message' 
                          label="Message" 
                          multiline 
                          error={errors.message}
                          helperText={errors.message && "Must enter a message"}
                          {...register('message', { required: true, maxLength:3000})}/> 
           </div>
 
                <Button variant="contained" type='submit' value='Send'>Send</Button>
                
               </form>
       </Grid>
    )
}

export default Contact
