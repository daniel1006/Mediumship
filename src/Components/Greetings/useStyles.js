import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
        greetings: {
           height: '100%',
           backgroundColor: theme.palette.background.default,
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
        media2: {
            position: 'absolute',
            backgroundColor: 'transparent',
            width: 225,
            height: 225,
            display: 'inline-block',
            left: 15,
            top: 15,
        },
        title: {
         position: 'absolute',
         color: '#8cd16f',
         paddingBottom: '28%',
         [theme.breakpoints.down("sm")]: {
            fontSize: '46px',
            paddingBottom: '20%',
       },
       [theme.breakpoints.down("xs")]: {
         paddingBottom: '120%',
         textAlign: 'center'
    },
        },
        title2: {
         position: 'absolute',
         paddingBottom: '15%',
         [theme.breakpoints.down("xs")]: {
            textAlign: 'center',
            paddingBottom: '55%',
       },
        },
        
}    
})

export default useStyles
