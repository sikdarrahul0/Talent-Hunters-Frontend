import React from 'react';
import './SingleJobDetails.css';

const SingleJobDetails = (props) => {
    const {companyName, title, vacancy, responsibilities, requirements, otherBenefits, location, salary, education, experience, deadline} = props.job;
    return (
<section class="container my-5">
      <div class="job-description">
        <h4 class="text-success">{title}</h4>
        <h5>{companyName}</h5>
        <h6>Vacancy</h6>
        <p>{vacancy}</p>
        <h6>Responsibilities</h6>
        <pre>
        {responsibilities}
        </pre>
        <h6>Requirements</h6>
        <pre>
        {requirements}
        </pre>     
        <h6>Educational Requirements</h6>
        <p>{education}</p>         
        <h6>Experience</h6>
        <p>{experience}</p>
        <h6>Job location</h6>
        <p>{location}</p>
        <h6>Salary</h6>
        <p>{salary}</p>
        <h6>Compensation & Other Benefits</h6>
        <pre>
        {otherBenefits}
        </pre>       
        <h6>Deadline</h6>
        <p>{deadline}</p>     
        </div>
</section>
);
};

export default SingleJobDetails;