import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Infos from '../../Infos/Infos';
import Footer from '../../Footer/Footer';
import Features from '../../Features/Features';
import Testimonials from '../../Testimonials/Testimonials';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Blogs from '../HomeBlogs/Blogs';
import Doctors from '../../Doctors/Doctors';
import OurDoctors from '../../DoctorsProfile/OurDoctors';

const Home = () => {
    return (
        <>

            <div>

                <Header />
                <Banner />
                <Infos />
                <Services />
                <AppointmentBanner />
                <Doctors />
                <Features />
                <OurDoctors />
                <FeaturedService />
                <Blogs />
                <Testimonials />
                <Footer />

            </div>
        </>
    );
};

export default Home;