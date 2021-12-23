import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
import MeetLinkModal from '../MeetLinkModal';
import MyPrescriptions from '../MyPrescriptions';

const MyAppointmentData = ({ appointment }) => {

    //modal meeting
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //modal prescription
    const [presOpen, setPresOpen] = useState(false);
    const handlePresOpen = () => setPresOpen(true);
    const handlePresClose = () => setPresOpen(false);

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
                <TableCell className='user-name'>
                    {appointment._id.slice(2, 8)}
                </TableCell>
                <TableCell >{appointment.patient_name}</TableCell>                                   <TableCell >{appointment.name}</TableCell>
                <TableCell >{appointment.category}</TableCell>
                <TableCell> {appointment.date} </TableCell>
                <TableCell> {appointment.time} </TableCell>

                {/* <TableCell style={{ fontSize: 17 }}> {appointment.status} </TableCell> */}
                <TableCell> {appointment.payment ? <div className='success-text'>Paid</div> : (
                    <Link className='text-alert' to={`/dashboard/payment/${appointment._id}`}> <span className='tbl-btn-alert'>Pay Fast</span> </Link>
                )} </TableCell>

                {/* meetlink */}
                <TableCell>
                    {
                        appointment.meetingLink === 'Please Wait For Link' ? <div className='text-warning'>Please Wait</div> : <input onClick={handleOpen} class="btn tbl-btn-primary my-2" type="submit" value="Get Link" />
                    }
                </TableCell>

                {/* prescription */}
                <TableCell>
                    {
                        appointment.prescriptions === 'Writing ' ? <div className='text-warning'>Please Wait</div> : <input onClick={handlePresOpen} class="btn tbl-btn-primary my-2" type="submit" value="View" />
                    }
                </TableCell>

                {/* delete button */}
                <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteAppointment(appointment._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

            </TableRow>

            <MeetLinkModal

                open={open}
                handleClose={handleClose}
                appointment={appointment}
            ></MeetLinkModal>

            <MyPrescriptions

                presOpen={presOpen}
                handlePresClose={handlePresClose}
                appointment={appointment}
            ></MyPrescriptions>

        </>
    );
};

export default MyAppointmentData;