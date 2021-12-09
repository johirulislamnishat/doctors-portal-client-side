import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const columns = [

    { id: 'doctorName', label: 'Doctor Name', minWidth: 250, },
    { id: 'phone', label: 'Phone Number', minWidth: 150, },
    { id: 'email', label: 'Email', minWidth: 150, },
    { id: 'designation', label: 'Designation', minWidth: 140, },
    { id: 'department', label: 'Department', minWidth: 100, },
    { id: 'education', label: 'Education', minWidth: 100, },
    { id: 'hospital', label: 'Hospital', minWidth: 100, },
    { id: 'price', label: 'Price', minWidth: 50, },
    // { id: 'time', label: 'Time', minWidth: 150, },

    { id: 'update', label: 'Update', },
    { id: 'delete', label: 'Delete', }

];
const ManageDoctors = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // doctors data
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])


    const [deleteDoctor, setDeleteDoctor] = useState([]);

    //Delete Doctor
    const handleDeleteDoctor = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/doctors/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = deleteDoctor.filter(order => order._id !== id);
                        setDeleteDoctor(remainingOrder);
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
                            {doctors
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((doctor) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={doctor.id}>

                                            <TableCell >

                                                <img className='rounded-circle' style={{ height: 40, width: 40, marginRight: 5 }} src={doctor.img} alt={doctor.name} />                                           {doctor.name}
                                            </TableCell>

                                            <TableCell >
                                                {doctor.phone}
                                            </TableCell>

                                            <TableCell >
                                                {doctor.email}
                                            </TableCell>

                                            <TableCell>
                                                {doctor.designation}
                                            </TableCell>

                                            <TableCell> {doctor.department} </TableCell>
                                            <TableCell> {doctor.education} </TableCell>

                                            <TableCell> {doctor.hospital} </TableCell>
                                            <TableCell> {doctor.price} </TableCell>
                                            {/* <TableCell> {doctor.time} </TableCell> */}

                                            {/* update */}
                                            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteDoctor(doctor._id)}><i style={{ cursor: 'pointer' }} className="far fa-edit text-success"></i></button> </TableCell>
                                            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteDoctor(doctor._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={doctors.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
};

export default ManageDoctors;