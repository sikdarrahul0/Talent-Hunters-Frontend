import React from 'react';
import { Link } from 'react-router-dom';

const EmployerJobPost = (props) => {
    const {_id, companyName, title, category} = props.post;

    return (
        <div className="card col-lg-2 col-md-4 col-sm-6 m-3 Style">
           <div className="card-body">
           <h5 className="card-title textStyle">{companyName}</h5>
           <p className="card-text">{title}</p>
           <p className="card-title text-primary">Category: {category}</p>
           <Link to={`/candidateList/${_id}`} className="btn btn-success">See who applies</Link>
        </div>
        </div>
    );
};

export default EmployerJobPost;