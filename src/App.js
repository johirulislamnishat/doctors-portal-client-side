import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';

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

          <Route path="/appointment">
            <Appointment />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
