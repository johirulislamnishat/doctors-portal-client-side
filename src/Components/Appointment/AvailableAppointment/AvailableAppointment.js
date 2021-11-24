import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking';

const appointments = [
    {
        id: 1,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 5
    },
    {
        id: 2,
        name: "Cosmetic Dentistry",
        time: "10:05 am – 11:30 am",
        space: 10
    },
    {
        id: 3,
        name: "Teeth Cleaning",
        time: "5:00 pm – 6:30 pm",
        space: 10
    },
    {
        id: 4,
        name: "Cavity Protection",
        time: "7:00 am – 8:30 am",
        space: 5
    },
    {
        id: 5,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 5
    },
    {
        id: 6,
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 5
    }
]

const AvailableAppointment = ({ date }) => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontSize: 26, color: "#1CC7C1", mb: 3, mt: 10, textAlign: 'center' }} variant="h4" component="div">
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