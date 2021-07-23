import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loading from '../../../image&gif/loading.gif';
import SingleJobDetails from '../../SingleJobDetails/SingleJobDetails';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
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

  const notify = (message) => toast.dark( message,{
    autoClose: 2300,
    transition: Zoom
  });
// approved single job post by admin
  const handleStatusUpdate = (id) =>{
        fetch(`https://talenthuntersbd.herokuapp.com/job/approve/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => notify(res.message))
      }
// delete single job post by admin
      const handleDeletePost = (id) => {
        fetch(`https://talenthuntersbd.herokuapp.com/job/delete/${id}`,{
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(res => notify(res.message))
  }
    return (
        <section className="mb-5">
          <ToastContainer />
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

export default ConfirmationPage;