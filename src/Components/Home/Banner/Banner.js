import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const Banner = () => {

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
                                Your New Smile
                                <br />
                                <span>Starts Here</span>
                            </Typography>

                            <Typography paragraph sx={{ color: "#B4B4B4" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                            </Typography>

                            <Button sx={{ background: "rgba(25,211,174)", mt: 4 }} variant="contained" uppercase='true'>Get appointment</Button>
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

export default Banner;