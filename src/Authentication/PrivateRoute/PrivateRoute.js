import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    //reload handling
    if (isLoading) {
        return (
        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;