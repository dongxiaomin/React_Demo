import React, { Component } from 'react';

class AmountBox extends Component {
    render() { 
        return (
            <div className={`panel ${this.props.type} col-xs-4`}>
                <div className="panel-heading">{this.props.text}</div>
                <div className="panel-body">{this.props.amount}</div>
            </div>
         );
    }
}
 
export default AmountBox;