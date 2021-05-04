
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '75%',
    height: '50vh',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));