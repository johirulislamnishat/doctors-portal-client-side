import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OurDoctor.css';

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('http://localhost:5000/doctors')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setDoctors(data.slice(0, 6)))
    }, [])
    return (

        <>

            <div class="team-area">
                <div class="container">
                    <Typography className='text-primary text-uppercase' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
                        Our Specialist
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                        See Our Specialist Doctor
                    </Typography>

                    <div class="row mt-5">
                        {
                            doctors.map(doctor => (
                                <div class="col-md-4 col-sm-6 col-xs-12">
                                    <div class="single-team">
                                        <div class="img-area">
                                            <img src={doctor.img} style={{ height: 350, width: '100%' }} className='rounded-top' alt="" />
                                            <div class="social">
                                                <ul class="list-group mb-5">
                                                    <li><a href="http://facebook.com"><i class="fab fa-facebook"></i></a></li>
                                                    <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="https://pinterest.com/"><i class="fab fa-pinterest"></i></a></li>
                                                    <li><a href="https://linkedin.com/"><i class="fab fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="img-text rounded-bottom">
                                            <h5>{doctor.name}</h5>
                                            <p>{doctor.department}</p>
                                        </div>
                                    </div>
                                </div>


                            ))
                        }

                        <Link className='mt-5 mx-auto btn btn-secondary' to='/our-doctor' >See More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurDoctors;