import React, { useEffect } from 'react'
import JobForm from '../components/JobForm'
import Navbar from '../components/Navbar'
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { checkuserCompany } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const dispatch=useAppDispatch();
  const navigate=useNavigate();
  const userState=useAppSelector((state)=>state.authentication)

 
  useEffect(()=>{ 
        handleRedirect()
  }, [])

 const handleRedirect = async ()=>{ 
      const check=await dispatch(checkuserCompany()).unwrap()
       if (check.hasCompany===false) {
           navigate('/profile')
           toast.info('register your company first')
       }
  }

  return (
    <div className='mb-8'>
      <JobForm />
    </div>
  )
}

export default NewPost