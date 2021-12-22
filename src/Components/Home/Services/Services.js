import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        image: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        image: cavity
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
        image: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography className='text-primary' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                                service={service}
                            ></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
};

export default Services;