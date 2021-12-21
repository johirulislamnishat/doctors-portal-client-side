import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/doctors', data)
            .then(res => {
                // console.log(res);
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
            <h5 className="table-name mb-4">Add a Doctor</h5>
            <div className="row w-100 d-flex justify-content-center">
                <div className="p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group ">
                            <label htmlFor="exampleInputEmail1">Category</label>
                            <input
                                {...register("category")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Category"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Name"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Phone Number</label>
                            <input
                                {...register("phone")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Number"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                className="form-control"
                                placeholder="Enter Doctor Email"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Education</label>
                            <textarea
                                {...register("education")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Education"
                                required={true}
                            />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Designation</label>
                            <input
                                {...register("designation")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Designation"
                                required={true}
                            />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Department</label>
                            <input
                                {...register("department")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Department"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Hospital</label>
                            <input
                                {...register("hospital")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Doctor Hospital"
                                required={true}
                            />
                        </div>
                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Time</label>
                            <input
                                {...register("time")}
                                type="text"
                                className="form-control"
                                placeholder="Enter Time"
                                required={true}
                            />
                        </div>

                        <div className="form-group ">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input
                                {...register("price")}
                                type="number"
                                className="form-control"
                                placeholder="Enter Price"
                                required={true}
                            />
                        </div>

                        <div className="form-group  pt-2">
                            <label htmlFor="exampleInputPassword1">
                                Upload a image in
                                <a
                                    href="https://imgur.com/"
                                    rel="noopen noreferrer"
                                    target="_blank"
                                    className="text-black px-2"
                                >
                                    <strong>imgur</strong>
                                </a>
                                & Paste the image link here
                            </label>
                            <input
                                {...register("img")}
                                type="text"
                                className="form-control"
                                placeholder="Upload Picture in imgur and paste the img link here"
                                required={true}
                            />
                        </div>
                        {/* <div className="form-group ">
                        <label htmlFor="exampleInputPassword1">Upload a image (Optional)</label>
                        <input
                            onChange={handleFileChange}
                            type="file"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Picture"
                            required={true}
                        />
                    </div> */}
                        <button type="submit" className="btn btn-secondary mt-2 ml-3">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default AddDoctor;