import React, { Component } from 'react';

class Record extends Component {
  render() {
    return (
        <tr>
            <th>{this.props.date}</th>
            <th>{this.props.title}</th>
            <th>{this.props.amount}</th>
        </tr>
    )
  }
}

export default Record;