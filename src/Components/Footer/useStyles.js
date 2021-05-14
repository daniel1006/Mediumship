import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           paddingTop: '15%',
           backgroundColor: theme.palette.background.default,
        },
        link: {
            color:"rgba(0, 0, 0, 0.87)", 
            textDecoration: "none",
        },
        box: {
            marginTop: 10,
        },
        trademark: {
            textAlign: 'center',
           paddingTop: 10,
        },
}    
})

export default useStyles