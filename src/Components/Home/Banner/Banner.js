import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../images/homebg.png';
import './Banner.css';

const Banner = () => {

	return (
		<div style={{ backgroundColor: '#0092db1a' }}>
			<div className="container">
				<div className="row align-items-center banner">
					<div className="col-md-6 mt-5 mt-md-0 pt-5 pt-md-0">
						<h1 className='text-left mt-5 mt-md-0'>
							Doctor's Chamber on Video Call
						</h1>
						<p className="my-4 text-left">
							Book video call appointments with the country's most qualified specialist doctors, in their private chambers. Visit the CA Hospital Medical Center for all of your medical needs, including Maternity, Emergency, Heart Care, and more. Boston Medical Center has a long tradition of providing accessible and exceptional care for everyone who comes through our doors.
						</p>
						<Link className="btn btn-secondary button-style" to="/appointment">
							Make Appointment
						</Link>
					</div>
					<div className="col-md-6">
						<img className="img" src={BannerImg} alt="banner-img" width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
