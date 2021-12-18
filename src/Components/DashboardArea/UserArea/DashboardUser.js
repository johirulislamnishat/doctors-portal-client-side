import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FeaturedService from '../../FeaturedService/FeaturedService';

const DashboardUser = () => {

    // yourAppointment;
    const [yourAppointment, setYourAppointment] = useState([]);
    const email = localStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${email}`)
            .then(res => res.json())
            .then(data => setYourAppointment(data.length))
    }, [email])

    // appointment;
    const [appointment, setAppointment] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointment(data.length))
    }, [])

    // users
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data.length))
    }, [])

    // doctors
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data.length))
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                {/* patient's appointment */}
                <Grid item xs={1} sm={2} md={3}>
                    <div style={{ height: 100, width: '100%', backgroundColor: '#f1536e', display: 'flex' }} className='rounded shadow-lg'>
                        <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                            <Grid item xs={6}>
                                <div>
                                    {yourAppointment}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'left' }}>
                                    Your Appointments
                                </div>
                            </Grid>
                        </div>

                    </div>
                </Grid>

                {/* total doctors */}
                <Grid item xs={1} sm={2} md={3}>
                    <div style={{ height: 100, width: '100%', backgroundColor: '#00c689', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                        <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                            <Grid item xs={6}>
                                <div>
                                    {doctors}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'left' }}>
                                    Total Doctors
                                </div>
                            </Grid>
                        </div>

                    </div>
                </Grid>

                {/* total users */}
                <Grid item xs={1} sm={2} md={3}>
                    <div style={{ height: 100, width: '100%', backgroundColor: '#3da5f4', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                        <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                            <Grid item xs={6}>
                                <div>
                                    {users}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'left' }}>
                                    Total Users
                                </div>
                            </Grid>
                        </div>

                    </div>
                </Grid>

                <Grid item xs={1} sm={2} md={3}>
                    <div style={{ height: 100, width: '100%', backgroundColor: '#fda006', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                        <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                            <Grid item xs={6}>
                                <div>
                                    {appointment}
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div style={{ textAlign: 'left' }}>
                                    Total Appointments
                                </div>
                            </Grid>
                        </div>

                    </div>
                </Grid>
            </Grid>

            <div style={{ marginTop: 40 }}><FeaturedService /></div>
        </Box>
    );
};

export default DashboardUser;