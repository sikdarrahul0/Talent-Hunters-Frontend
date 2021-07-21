import React from 'react';
import { NavLink } from 'react-router-dom';
import './EmployerJobPost.css';

const EmployerJobPost = (props) => {
    const {_id, companyName, title, category} = props.post;

    return (
        <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="employer-job-post">
                <h4>{title}</h4>
                <h6>{companyName}</h6>
                <p>Category: {category}</p>
                <NavLink style={{ textDecoration: 'none' }}  to={`/candidateList/${_id}`} className="btn btn-success">See who applied</NavLink>
            </div>

        </div>
       
          
        
           
    );
};

export default EmployerJobPost;