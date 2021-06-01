import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
          flexGrow: 1,
          height: '100vh',
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '30%',
            marginBottom: '120%',
          }, 
          [theme.breakpoints.down("xs")]: {
          }, 
        },
        card: {
            boxShadow: 'none',
        },
        title1: {
            color: 'white',
            textAlign: 'center',
            [theme.breakpoints.down("sm")]: {
               marginBottom: 20,
          }
        },
        title2: {
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
        },
        textInput: {
           width: 350,
           marginTop: 20,
        },
        cssLabel: {
           color: 'white',
        },
        cssFocused: {},
        cssOutlinedInput: {
         '&$cssFocused $notchedOutline': {
           borderColor: 'whitesmoke !important',
         }
        },
        grid3: {
           justifyContent: 'right',
           backgroundColor: 'rgb(128,128,128, .7)',
           paddingTop: '2%',
           borderRadius: '3px',
        },
        form: {
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'right',
           alignItems: 'center',
           color: 'white',
           borderColor: 'white',
        },
        message: {
           width: 500,
           marginTop: 20,
           [theme.breakpoints.down("sm")]: {
            width: 350,
         },
        },
        button: {
           marginTop: 20,
           marginBottom: 30,
           borderColor: '#8cd16f',
           borderWidth: '3px',
           color: 'white',
        },

        wrapper: {
         position: 'relative',
       },
       buttonProgress: {
         color: 'blue',
         position: 'absolute',
         top: '50%',
         left: '50%',
         marginTop: -12,
         marginLeft: -12,
       },

       // thank you page 

       greetings: {
         height: '100%',
         margin: 0,
         padding: 0,
         textAlign: 'center',
      },
      container: {
         position: 'relative',
         borderRadius: 0,
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center'
      },
      media2: {
          height: '100vh',
          backgroundColor:'black',
      },
      heading: {
         color: 'white',
          position: 'absolute',
          paddingBottom: '10%',
          [theme.breakpoints.down("sm")]: {
            paddingBottom: '60%',
       },
      },
      heading2: {
         color: 'white',
         position: 'absolute',
         paddingTop: '10%',
         [theme.breakpoints.down("sm")]: {
            paddingTop: '50%',
       },
      },
      button1: {
         marginTop: 20,
         marginBottom: 30,
         borderColor: '#6d78ae',
         borderWidth: '3px',
         position: 'absolute',
         fontSize: '20px',
      },
}    
})

export default useStyles