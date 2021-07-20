import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import loading from '../../../loading.gif';
import SingleJobDetails from '../../SingleJobDetails/SingleJobDetails';
import './ApprovedOrDeletePage.css';

const ApprovedOrDeletePage = () => {
  const [isHitApi,setIsHitApi] = useState(false);
  const [job, setJob] = useState({});
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:7000/jobPost/singleJobPost/${id}`)
    .then(res => res.json())
    .then(data => {
            setIsHitApi(true);
            setJob(data[0]);
        })
  },[id])

  const handleDeletePost = (id) => {
        fetch(`http://localhost:7000/jobPost/deleteJob/${id}`,{
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => alert(res.message))
  }

  const handleStatusUpdate = (id) =>{
        fetch(`http://localhost:7000/jobPost/approvePost/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => alert(res.message))
      }
    return (
        <section className="mb-5">
        {
            isHitApi ?
            <SingleJobDetails job={job}></SingleJobDetails>
            :
            <img className="d-block mx-auto loading-img" src={loading} alt="loading" />
           
          }
          <div className="mx-auto w-50 overflow-hidden">
          {
              job.status === 'pending' ?
              <button onClick={()=> handleStatusUpdate(job._id)}  className="approve-btn">Approve</button>
              :
              <></>
          }
          <button onClick={() => handleDeletePost(job._id)} className="delete-btn">Delete</button>
          </div>
        </section>
    );
};

export default ApprovedOrDeletePage;