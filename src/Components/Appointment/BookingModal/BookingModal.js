import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, MenuItem, TextField } from '@mui/material';
import Sneackbar from '../../Sneackbar';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];



const BookingModal = ({ date, open, handleClose, appointment }) => {

    const { name, time } = appointment;
    const [openSneackBar, setOpenSneackBar] = useState(false);
    const [bookingInfo, setBookingInfo] = useState();



    const handleOnSubmit = e => {
        // collect data
        const bookAppoint = {
            ...bookingInfo,
            name,
            time,
            date: date.toLocaleDateString(),

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
                console.log(data)
            })

        // alert('dshfksdjh')
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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    //currency 
    const [currency, setCurrency] = useState('EUR');

    const handleInputChange = (event) => {
        setCurrency(event.target.value);
    };


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


                    <form onSubmit={handleOnSubmit} style={{ height: '300px', overflowY: 'scroll' }} >

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mt: 3 }}
                            label="Department"
                            defaultValue={name}
                        />
                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', my: 2 }}
                            label="Time"
                            defaultValue={time}
                        />
                        <TextField
                            disabled
                            defaultValue={date.toDateString()}
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Date"
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
                            placeholder='Enter Your Contact Number'
                            sx={{ width: '100%', mb: 2 }}
                            label="Number"
                        />
                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_email'
                            id="outlined-disabled"
                            placeholder='Enter Your Email'
                            type='email'
                            sx={{ width: '100%', mb: 2 }}
                            label="Email"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='patient_currency'
                            sx={{ width: '100%', mb: 2 }}
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={currency}
                            onChange={handleInputChange}

                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>


                        <Button type='submit' sx={{ background: "rgba(25,211,174)" }} variant="contained" uppercase='true'>Book appointment</Button>


                    </form>

                </Box>

            </Modal>

            <Sneackbar openSneackBar={openSneackBar} setOpenSneackBar={setOpenSneackBar} />
        </>

    );
};

export default BookingModal;