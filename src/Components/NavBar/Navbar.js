import React, { useState } from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Typography, IconButton, Drawer, createMuiTheme, MuiThemeProvider, responsiveFontSizes, ListItemIcon} from '@material-ui/core';
import MenuOpenRoundedIcon  from '@material-ui/icons/MenuOpenRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';

import useStyles from './styles';
import HideOnScroll from './HideOnScroll';

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
                    <Typography align="center" variant="h1">
                     <li className={classes.listItems}>My journey</li>
                     <li className={classes.listItems}>Testimonials</li> 
                     <li className={classes.listItems}>Services</li>   
                     <li className={classes.listItems}>Contact</li> 
                     </Typography>
                </MuiThemeProvider>       
            </ul>
        </div>
    )

    return (
        <div >
        <HideOnScroll>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                     <IconButton  aria-label="menu">
                        <MenuOpenRoundedIcon className={classes.menu} onClick={() => setOpen(true)} />
                      </IconButton>
                         Mediumship
                    </Typography>
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
