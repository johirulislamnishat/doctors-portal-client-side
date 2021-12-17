import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ appointment, date }) => {

    const { img, category, name, education, designation, department, hospital, price } = appointment;

    //modal
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
                        <h6 className="hospital">৳ {price}</h6>
                        {/* <div className="text-center">
						<button className="btn btn-primary button-style mt-3" onClick={() => modalController(id)}>
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
						</button>
					</div> */}
                    </div>

                    <CardActions sx={{ display: 'flex', justifyContent: 'center', }}>

                        <input onClick={handleOpen} class="btn btn-primary my-2" type="submit" value="Book Appointment" />
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