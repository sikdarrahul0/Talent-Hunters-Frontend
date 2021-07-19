import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import EmployerJobPost from '../EmployerJobPost/EmployerJobPost';

const PostUploader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [message, setMessage] = useState('');
  const [jobPost, setJobPost] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  useEffect(()=>{
    fetch(`http://localhost:7000/jobPost/employerJobPost/${loggedInUser.username}`)
    .then(res => res.json())
    .then(res => setJobPost(res))
  },[])
  
    const onSubmit = data => {
      fetch(`http://localhost:7000/jobPost/addPost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((result) => {
          setMessage(result.message);
          alert('Successfully posted');
        });
    };
  
    return (  
      <>
        <div className=" margin col-md-8 p-4 pr-5">
        <button className="float-right btn btn-danger" onClick={()=> setLoggedInUser({})}><Link to="/">Log out </Link></button>
          <h4 className="add-title"> Add Job Post </h4>
  
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
                placeholder="title"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Title is required</span>
              )}
            </div>
  
            <div className="mb-3">
              <input
                name="category"
                className="form-control"
                placeholder="Job Category"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Category is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="description"
                className="form-control"
                placeholder="Description"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Desciption is required</span>
              )}
            </div>
            <div className="mb-3">
              <input
                name="status"
                value ="pending"
                className="form-control"
                ref={register({ required: true })}
              />
              {errors.name && (
                <span className="text-danger">Status is required</span>
              )}
            </div>
            <input
              className="btn btn-success d-block w-100"
              type="submit"
              value="Post"
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
              <h4>You have no job post. Please post first</h4>
            }
                
          </div>
      </>
    );
};

export default PostUploader;