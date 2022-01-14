import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Testimonials = () => {

	const [reviews, SetReviews] = useState([]);

	useEffect(() => {
		fetch("https://homedocto.herokuapp.com/addReviews")
			.then(res => res.json())
			.then(data => {
				SetReviews(data);
			});
	}, []);

	return (
		<section className="testimonials my-5 py-4">

			<div className="container">

				<Typography className='text-primary text-uppercase' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
					Testimonial
				</Typography>
				<Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
					What Our Patients Says
				</Typography>


				<Swiper className='mt-2'
					spaceBetween={30}
					slidesPerView="auto"
					centeredslide="false"
					navigation
					autoplay={true}
					key={reviews.length}
				>
					{reviews.map((reviews, index) => (
						<SwiperSlide key={index}>
							<Testimonial reviews={reviews} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
