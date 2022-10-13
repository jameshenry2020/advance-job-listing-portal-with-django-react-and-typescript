import React, {useEffect} from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'
import { toast } from "react-toastify";

const token=localStorage.getItem('token')

const Login = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    if (token !== null) {  
      navigate("/profile")
      toast.warning("you are aleady login")
    }
},[token])

  return (
    <div className='w-full h-full relative'>
        <Navbar/>
        <LoginForm />
    </div>
  )
}

export default Login