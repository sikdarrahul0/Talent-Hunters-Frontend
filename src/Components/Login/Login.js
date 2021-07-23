import React, { useContext, useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
import image from '../../image&gif/brand-img.png';
import './Login.css';

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const notify = (message, time) => toast.dark( message,{
        autoClose: time,
        transition: Zoom
      });

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res);
        if (redirect) {
            if(res.accountType === 'admin'){
                from.pathname = '/adminpanel'
                history.replace(from);
            }
            else if(res.accountType === 'employer'){
                from.pathname = '/add/post'
                history.replace(from);
            }
            else{
                history.replace(from);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://talenthuntersbd.herokuapp.com/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    notify(result.error, 3000);
                } 
                else{
                    notify("Successfully login", 1500);
                    setTimeout(()=> handleResponse(result, true), 1600);
                }
            });
    };

    const handleBlur = (e) => {
        let isValid = true;
        if (e.target.name === 'username') {
            isValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (isValid) {
                setMessage('');
            } else {
                setMessage('Please fill up email field correctly.');
            }
        }
        // eslint-disable-next-line no-constant-condition
        if (true) {
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
        }
    };
    return (
        <section>
             <ToastContainer />
                <NavLink to="/"> <img src={image} className="brand-img" alt="" /> </NavLink>
                <div className="login-form">
                   <div className="login-panel">
                        <h4 className="text-center text-white">Log In</h4>
                   </div>
                    <div className="m-3">
                        <form onSubmit={handleSubmit}>
                            <input type="Email" name="username" onBlur={handleBlur} placeholder="Username/Email" required/>
                            <input type="password" name="password" onChange={handleBlur} placeholder="Password" required/>
                            <input className="login-btn" type="submit" value="LOG IN" />
                        </form>
                        <p className="text-danger text-center">{message}</p>
                    </div>
                    <div className="mt-1 mb-3 text-center">
                        <p className="text-secondary m-1">Don’t have an account?</p>
                        <NavLink to="/signup" className="sign-up-link"><h6>SIGN UP NOW</h6></NavLink>
                    </div>
                </div>
        </section>
    );
};

export default Login;