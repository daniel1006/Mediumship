import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
   return {
       root: {
           paddingTop: '15%',
           color: 'white'
        },
        link: {
            color:"white", 
            textDecoration: "none",
        },
        box: {
            marginTop: 10,
        },
        trademark: {
           marginTop: '8%',
           paddingBottom: 30,
           marginRight: 0,
        },
        media: {
            border: 'none',
           boxShadow: 'none',
           backgroundColor: 'transparent'
        },
        header: {
           fontWeight: 'bold',
           fontSize: 22,
        },
}    
})

export default useStyles