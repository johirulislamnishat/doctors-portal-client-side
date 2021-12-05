import React from 'react';
import Rating from 'react-rating';

const Testimonial = (props) => {
	const { quote, name, from, img, rating } = props.reviews;
	return (
		<div className="card-deck mt-4 mb-5">
			<div className="card shadow-sm">
				<div class="card-body">
					<p class="card-text text-center">{quote}</p>
				</div>
				<div className="card-footer d-flex  align-items-center">
					<img className="mx-3" src={img} alt="patient" width="70" height="70" style={{ borderRadius: '50%' }} />
					<div>
						<h6 className="text-primary">{name}</h6>

						<Rating
							initialRating={rating}
							readonly
							emptySymbol='far fa-star text-warning'
							fullSymbol='fas fa-star text-warning'
						/>

						<p className="text-left">{from}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
