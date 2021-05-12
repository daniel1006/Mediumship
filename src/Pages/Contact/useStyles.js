import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '25%',
          }, 
        },
        events: {
          color: "rgba(0, 0, 0, 0.87)",
          textDecoration: 'underline green',
        },
}
})

export default useStyles