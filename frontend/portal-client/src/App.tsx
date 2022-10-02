import React from 'react';
import './App.css';
import {
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



function App() {
  return (
    <>
      <ToastContainer/>
       <Routes>
          <Route index element={<Home/>} />    
          <Route path="/remote-work/:jobId" element={<JobDetail/>} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register-company" element={<CreateCompany/>} /> 
          <Route path="/profile" element={<UserProfile/>} />                       
      </Routes>
    </>
  );
}

export default App;
