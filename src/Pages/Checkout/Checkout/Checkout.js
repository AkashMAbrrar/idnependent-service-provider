import React from 'react';
import { Table } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='container'>
            <h2>Please Check Out Your Validation And Times</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>tName</th>
                        <th>Visit Fee</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Nadia</td>
                        <td>Kabir</td>
                        <td>Shakib</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>200</td>
                        <td>250</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Checkout;