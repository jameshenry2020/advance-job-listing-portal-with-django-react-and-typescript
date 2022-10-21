import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import JobDetail from './pages/JobDetail';
import NewPost from './pages/NewPost';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreateCompany from './pages/CreateCompany';
import UserProfile from './pages/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Activate from './pages/Activate';
import Navbar from './components/Navbar';
import PrivateRoutes from './utils/PrivateRoutes';
import JobApplication from './pages/JobApplication';
import Success from './pages/Success';



function App() {
  return (
    <Router>
    <ToastContainer/>
      <Navbar/>
       <Routes>
          <Route index element={<Home/>} />  
          <Route element={<PrivateRoutes/>}>
            <Route path="/register-company" element={<CreateCompany/>} /> 
            <Route path="/profile" element={<UserProfile/>} /> 
            <Route path="/new-post" element={<NewPost />} />
          </Route>  
          <Route path="/remote-work/:jobId" element={<JobDetail/>} />  
          <Route path="/signup" element={<SignUp />} />
          <Route path='/jobs/apply/:job_id' element={<JobApplication/>}/>
          <Route path='/application-success' element={<Success/>}/>
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
          <Route path="/login" element={<Login/>} />
                                
       </Routes>
    </Router>
  );
}

export default App;
