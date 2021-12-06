import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const DashboardUser = () => {


    return (
        <div>
            {/* <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#f1536e', display: 'flex' }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {users}
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

                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#3da5f4', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        0
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Pending Appointments
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>

                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#00c689', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        0
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Today's Appointments
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


            </Box> */}
        </div>
    );
};

export default DashboardUser;