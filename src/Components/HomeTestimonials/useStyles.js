import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        container: {
             paddingTop: 150,
        },
        mainGrid: {
           
        },
        mainCard: {
            backgroundColor: 'rgb(128,128,128, .8)',
       },
        title: {
            textAlign: 'center',
            color: 'white',
        },
        button: {
            borderColor: '#8cd16f',
            borderWidth: '3px',
            float: 'right',
            margin: 10,
            [theme.breakpoints.down("sm")]: {
                marginBottom: '8%',
              },
        },
    }
})

export default useStyles
