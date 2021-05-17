import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    card: {
      height: '100%',
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
    fontSize: 33,
  },
  carddate: {
    paddingLeft: 3,
  },
  cardText: {
    paddingBottom: 20,
  },
  button: {
    borderColor: '#8cd16f',
  },

  }
})

export default useStyles