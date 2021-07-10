import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
        greetings: {
           height: '100%',
           margin: 0,
           padding: 0,
        },
        container: {
         position: 'relative',
         borderRadius: 0,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
      },
        media: {
         height: '100vh',
     },
     title: {
      position: 'absolute',
      color: '#8cd16f',
      paddingBottom: '28%',
      [theme.breakpoints.down("sm")]: {
         fontSize: '46px',
         paddingBottom: '110%',
    },
        },

        title2: {
         paddingBottom: '16%',
         position: 'absolute',
         [theme.breakpoints.down("sm")]: {
            paddingBottom: '77%',
       },
        },
        iconContainer: {
         position: 'absolute',
         display: 'flex',
         flexDirection: 'row',
         paddingTop: '42%',
         left: '92%',
         [theme.breakpoints.down("sm")]: {
            marginTop: '110%',
            left: '75%',
       },
       [theme.breakpoints.down("xs")]: {
    },
        },
        icon: {
           marginBottom: '4px',
        }
}    
})

export default useStyles
