import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Sneackbar from '../../../Sneackbar';


const UpdateDoctor = ({ open, handleClose, doctor }) => {

    // console.log(doctor)
    const { img, name, phone, email, designation, department, education, hospital, price } = doctor;
    const [openSneackBar, setOpenSneackBar] = useState(false);

    const handleOnSubmit = e => {
        // e.email = (email)
        // // collect data
        // const bookAppoint = {
        //     ...bookingInfo,
        //     name,
        //     category,
        //     price,
        //     hospital,
        //     date: date.toLocaleDateString(),
        //     email,

        // }

        //send data to server
        // fetch('https://homedocto.herokuapp.com/appointments', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookAppoint)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data)
        //         setBookingInfo(data)
        //     })

        // alert('Success')
        // setOpenSneackBar(true);
        // e.preventDefault();
        // handleClose();
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
    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newInfo = { ...bookingInfo };
    //     newInfo[field] = value;
    //     setBookingInfo(newInfo);
    // }

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
                        Update Doctor Info
                    </Typography>

                    <h4 className="text-primary text-center">{name}</h4>
                    <h5 className="text-center style-color">{designation}</h5>

                    <form onSubmit={handleOnSubmit} style={{ marginTop: 4, height: '350px', overflowY: 'scroll', padding: 10 }} >

                        <TextField
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Doctor Image Link"
                            defaultValue={img}
                        />

                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Doctor Name"
                            defaultValue={name}
                        />

                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                            defaultValue={phone}
                        />

                        <TextField id="outlined-disabled" sx={{ width: '100%', mb: 2 }}
                            label="Email"
                            defaultValue={email}
                        />

                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Designation"
                            defaultValue={designation}
                        />
                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Department"
                            defaultValue={department}
                        />
                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Education"
                            defaultValue={education}
                        />
                        <TextField

                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Hospital"
                            defaultValue={hospital}
                        />

                        <TextField
                            type='number'
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Price"
                            defaultValue={price}
                        />

                        <input className="btn btn-primary my-2" type="submit" value="Confirm" />

                    </form>

                </Box>

            </Modal>

            <Sneackbar openSneackBar={openSneackBar} setOpenSneackBar={setOpenSneackBar} />
        </>
    );
};

export default UpdateDoctor;