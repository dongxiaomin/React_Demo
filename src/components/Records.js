import React, { Component } from 'react';
import Record from './Record';
import * as RecordsAPI from '../utils/RecordsAPI';

class Records extends Component {
    constructor() {
        super();
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }
    componentDidMount() {
        RecordsAPI.getAll().then(
            response => this.setState({
                records: response.data,
                isLoaded: true
            })
        ).catch(
            // error => console.log(error)
            error => this.setState({
                error,
                isLoaded: true
            })
        )
    }
    render() {
        const { error, isLoaded} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            return <div>Loading...</div>
        }else {
            return (
                <div className="container">
                    <h2>Records</h2>
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.records.map((record,i) => <Record key={record.id} {...record}/>)}
                                
                            </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Records;