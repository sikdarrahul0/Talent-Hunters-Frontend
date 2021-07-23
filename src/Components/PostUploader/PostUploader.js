import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
import EmployerJobPost from '../EmployerJobPost/EmployerJobPost';
import './PostUploader.css';

const PostUploader = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [jobPost, setJobPost] = useState([]);
  const { register, handleSubmit,} = useForm();
  useEffect(()=>{
    fetch(`https://talenthuntersbd.herokuapp.com/job/employer/${loggedInUser.username}`)
    .then(res => res.json())
    .then(res => setJobPost(res))
  },[loggedInUser.username])

  const notify = (message) => toast.dark( message,{
    autoClose: 2300,
    transition: Zoom
  });
  
    const onSubmit = data => {
      fetch(`https://talenthuntersbd.herokuapp.com/job/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => {
          notify(result.message);
        });
    };
  
    return (  
      <section className="container">
        <ToastContainer />
        <div className="job-post-form col-md-8 p-4 p-5">
          
          <h4 className="add-title text-center"> Add A New Job Post </h4>
  
          <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                name="employerName"
                className="form-control"
                placeholder="Employer Name "
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="username"
                value ={loggedInUser.username}
                className="form-control"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="companyName"
                className="form-control"
                placeholder="Company Name"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="title"
                className="form-control"
                placeholder="Job title"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="vacancy"
                className="form-control"
                placeholder="Vacancy"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="jobType"
                className="form-control"
                placeholder="Job Type. Example: Full-Time/ Part-Time"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <textarea 
                rows="4"
                name="responsibilities"
                className="form-control"
                placeholder="Responsibilities for this job &#13;Example:&#13;1. Abc&#13;2. Xyz"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <textarea
                rows="4"
                name="requirements"
                className="form-control"
                placeholder="Requirements for this job  &#13;Example:&#13;1. Abc&#13;2. Xyz"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="experience"
                className="form-control"
                placeholder="experience"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="location"
                className="form-control"
                placeholder="Job Location"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="salary"
                className="form-control"
                placeholder="Salary"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="education"
                className="form-control"
                placeholder="Educational Requirements"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
            <select className="form-control" name="category" ref={register({ required: true })}>
                <option value="OTHERS">OTHERS</option> 
                <option value="IT">IT</option>
                <option value="BANKING">BANKING</option>
                <option value="AGRO">AGRO</option>
                <option value="NGO">NGO</option>
                <option value="ARCHITECTS">ARCHITECTS</option>
                <option value="DATA ENTRY">DATA ENTRY</option>
                <option value="GARMENTS">GARMENTS</option>
                <option value="MEDICAL/PHARMA">MEDICAL/PHARMA</option>
                <option value="DESIGNER">DESIGNER</option>
           </select>
            </div>
            <div className="mb-3">
              <textarea
                rows="4"
                name="otherBenefits"
                className="form-control"
                placeholder="Compensation & Other Benefits &#13;Example:&#13;1. Abc&#13;2. Xyz"
                ref={register({ required: true })}
              />
            </div>
            <div className="mb-3">
              <input
                name="deadline"
                className="form-control"
                placeholder="Deadline. Example: 14 August 2021"
                ref={register({ required: true })}
              />
            </div>
            <input
              className="btn btn-success d-block w-100"
              type="submit"
              value="Submit Job Post"
            />
            <p className="my-2">N.B: Please don't submit same job post more than once.</p>
          </form>
          </div>
          <div>
            <h3 className="my-4 text-center">My Previous Job post</h3>
            <div className="row">
            {
              jobPost.length ?
              
              jobPost.map(post => <EmployerJobPost post={post}></EmployerJobPost>)
              :
              <h4 className="mb-4 text-danger text-center mx-auto">You have no job post. Please post first</h4>
            }
            </div>
          </div>
        </section>
    );
};

export default PostUploader;