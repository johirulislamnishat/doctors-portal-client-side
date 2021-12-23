// import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientInfo = ({ patient }) => {

    //Delete User
    const [deleteUser, setDeleteUser] = useState([]);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/appointments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = deleteUser.filter(order => order._id !== id);
                        setDeleteUser(remainingOrder);
                    }
                })
        }
    }
    return (
        <>

            <TableRow hover role="checkbox" tabIndex={-1}>

                <TableCell className='user-name'>
                    {patient._id.slice(2, 8)}
                </TableCell>

                <TableCell >
                    {patient.name}
                </TableCell>

                <TableCell >
                    {patient.patient_name}
                </TableCell>

                <TableCell >
                    {patient.patient_age}
                </TableCell>

                <TableCell >
                    {patient.patient_weight} KG
                </TableCell>

                <TableCell> {patient.patient_number} </TableCell>

                <TableCell> {patient.patient_email} </TableCell>

                <TableCell> {patient.patient_address} </TableCell>

                {/* status */}
                {/* <TableCell> {patient.status} </TableCell> */}

                {/* payment */}
                <TableCell> {patient.payment ? <div className='success-text'>Paid</div> : <div className='text-alert'>Not Paid</div>} </TableCell>

                {/* meetlink */}
                <TableCell>
                    <Link to={`/dashboard/meetlink/${patient._id}`} className='tbl-btn-primary' >Send Link</Link>
                </TableCell>

                {/* prescription */}
                <TableCell>
                    <Link to={`/dashboard/prescription/${patient._id}`} className='tbl-btn-primary' >Send Rx</Link>
                </TableCell>

                {/* <TableCell> {<Box sx={{ minWidth: 120 }}>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={5}>{patient.status}</MenuItem>
                            <MenuItem value={10}>Pending</MenuItem>
                            <MenuItem value={20}>Active</MenuItem>
                            <MenuItem value={30}>Cancel</MenuItem>
                        </Select>
                    </FormControl>
                </Box>}
                </TableCell> */}

                <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteUser(patient._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


            </TableRow>
        </>
    );
};

export default PatientInfo;