import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Doctor from './Doctor';
import './Doctors.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('https://homedocto.herokuapp.com/doctors')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="doctors">
            <div className="container my-5">
                <Typography className='text-primary' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
                    APPOINTMENTS
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    Book Available Appointment
                </Typography>

                <div className="doctors-view mt-5">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredslide="true"
                        navigation
                        autoplay={true}
                        key={'doctor.allAppointments && doctor.allAppointments.length'}
                    >
                        {doctors.map((doctor, index) => (
                            <SwiperSlide key={index}>
                                <Doctor key={doctor.id} doctor={doctor} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Doctors;