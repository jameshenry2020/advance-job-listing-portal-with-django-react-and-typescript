import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import ProfileBanner from '../components/ProfileBanner'
import UserJobList from '../components/UserJobList'
import { getJobsByCompany } from "../features/company/companySlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getLoggedInUser,checkuserCompany } from "../features/auth/authSlice";
// import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch=useAppDispatch()
  const navigate=useNavigate();
  const userState=useAppSelector((state)=>state.authentication)
  const {loading, errors, hasCompany}=userState
  const token=localStorage.getItem('token')

  useEffect(() => { 
    if (token===null) {
        navigate('/login')
    }else{
       dispatch(getLoggedInUser());
       dispatch(checkuserCompany());
       dispatch(getJobsByCompany());
    } 
       
        
  }, [token, dispatch])
  
  return (
    <div>
        <Navbar/>
        {loading ? <Spinner/> :(
          <>
           <ProfileBanner check={hasCompany}/>
           <UserJobList/>
          </>
          
        )}
        
        

    </div>
  )
}

export default UserProfile