import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        grid: {
            
        },
        root: {
            marginTop: '50%',
             [theme.breakpoints.down("sm")]: {
                marginTop: '20%',
              },
             textAlign: 'center',
        },
        media: {
            borderRadius: '4px',
             height: 350,
             [theme.breakpoints.down("sm")]: {
                height: 200,
              },
        },
        title: {
            paddingTop: 25,
        },
        price: {
            color: '#66CD00',
            marginLeft: 5,
            marginTop: 5,
        },
        description: {
            marginTop: 20,
            padding: 10,
            backgroundColor: 'lightgrey',
        },
        button: {
            marginTop: 25,
            borderColor: '#6d78ae',
            borderWidth: '3px',
        },
        button2: {
            marginTop: 25,
            marginLeft: 30,
            borderColor: '#6d78ae',
            borderWidth: '3px',
        },
    }
})


export default useStyles