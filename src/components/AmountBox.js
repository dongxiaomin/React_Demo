import React, { Component } from 'react';

class AmountBox extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { 
            
    //      }
    // }
    render() { 
        return (
            <div className={`panel ${this.props.type} col-xs-4`}>
                <div className="panel-heading">{this.props.text}</div>
                <div className="panel-body">2</div>
            </div>
         );
    }
}
 
export default AmountBox;