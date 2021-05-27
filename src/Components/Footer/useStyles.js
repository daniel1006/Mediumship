import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           paddingTop: '15%',
           paddingBottom: '10%',
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
           backgroundColor: 'transparent'
        },
        header: {
           fontWeight: 'bold',
           fontSize: 22,
        },
}    
})

export default useStyles