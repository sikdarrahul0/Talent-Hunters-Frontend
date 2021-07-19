import React from 'react';
import './SingleCandidateList.css';

const SingleCandidateList = (props) => {
    const {candidateName, email, phoneNumber, university, experience} = props.list;
    return (
        <>
            <ol>
                <li>{candidateName}</li>
                <li>{email}</li>
                <li>{phoneNumber}</li>
                <li>{university}</li>
                <li>{experience}</li>
            </ol>
        </>
    );
};

export default SingleCandidateList;