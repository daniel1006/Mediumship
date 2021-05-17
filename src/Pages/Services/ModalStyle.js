import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        root: {
            marginTop: 20,
             [theme.breakpoints.down("sm")]: {
                marginTop: 10,
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
        },
        description: {
            marginTop: 20,
            padding: 10,
            backgroundColor: 'lightgrey',
        },
        button: {
            marginTop: 25,
            borderColor: '#8cd16f',
        },
        button2: {
            marginTop: 25,
            marginLeft: 30,
            borderColor: '#8cd16f',
        },
    }
})


export default useStyles