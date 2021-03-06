/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import loading from '../../image&gif/loading.gif';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';
import './ApplyPage.css';


const ApplyPage = () => {
  const [isHitApi,setIsHitApi] = useState(false);
  const [job, setJob] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    fetch(`https://talenthuntersbd.herokuapp.com/job/single/${id}`)
    .then(res => res.json())
    .then(data => {
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
      <NavLink style={{ textDecoration: 'none' }} to={`/job/applyform/${job._id}`}> <button  className="apply-btn mb-4">Apply Now</button></NavLink>  
      </>
    );
};

export default ApplyPage;