import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);

    // const handleBlur = (e) => {
    //     const newInfo = { ...info };
    //     newInfo[e.target.name] = e.target.value;
    //     setInfo(newInfo);
    // };

    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     // console.log(info);
    //     formData.append('file', file);
    //     formData.append('id', Math.round(Math.random() * 100 + 15));
    //     formData.append('category', info.category);
    //     formData.append('name', info.name);
    //     formData.append('education', info.education);
    //     formData.append('designation', info.designation);
    //     formData.append('department', info.department);
    //     formData.append('hospital', info.hospital);
    //     formData.append('img', info.img);

    //     fetch('http://localhost:5000/addADoctor', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.true) {
    //                 alert('Done')
    //             }
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

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
        <div className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>

            <div id="responsive-dashboard" className="col-md-10 p-4 doctorForm" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-brand mb-4">Add a Doctor</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Category</label>
                        <input
                            {...register("category")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Category"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input
                            {...register("name")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Education</label>
                        <textarea
                            {...register("education")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Education"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Designation</label>
                        <input
                            {...register("designation")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Designation"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Department</label>
                        <input
                            {...register("department")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Department"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Hospital</label>
                        <input
                            {...register("hospital")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Hospital"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6 pt-2">
                        <label htmlFor="exampleInputPassword1">
                            Upload a image in
                            <a
                                href="https://imgur.com/"
                                rel="noopener noreferrer"
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
                    {/* <div className="form-group col-6">
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
                    <button type="submit" className="btn btn-primary mt-2 ml-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;