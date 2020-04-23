import React, { Component } from 'react';

class Record extends Component {
  render() {
    return (
        <tr>
            <th>{this.props.record.date}</th>
            <th>{this.props.record.title}</th>
            <th>{this.props.record.amount}</th>
        </tr>
    )
  }
}

export default Record;