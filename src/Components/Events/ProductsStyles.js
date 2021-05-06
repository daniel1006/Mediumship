import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(6),
  },
  root: {
    flexGrow: 1,
  },
  upComingTitle: {
    display:'flex',
    justifyContent: 'center',
    padding: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
    }
  },
}));