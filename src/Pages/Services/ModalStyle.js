import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        grid: {
            
        },
        root: {
            marginTop: '15%',
             [theme.breakpoints.down("sm")]: {
                marginTop: '15%',
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
            marginTop: 15,
        },
        details: {
           color: 'black',
           fontSize: '22px',
        },
        description: {
            marginTop: 20,
            padding: 20,
            backgroundColor: 'lightgrey',
        },
        button: {
            marginTop: 25,
            borderColor: '#6d78ae',
            borderWidth: '3px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '11.5px',
              },
        },
        button2: {
            marginTop: 25,
            marginLeft: 30,
            borderColor: '#6d78ae',
            borderWidth: '3px',
            [theme.breakpoints.down("sm")]: {
                fontSize: '11.5px',
              },
        },
    }
})


export default useStyles