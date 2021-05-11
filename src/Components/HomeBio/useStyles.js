import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
    root: {
       height:'100%',
       flexGrow: 1,
       marginTop: '5%', 
       marginBottom: '5%',
       height: '100%'
   },
   media: {
       height: 460,
       width: 499,
       [theme.breakpoints.down("sm")]: {
        height: 300,
        width: 'auto',
        marginTop: '15%'
      },
      [theme.breakpoints.down("xs")]: {
        height: 200,
      }
  },
  card: {
       display: 'flex',
       backgroundColor: theme.palette.background.default,
       justifyContent: 'center',
       padding: 15,
       [theme.breakpoints.down("sm")]: {
           display: 'block',
      }
  },
  cardDirection: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
  },
  text: {
       textAlign: 'center',
  },
  text2: {
      textAlign: 'center',
      marginTop: '7%',
  },
  button: {
       marginTop: '60%',
  },
}
})

export default useStyles