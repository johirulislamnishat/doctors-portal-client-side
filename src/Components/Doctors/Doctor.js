import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Doctors/Doctors.css';

const Doctor = ({ doctor }) => {
	const { img, category, name, education, designation, department, hospital, price } = doctor;

	const [descriptionCollapse, setDescriptionCollapse] = useState(false);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};

	return (
		<div className="single-doctor">

			<img className="img-fluid doctor-image" src={img} alt="doctor" />
			{/* {!doctorsData.image ? (
			) : (
				<img style={{ height: '200px' }} src={`data:image/png;base64,${doctorsData.image.img}`} alt="doctor" />
			)} */}

			<div className="doctor-description">
				<p className="doctor-category">{category}</p>
				<h4 className="doctor-name">{name}</h4>
				<span className="doctor-education">{descriptionCollapse ? education : education.substr(0, 80)}</span>
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
				)}
				<h6 className="mt-4">{designation}</h6>
				<h6 className="department">{department}</h6>
				<h6 className="hospital">{hospital}</h6>
				<h6 className="hospital">৳ {price}</h6>
				<div className="text-center">
					<Link to="/appointment">
						<button className="btn btn-secondary button-style mt-3">
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Doctor;
