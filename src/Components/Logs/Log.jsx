import { MDBBadge } from 'mdb-react-ui-kit';
import React from 'react';
function Log() {
    return (
        <>
            <tr>
                <th scope="row">4</th>
                <td>Web Application</td>
                <td>Developing Dashboard</td>
                <td>UI Components</td>
                <td>Hemant Motwani</td>
                <td>09-04-2024</td>
                <td><MDBBadge color='success' pill>
                    Approved
                </MDBBadge></td>

            </tr>
        </>
    )
}

export default Log;
