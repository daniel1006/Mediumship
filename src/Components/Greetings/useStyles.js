import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
        greetings: {
           height: '100%',
           margin: 0,
           padding: 0,
           overflow: 'hidden',
        },
        container: {
           textAlign: 'center',
        },
        title: {
         paddingTop: '6%',
         color: '#8cd16f',
         [theme.breakpoints.down("sm")]: {
            paddingTop: '30%',
            fontSize: '46px',
       },
       [theme.breakpoints.down("xs")]: {
         textAlign: 'center'
    },
        },

        title2: {
         [theme.breakpoints.down("sm")]: {
            paddingTop: '3%',
       },
        },
        iconContainer: {
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
         marginRight: '5%',
         marginTop: '28%',
         [theme.breakpoints.down("sm")]: {
            marginTop: '110%',
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
