import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../image&gif/default-monochrome.svg';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="container">
                <div className="row justify-content-center mb-3">
                    <div className="col-sm-4 col-auto mb-4">
                        <h5>For Job Seekers</h5>
                        <NavLink className="footer-link" to=""><p>&#8226; Browse Jobs</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Category Selection</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Job Description</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Apply Panel</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Help</p></NavLink>
                    </div>
                    <div className="col-sm-4 col-auto mb-4">
                        <h5>For employer</h5>
                        <NavLink className="footer-link" to="/"><p>&#8226; Upload Jobs</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Resources</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; HelpEmployer Panel</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Candidate List</p></NavLink>
                        <NavLink className="footer-link" to="/"><p>&#8226; Help</p></NavLink>
                    </div>
                    <div className="col-sm-4 col-auto mb-4">
                        <h5>Helpful Resources</h5>
                        <NavLink className="footer-link" to="/about"><p> &#8226; About Talent Hunters</p></NavLink>
                        <NavLink className="footer-link" to="/"><p> &#8226; Work For Talent Hunters</p></NavLink>
                        <NavLink className="footer-link" to="/"><p> &#8226; Terms Of Use</p></NavLink>
                        <NavLink className="footer-link" to="/"><p> &#8226; Privacy Center</p></NavLink>
                        <NavLink className="footer-link" to="/"><p> &#8226; Complain section</p></NavLink>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                            <img src={logo} alt="brand-logo" />
                    </div>
                    <div className="col-12 mb-4">
                        <h6 className="font-weight-light text-center">8th & 9th Floor | House-1 | Road-337 | Gec-1 | Chittagong | Bangladesh</h6>
                    </div>
                    <div className="col-12 mb-4">
                    <FontAwesomeIcon className="icon" icon={faFacebook} />
                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                    </div>
                    <h6 className="mx-auto my-3"> <FontAwesomeIcon icon={faCopyright} /> {`${new Date().getFullYear()} Rahul Sikdar Pranto`}</h6>
                </div>
            </div>
        </section>
    );
};

export default Footer;