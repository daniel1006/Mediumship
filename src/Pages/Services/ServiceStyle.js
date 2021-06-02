import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        mainContainer: {
           overflow: 'hidden',
           paddingTop: '10%',
           paddingBottom: '7%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '40%',
          },
       },
       cardBackground: {
           backgroundColor: 'rgb(128,128,128, .7)',
       },
       paper: {
            color: 'whitesmoke',
            backgroundColor: '#6d78ae',
            color: 'whitesmoke',
            padding: 20,
            textAlign: 'center',
       },
       eventName: {
           color: 'white',
       },
       price: {
           color: '#66CD00',
       },
       media: {
           height: 250,
       },
       cardContent: {
           display: 'flex',
           justifyContent: 'space-between',
       },
       modal: {
           overflow: 'scroll',
       },
       more: {
           fontSize: 38,
           color: '#8cd16f',
       },
    }
})

export default useStyles