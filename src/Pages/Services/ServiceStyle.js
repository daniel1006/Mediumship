import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return{
       root: {
        padding: '10%',
           height: '100%',
           flexGrow: 1,
           backgroundColor: theme.palette.background.default,
       },
       price: {
           color: '#66CD00',
           marginTop: 12,
           marginBottom: 15,
           paddingLeft: 3,
           display: 'block',
       },
       cardContainer: {
       },
    }
})

export default useStyles