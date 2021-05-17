import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
       root: {
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '25%',
          },
           height: '100vh',
           flexGrow: 1,
           backgroundColor: theme.palette.background.default,
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
    }
})

export default useStyles