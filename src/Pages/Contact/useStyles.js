import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
          flexGrow: 1,
          height: '100vh',
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '55%',
            marginBottom: '30%',
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
         width: '75%',
         marginLeft: '13%',
         marginBottom: 20,
        },
        grid3: {
           paddingTop: '4%',
           borderRadius: '3px',
           backgroundColor: 'rgb(220,220,220, .8)',
        },
        form: {
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'left',
        },
        message: {
           width: '90%',
           marginLeft: '5%',
        },
        button: {
           marginTop: 20,
           marginBottom: 30,
           borderColor: '#6d78ae',
           borderWidth: '3px',
           width: '45%',
           marginLeft: '27%',
        },

        wrapper: {
         position: 'relative',
       },
       buttonProgress: {
         color: 'blue',
         position: 'absolute',
         top: '0%',
         left: '50%',
         marginTop: 32,
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