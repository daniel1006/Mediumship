import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        root: {
             marginTop: '5%',
             [theme.breakpoints.down("sm")]: {
                marginTop: '5%',
              },
             textAlign: 'center',
        },
        media: {
            borderRadius: '4px',
             height: 375,
             [theme.breakpoints.down("sm")]: {
                height: 175,
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
        },
        button2: {
            marginTop: 25,
            marginLeft: 30,
        },
    }
})


export default useStyles