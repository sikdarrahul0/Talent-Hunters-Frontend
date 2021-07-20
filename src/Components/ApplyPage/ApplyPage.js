/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import loading from '../../loading.gif';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import './ApplyPage.css';


const ApplyPage = () => {
  const [isHitApi,setIsHitApi] = useState(false);
  const [job, setJob] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:7000/jobPost/singleJobPost/${id}`)
    .then(res => res.json())
    .then(data => {
          console.log(data);
            setIsHitApi(true);
            setJob(data[0]);
        })
  },[id])
    return(
      <>
      {
        isHitApi ?
        <SingleJobDetails job={job}></SingleJobDetails>
        :
        <img className="d-block mx-auto loading-img" src={loading} alt="loading" />
       
      }
      <NavLink style={{ textDecoration: 'none' }} to={`/jobApplyForm/${job._id}`}> <button  className="apply-btn">Apply Now</button></NavLink>  
      </>
    );
};

export default ApplyPage;