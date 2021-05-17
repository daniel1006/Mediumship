import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           paddingTop: '15%',
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
        media: {
            border: 'none',
           boxShadow: 'none',
        },
}    
})

export default useStyles