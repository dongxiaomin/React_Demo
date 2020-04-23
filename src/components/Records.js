import React, { Component } from 'react';
import Record from './Record';

class Records extends Component {
    constructor() {
        super();
        this.state = {
            records: [
                {"id": 1, "date": "2020-01-01", "title": "收入", "amount": 10},
                {"id": 2, "date": "2020-01-02", "title": "吃", "amount": 5},
                {"id": 3, "date": "2020-01-03", "title": "住", "amount": 5}
            ]
        }
    }
    render() {
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
                        {this.state.records.map((record,i) => <Record key={record.id} record={record}/>)}
                    </tbody>
            </table>
        </div>
        )
    }
}

export default Records;