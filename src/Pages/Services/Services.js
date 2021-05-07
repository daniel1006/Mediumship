import React, {Component} from 'react';
import CardDetails from './CardDetails';
import Card from './Card';

import useStyles from './ServiceStyle';

export class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {show: [false, false,]};
    }
    render() {
        return(
            <div style={{paddingTop: '10%'}}>
            <div>
                <button onClick={()=>this.showHide(0)}> Details </button>
                { this.state.show[0] && 
                                <div>
                                   <CardDetails/>
                                   <button onClick={()=>this.showHide(0)}> Close </button>
                                </div>
                            }
             </div>

            <div>
            <button onClick={()=>this.showHide(1)}> Details </button>
                            { this.state.show[1] && 
                                <div>
                                    <Card/>
                                </div>
                            }
           </div>

             </div>
        )

    }
    showHide(num){
        this.setState((prevState) => {
            const newItems = [...prevState.show];
            newItems[num] = !newItems[num];
            return {show: newItems};
        });
    }
}
export default Service
