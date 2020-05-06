import React, { Component } from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
import * as RecordsAPI from '../utils/RecordsAPI';
import AmountBox from './AmountBox';

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
            records: [//合并数组
                ...this.state.records,
                record
            ]
        })
    }

    updateRecord(record, data) {//old, new
        // console.log(record, data)
        const recordIndex = this.state.records.indexOf(record);
        const newRecord = this.state.records.map( (item, index) => {
            if(index !== recordIndex) {
                return item;
            }
            return {
                ...item,
                ...data
            }
        });
        this.setState({
            records: newRecord
        })
    }

    deleteRecord(record) {
        // console.log(record) //要删除的 
        // console.log(this.state.records) //剩余的
        const recordIndex = this.state.records.indexOf(record);
        const newRecord = this.state.records.filter( (item, index) => index !== recordIndex )
        this.setState({
            records: newRecord
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.records.map((record,i) => (
                                <Record 
                                    key={record.id} 
                                    record={record} 
                                    handleEditRecord={this.updateRecord.bind(this)}
                                    handleDeleteRecord={this.deleteRecord.bind(this)}
                                />
                             )
                            )}

                        </tbody>
                </table>
        }
        return (
            <div className="container">
                <h2>Records</h2>
                <div className="">
                    <AmountBox text="Credit" type="panel-primary"/>
                    <AmountBox text="Debit" type="panel-danger"/>
                    <AmountBox text="Balance" type="panel-info"/>
                </div>
                <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
                {componentRecords}
            </div>
        )
    }
}

export default Records;