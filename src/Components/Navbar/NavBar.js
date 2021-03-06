import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
import logo from '../../image&gif/brand-logo.svg';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () =>{
        toast.dark( "sign out successful",{
            autoClose: 2000,
            transition: Zoom
          });
          setLoggedInUser({});
    }
    
    return (
        <section>
            <ToastContainer />
             <Navbar className="navbar-design" fixed="top" expand="lg">
             <Navbar.Brand> <NavLink to="/"><img className="logo" src={logo} alt="brand-logo" /></NavLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <NavLink exact to="/home" className="nav-link">Home</NavLink>
                    <NavLink exact to="/adminpanel" className="nav-link"> Admin Panel</NavLink>
                    <NavLink exact to="/add/post" className="nav-link"> Employer</NavLink>
                    <NavLink exact to="/about" className="nav-link"> About Us</NavLink>
                    <NavLink exact to="/signup" className="nav-link"> Sign up</NavLink>
                    {
                    loggedInUser.username ?
                   <NavLink to="/" onClick={() => signOut() } className="nav-link mr-4"> {loggedInUser.username} (sign out)</NavLink>
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