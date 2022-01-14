import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './OurDoctor.css';
import { Typography } from '@mui/material';

const OurDoctor = () => {

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

        <>

            <Header />

            <div className="team-area my-5">
                <div className="container">
                    <Typography className='text-primary text-uppercase' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
                        OUR ALL Specialists
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                        See Our All Specialist Doctors
                    </Typography>

                    <div className="row mt-5">
                        {
                            doctors.map(doctor => (
                                <div className="col-md-4 col-sm-6 col-xs-12">
                                    <div className="single-team">
                                        <div className="img-area">
                                            <img src={doctor.img} style={{ height: 350, width: '100%' }} className='rounded-top' alt="" />
                                            <div className="social">
                                                <ul className="list-group mb-5">
                                                    <li><a href="http://facebook.com"><i className="fab fa-facebook"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://pinterest.com/"><i className="fab fa-pinterest"></i></a></li>
                                                    <li><a href="https://linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="img-text rounded-bottom">
                                            <h5>{doctor.name}</h5>
                                            <p>{doctor.department}</p>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default OurDoctor;