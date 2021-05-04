import React, { useState } from 'react';
import { AppBar, Toolbar, MenuItem, Menu, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core';
import MenuOpenRoundedIcon  from '@material-ui/icons/MenuOpenRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';

import useStyles from './styles';
import HideOnScroll from './HideOnScroll';

function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    const list = () => (
        <div className={classes.drawer} onClick={() => setOpen(false)}>
            <div>
            <ListItemIcon onClick={() => setOpen(false)} className={classes.closeDrawer}> 
               <CloseRounded/> 
            </ListItemIcon>
            </div>

            <ul className={classes.list} >
                {['Bio', 'Contact', 'blahblah'].map((text) => ( 
                     <li button key={text}>
                        <ListItemText primary={text} />
                    </li>
                    ))}
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
