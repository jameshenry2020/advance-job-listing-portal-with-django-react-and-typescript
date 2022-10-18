import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { activateUser } from "../features/auth/authSlice";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Activate = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const {message, activate_status, errors}=useAppSelector((state)=>state.authentication)
    const {uid, token}:any=useParams();
    const data={"uid":uid, "token":token}

    const handleActivate=()=>{
         dispatch(activateUser(data));
         if (activate_status==204) {
            navigate('/login')
            toast.success(message)
         }else{
            toast.error(errors)
         }
         
    }

  return (
    <div>
        <div className='mt-10 w-full py-4 flex justify-center items-center'>
            <div className='w-[60%] mx-auto text-center'>
            <p className='text-xl font-serif font-medium'>click the button below to activate your account </p> 
            <button onClick={handleActivate} className='py-1 px-4 bg-blue-500 text-white'>Activate</button> 
            </div>
                 
        </div>



    </div>
  )
}

export default Activate