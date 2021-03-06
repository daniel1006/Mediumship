<>
<Card className={classes.card}>  
    <CardMedia className={classes.media} image={product.media.source} />
    <CardContent >

     <div>
      <Typography className={classes.eventName} variant="h5" gutterBottom> { product.name } </Typography>
      <Typography className={classes.carddate} variant="h7" gutterBottom> {product.seo.title} </Typography>
    </div>
    
<Tooltip title="Share" arrow>
    <IconButton aria-label="share" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ShareIcon className={classes.share}/>
    </IconButton>
</Tooltip>
<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} getContentAnchorEl={null} onClose={handleClose} 
 anchorOrigin={{
  vertical: "top",
  horizontal: "center",
}}
transformOrigin={{
  vertical: "top",
  horizontal: "right",
}}>
    <ReactShareSocial 
    url ="url_to_share.com" 
    socialTypes={['facebook','twitter','reddit','linkedin', ]} 
    style={style}/>
</Menu>

<Tooltip title="More" arrow>
    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded, })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"> 
       <ExpandMoreIcon className={classes.more} />
    </IconButton>
</Tooltip>
    
<Collapse in={expanded} timeout="auto" unmountOnExit >
    <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="white" className={classes.cardText}/>
        <div className={classes.cardContent}>
            <Typography style={{paddingTop: 6, color: 'white',}} body="h1">
                Price: {product.price.formatted_with_symbol}
            </Typography>
            <Button className={classes.button} variant="outlined"><Link to="/contact" style={{color:"white", textDecoration: "none"}}>Contact</Link></Button>
        </div>     
</Collapse>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>      
    </CardActions>
</Card>
</>