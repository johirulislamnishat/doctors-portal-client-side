import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import MeetLinkModal from '../MeetLinkModal';
import MyPrescriptions from '../MyPrescriptions';

const MyAppointmentData = ({ appointment }) => {

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [deleteAppointment, setDeleteAppointment] = useState([]);

    //Delete Appointment
    const handleDeleteAppointment = id => {
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
                        const remainingAppointment = deleteAppointment.filter(appointment => appointment._id !== id);
                        setDeleteAppointment(remainingAppointment);
                    }
                })
        }
    }

    return (
        <>
            <TableRow hover role="checkbox" tabIndex={-1}>

                <TableCell >{appointment.patient_name}</TableCell>                                   <TableCell >{appointment.name}</TableCell>
                <TableCell >{appointment.category}</TableCell>
                <TableCell> {appointment.date} </TableCell>
                <TableCell> {appointment.time} </TableCell>
                <TableCell> {appointment.hospital} </TableCell>
                {/* <TableCell style={{ fontSize: 17 }}> {appointment.status} </TableCell> */}
                <TableCell> {appointment.payment ? <div style={{ fontSize: 17 }}>Paid</div> : (
                    <Link style={{ fontSize: 17 }} to={`/dashboard/payment/${appointment._id}`}> Pay Now </Link>
                )} </TableCell>

                {/* meetlink */}
                <TableCell>
                    <input onClick={handleOpen} class="btn btn-primary my-2" type="submit" value="Get Link" />
                </TableCell>

                {/* prescription */}
                <TableCell>
                    <input onClick={handleOpen} class="btn btn-primary my-2" type="submit" value="View" />
                </TableCell>
                {/* <TableCell>
                    <Link style={{ fontSize: 17 }} to={`/dashboard/prescription/${appointment._id}`}> View </Link>
                </TableCell> */}

                {/* delete button */}
                <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteAppointment(appointment._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

            </TableRow>

            <MeetLinkModal

                open={open}
                handleClose={handleClose}
                appointment={appointment}
            ></MeetLinkModal>

            <MyPrescriptions

                open={open}
                handleClose={handleClose}
                appointment={appointment}
            ></MyPrescriptions>

        </>
    );
};

export default MyAppointmentData;