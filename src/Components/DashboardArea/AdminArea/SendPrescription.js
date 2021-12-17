import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const SendPrescription = () => {

    const [prescription, setPrescription] = useState({})
    // const { prescriptions } = prescription;

    const { prescriptionId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/prescription/${prescriptionId}`
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
        // .then(data => setPrescription(data))
    }, [])

    const handleLinkChange = e => {
        const updatePrescription = e.target.value;
        const updatedPrescription = { ...prescription };
        updatedPrescription.prescriptions = updatePrescription;
        setPrescription(updatedPrescription);
    }

    const handlePrescriptionSubmit = e => {
        e.preventDefault();
        const url = `http://localhost:5000/prescription/${prescriptionId}`

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
            <div class="form-box">
                <h1>Write And Send Prescription {prescriptionId}</h1>

                <form className='mt-5' onSubmit={handlePrescriptionSubmit}>
                    <div class="form-group">
                        <label>Prescription</label>
                        <input

                            onChange={handleLinkChange}
                            value={'prescriptions' || ''}
                            type="text" required
                            placeholder="Write Prescription"
                            class="form-control" />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    </div>

                    <input class="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SendPrescription;