import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const noNamed = [
		{ name: 'support@hospital.com', link: '/' },
		{ name: '+0909-7657-47304', link: '/' },
		{ name: 'Emergency Dental Care', link: '/' },
		{ name: 'Medical Check Up', link: '/' },
		{ name: 'Treatment of Personal Diseases', link: '/' },
		{ name: 'Tooth Extraction', link: '/' },
		{ name: 'Health Facility', link: '/' }
	];
	const ourAddress = [
		{ name: 'H# 19/M, Road 6, Canada', link: '/' },
		{ name: 'View in map', link: '/' }
	];
	const oralHealth = [
		{ name: 'Emergency Dental Care', link: '/' },
		{ name: 'Dental Check Up', link: '/' },
		{ name: 'Treatment of Personal Diseases', link: '/' },
		{ name: 'Tooth Extraction', link: '/' },
		{ name: 'Surgery', link: '/' },
		{ name: 'Dental Surgery', link: '/' },
		{ name: 'Renal Surgery', link: '/' }
	];
	const services = [
		{ name: 'Emergency Dental Care', link: '/' },
		{ name: 'Health Facility', link: '/' },
		{ name: 'Treatment of Personal Diseases', link: '/' },
		{ name: 'Tooth Extraction', link: '/' },
		{ name: 'Report', link: '/' },
		{ name: 'Heart Surgery', link: '/' },
		{ name: 'Renal Surgery', link: '/' }
	];
	return (
		<>
			<footer style={{ backgroundColor: '#0092db1a' }} className="footer-area clear-both">
				<div className="container pt-3">
					<div className="row py-5">
						<FooterCol key={1} menuTitle={"Online 's Portal"} menuItems={noNamed} />
						<FooterCol key={2} menuTitle="Services" menuItems={services} />
						<FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} />
						<FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
							<ul className="social-media list-inline">
								<li className="list-inline-item">
									<a href="//facebook.com">
										<FontAwesomeIcon className="icon" icon={faFacebookF} />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="//google.com">
										<FontAwesomeIcon className="icon" icon={faGooglePlusG} />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="//instagram.com">
										<FontAwesomeIcon className="icon" icon={faInstagram} />
									</a>
								</li>
							</ul>
							<div className="mt-2">
								<h6 className="mb-2"> Open Admin Pannel</h6>
								<button className="btn btn-secondary mt-2" onClick={() => setModalIsOpen(true)}>
									<FontAwesomeIcon className="icon mr-2" icon={faUser} />Admin Panel
								</button>
							</div>
						</FooterCol>
					</div>
					<div className="copyRight text-center pb-3 text-secondary">
						<p> &copy; 2021 Developed by Khosruz Zaman</p>
					</div>
				</div>
			</footer>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				id="modal-responsive"
				style={{
					overlay: {
						backgroundColor: 'rgba(130,125,125,0.75)'
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						width: '50%',
						transform: 'translate(-50%, -50%)'
					}
				}}
			>
				<form className="px-5 my-3 text-center">
					<p className="text-center mb-2 mt-3">
						<small>You need to Login with this email and password</small>
					</p>
					<h5 className="text-secondary mb-3">Email: admin@admin.com</h5>
					<h6 className="text-secondary mb-3">Password: admin@123456</h6>
					<p className="text-center mb-2 mt-3 px-5">
						<small>Or you can create a new account or signIn with a account which You did not use or provide as an patient appointment email. </small>
					</p>
					<div className="form-group text-center mt-2">
						<Link to="/dashboard">
							<button className="btn btn-secondary mr-3 text-white">Open Admin Panel</button>
						</Link>
					</div>
				</form>
			</Modal>
		</>
	);
};

export default Footer;
