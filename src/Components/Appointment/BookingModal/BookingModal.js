import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import Sneackbar from '../../Sneackbar';


const BookingModal = ({ date, open, handleClose, appointment }) => {

    const { img, name, category, price, hospital } = appointment;
    const [openSneackBar, setOpenSneackBar] = useState(false);
    const [bookingInfo, setBookingInfo] = useState();
    const email = localStorage.getItem('email');

    const handleOnSubmit = e => {
        e.email = (email)
        // collect data
        const bookAppoint = {
            ...bookingInfo,
            img,
            name,
            category,
            price,
            hospital,
            date: date.toLocaleDateString(),
            email,
            meetingLink: 'Waiting'

        }

        //send data to server
        fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookAppoint)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookingInfo(data)
            })

        alert('Success')
        setOpenSneackBar(true);
        e.preventDefault();
        handleClose();
    };


    // modal color style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //currency 
    // const [currency, setCurrency] = useState('EUR');

    // const handleInputChange = (event) => {
    //     setCurrency(event.target.value);
    // };


    //POST INFO
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    // const initialBookingInfo={patient_name:user.displayName,patient_number:'', patient_email:user.email,patient_currency:''  }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography marginBottom='20px' variant="h6" textAlign='center'>
                        Book Your Appointment
                    </Typography>

                    <h4 className="text-primary text-center">{appointment.category}</h4>
                    <h5 className="text-center style-color">{appointment.name}</h5>

                    <form onSubmit={handleOnSubmit} style={{ height: '350px', overflowY: 'scroll', padding: 10 }} >

                        <TextField
                            disabled
                            defaultValue={date.toDateString()}
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Date"
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Booking Image"
                            defaultValue={img}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Doctor Name"
                            defaultValue={name}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Department"
                            defaultValue={category}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Price"
                            defaultValue={price}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Hospital"
                            defaultValue={hospital}
                        />


                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_name'
                            id="outlined-disabled"
                            placeholder='Enter Your Full Name'
                            sx={{ width: '100%', mb: 2 }}
                            label="Full Name"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_number'
                            id="outlined-disabled"
                            type='text'
                            placeholder='Enter Your Number'
                            sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_email'
                            id="outlined-disabled"
                            type='email'
                            placeholder='Enter Your Email'
                            sx={{ width: '100%', mb: 2 }}
                            label="Email"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_age'
                            id="outlined-disabled"
                            type='number'
                            placeholder='Enter Your Age'
                            sx={{ width: '100%', mb: 2 }}
                            label="Age"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_weight'
                            id="outlined-disabled"
                            type='number'
                            placeholder='Enter Your Weight'
                            sx={{ width: '100%', mb: 2 }}
                            label="Weight"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_address'
                            id="outlined-disabled"
                            type='text'
                            placeholder='Enter Your Address'
                            sx={{ width: '100%', mb: 2 }}
                            label="Address"
                        />

                        <input class="btn btn-primary my-2" type="submit" value="Submit" />

                    </form>

                </Box>

            </Modal>

            <Sneackbar openSneackBar={openSneackBar} setOpenSneackBar={setOpenSneackBar} />
        </>

    );
};

export default BookingModal;