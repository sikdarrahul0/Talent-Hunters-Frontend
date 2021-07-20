import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminPanel.css';

const UnitJobPost = (props) => {
    
    const {title,companyName,_id } = props.single;
    return (
        <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="single-job-post">
                <h4>{title}</h4>
                <h6>{companyName}</h6>
                <NavLink to={`/approvedOrDeletePage/${_id}`}> <button  className="more-detail-btn">More Details</button></NavLink>
            </div>

        </div>
    );
};

export default UnitJobPost;