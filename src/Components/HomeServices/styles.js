import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        grid: {
           paddingTop: 50,
        },
        card: {
           height: '100%',
           border: 'none',
           boxShadow: 'none',
           paddingBottom: 15,
           backgroundColor: 'transparent',
        },
        card2: {
            paddingTop: '3%',
            paddingBottom: '2%',
            height: '100%',
         },
        media: { 
            height: 350,
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            borderRadius: '4px',
         },    
        cardActions: {
            display: 'flex',
            
          },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
        },    
        serviceTitle: {
            paddingBottom: 0,
        },
        textField: {
            paddingBottom: 15,
            textAlign: 'center'
        },
        button: {
            marginTop: 32.5,
            borderColor: '#8cd16f',
        },
    }
})

export default useStyles
