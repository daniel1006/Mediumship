import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        container: {
            paddingTop: '15%',
            [theme.breakpoints.down("sm")]: {
                paddingTop: '25%',
           }
        },
        title: {
           textAlign: 'center',
           marginBottom: '5%',
        },
        media: {
            height: 300,
        },
        ending: {
            marginTop: 15,
        },
        button: {
            fontSize: 22,
            marginTop: 25,
            borderColor: '#8cd16f',
        },
    }
})

export default useStyles