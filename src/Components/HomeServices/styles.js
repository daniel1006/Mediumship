import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => {
    return {
        grid: {
           flexGrow: 1,
           backgroundColor: theme.palette.background.default,
           paddingTop: 50,
        },
        root: {
           height: '100%',
           border: 'none',
           boxShadow: 'none',
           paddingBottom: 15,
           
        },
        root2: {
            height: '100%',
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            backgroundColor: theme.palette.background.default,
         },
        media: { 
            height: 350,
            boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
            borderRadius: '4px',
         },    
        cardActions: {
            display: 'flex',
            justifyContent: 'flex-end',
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
        arrow: {
            marginTop: 32.5
        },
        button: {
            marginTop: 32.5
        },
    }
})

export default useStyles
