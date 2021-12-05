import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Container, Typography } from '@mui/material';
import Calendar from '../Calendar/Calendar';
import Banner from '../../Banner/Banner';

import { Link } from 'react-router-dom';
import BannerImg from '../../../images/chair.png';
import '../../Banner/Banner.css';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <>
            <div className="heder-content">
                <div className="banner-section">
                    <div className="container">
                        <div className="row align-items-center" style={{ height: '100vh' }}>
                            <div className="col-md-4">
                                <Typography sx={{ color: "#203047", fontWidth: 600, my: 2.5 }} variant="h3">
                                    Appointment
                                </Typography>

                                <Calendar date={date} setDate={setDate} />
                            </div>
                            <div className="col-md-6 d-none d-md-block offset-1">
                                <img className="img" src={BannerImg} alt="banner-img" width="120%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default AppointmentHeader;