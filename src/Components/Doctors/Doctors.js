import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('http://localhost:5000/doctors')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container my-5">
                <h1 className="text-center text-primary my-5">Our Doctors</h1>
                <div className="doctors-view">
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
        </section>
    );
};

export default Doctors;