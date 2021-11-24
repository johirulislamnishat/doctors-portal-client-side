import React, { useState } from 'react';
import Header from '../../Header/Header';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Header />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointment date={date} />

        </div>
    );
};

export default Appointment;