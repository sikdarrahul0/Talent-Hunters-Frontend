import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import EmployerJobPost from '../EmployerJobPost/EmployerJobPost';
import './PostUploader.css';

const PostUploader = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [jobPost, setJobPost] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  useEffect(()=>{
    fetch(`http://localhost:7000/jobPost/employerJobPost/${loggedInUser.username}`)
    .then(res => res.json())
    .then(res => setJobPost(res))
  },[loggedInUser.username])
  
    const onSubmit = data => {
      fetch(`http://localhost:7000/jobPost/addPost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => {
          setMessage(result.message);
        });
    };
  
    return (  
      <section className="container">
        <div className="job-post-form col-md-8 p-4 p-5">
          
          <h4 className="add-title text-center"> Add New Job Post </h4>
  
          <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                name="employerName"
                className="form-control"
                placeholder="Employer Name "
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Employer Name is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="username"
                value ={loggedInUser.username}
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Username is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="companyName"
                className="form-control"
                placeholder="Company Name"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Company Name is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="title"
                className="form-control"
                placeholder="Job title"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Title is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="vacancy"
                className="form-control"
                placeholder="Vacancy"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Vacancy is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="jobType"
                className="form-control"
                placeholder="Job Type. Example: Full-Time/ Part-Time"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Job Type is required</span>
              )}
            </div>
            <div className="mb-3">
              <textarea
                name="responsibilities"
                className="form-control"
                placeholder="Responsibilities for this job"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Responsibilities is required</span>
              )}
            </div>
            <div className="mb-3">
              <textarea
                name="requirements"
                className="form-control"
                placeholder="Requirements for this job"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Requirements is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="experience"
                className="form-control"
                placeholder="experience"
                ref={register({ required: true })}
              />
                {errors.name && (
                <span className="text-danger">Experience is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="location"
                className="form-control"
                placeholder="Job Location"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Job location is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="salary"
                className="form-control"
                placeholder="Salary"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Salary is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="education"
                className="form-control"
                placeholder="Educational Requirements"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Educational requirements are required</span>
              )}
            </div>
            <div className="mb-3">
            <select className="form-control" name="category" ref={register({ required: true })} >
                <option value="IT">IT</option>
                <option value="BANKING">BANKING</option>
                <option value="AGRO">AGRO</option>
                <option value="NGO">NGO</option>
                <option value="ARCHITECTS">ARCHITECTS</option>
                <option value="DATA ENTRY">DATA ENTRY</option>
                <option value="GARMENTS">GARMENTS</option>
                <option value="MEDICAL/PHARMA">MEDICAL/PHARMA</option>
                <option value="DESIGNER">DESIGNER</option>
                <option value="OTHERS">OTHERS</option>
           </select>
           {errors.name && (
                <span className="text-danger">Category is required</span>
              )}
            </div>
            <div className="mb-3">
              <textarea
                name="otherBenefits"
                className="form-control"
                placeholder="Compensation & Other Benefits                "
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Compensation & Other Benefits are required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="deadline"
                className="form-control"
                placeholder="Deadline. Example: 14 August 2021"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Deadline is required</span>
              )}
            </div>
            <input
              className="btn btn-success d-block w-100"
              type="submit"
              value="Submit Job Post"
            />
             <span className="text-danger">{message}</span>

          </form>
          </div>
          <div>
            <h3 className="mt-5 text-center">My Previous Job post</h3>
            {
              jobPost.length ?
              
              jobPost.map(post => <EmployerJobPost post={post}></EmployerJobPost>)
              :
              <h4 className="mt-4 text-danger text-center">You have no job post. Please post first</h4>
            }
          </div>
        </section>
    );
};

export default PostUploader;