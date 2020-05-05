import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../utils/RecordsAPI';

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      edit: false
     }
  }

  handleToggle() {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleEdit(e) {
    e.preventDefault();
    const record = {
      date: this.refs.date.value,
      title: this.refs.title.value,
      amount: Number.parseInt(this.refs.amount.value, 0)
    }
    // console.log(record)
    RecordsAPI.update(this.props.record.id, record).then(
      // RecordsAPI.update(this.props.record.id, record).then(
      // response => console.log(response.data)
      response => {
        this.setState({
          edit: false
        })
        this.props.handleEditRecord(this.props.record, response.data)
      }
    ).catch(
      error => console.log(error.message)
    )
  }

  recordRow() {
    return (
      <tr>
          <th>{this.props.record.date}</th>
          <th>{this.props.record.title}</th>
          <th>{this.props.record.amount}</th>
          <th>
            <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>Edit</button>
            <button className="btn btn-danger">Delete</button>
          </th>
      </tr>
    )
  }

  recordForm() {
    return (
      <tr>
          <th><input type="text" className="form-control" defaultValue={this.props.record.date} ref="date" /></th>
          <th><input type="text" className="form-control" defaultValue={this.props.record.title} ref="title" /></th>
          <th><input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount" /></th>
          <th>
            <button className="btn btn-info mr-1" onClick={this.handleEdit.bind(this)}>Update</button>
            <button className="btn btn-danger" onClick={this.handleToggle.bind(this)}>Cancel</button>
          </th>
      </tr>
    )
  }

  render() {
    if(this.state.edit) {
      return this.recordForm();
    }else {
      return this.recordRow();
    }
  }
}

Record.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number
}