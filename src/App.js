import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import AccountCreate from './Components/AccountCreate/AccountCreate';
import AdminPanel from './Components/AdminPanel/AdminPanel';
import ConfirmationPage from './Components/AdminPanel/ConfirmationPage/ConfirmationPage';
import ApplyPage from './Components/ApplyPage/ApplyPage';
import CandidateList from './Components/CandidateList/CandidateList';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import JobApplyForm from './Components/JobApplyForm/JobApplyForm';
import Login from './Components/Login/Login';
import NavBar from './Components/Navbar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import PostUploader from './Components/PostUploader/PostUploader';
import AdminProtected from './Components/Protected/AdminProtected/AdminProtected';
import CandidateProtected from './Components/Protected/CandidateProtected/CandidateProtected';
import EmployerProtected from './Components/Protected/EmployerProtected/EmployerProtected';

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
          <Route path ="/applypage/:id">
            <ApplyPage />
          </Route>
          <CandidateProtected path="/job/applyform/:id">
            <JobApplyForm />
          </CandidateProtected>
          <EmployerProtected path="/candidatelist/:id">
            <CandidateList />
          </EmployerProtected>
          <Route path="/signup">
            <AccountCreate />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <EmployerProtected path="/add/post">
             <PostUploader/>
          </EmployerProtected>
          <AdminProtected path="/adminpanel">
             <AdminPanel />
          </AdminProtected>
          <AdminProtected path="/confirmationpage/:id">
            <ConfirmationPage />
          </AdminProtected>
          <Route path="/home">
             <Home/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </UserContext.Provider>
  );
}

export default App;
