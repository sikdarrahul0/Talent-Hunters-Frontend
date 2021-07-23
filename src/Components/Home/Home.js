import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import loading from '../../image&gif/loading.gif';
import sadEmoji from '../../image&gif/sad-emoji.png';
import './Home.css';
import HomeSinglePost from './HomeSinglePost';

const Home = () => {
    const [post, setPost] = useState([]);
    const [isHitApi, setIsHitApi] = useState(false);
    const [category, setCategory] = useState();
    useEffect(()=>{
        fetch(`https://talenthuntersbd.herokuapp.com/job/approved/post/${category}`)
        .then(res => res.json())
        .then(data => {
            setIsHitApi(true);
            setPost(data);
        })
    },[category])

    return (
        <div> 
            <div className="container home-main">
            <h2 className="text-center mt-5 mb-3">Apply to your desired job</h2>
            <div className="row">
            <div className="col-12 category-div">
                <select className="float-right" id="category" onChange={(e)=>setCategory(e.target.value)} required>
                <option value="undefined">All</option>
                <option value="IT">IT</option>
                <option value="BANKING">BANKING</option>
                <option value="AGRO">AGRO</option>
                <option value="NGO">NGO</option>
                <option value="ARCHITECTS">ARCHITECTS</option>
                <option value="DATA ENTRY">DATA ENTRY</option>
                <option value="GARMENTS">GARMENTS</option>
                <option value="MEDICAL">MEDICAL</option>
                <option value="DESIGNER">DESIGNER</option>
                <option value="OTHERS">OTHERS</option>
                </select>
                <p>Select job category: <FontAwesomeIcon icon={faSearch} />  </p>
            </div>
            </div>
            <div className="row">
                {
                    isHitApi ?
                    post.length ?
                    post.map(pt => <HomeSinglePost pt={pt}></HomeSinglePost>)
                    :
                    <div className="text-center w-75 mx-auto my-5">
                        <h4 className="inline-block text-secondary">Sorry</h4>
                        <img className="w-25 h-50" src={sadEmoji} alt="sad-emoji" />
                        <h5 className="text-danger mt-3">No job available at this moment</h5>
                    </div>
                :
                <img className="d-block mx-auto my-5" src={loading} alt="loading" />
                }
                
        </div>
        </div>
        </div>
    );
};

export default Home;