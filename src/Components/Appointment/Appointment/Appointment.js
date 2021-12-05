import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
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
            <Footer />
        </div>
    );
};

export default Appointment;