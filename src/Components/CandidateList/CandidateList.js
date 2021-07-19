import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCandidateList from '../SingleCandidateList/SingleCandidateList';

const CandidateList = () => {

    const {id} = useParams();
    const [candidateList, setCandidateList] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:7000/apply/candidateList/${id}`)
        .then(res => res.json())
        .then(res => setCandidateList(res));
    },[id])
    
    return (
        <div className="text-center">
            {
                candidateList.length?
                candidateList.map(list => <SingleCandidateList list={list}></SingleCandidateList>)
                :
                <h2>No one applied</h2>
            }
        </div>
    );
};

export default CandidateList;