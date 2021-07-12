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
      textAlign: 'center',
      position: 'absolute',
      color: '#8cd16f',
      paddingBottom: '28%',
      [theme.breakpoints.down("md")]: {
         paddingTop: '20%',
    },
      [theme.breakpoints.down("sm")]: {
         fontSize: '46px',
         paddingBottom: '140%',
    },
        },

        title2: {
         textAlign: 'center',
         paddingBottom: '16%',
         position: 'absolute',
         [theme.breakpoints.down("sm")]: {
            paddingBottom: '75%',
       },
        },
        iconContainer: {
         color: 'black',
         position: 'absolute',
         display: 'flex',
         flexDirection: 'row',
         paddingTop: '40%',
         left: '85%',
         [theme.breakpoints.down("sm")]: {
            paddingTop: '115%',
            left: '75%',
       },
        },
        icon: {
         color: 'black',
           marginBottom: '4px',
           position:"relative",
        },
        icon2: {
         color: 'black',
         position:"relative",
      }
}    
})

export default useStyles
