import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { SignedInContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [isSignedIn] = useContext(SignedInContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isSignedIn ? (
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