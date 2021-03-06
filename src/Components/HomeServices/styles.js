import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        grid: {
            marginTop: '5%', 
            marginBottom: '5%',
        },
        media: {
          boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          borderRadius: '4px',
            width:300,
            height: 350,
            [theme.breakpoints.down("sm")]: {
             width: 250,    
             marginTop: '5%'
           },
       },
       card: {
            display: 'flex',
            backgroundColor: 'rgb(128,128,128, .7)',
            justifyContent: 'center',
            padding: 15,
            [theme.breakpoints.down("sm")]: {
                display: 'block',
           }
       },
       cardDirection: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
       },
       content: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
       },
       text: {
            marginTop: '5%',
            textAlign: 'center',
            color: 'white',
       },
       text2: {
           textAlign: 'center',
           marginTop: '3%',
           color: 'white',
       },
       button: {
            marginTop: '20%',
            borderColor: '#8cd16f',
            borderWidth: '3px',
            marginBottom: '20%',
            color: 'white',
       },
    }
})

export default useStyles
