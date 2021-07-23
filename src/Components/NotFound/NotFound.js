import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Error 404</h2>
                    <h3>This Page Isn't Available</h3>
                    <p className="text-secondary">The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</p>
                    <NavLink to="/"><button className="btn btn-outline-dark">Go to Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default NotFound;