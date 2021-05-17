import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        container: {
             paddingTop: 150,
        },
        grid: {
            backgroundColor: theme.palette.background.default,
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            borderRadius: '4px',
        },
        grid2: {
             display: 'flex',
             alignItems: 'center',
        },
        avatar: {
             marginLeft: 15,
             width: 75,
             height: 75,
        },
        name: {
             fontWeight: 'bold',
        },
        date: {
             marginLeft: 10,
        },
        dateTime: {
             display: 'flex',
        },
        button: {
            marginTop: 5,
            borderColor: '#8cd16f',
        },
    }
})

export default useStyles
