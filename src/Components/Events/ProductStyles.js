import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    card: {
      height: '100%',
      backgroundColor: 'rgb(128,128,128, .7)',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    modalMedia: {
      height: 0,
      borderRadius: '4px',
        height: '40%',
        width: '40%',
        [theme.breakpoints.down("sm")]: {
        height: 200,
        },
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: '5',
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
    fontSize: 25,
    color: '#8cd16f',
  },
  share: {
    color: '#8cd16f',
  },
  eventName: {
    color: 'white',
  },
  carddate: {
    paddingLeft: 3,
    color: 'white',
  },
  cardText: {
    paddingBottom: 20,
    color: 'white',
  },
  button: {
    borderColor: '#8cd16f',
    borderWidth: '3px',
  },

  modal: {
    overflow: 'scroll',
 },

  }
})

export default useStyles