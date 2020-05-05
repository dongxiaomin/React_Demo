import React, { Component } from 'react';
import * as RecordsAPI from '../utils/RecordsAPI';

export default class RecordForm extends Component {
    constructor () {
        super();
        this.state = {
            date: "",
            title: "",
            amount: ""
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
    handleSubmit(e) {
        e.preventDefault()
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount,0)
        }
        RecordsAPI.create(data).then(
            // response => console.log(response.data)
            response => {
                this.props.handleNewRecord(response.data);
                //设置input框的值为空
                this.setState ({
                    date: "",
                    title: "",
                    amount: ""
                })
            }
            ).catch(
            error => console.log(error.message)
        )
    }
    render () {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
                <div className="form-group">
                    <input type="text" placeholder="Date" name="date" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.date}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Title" name="title" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.title}/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Amount" name="amount" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.amount}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
            </form>
        )
    }
}