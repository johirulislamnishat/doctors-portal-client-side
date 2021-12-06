import { Button, Paper, TableContainer } from '@mui/material';
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
import { Link } from 'react-router-dom';
import SendMeetLinkModal from './SendMeetLinkModal';

const columns = [
    { id: 'user', label: 'Patient Name', minWidth: 170, },
    { id: 'age', label: 'Age', minWidth: 40, },
    { id: 'weight', label: 'Weight', minWidth: 40, },
    { id: 'phone', label: 'Phone Number', minWidth: 100, },
    { id: 'email', label: 'Email', minWidth: 150, },
    { id: 'location', label: 'Location', minWidth: 150, },
    { id: 'meetlink', label: 'MeetLink', minWidth: 150, },
    { id: 'prescription', label: 'Prescription', minWidth: 180, },
    { id: 'status', label: 'Status', },
    { id: 'action', label: 'Action', }

];

const Patients = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // patient data

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const url = (`http://localhost:5000/appointments/`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setPatients(data))
    }, [])

    //status update
    const [status, setStatus] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const [users, setUsers] = useState([]);
    const [deleteUser, setDeleteUser] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    //Delete User
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

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550 }}>
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
                            {patients
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((patient) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={patient.code}>

                                            <TableCell >
                                                {/* {row.img}  */}
                                                {patient.patient_name}
                                            </TableCell>

                                            <TableCell >
                                                {patient.patient_age}
                                            </TableCell>

                                            <TableCell >
                                                {patient.patient_weight}
                                            </TableCell>

                                            <TableCell> {patient.patient_number} </TableCell>

                                            <TableCell> {patient.patient_email} </TableCell>

                                            <TableCell> {patient.patient_address} </TableCell>

                                            {/* meetlink */}
                                            <TableCell>
                                                <Button onClick={handleOpen} sx={{ background: "rgba(25,211,174)", }} variant="contained">Send Link </Button>
                                            </TableCell>

                                            {/* prescription */}
                                            <TableCell>
                                                <Button sx={{ background: "rgba(25,211,174)", }} variant="contained">Send Rx</Button>
                                            </TableCell>

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
                                            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteUser(patient._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <div>
                <SendMeetLinkModal

                    // date={date}
                    open={open}
                    handleClose={handleClose}
                // patient={patient}
                ></SendMeetLinkModal>
            </div>


        </>
    );
};

export default Patients;