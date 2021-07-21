import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image&gif/default-monochrome.svg';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <section>
             <Navbar className="navbar-design" fixed="top" expand="lg">
             <Navbar.Brand> <NavLink to="/"><img className="logo" src={logo} alt="brand-logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavLink exact to="/home" className="nav-link">Home</NavLink>
                    <NavLink exact to="/adminPanel" className="nav-link"> Admin Panel</NavLink>
                    <NavLink exact to="/postUploader" className="nav-link"> Employer</NavLink>
                    <NavLink exact to="/signup" className="nav-link"> Sign up</NavLink>
                    {
                    loggedInUser.username ?
                   <NavLink to="/" onClick={() => setLoggedInUser({})} className="nav-link mr-4"> {loggedInUser.username} (sign out)</NavLink>
                    :
                    <NavLink to="/login" className="nav-link mr-4">Log in</NavLink>
                }
                        
                    </Nav>
                </Navbar.Collapse>
        </Navbar>  
        </section>
    );
};

export default NavBar;