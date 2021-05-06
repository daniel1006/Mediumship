import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        root: {
            height: '100%',
          },
        media: { 
            height: '20vw', 
            paddingTop: '5%', // 16:9
        },
        cardActions: {
            display: 'flex',
            justifyContent: 'flex-end',
          },
    }
})

export default useStyles
