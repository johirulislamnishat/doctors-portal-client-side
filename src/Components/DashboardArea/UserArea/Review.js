import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../../Shared/Common.css';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/addReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })
    };

    return (
        <>
            <div class="form-box">
                <h1 className='table-name'>Submit A Review</h1>

                <form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <label>Image</label>
                        <input
                            {...register("img")} required
                            placeholder="Enter Your Image URL"
                            type="text"
                            class="form-control" />
                    </div>

                    <div class="form-group">
                        <label>Name</label>
                        <input class="form-control" {...register("name")} required
                            placeholder="Enter Your Name"
                            type="text" />
                    </div>
                    <div class="form-group">
                        <label>Rating</label>
                        <input class="form-control" {...register("rating")} required
                            placeholder="Enter Rating"
                            type="Number" />
                    </div>

                    <div class="form-group">
                        <label>Location</label>
                        <input class="form-control" {...register("from")} required
                            placeholder="Enter Your Location"
                            type="text" />
                    </div>
                    <div class="form-group">
                        <label>Feedback</label>
                        <textarea class="form-control" {...register("quote")} required
                            placeholder="Write Your Feedback"
                            type="text" />
                    </div>


                    <input class="btn btn-secondary mt-3" type="submit" value="Submit" />
                </form>
            </div>

        </>
    );
};

export default Review;