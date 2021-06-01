import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    padding: theme.spacing(6),
  },
  
  upComingTitle: {
    display:'flex',
    justifyContent: 'center',
    color:'white',
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    }
  },
}));