import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../../App';

const AdminProtected = ({ children, ...rest }) => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
            <Route
                {...rest}
                render={({ location }) =>
                loggedInUser.accountType === "admin" ? (
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

export default AdminProtected;