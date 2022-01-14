import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const SendPrescription = () => {

    const [prescription, setPrescription] = useState({})
    const { prescriptions } = prescription;

    const { id } = useParams();

    useEffect(() => {
        const url = `https://homedocto.herokuapp.com/prescription/${id}`
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setPrescription(data))
    }, [id])

    const handleLinkChange = e => {
        const updatePrescription = e.target.value;
        const updatedPrescription = { ...prescription };
        updatedPrescription.prescriptions = updatePrescription;
        setPrescription(updatedPrescription);
    }

    const handlePrescriptionSubmit = e => {
        e.preventDefault();
        const url = `https://homedocto.herokuapp.com/prescription/${id}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prescription)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Send SuccessFull')
                    setPrescription({})
                }
            })


    };

    return (
        <div>
            <div className="form-box">
                <h1>Write And Send Prescription</h1>

                <form className='mt-5' onSubmit={handlePrescriptionSubmit}>
                    <div className="form-group">
                        <label>Prescription</label>
                        <textarea

                            onChange={handleLinkChange}
                            value={prescriptions || ''}
                            type="text" required
                            placeholder="Write Prescription"
                            className="form-control" />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    </div>

                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SendPrescription;