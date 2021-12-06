import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import SeeAppointments from './SeeAppointments';
// import useAuth from '../../../Authentication/Hooks/useAuth';

const MyAppointment = () => {

    // const { appointments } = useAuth();

    // console.log(appointments)

    const [appointments, setAppointments] = useState([]);
    const email = sessionStorage.getItem('email');

    // console.log(email)


    useEffect(() => {
        const url = (`http://localhost:5000/appointments/${email}`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAppointments(data))
    }, [])
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    {/* <Typography sx={{ fontSize: 26, color: "#1CC7C1", mb: 3, mt: 10, textAlign: 'center' }} variant="h4" component="div">
                    Available Appointments on {date.toDateString()}
                </Typography> */}

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        {
                            appointments.map(appointment => <SeeAppointments
                                key={appointment.id}
                                appointment={appointment}
                            ></SeeAppointments>
                            )
                        }
                    </Grid>

                </Box>

            </Container>
        </>
    );
};

export default MyAppointment;