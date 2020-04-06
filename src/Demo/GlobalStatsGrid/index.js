import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import {fetchCountriesStats} from '../../service/api';
import data from '../download';

class GlobalStatsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Country", field: "location", filter: true,
            }, {
                headerName: "Total Cases", field: "confirmed", sortable: true, filter: true
            }, {
                headerName: "Recovered", field: "recovered", filter: true
            },
                {
                    headerName: "Deaths", field: "dead", filter: true
                }, {
                    headerName: "Updated At", field: "updated", filter: false
                }],
            rowData:{}
        }
    }

    componentDidMount() {
         fetchCountriesStats()
             .then(rowData => this.setState({rowData: rowData.data}))
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px'
                }}
            >
                <AgGridReact
                    floatingFilter={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>
            </div>
        );
    }
}

export default GlobalStatsGrid;
