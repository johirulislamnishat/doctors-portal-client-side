import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../../Shared/Common.css';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://homedocto.herokuapp.com/addReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="form-box">
                <h1 className='table-name'>Submit A Review</h1>

                <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Image</label>
                        <input
                            {...register("img")} required
                            placeholder="Enter Your Image URL"
                            type="text"
                            className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" {...register("name")} required
                            placeholder="Enter Your Name"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input className="form-control" {...register("rating")} required
                            placeholder="Enter Rating"
                            type="Number" />
                    </div>

                    <div className="form-group">
                        <label>Location</label>
                        <input className="form-control" {...register("from")} required
                            placeholder="Enter Your Location"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label>Feedback</label>
                        <textarea className="form-control" {...register("quote")} required
                            placeholder="Write Your Feedback"
                            type="text" />
                    </div>


                    <input className="btn btn-secondary mt-3" type="submit" value="Submit" />
                </form>
            </div>

        </>
    );
};

export default Review;