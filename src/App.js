import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';
import Sneackbar from './Components/Sneackbar';
import NotFound from './Components/SinglePages/NotFound';
import Contact from './Components/SinglePages/ContactUs';
import Dashboard from './Components/DashboardArea/Dashboard';



function App() {

  useEffect(() => {
    document.title = 'Welcome to Doctors || Get Your Appoint From Home'
  }, []);

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/snackbar">
            <Sneackbar />
          </Route>

          <Route path="/appointment">
            <Appointment />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
