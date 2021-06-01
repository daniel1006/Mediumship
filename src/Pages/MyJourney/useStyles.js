import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        container: {
            paddingTop: '10%',
            [theme.breakpoints.down("sm")]: {
                paddingTop: '25%',
           }
        },
        paper: {
            backgroundColor: '#6d78ae',
            color: 'whitesmoke',
            padding: 20,
        },
        grid: {
            marginTop: '5%',
            paddingTop: '3%',
            paddingBottom: '3%',
            backgroundColor: 'rgb(128,128,128, .8)',
            borderRadius: '3px',
        },
        title: {
           textAlign: 'center',
        },
        text: {
            color: 'white',
        },
        media: {
            height: 300,
        },
        ending: {
            marginTop: 15,
            color: 'white',
        },
        button: {
            fontSize: 22,
            marginTop: 25,
            borderColor: '#8cd16f',
        },
    }
})

export default useStyles