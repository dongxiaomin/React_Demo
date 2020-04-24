import React, { Component } from 'react';
import Record from './Record';
// import $ from 'jquery';
import axios from 'axios';

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
        // $.getJSON("http://localhost:3004/recordss").then(
        //     // response => console.log(response),
        //     response => this.setState({
        //         records: response,
        //         isLoaded: true
        //     }),
        //     error => this.setState({
        //         error: error.statusText,
        //         isLoaded: true
        //     })
        // )
        axios.get("http://localhost:3004/records").then(
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
            // return <div>Error: {error.statusText}</div> //jquery error
            return <div>Error: {error.message}</div> //axios error
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