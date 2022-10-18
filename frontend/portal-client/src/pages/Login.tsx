import React, {useEffect} from 'react'
import LoginForm from '../components/LoginForm'
import { toast } from "react-toastify";

const token=localStorage.getItem('token')

const Login = () => {
  return (
    <div className='w-full h-full relative'>
        {}
        <LoginForm />
    </div>
  )
}

export default Login