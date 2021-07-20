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
          console.log(data);
            setIsHitApi(true);
            setJob(data[0]);
        })
  },[id])
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
              <button  className="approve-btn">Approve</button>
              :
              <></>
          }
          <button className="delete-btn">Delete</button>
          </div>
        </section>
    );
};

export default ApprovedOrDeletePage;