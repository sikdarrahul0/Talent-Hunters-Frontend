/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const EmployerProtected = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <Route
                {...rest}
                render={({ location }) =>
                loggedInUser.accountType === "employer" ? (
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

export default EmployerProtected;