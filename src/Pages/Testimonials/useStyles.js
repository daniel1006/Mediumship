import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        container: {
            paddingTop: '15%',
        },
        card1: {
            padding: 30,
            textAlign: 'left',
            backgroundColor: theme.palette.background.default,
        },
        paper: {
            color: 'whitesmoke',
            backgroundColor: '#6d78ae',
            color: 'whitesmoke',
            padding: 20,
            textAlign: 'center',
            marginBottom:"5%",
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
           backgroundColor: '#8cd16f',
           color: 'whitesmoke',
           marginLeft: 15,
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