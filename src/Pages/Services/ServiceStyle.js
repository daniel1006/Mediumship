import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        mainContainer: {
           paddingTop: '15%',
           paddingBottom: '7%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '40%',
          },
       },
       paper: {
            color: 'whitesmoke',
            backgroundColor: '#6d78ae',
            color: 'whitesmoke',
            padding: 20,
            textAlign: 'center',
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
           color: '#6d78ae',
       },
    }
})

export default useStyles