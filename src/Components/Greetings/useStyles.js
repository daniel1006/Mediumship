import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
        greetings: {
           height: '100%',
           backgroundColor: theme.palette.background.default,
           margin: 0,
           padding: 0,
        },
        container: {
           position: 'relative',
           borderRadius: 0,
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center'
        },
        media: {
            height: '100vh',
        },
        title: {
         position: 'absolute',
         color: '#83e345',
         opacity: .8,
        },
        title2: {
         position: 'absolute',
         paddingTop: '10%',
        },
        
}    
})

export default useStyles