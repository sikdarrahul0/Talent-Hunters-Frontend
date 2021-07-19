import { faBriefcase, faCalendar, faGraduationCap, faHandHoldingUsd, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const UnitPost = (props) => {

    const {_id, title, companyName} = props.pt;
    
    return (
        <div class="col-12 job-post">
            <h4>{title}</h4>
            <h6>{companyName}</h6>
            <p><FontAwesomeIcon className="fa-icon mr-2" icon={faMapMarker} />  Gulshan, Dhaka</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />Bachelor of Science (BSc) in Computer Science Engineering</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faBriefcase} /> Freshers/1 years experience</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faHandHoldingUsd} />40000bdt</p>
            <p className="deadline"><FontAwesomeIcon className="fa-icon" icon={faCalendar} /> Deadline: 14 August 2021</p>
           <NavLink to={`/apply/${_id}`}> <button  className="apply-btn">Apply</button></NavLink>            
       </div>
        
    );
};

export default UnitPost;