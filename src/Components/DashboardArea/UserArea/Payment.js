import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {

    const { appointmentId } = useParams();

    return (
        <div >
            Tk de: {appointmentId}
        </div>
    );
};

export default Payment;