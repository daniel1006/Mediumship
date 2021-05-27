import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        container: {
            paddingTop: '10%',
        },
        card1: {
            paddingTop: '5%',
            paddingLeft: '5%',
            paddingRight: '5%',
            paddingBottom: '2%',
            textAlign: 'left',
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
           height: 54,
           width: 54,
           fontSize: 26,
           backgroundColor:'#8cd16f',
           color: 'whitesmoke',
           marginLeft: 15,
       },
       name: {
           fontWeight: 'bold',
           marginTop: 10,
           marginBottom: 5,
       },
       quotation: {
           fontSize: 22,
       },
       more: {
        fontSize: 25,
        color: '#6d78ae',
      },
      button: {
        marginTop: 15,
        borderColor: '#8cd16f',
    },
    }
})

export default useStyles