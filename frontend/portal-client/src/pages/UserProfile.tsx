import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import ProfileBanner from '../components/ProfileBanner'
import UserJobList from '../components/UserJobList'
import { getJobsByCompany, getCompanyDetail } from "../features/company/companySlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import { getLoggedInUser,checkuserCompany } from "../features/auth/authSlice";
// import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch=useAppDispatch()
  const navigate=useNavigate();
  const userState=useAppSelector((state)=>state.authentication)
  const {loading,  hasCompany}=userState
  const token=localStorage.getItem('token')

  useEffect(() => { 
       if(token!==null) {
        dispatch(getLoggedInUser());
        dispatch(checkuserCompany());
        dispatch(getJobsByCompany());
       }
           
        
  }, [token, dispatch])

  useEffect(() => {
    if (hasCompany.hasCompany===true) {
         dispatch(getCompanyDetail())
    }
    
  }, [dispatch, hasCompany])
  
  return (
    <div>
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