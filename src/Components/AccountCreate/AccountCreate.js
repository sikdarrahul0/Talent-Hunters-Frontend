import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../brand-img.png';
import './AccountCreate.css';

const AccountCreate = () => {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password === user.confirmPassword){
            fetch(`http://localhost:7000/user/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((result) => {
                setMessage(result.message);
            });
        }else{
            setMessage('Password and Confirm Password are not matched');
        }
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
        else if (e.target.name === 'password') {
            const isPassValid = e.target.value.length > 5;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isValid = isPassValid && passHasNumber;
            if (isValid) {
                setMessage('');
            } else {
                setMessage(
                    'Password strength poor. Please fill up with minimum 5 alphabates with minimun one number'
                );
            }
        }
        else if(e.target.name === 'confirmPassword'){
            if( user.password === e.target.value ){
                setMessage('')
            }
            else{
                setMessage('Password & confirm password not matched');
            }
         }
        if(e.target.name === 'accountType'){
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
         }
        if (true && e.target.value !== 'accountType') {
            const addUser = { ...user };
            addUser[e.target.name] = e.target.value;
            setUser(addUser);
        }
    };
    return (
        <>
        <section>
                <NavLink to="/"> <img src={image} className="brand-img" alt="" /> </NavLink>
                <div className="signup-form">
                   <div className="signup-panel">
                        <h4 className="text-center text-white">Sign Up</h4>
                   </div>
                    <div className="m-3">
                        <form onSubmit={handleSubmit}>
                            <input type="Email" id="account1" name="username" onBlur={handleBlur} placeholder="Username/Email" required/>
                            <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required/>
                            <input type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm password" required/>
                            <label>Account Type:</label>
                            <select id="account" name="accountType" onBlur={handleBlur} required>
                                <option value="job seeker">Job seeker</option>
                                <option value="employer">Employer</option>
                            </select>
                            <input className="signup-btn" type="submit" value="SIGN UP" />
                        </form>
                        <p className="text-danger text-center">{message}</p>
                    </div>
                </div>
        </section>
        {/* <div>
            <button className="float-right btn btn-danger btn-lg mr-2"><Link className="text-white link-design" to="/">Back</Link></button>
            <div className="create-form">
        <div>
            <h1>Account Create Panel</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    type="Email"
                    name="username"
                    onBlur={handleBlur}
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    placeholder="Password"
                    required
                />
                
                <br/>
                    
                <br />
                <br />
                <input className="submit-btn" type="submit" value="signup" />
                <p>{message}</p>

            </form>
        </div> */}
    {/* </div>
        </div> */}
        </>
    );
};

export default AccountCreate;