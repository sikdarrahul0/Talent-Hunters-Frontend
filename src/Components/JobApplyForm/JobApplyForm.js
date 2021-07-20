/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
// import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import './JobApplyForm.css';

const JobApplyForm = () => {
    // eslint-disable-next-line no-unused-vars
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    // const [message, setMessage] = useState('');
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => {
    //   data.jobId = id;
    //   fetch(`http://localhost:7000/apply/`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    // })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       setMessage(result.message);
    //       alert('Successfully Submited');
    //     });
    //  };
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
                <option value="Facebook">Facebook</option>
                <option value="Newspaper">Newspaper</option>
                <option value="Others">Others</option>
        </select>

        <label htmlFor="resume">Attach Resume<span className="text-danger">*</span></label>
        <input id="resume" className="form-control-file" type="file" name="resume" required/>
        <input className="btn btn-dark my-3 mx-auto" type="submit" value="Submit" />
      </form>
      </div>
        // <div className=" margin col-md-8 p-4 pr-5">
        // <button className="float-right btn btn-danger" onClick={()=> setLoggedInUser({})}><Link to="/">Log out </Link></button>
        //   <h2 className="add-title text-center"> Job Application Form </h2>
  
        //   <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
        //     <div className="mb-3">
        //       <input
        //         name="candidateName"
        //         className="form-control"
        //         placeholder="Candidate Name "
        //         ref={register({ required: true })}
        //       />
        //       {errors.name && (
        //         <span className="text-danger">Candidate Name is required</span>
        //       )}
        //     </div>
        //     <div className="mb-3">
        //       <input
        //         name="email"
        //         placeholder="Email"
        //         className="form-control"
        //         ref={register({ required: true })}
        //       />
        //       {errors.name && (
        //         <span className="text-danger">Email is required</span>
        //       )}
        //     </div>
        //     <div className="mb-3">
        //       <input
        //         name="phoneNumber"
        //         className="form-control"
        //         placeholder="Mobile Number"
        //         ref={register({ required: true })}
        //       />
        //       {errors.name && (
        //         <span className="text-danger">Mobile Number is required</span>
        //       )}
        //     </div>
        //     <div className="mb-3">
        //       <input
        //         name="university"
        //         className="form-control"
        //         placeholder="University"
        //         ref={register({ required: true })}
        //       />
        //       {errors.name && (
        //         <span className="text-danger">University is required</span>
        //       )}
        //     </div>
  
        //     <div className="mb-3">
        //       <input
        //         name="experience"
        //         className="form-control"
        //         placeholder="Experience"
        //         ref={register({ required: false })}
        //       />
        //     </div>
        //     <input
        //       className="btn btn-success d-block w-100"
        //       type="submit"
        //       value="Submit"
        //     />
        //      <span className="text-danger">{message}</span>

        //   </form>
        //   </div>
    );
};

export default JobApplyForm;