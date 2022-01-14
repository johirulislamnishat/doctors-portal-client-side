import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking';

const AvailableAppointment = ({ date }) => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const url = ('https://homedocto.herokuapp.com/doctors')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setAppointments(data))
    }, [])

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: 26, color: "#0092db", mb: 3, mt: 10, textAlign: 'center' }} variant="h4" component="div">
                    Available Appointments on {date.toDateString()}
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        appointments.map(appointment => <Booking
                            key={appointment.id}
                            appointment={appointment}
                            date={date}
                        ></Booking>
                        )
                    }
                </Grid>

            </Box>

        </Container>
    );
};

export default AvailableAppointment;