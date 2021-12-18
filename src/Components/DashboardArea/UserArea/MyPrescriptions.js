import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import logo from '../../../images/logo.png';

const MyPrescriptions = ({ open, handleClose, appointment }) => {

    const { patient_name, patient_number, patient_email, patient_age, patient_weight, patient_address, patient_gender, name, category, hospital, education, designation, prescriptions } = appointment;

    // modal color style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
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
                    <h5 className="text-center style-color">This Your Prescription </h5>

                    <div style={{ height: '300px', overflowY: 'scroll', padding: 5 }} >

                        <div className='row mt-4'>
                            <div className='col-5'>
                                <img style={{ height: 40, width: 40 }} src={logo} alt='hospital' />
                            </div>
                            <div className='col-7 border-start '>
                                <h6 className='text-left'>
                                    Doctor: {name}
                                </h6>
                                <p className='text-left'>
                                    {education}
                                </p>
                                <p className='text-left'>
                                    {category}
                                </p>
                                <p className='text-left'>
                                    {designation}, <span>
                                        {hospital}
                                    </span>
                                </p>


                            </div>

                            <hr style={{
                                height: 1,
                                width: '100%',
                                backgroundColor: '#ccc',
                                border: 'none'
                            }} />
                        </div>
                        <div className='row mt-2'>
                            <div className='col-4'>Name: {patient_name}</div>
                            <div className='col-4'>Number:{patient_number}</div>
                            <div className='col-4'>Email: {patient_email}</div>
                            <hr style={{
                                height: 0.5,
                                width: '100%',
                                backgroundColor: '#ccc',
                                border: 'none'
                            }} />
                        </div>
                        <div className='row mt-2'>
                            <div className='col-2'>Age: {patient_age}</div>
                            <div className='col-2'>Sex: {patient_gender}</div>
                            <div className='col-2'>Weight: {patient_weight}</div>

                            <div className='col-6'>Adress: {patient_address}</div>
                            <hr style={{
                                height: 1,
                                width: '100%',
                                backgroundColor: '#ccc',
                                border: 'none'
                            }} />
                        </div>
                        <div className=' mt-2'>
                            Rx..
                            <div>
                                {prescriptions}
                            </div>
                        </div>
                    </div>

                </Box>

            </Modal>
        </>
    );
};

export default MyPrescriptions;