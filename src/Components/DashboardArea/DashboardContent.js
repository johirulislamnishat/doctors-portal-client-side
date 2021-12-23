import React, { useState } from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardAdmin from './AdminArea/DashboardAdmin';
import ManagePatients from './AdminArea/Patients/ManagePatients';
import Appointment from './AdminArea/Appointment';
import AddDoctor from './AdminArea/Doctor/AddDoctor';
import DashboardUser from './UserArea/DashboardUser';
import MyAppointment from './UserArea/MyAppointment/MyAppointment';
import Review from './UserArea/Review';
import AddAdmin from './AdminArea/AddAdmin';
import ManageDoctors from './AdminArea/Doctor/ManageDoctors';
import Payment from './UserArea/Payments/Payment';
import CardInfo from './UserArea/Payments/CardInfo';
import SendMeetLink from './AdminArea/SendMeetLink';
import SendPrescription from './AdminArea/SendPrescription';
import ManageContact from './AdminArea/ManageContact/ManageContact';


const DashboardContent = () => {

    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>

                <Route path={`${path}/admin-dashboard`} >
                    <DashboardAdmin />
                </Route>

                <Route path={`${path}/manage-contact`}>
                    <ManageContact />
                </Route>

                <Route path={`${path}/manage-patients`}>
                    <ManagePatients />
                </Route>

                <Route path={`${path}/add-doctors`}>
                    <AddDoctor />
                </Route>

                <Route path={`${path}/manage-doctors`}>
                    <ManageDoctors />
                </Route>

                <Route path={`${path}/add-new-admin`}>
                    <AddAdmin />
                </Route>

                <Route path={`${path}/meetlink/:meetingId`}>
                    <SendMeetLink />
                </Route>

                <Route path={`${path}/prescription/:id`}>
                    <SendPrescription />
                </Route>

                {/* user menu  */}
                <Route path={`${path}/dashboard`}>
                    <DashboardUser />
                </Route>

                <Route path={`${path}/my-appointment`}>
                    <MyAppointment />
                </Route>

                <Route path={`${path}/payment/:appointmentId`}>
                    <Payment />
                </Route>

                {/* <Route path={`${path}/prescription/:prescriptionId`}>
                    <MyPrescription />
                </Route> */}

                <Route path={`${path}/cardInfo`}>
                    <CardInfo />
                </Route>

                {/* <Route path={`${path}/my-prescriptions`}>
                    <MyPrescription />
                </Route> */}

                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
        </div>
    );
};

export default DashboardContent;