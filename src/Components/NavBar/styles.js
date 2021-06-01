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
     color: 'whitesmoke',
  },
  menuX: {
    fontSize: 62,
    color: 'black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    height: '100vh',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    paddingLeft: 0,
  },
  listItems: {
    
  },
  mediumShip: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
  }
}));