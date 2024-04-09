import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react';
import Log from './Log';

function Logs(props) {
    console.log(props.Id);
    // View Logs
    useEffect(() => {
        async function showLogs(id) {
            const response = await Axios.get(`http://10.0.2.63:8000/logs/${id}`);
            // console.log(response.data);
        }

        showLogs(props.Id);
    }, []);


    return (
        <>
            <h2>Total Logs</h2>

            <MDBTable align='middle'>

                <MDBTableHead dark>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Task Name</th>
                        <th scope='col'>Task Description</th>
                        <th scope='col'>Log Description</th>
                        <th scope='col'>Created By</th>
                        <th scope="col">Log Date</th>
                        <th scope="col">Status</th>
                    </tr>
                </MDBTableHead>

                <MDBTableBody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Web Application</td>
                        <td>Developing Dashboard</td>
                        <td>UI Components</td>
                        <td>Hemant Motwani</td>
                        <td>09-04-2024</td>
                        <td><MDBBadge color='success' pill>
                            Approved
                        </MDBBadge></td>

                    </tr>

                    <tr>
                        <th scope="row">2</th>
                        <td>Web Application</td>
                        <td>Developing Dashboard</td>
                        <td>UI Components</td>
                        <td>Hemant Motwani</td>
                        <td>09-04-2024</td>
                        <td><MDBBadge color='danger' pill>
                            Decline
                        </MDBBadge></td>

                    </tr>

                    <tr>
                        <th scope="row">3</th>
                        <td>Web Application</td>
                        <td>Developing Dashboard</td>
                        <td>UI Components</td>
                        <td>Hemant Motwani</td>
                        <td>09-04-2024</td>
                        <td><MDBBadge color='warning' pill>
                            Pending
                        </MDBBadge></td>

                    </tr>

                    <Log />
                </MDBTableBody>

            </MDBTable>

        </>
    )
}

export default Logs;























