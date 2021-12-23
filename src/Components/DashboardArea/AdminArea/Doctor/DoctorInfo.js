import TableCell from '@mui/material/TableCell';
import React, { useState } from 'react';
import UpdateDoctor from '../Doctor/UpdateDoctor';
import TableRow from '@mui/material/TableRow';

const DoctorInfo = ({ doctor }) => {

    const { _id, img, name, phone, email, designation, department, education, hospital, price } = doctor;

    //modal 
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <TableRow hover role="checkbox" tabIndex={-1} >
                <TableCell className='user-name'>
                    {_id.slice(2, 8)}
                </TableCell>

                <TableCell >

                    <img className='rounded-circle' style={{ height: 40, width: 40, marginRight: 5 }} src={img} alt={name} />                                           {name}
                </TableCell>

                <TableCell >
                    {phone}
                </TableCell>

                <TableCell >
                    {email}
                </TableCell>

                <TableCell>
                    {designation}
                </TableCell>

                <TableCell> {department} </TableCell>
                <TableCell> {education} </TableCell>

                <TableCell> {hospital} </TableCell>
                <TableCell> {price} </TableCell>
                {/* <TableCell> {doctor.time} </TableCell> */}

                {/* update */}
                {/* <TableCell className="border-0" style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleOpen(doctor._id)}><i style={{ cursor: 'pointer' }} className="border-0 far fa-edit text-success"></i></button> </TableCell> */}

                {/* delete */}
                <TableCell style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteDoctor(doctor._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

            </TableRow>

            <UpdateDoctor
                open={open}
                handleClose={handleClose}
                doctor={doctor}
            ></UpdateDoctor>
        </>
    );
};

export default DoctorInfo;