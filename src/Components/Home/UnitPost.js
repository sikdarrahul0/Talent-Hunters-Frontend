import { faBriefcase, faCalendar, faGraduationCap, faHandHoldingUsd, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const UnitPost = (props) => {

    const {_id, title, location, education, experience, salary, companyName, deadline} = props.pt;
 
    
    return (
        <div class="col-12 job-post">
            <h4>{title}</h4>
            <h6>{companyName}</h6>
            <p><FontAwesomeIcon className="fa-icon mr-2" icon={faMapMarker} />  {location}</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />{education}</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faBriefcase} /> {experience}</p>
            <p><FontAwesomeIcon className="fa-icon" icon={faHandHoldingUsd} />{salary}</p>
            <p className="deadline"><FontAwesomeIcon className="fa-icon" icon={faCalendar} /> Deadline: {deadline}</p>
           <NavLink to={`/applyPage/${_id}`}> <button  className="more-detail-btn">More Details</button></NavLink>            
       </div>
        
    );
};

export default UnitPost;