import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: '40vw', 
      [theme.breakpoints.down("sm")]: {
        width: '70vw',
        [theme.breakpoints.down("xs")]: {
          width: '65vw'
        }
      }
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
    },  transform: 'rotate(0deg)',
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: ('transform', {
      duration: '20',
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  more: {
    fontSize: 33,
  },
  cardtitle: {
  }

  }
})

export default useStyles