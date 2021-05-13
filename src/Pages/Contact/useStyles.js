import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
          flexGrow: 1,
           backgroundColor: theme.palette.background.default,
          height: '100%',
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '30%',
          }, 
        },
        media: {
            height: 340,
        },
        title1: {
            textAlign: 'center',
            [theme.breakpoints.down("sm")]: {
               marginBottom: 20,
          }
        },
        title2: {
            marginBottom: 20,
            textAlign: 'center',
        },
        events: {
          color: "rgba(0, 0, 0, 0.87)",
          textDecoration: 'underline green',
        },
        textInput: {
           width: 350,
           [theme.breakpoints.down("sm")]: {
            width: '100%',
       },
           marginTop: 20,
        },
        form: {
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'space-between',
           alignItems: 'center'
        },
        message: {
           width: 500,
           [theme.breakpoints.down("sm")]: {
            width: '100%',
       },
           marginTop: 20,
        },
        button: {
           marginTop: 20,
           marginBottom: 30,
        },
}    
})

export default useStyles