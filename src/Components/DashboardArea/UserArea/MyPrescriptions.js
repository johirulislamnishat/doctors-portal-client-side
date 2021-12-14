import React from 'react';
import { useParams } from 'react-router-dom';

const MyPrescriptions = () => {

    const { prescriptionId } = useParams();
    return (
        <div>
            My Prescriptions: {prescriptionId}
        </div>
    );
};

export default MyPrescriptions;