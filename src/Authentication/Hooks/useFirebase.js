import { useEffect, useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signUpUsingEmail = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(() => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    const signInUsingEmail = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider)

    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }


    // observer user state 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unSubscribe;
    }, [auth]);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return {
        user,
        admin,
        saveUser,
        authError,
        isLoading,
        signUpUsingEmail,
        signInUsingEmail,
        signInUsingGoogle,
        logOut,
    }


}

export default useFirebase;