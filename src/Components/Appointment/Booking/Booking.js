import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ appointment, date }) => {

    const { img, category, name, education, designation, department, hospital } = appointment;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <div className="single-doctor">
                    <img className="img-fluid doctor-image" src={img} alt="doctor" />
                    <div className="doctor-description">
                        <p className="doctor-category">{category}</p>
                        <h4 className="doctor-name">{name}</h4>

                        <h6 className="mt-4">{designation}</h6>
                        <h6 className="department">{department}</h6>
                        <h6 className="hospital">{hospital}</h6>
                        {/* <div className="text-center">
						<button className="btn btn-primary button-style mt-3" onClick={() => modalController(id)}>
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
						</button>
					</div> */}
                    </div>

                    <CardActions sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Button onClick={handleOpen} sx={{ background: "rgba(25,211,174)", marginBottom: 4 }} variant="contained" uppercase='true'>Book appointment</Button>
                    </CardActions>
                </div>
            </Grid>

            <div>
                <BookingModal
                    name={name}
                    // time={time}
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