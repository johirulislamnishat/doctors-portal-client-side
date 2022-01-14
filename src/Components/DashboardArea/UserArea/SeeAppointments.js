import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import '../../Doctors/Doctors.css';

const SeeAppointments = ({ appointment }) => {

    const [cancelAppointments, setCancelAppointments] = useState([]);
    // console.log(appointment);

    const { img, category, name, education, designation, department, hospital } = appointment;



    //Cancel Appointment
    const handleCancelAppointment = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://homedocto.herokuapp.com/cancelAppointments/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = cancelAppointments.filter(order => order._id !== id);
                        setCancelAppointments(remainingOrder);
                    }
                })
        }
    }

    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <div className="single-doctor">
                    <img className="img-fluid doctor-image" src={img} alt="doctor" />
                    <div className="doctor-description">
                        <p className="doctor-category">{category}</p>
                        <h4 className="doctor-name">{name}</h4>
                        {/* <span className="doctor-education">
                             {descriptionCollapse ? education : education.substr(0, 80)} 
                        </span>
                        {education.length > 80 ? descriptionCollapse ? (
                            <span onClick={showLess} className="collapse-btn">
                                See Less
                            </span>
                        ) : (
                            <span onClick={showMore} className="collapse-btn">
                                See More
                            </span>
                        ) : (
                            <span> </span>
                        )} */}
                        {/* <h6 className="mt-4">{designation}</h6>
                        <h6 className="department">{department}</h6>
                        <h6 className="hospital">{hospital}</h6>  */}
                        {/* <div className="text-center">
						<button className="btn btn-primary button-style mt-3" onClick={() => modalController(id)}>
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
						</button>
					</div>  */}
                    </div>

                    <CardActions sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Button onClick={() => handleCancelAppointment(appointment._id)} sx={{ background: "rgba(25,211,174)", marginBottom: 4 }} variant="contained" uppercase='true'>Delete</Button>
                    </CardActions>
                </div>
            </Grid>
        </>
    );
};

export default SeeAppointments;