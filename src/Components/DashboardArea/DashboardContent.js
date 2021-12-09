import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardAdmin from './AdminArea/DashboardAdmin';
import Patients from './AdminArea/Patients';
import Appointment from './AdminArea/Appointment';
import Prescriptions from './AdminArea/Prescriptions';
import AddDoctor from './AdminArea/AddDoctor';
import DashboardUser from './UserArea/DashboardUser';
import MyAppointment from './UserArea/MyAppointment';
import MyPrescription from './UserArea/MyPrescriptions';
import Review from './UserArea/Review';
import AddAdmin from './AdminArea/AddAdmin';
import ManageDoctors from './AdminArea/ManageDoctors';
import Payment from './UserArea/Payment';


const DashboardContent = () => {
    let { path } = useRouteMatch();


    return (
        <div>
            <Switch>

                <Route path={`${path}/admin-dashboard`} >
                    <DashboardAdmin />
                </Route>

                <Route path={`${path}/appointments`}>
                    <Appointment />
                </Route>

                <Route path={`${path}/patients`}>
                    <Patients />
                </Route>

                <Route path={`${path}/prescriptions`}>
                    <Prescriptions />
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

                <Route path={`${path}/my-prescriptions`}>
                    <MyPrescription />
                </Route>

                <Route path={`${path}/review`}>
                    <Review />
                </Route>
            </Switch>
        </div>
    );
};

export default DashboardContent;