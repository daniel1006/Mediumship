import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
        root: {
           paddingTop: '15%',
           paddingBottom: '7%',
           height: '100%',
           flexGrow: 1,
           [theme.breakpoints.down("sm")]: {
            paddingTop: '40%',
          },
       },
       price: {
           color: '#66CD00',
       },
       media: {
           height: 250,
       },
       cardContent: {
           display: 'flex',
           justifyContent: 'space-between'
       },
       modal: {
           overflow: 'scroll',
       },
       more: {
           fontSize: 38,
           color: '#6d78ae',
       }
    }
})

export default useStyles