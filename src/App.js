import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AccountCreate from './Components/AccountCreate/AccountCreate';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import ApprovedOrDeletePage from './Components/AdminPanel/ApprovedOrDeletePage/ApprovedOrDeletePage';
import AdminProtected from './Components/AdminProtected/AdminProtected';
import ApplyPage from './Components/ApplyPage/ApplyPage';
import CandidateList from './Components/CandidateList/CandidateList';
import EmployerProtected from './Components/EmployerProtected/EmployerProtected';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import JobApplyForm from './Components/JobApplyForm/JobApplyForm';
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
          <Route path ="/applyPage/:id">
            <ApplyPage />
          </Route>
          <PrivateRoute path="/jobApplyForm/:id">
            <JobApplyForm />
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
          <AdminProtected path="/approvedOrDeletePage/:id">
            <ApprovedOrDeletePage />
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
