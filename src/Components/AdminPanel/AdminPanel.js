/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import UnitJobPost from './UnitJobPost';

const AdminPanel = () => {
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
        <section className="container">
            <div className="admin-page">
                <h2 className="text-center mb-3">Admin Home Page</h2>
                <div className="row">
                    {
                        post.map(single => <UnitJobPost handleStatusUpdate={handleStatusUpdate} single={single}></UnitJobPost>)
                    }
                </div>
            </div>
        </section>
    );
        };

export default AdminPanel;