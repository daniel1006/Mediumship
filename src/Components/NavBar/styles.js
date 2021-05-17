import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    background: 'transparent',
    alignItems: 'center',
  },
  title: {
    alignItems: 'center',
    display: 'flex',
  },
  menu: {
     fontSize: 62,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    height: '100vh',
  },
  closeDrawer: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  list: {
    listStyleType: 'none',
    paddingTop: '7%',
    paddingLeft: 0,
  },
  listItems: {
    
  },
  mediumShip: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  }
}));