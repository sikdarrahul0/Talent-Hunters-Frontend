/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const ApplyPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const [message, setMessage] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
      data.jobId = id;
      fetch(`http://localhost:7000/apply/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => {
          setMessage(result.message);
          alert('Successfully Submited');
        });
     };
    return (
        <div className=" margin col-md-8 p-4 pr-5">
        <button className="float-right btn btn-danger" onClick={()=> setLoggedInUser({})}><Link to="/">Log out </Link></button>
          <h2 className="add-title text-center"> Job Application Form </h2>
  
          <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                name="candidateName"
                className="form-control"
                placeholder="Candidate Name "
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Candidate Name is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="email"
                placeholder="Email"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Email is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="phoneNumber"
                className="form-control"
                placeholder="Mobile Number"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Mobile Number is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="university"
                className="form-control"
                placeholder="University"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">University is required</span>
              )}
            </div>
  
            <div className="mb-3">
              <input
                name="experience"
                className="form-control"
                placeholder="Experience"
                ref={register({ required: false })}
              />
            </div>
            <input
              className="btn btn-success d-block w-100"
              type="submit"
              value="Submit"
            />
             <span className="text-danger">{message}</span>

          </form>
          </div>
    );
};

export default ApplyPage;