import React from 'react';
import NavBar from '../../Shared/NavBar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Header from '../../Header/Header';
import Banner from '../../Banner/Banner';
import Infos from '../../Infos/Infos';
import Footer from '../../Footer/Footer';
import Features from '../../Features/Features';
import Testimonials from '../../Testimonials/Testimonials';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Blogs from '../../Blogs/Blogs';

const Home = () => {
    return (
        <>

            <div className='heder-content'>


                {/* <NavBar /> */}
                {/* <Banner /> */}
                <Header />
                <Banner />
                <Infos />
                <Services />
                <AppointmentBanner />
                <Features />
                {/* <Testimonials /> */}
                <FeaturedService />
                <Blogs />
                <Footer />

            </div>
        </>
    );
};

export default Home;