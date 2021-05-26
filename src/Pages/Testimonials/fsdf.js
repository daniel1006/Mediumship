<Grid item sm={12} xs={12} md={6} lg={6}>  
<Grid container direction="column">   
<Card className={classes.card1}>

<Typography className={classes.name} gutterBottom>Elena, 2021</Typography> 

 <div className={classes.TextAvatar}>
   <Typography variant="h6" gutterBottom><span className={classes.quotation}>"</span>As a bereaved mother I know that an experience with a medium, sometimes, is a matter of death and life...<span className={classes.quotation}>"</span></Typography>
   <Avatar className={classes.avatar}>T</Avatar>
</div>

<Tooltip title="More" arrow>
 <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded4, })} onClick={handleExpandClick4} aria-expanded={expanded4} aria-label="show more"> 
   <ExpandMoreIcon className={classes.more} />
 </IconButton>
</Tooltip> 

<Collapse in={expanded4} timeout="auto" unmountOnExit >
 <Typography variant="h6" gutterBottom className={classes.text}><span className={classes.quotation}>"</span>As a bereaved mother I know that an experience with a medium, sometimes, is a matter of death and life. If a medium gives the wrong or nonevidential reading a bereaved mother will suffer great harm, loos all the hope, and it might be irreversible. My experience with Claudia Remy was one of the best experiences I have ever encountered! Claudia Is an amazing, fun loving, vibrant, and very Gifted Person! She connects on a level of no doubt and gives evidence you cannot deny! The way Claudia described my loved ones was unbelievable. She not only had all the facts, but Claudia also gives specifics about the deceased person, as if they were friends with Claudia! If you are grieving and want to have a reading, I recommend Claudia Remy as the best medium and caring, and supportive person. She made me laugh and cry but most of all her reading brought me a sense of peace that I do not think I would have gotten from anything else. Although, I am still grieving, I feel such comfort knowing now that my son is still living in spirit, and one day we will be together again. Thank you Claudia, your readings are healing!<span className={classes.quotation}>"</span></Typography>       
 <Button className={classes.button} variant="outlined" onClick={() => { executeScroll(); handleExpandClick4();}}> Close </Button> 
</Collapse>

</Card>
</Grid>
</Grid>