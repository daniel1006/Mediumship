import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, createMuiTheme, MuiThemeProvider, responsiveFontSizes} from '@material-ui/core';
import MenuOpenRoundedIcon  from '@material-ui/icons/MenuOpenRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';

import useStyles from './styles';
import HideOnScroll from './HideOnScroll';
import './Effects.css';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const list = () => (
        <div className={classes.drawer} onClick={() => setOpen(false)}>
            <div>
            <IconButton onClick={() => setOpen(false)} className={classes.closeDrawer}> 
               <CloseRounded className={classes.menu}/> 
            </IconButton>
            </div>

            <ul  className={classes.list} >
                <MuiThemeProvider theme={theme}>
                    <Typography align="center" variant="h2">
                    <li className="listItems"><Link className="link" to="/" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> Home </Link></li>
                     <li className="listItems"><Link className="link" to="/myjourney" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> My journey </Link></li>   
                     <li className="listItems"><Link className="link" to="/testimonials" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> Testimonials </Link></li> 
                     <li className="listItems"><Link className="link" to="/services" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> Services </Link></li>   
                     <li className="listItems"><Link className="link" to="/contact" style={{color:"rgba(0, 0, 0, 0.87)", textDecoration: "none"}}> Contact </Link></li>    
                     </Typography>
                </MuiThemeProvider>       
            </ul>
        </div>
    )

    return (
        <div >
        <HideOnScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                <MuiThemeProvider theme={theme}>
                    <Typography variant="h2" className={classes.title}>
                     <IconButton  aria-label="menu">
                        <MenuOpenRoundedIcon className={classes.menu} onClick={() => setOpen(true)} />
                      </IconButton>
                    </Typography>
                </MuiThemeProvider> 
                    <div className={classes.grow} />
                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <Drawer transitionDuration={500} open={open} anchor={'top'} onClose={() => setOpen(false)}>
             {list()}
        </Drawer>
        </div>
    )
}

export default Navbar
