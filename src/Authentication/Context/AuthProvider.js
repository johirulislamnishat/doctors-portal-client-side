import React, { createContext, useEffect, useState } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const email = sessionStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${email}`)
            .then(res => res.json())
            .then(data => console.log(data))
        // .then(data => setOrders(data))
    }, [count, email])

    return (
        <AuthContext.Provider value={{ ...allContext, orders, setOrders, count, setCount }} >
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;