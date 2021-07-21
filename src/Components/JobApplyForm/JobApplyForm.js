/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useParams } from 'react-router-dom';
import './JobApplyForm.css';

const JobApplyForm = () => {
    const {id} = useParams();
    return (
      <div className="container job-apply-form">
        <h3 className="text-center mb-5">Job Application Form</h3>
        <iframe className="d-none" id="hidden-iframe"> </iframe>
      <form
        method="post"
        action="http://localhost:7000/apply"
        enctype="multipart/form-data"
        target="hidden-iframe" 
      >
        <input className="d-none" type="text" value={id} name = "jobId" />
        <label htmlFor="name">Name<span className="text-danger">*</span></label>
        <input className="form-control" type="text" id="name" name="name" required />

        <label htmlFor="email">Email<span className="text-danger">*</span></label>
        <input className="form-control" type="text" id="email" name="email" required />

        <label htmlFor="number">Phone<span className="text-danger">*</span></label>
        <input className="form-control" type="text" id="number" name="mobileNo" required/>

        <label htmlFor="address">Address<span className="text-danger">*</span></label>
        <textarea name="address" className="form-control" id="address" required />
        
        <label>How Did You Get To Know The Company?<span className="text-danger">*</span></label>
        <select className="form-control" name="source" required>
                <option value="Friends">Friends</option>
                <option value="Company">Company Website</option>
                <option value="Talent-Hunters">Talent Hunters</option>
                <option value="Facebook">Facebook</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Others">Others</option>
        </select>
        
        <label htmlFor="resume">Attach Resume<span className="text-danger">*</span></label>
        <input id="resume" className="form-control-file" type="file" name="resume" required/>
        <input className="btn btn-dark my-3 mx-auto" type="submit" value="Submit" />
      </form>
      </div>
    );
};

export default JobApplyForm;