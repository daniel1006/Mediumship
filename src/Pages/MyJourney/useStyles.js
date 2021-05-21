import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        container: {
            paddingTop: '15%',
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
        },
        title: {
           textAlign: 'center',
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