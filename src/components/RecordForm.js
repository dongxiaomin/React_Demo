import React, { Component } from 'react';

export default class RecordForm extends Component {
    constructor () {
        super();
        this.state = {
            date: "",
            title: "",
            amount: "",
        }
    }
    valid () {
        // console.log(this.state)
        return this.state.date && this.state.title && this.state.amount;
    }
    handleChange(event) {
        let name, obj;
        name = event.target.name;
        this.setState((
            obj = {},
            obj["" + name] = event.target.value,
            obj
        ))
    }
    render () {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" placeholder="Date" name="date" className="form-control" onChange={this.handleChange.bind(this)} value={this.props.date}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Title" name="title" className="form-control" onChange={this.handleChange.bind(this)} value={this.props.title}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Amount" name="amount" className="form-control" onChange={this.handleChange.bind(this)} value={this.props.amount}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
            </form>
        )
    }
}