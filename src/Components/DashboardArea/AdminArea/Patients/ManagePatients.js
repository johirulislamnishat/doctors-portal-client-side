import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import PatientInfo from './PatientInfo';

const columns = [
    { id: 'id', label: 'ID', minWidth: 40, },
    { id: 'doctorName', label: 'Doctor Name', minWidth: 170, },
    { id: 'user', label: 'Patient Name', minWidth: 170, },
    { id: 'age', label: 'Age', minWidth: 60, },
    { id: 'weight', label: 'Weight', minWidth: 60, },
    { id: 'phone', label: 'Phone Number', minWidth: 150, },
    { id: 'email', label: 'Email', minWidth: 150, },
    { id: 'location', label: 'Location', minWidth: 150, },
    // { id: 'status', label: 'Status', minWidth: 50, },
    { id: 'payment', label: 'Payment', minWidth: 120, },
    { id: 'meetlink', label: 'MeetLink', minWidth: 160, },
    { id: 'prescription', label: 'Prescription', minWidth: 140, },
    // { id: 'status', label: 'Status', },
    { id: 'action', label: 'Action', minWidth: 40, }

];

const ManagePatients = () => {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // patient data

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const url = (`http://localhost:5000/appointments/`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setPatients(data))
    }, [])

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])



    return (

        <>

            <div className='table-name'>Patient Activity Management</div>

            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550 }}>

                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{
                                            fontSize: '14px', textTransform: 'uppercase',
                                            fontWeight: '600', backgroundColor: '#0dc276', color: '#fff', minWidth: column.minWidth
                                        }}
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
                                        <PatientInfo
                                            key={patient._id}
                                            patient={patient}
                                        ></PatientInfo>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={patients.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </>
    );
};

export default ManagePatients;