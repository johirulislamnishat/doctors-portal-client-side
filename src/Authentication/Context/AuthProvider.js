import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {


    const allContext = useFirebase();
    // const [appointments, setAppointments] = useState([]);
    // const [count, setCount] = useState(0);
    // const email = localStorage.getItem('email');

    // useEffect(() => {
    //     fetch(`https://homedocto.herokuapp.com/appointments/${email}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //     // .then(data => setAppointments(data))
    // }, [count, email])

    return (
        <AuthContext.Provider value={{ ...allContext }} >
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;