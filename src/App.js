import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AccountCreate from './Components/AccountCreate/AccountCreate';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import AdminProtected from './Components/AdminProtected/AdminProtected';
import ApplyPage from './Components/ApplyPage/ApplyPage';
import CandidateList from './Components/CandidateList/CandidateList';
import EmployerProtected from './Components/EmployerProtected/EmployerProtected';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/Navbar/NavBar';
import PostUploader from './Components/PostUploader/PostUploader';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavBar />
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <PrivateRoute path="/apply/:id">
            <ApplyPage />
          </PrivateRoute>
          <EmployerProtected path="/candidateList/:id">
            <CandidateList />
          </EmployerProtected>
          <Route path="/signup">
            <AccountCreate />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <EmployerProtected path="/postUploader">
             <PostUploader/>
          </EmployerProtected>
          <AdminProtected path="/adminPanel">
             <AdminPanel />
          </AdminProtected>
          <Route path="/home">
             <Home/>
          </Route>
        </Switch>
        <Footer />
      </Router>
      </UserContext.Provider>
  );
}

export default App;
