import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        card1: {
            paddingTop: '5%',
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: '3%',
            textAlign: 'left',
            height: '100%',
            border: 'none',
            boxShadow: 'none',
        },
       TextAvatar: {
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
       },
       avatar: {
           height: 62,
           width: 62,
           fontSize: 32,
           backgroundColor: 'grey',
           color: 'whitesmoke',
           marginLeft: 15,
           [theme.breakpoints.down("sm")]: {
            display: 'none',
          },
       },
       name: {
           fontWeight: 'bold',
           marginTop: 10,
       },
       quotation: {
           fontSize: 22,
       },
    }
})

export default useStyles