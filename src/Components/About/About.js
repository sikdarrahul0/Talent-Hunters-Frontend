import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ourImage from '../../image&gif/company-img.jpg';
import image from '../../image&gif/deal-done.jpg';
import employerImage from '../../image&gif/man.png';
import candidateImage from '../../image&gif/woman.png';
import './About.css';

const About = () => {
    return (
        <section className="about-page">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6 my-4 px-3">
                        <h3 className="text-white">We help employers and candidates find the right fit</h3>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid img-thumbnail" src={image} alt="candidate & employer" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="text-white col-md-6 my-4 px-3">
                        <h1 className="text-danger">Who we are</h1>
                        <p>Talent Hunters is a bangladeshi leader in connecting people and jobs. Every day,  Talent Hunters aims to make every workplace happier and more productive by transforming the way employers and candidates find the right fit. Talent Hunters has worked to transform the recruiting industry. Today, the company leverages advanced technology using intelligent digital, social and including the flagship website.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid img-thumbnail mt-md-5" src={ourImage} alt="candidate & employer" />
                    </div>
                </div>
                <div className="row my-5">
                    <div className="text-white col-12 my-3 px-3">
                        <h1 className="text-danger text-center">We want to know more about you</h1>
                        <h5 className="text-center">Select your profile</h5>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="single-user-box">
                                    <div>
                                    <img src={employerImage} alt="employer-img" />
                                    </div>
                                    <div className="user-box">
                                        <h3>I am an employer</h3>
                                        <p>You don’t want just any candidate, you want the right fit.</p>
                                        <NavLink to="/add/post"><button class="btn btn-outline-light"><FontAwesomeIcon icon={faSearch} /></button></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                            <div className="single-user-box">
                                    <div>
                                    <img src={candidateImage} alt="employer-img" />
                                    </div>
                                    <div className="user-box">
                                        <h3>I am a candidate</h3>
                                        <p>You don’t want just any job, you want the right fit. Find it here.</p>
                                        <NavLink to="/"> <button class="btn btn-outline-light"><FontAwesomeIcon icon={faSearch} /></button></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

