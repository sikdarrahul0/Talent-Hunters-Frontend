/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import './AdminPanel.css';
import UnitJobPost from './UnitJobPost';

const AdminPanel = () => {
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/job/all')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    
    return (
        <section className="container">
            <div className="admin-page">
                <h2 className="text-center mb-3">Admin Home Page</h2>
                <div className="row">
                    {
                        post.map(single => <UnitJobPost single={single}></UnitJobPost>)
                    }
                </div>
            </div>
        </section>
    );
        };

export default AdminPanel;