import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Container, Typography } from '@mui/material';
import Calendar from '../Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    const bannerBg = {
        background: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
    };

    const verticalAlign = {
        display: 'flex',
        alignItems: 'center',
        height: 450
    }

    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid style={verticalAlign} item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>

                            <Typography sx={{ color: "#203047", fontWidth: 600, my: 2.5 }} variant="h3">
                                Appointment
                            </Typography>

                            <Calendar date={date} setDate={setDate} />


                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', textAlign: "left", }}>
                        <img style={{ width: 347, verticalAlign }} src={chair} alt="" />


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentHeader;