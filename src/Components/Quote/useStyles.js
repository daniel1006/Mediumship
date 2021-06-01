import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
    container: {
        backgroundColor: 'rgb(109, 120, 174, .9)',
        color: 'whitesmoke',
        height: '40vh',
        marginTop: '5%',
        marginBottom: '5%',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            marginBottom: '20%',
            marginTop: '15%',
          }
    },
}    
})

export default useStyles