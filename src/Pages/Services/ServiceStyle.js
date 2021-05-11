import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
       root: {
           paddingTop: '10%',
           [theme.breakpoints.down("sm")]: {
            paddingTop: '25%',
          },
           height: '100%',
           flexGrow: 1,
           backgroundColor: theme.palette.background.default,
       },
       price: {
           color: '#66CD00',
       },
       media: {
           height: 280,
       },
       cardContent: {
           display: 'flex',
           justifyContent: 'space-between'
       },
    }
})

export default useStyles