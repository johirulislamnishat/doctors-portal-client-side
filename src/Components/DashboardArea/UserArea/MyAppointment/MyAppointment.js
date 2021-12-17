import React, { useEffect, useState } from 'react';
import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../../Authentication/Hooks/useAuth';
import MyAppointmentData from './MyAppointmentData';

const columns = [

    { id: 'patientName', label: 'Patient Name', minWidth: 150, },
    { id: 'doctorName', label: 'Doctor Name', minWidth: 150, },
    { id: 'category', label: 'Problem', minWidth: 80, },
    { id: 'date', label: 'Date', minWidth: 60, },
    { id: 'time', label: 'Time', minWidth: 60, },
    { id: 'location', label: 'Location', minWidth: 100, },
    // { id: 'status', label: 'Status', minWidth: 50, },
    { id: 'payment', label: 'Payment', minWidth: 130, },
    { id: 'meetlink', label: 'Meetlink', minWidth: 50, },
    { id: 'prescription', label: 'Prescription', minWidth: 50, },
    { id: 'delete', label: 'Delete', }

];

const MyAppointment = () => {

    const { user } = useAuth();
    // console.log(user);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [appointments, setAppointments] = useState([]);
    // console.log(appointments)
    const email = localStorage.getItem('email');

    // console.log(email)

    useEffect(() => {
        const url = (`http://localhost:5000/appointment/${email}`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAppointments(data))
    }, [email])



    return (
        <>

            {
                appointments.length === 0 ? (
                    <div >
                        <h1>Hello!!! {user.displayName}</h1>
                        <h1>Please book an appointment</h1>
                    </div>
                )
                    :
                    (
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
                                        {appointments
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((appointment) => {
                                                return (
                                                    <MyAppointmentData
                                                        key={appointment.id}
                                                        appointment={appointment}
                                                    ></MyAppointmentData>
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
                        </Paper>)
            }
        </>
    );
};

export default MyAppointment;