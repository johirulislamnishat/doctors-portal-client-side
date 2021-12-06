import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from 'reactstrap';

const SendMeetLinkModal = ({ open, handleClose }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

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

    const onSubmit = data => {
        // const user = { email };
        // setEmail(data)
        // console.log(data);
        // console.log(data)

        axios.put('http://localhost:5000/appointments/meetlink', data)
            .then(res => {
                // console.log(res.data);
                if (res.data.upsertCount) {
                    // console.log(data);
                    setSuccess(true);

                }
            })

        // .then(res => {
        //     if (res.success) {
        //         alert('Success');
        //         reset();
        //     }
        // })

    };

    return (
        <div>

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

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <label>Link</label>
                            <input
                                {...register("meetlink")}
                                type="text" required
                                placeholder="Enter Meet Link"
                                class="form-control" />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>

                        <input class="btn btn-primary" type="submit" value="Submit" />
                    </form>

                </Box>

            </Modal>


            {/* <div class="form-box">
                <h1>Add A New Admin</h1>

                
            </div> */}
        </div>
    );
};

export default SendMeetLinkModal;