import React from 'react';
import NavBar from '../../Shared/NavBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <Services />
            <AppointmentBanner />
        </>
    );
};

export default Home;