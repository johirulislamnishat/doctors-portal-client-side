import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const MeetLinkModal = ({ open, handleClose, appointment }) => {

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

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <h4 className=" text-center">Hello!! <span className="text-primary text-center">{appointment.patient_name}</span></h4>
                    <h5 className="text-center style-color">We are waiting for you </h5>

                    <form style={{ height: '250px', overflowY: 'scroll', padding: 10 }} >


                        <TextField
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Your Metting Link"
                            defaultValue={appointment.meetingLink}
                        />



                        <a target='_blank' href={appointment.meetingLink} className="btn tbl-btn-primary my-2" >Go</a>

                    </form>

                </Box>

            </Modal>
        </>
    );
};

export default MeetLinkModal;