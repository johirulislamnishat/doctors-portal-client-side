import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ appointment, date }) => {
    const { name, time, space } = appointment;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 26, color: "#1CC7C1", my: 2, textAlign: 'center' }} variant="h5" component="div">{name}
                        </Typography>

                        <Typography sx={{ color: "#3A4256", mb: 1, textAlign: 'center' }} variant="h6" component="div" fontWeight='bold'>{time}
                        </Typography>

                        <Typography variant="body2" textAlign='center'>
                            {space} <span>SPACES AVAILABLE</span>
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={handleOpen} sx={{ background: "rgba(25,211,174)" }} variant="contained" uppercase='true'>Book appointment</Button>
                    </CardActions>
                </Card>
            </Grid>

            <div>

                <BookingModal
                    name={name}
                    time={time}
                    date={date}
                    open={open}
                    handleClose={handleClose}
                    appointment={appointment}
                ></BookingModal>
            </div>

        </>
    );
};

export default Booking;