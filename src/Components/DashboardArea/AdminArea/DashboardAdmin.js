import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ManageUsers from './Users/ManageUsers';


const DashboardAdmin = () => {

    // appointment;
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch('https://homedocto.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointment(data.length))
    }, [])

    // users
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://homedocto.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.length))
    }, [])

    // doctors
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://homedocto.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data.length))
    }, [])


    return (
        <>


            <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {/* total patients */}
                    <Grid item xs={4} sm={4} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#f1536e', display: 'flex' }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {appointment}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Total Patient
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>

                    {/* total doctors */}
                    <Grid item xs={4} sm={4} md={3}>
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
                    <Grid item xs={4} sm={4} md={3}>
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

                    <Grid item xs={4} sm={4} md={3}>
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

                <div className='mt-5'><ManageUsers /></div>
            </Box>

        </>
    );
};

export default DashboardAdmin;