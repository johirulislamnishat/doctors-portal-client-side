import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const columns = [
    { id: 'user', label: 'User' },
    { id: 'phone', label: 'Phone' },
    { id: 'email', label: 'Email' },
    { id: 'date', label: 'Date' },
    { id: 'doctor', label: 'Doctor' },
    { id: 'department', label: 'Department' },
    { id: 'location', label: 'Location' },
    { id: 'status', label: 'Status' },
    { id: 'action', label: 'Action' }

];

const Appointment = () => {


    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAppointments(data))
    }, [])

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //status update
    const [status, setStatus] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };


    const [cancelAppointments, setCancelAppointments] = useState([]);

    //Cancel Appointment
    const handleCancelAppointment = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/cancelAppointments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = cancelAppointments.filter(order => order._id !== id);
                        setCancelAppointments(remainingOrder);
                    }
                })
        }
    }

    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {appointments
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>

                                            <TableCell >
                                                {/* {row.img}  */}
                                                {row.patient_name}
                                            </TableCell>
                                            <TableCell> {row.patient_number} </TableCell>
                                            <TableCell> {row.patient_email} </TableCell>
                                            <TableCell> {row.date} </TableCell>

                                            <TableCell> {row.name} </TableCell>
                                            <TableCell> {row.category} </TableCell>
                                            <TableCell> {row.hospital} </TableCell>
                                            <TableCell> {<Box sx={{ minWidth: 120 }}>
                                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                                    <Select
                                                        value={status} onChange={handleStatusChange}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        <MenuItem value={10}>Pending</MenuItem>
                                                        <MenuItem value={20}>Active</MenuItem>
                                                        <MenuItem value={30}>Cancel</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>}
                                            </TableCell>
                                            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleCancelAppointment(row._id)}><i className="far fa-trash-alt text-danger" style={{ cursor: 'pointer' }}></i></button> </TableCell>


                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={appointments.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default Appointment;