import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './AdminPanel.css';
import UnitAdminPanel from './UnitAdminPanel';

const AdminPanel = () => {

    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/jobPost/allJobPost')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const handleStatusUpdate = (id) =>{
        fetch(`http://localhost:7000/jobPost/approvePost/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => alert(res.message))
    }

    return (
        <div className="container">
       <button className="float-right btn btn-danger" onClick={()=> setLoggedInUser({})}><Link to="/">Log out </Link> </button>
        <h2 className="text-white headingStyle">Admin Home Page</h2>
            <div className="row">
            {
                post.map(single => <UnitAdminPanel handleStatusUpdate={handleStatusUpdate} single={single}></UnitAdminPanel>)
            }
         </div>
         </div>
    );
        };

export default AdminPanel;