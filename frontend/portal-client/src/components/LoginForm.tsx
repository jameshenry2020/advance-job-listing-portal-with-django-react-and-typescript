import React, {useState, useEffect} from 'react'
import { Form } from './Form'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const LoginForm = () => {
  const navigate=useNavigate();
  const dispatch=useAppDispatch()
  const [credentials, setCredentials]=useState({
    email:"",
    password:""
  })
 const authState=useAppSelector((state)=>state.authentication)
 const {auth, loading, errors, message}=authState
   const token=localStorage.getItem('token')
  useEffect(()=>{
      if (token !== null) {
        navigate("/")
        toast.warning("you are aleady login")
      }
  },[token])


  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  const {email, password}=credentials

  const handleSubmit= async (e:React.SyntheticEvent)=>{
      e.preventDefault();
      if (!email) {
           toast.warning("email must be provide")
      }
      if (!password) {
         toast.warning("password is required")
      }
      const data={email, password}

      try {
        await dispatch(loginUser(data)).unwrap()
        navigate("/profile")
        toast.success(message)
      } catch (rejectedValueOrSerializedError) {
        toast.error(errors)
      }

      




  }


  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-1/2 h-auto py-6 border border-gray-200'>
           <h3 className='text-4xl font-semibold text-center pt-4 pb-2 font-serif'>Login</h3>
           
            <form onSubmit={handleSubmit} className='px-8 pt-6 pb-2 mb-4 w-[80%] mx-auto'>
                <Form name='email' value={credentials.email} onChange={handleChange}  placeholder='email' label='Email address' />
                <Form name='password' value={credentials.password} onChange={handleChange}    placeholder='your password' label='Password' />
                <button className='py-3 px-8 bg-gray-800 text-white rounded'>Login</button>
             </form>
             <div className='w-full  px-8  flex justify-center items-center flex-col'>
                 <p className='mb-4 text-lg font-thin text-center'><small>or sign in with ...</small></p>
                 <button className='py-1 mb-2 px-2 flex items-center w-72 bg-blue-600 hover:bg-blue-900 text-white '> <span className='px-4 py-2 rounded bg-white box-border mr-2'><FcGoogle size={30} className=''/></span> Sign in with Google</button>
                 <p className='mb-4 text-lg text-gray-800 font-semibold text-center'>dont have an account?  <Link to='/signup' className='text-indigo-500'>Sign up here</Link></p>
             </div>
        </div>
    </div>
  )
}

export default LoginForm