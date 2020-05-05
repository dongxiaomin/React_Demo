import React, { Component } from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
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

    addRecord(record) {
        console.log(record)
        //更新 Records组件（父组件）
        this.setState ({
            error: null,
            isLoaded: true,
            records: [
                ...this.state.records,
                record
            ]
        })
    }

    render() {
        const { error, isLoaded} = this.state;
        let componentRecords;
        if (error) {
            componentRecords = <div>Error: {error.message}</div>
        }else if (!isLoaded) {
            componentRecords = <div>Loading...</div>
        }else {
            componentRecords =                  
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
        }
        return (
            <div className="container">
                <h2>Records</h2>
                <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
                {componentRecords}
            </div>
        )
    }
}

export default Records;