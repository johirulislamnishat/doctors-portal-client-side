import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        // const user = { email };
        // setEmail(data)
        // console.log(data);
        // console.log(data)

        axios.put('http://localhost:5000/users/admin', data)
            .then(res => {
                // console.log(res.data);
                if (res.data.upsertCount) {
                    // console.log(data);
                    setSuccess(true);

                }
            })

            .then(res => {
                if (res.success) {
                    alert('Success');
                    reset();
                }
            })

    };
    return (
        <div>
            <div class="form-box">
                <h1>Add A New Admin</h1>

                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            {...register("email")}
                            type="email" required
                            placeholder="Enter Admin Email"
                            class="form-control" />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <input class="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;