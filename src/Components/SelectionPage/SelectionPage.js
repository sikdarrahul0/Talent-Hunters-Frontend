import React from 'react';
import { Link } from 'react-router-dom';
import './SelectionPage.css';

const SelectionPage = () => {
    return (
        <>
        <div className="container mt-5 pt-3">
        <div className="row">
    <div class="mb-2 card col-lg-6 col-md-12">
           <div class="card-header">
             Featured
           </div>
        <div class="card-body">
        <h5 class="card-title">Create user account</h5>
          <Link to="/signup/user"className="btn btn-warning btn-lg link-design">Go</Link>
      </div>
    </div>
    <div class="mb-2 card col-lg-6 col-md-12">
           <div class="card-header">
             Featured
           </div>
        <div class="card-body">
        <h5 class="card-title">Login</h5>
          <Link to="/login/user" className="btn btn-warning btn-lg link-design">Go</Link>
      </div>
    </div>
        </div>
        </div>
        </>
    );
};

export default SelectionPage;