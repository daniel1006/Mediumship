import React, {useState} from 'react';
import CardDetails from './CardDetails';
import Card from './Card';

import useStyles from './ServiceStyle';

const Services = () => {

    const [showResults, setShowResults] = React.useState(false)
     const onClick = () => setShowResults(true)
    const classes = useStyles();


    return (
        <div className={classes.root}>
              Services

<div>
<input type="submit" value="Search" onClick={onClick} />
             { showResults? <CardDetails/> :null}
              <button onClick={()=> setShowResults(false)}>Close</button>
</div>


<div>
           {
              showResults?<div>
                  <Card/>

                  </div>:null
              
             }

 </div>

        </div>
    )
}

export default Services
