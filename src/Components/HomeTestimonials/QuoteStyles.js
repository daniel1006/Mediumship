import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        root: {
            paddingTop: '5%',
            paddingLeft: '5%',
            paddingRight: '5%',
            textAlign: 'left',
            boxShadow: 'none',
            height: '100%',
            backgroundColor: 'transparent',
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
           backgroundColor: '#6d78ae',
           color: 'whitesmoke',
           marginLeft: 15,
           [theme.breakpoints.down("sm")]: {
            display: 'none',
          },
       },
       name: {
           fontWeight: 'bold',
           marginTop: 10,
           color: 'white',
       },
       quoteText: {
           color: 'white',
       },
       quotation: {
           fontSize: 22,
           color: 'white',
       },
    }
})

export default useStyles