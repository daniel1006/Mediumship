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
     boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
     borderRadius: '4px',
       width: 420,
       [theme.breakpoints.down("sm")]: {
        width: 250,    
        marginTop: '15%'
      },
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
       alignItems: 'center',
  },
  content: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
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