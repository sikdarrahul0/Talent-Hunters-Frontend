/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react';
import loading from '../../image&gif/loading.gif';
import './AdminPanel.css';
import SingleJobPost from './SingleJobPost';

const AdminPanel = () => {
    const [isHitApi, setIsHitApi] = useState(false);
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch('https://talenthuntersbd.herokuapp.com/job/all')
        .then(res => res.json())
        .then(res => {
            setIsHitApi(true)
            setPost(res)
        })
    },[])
    
    return (
        <section className="container">
            <div className="admin-page">
                <h2 className="text-center mb-3">Admin Home Page</h2>
                <div className="row">
                    {
                        isHitApi?
                        post.map(job => <SingleJobPost job={job}></SingleJobPost>)
                        :
                        <img className="d-block mx-auto loading-img" src={loading} alt="loading" />
                    }
                </div>
            </div>
        </section>
    );
        };

export default AdminPanel;