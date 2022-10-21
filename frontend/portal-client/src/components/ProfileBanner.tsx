import React, {useEffect} from 'react'
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Spinner from './Spinner';


type ProfileProps={
  check:{
    hasCompany:boolean
  }
}

const ProfileBanner = ({check}:ProfileProps) => {
   const dispatch=useAppDispatch();
   const {company}=useAppSelector((state)=>state.company)
   
  

  
  return (
    <div className='w-full pt-16'>
        <div className='w-[90%] mx-auto flex items-center mt-4 space-x-4 p-4 rounded-md h-44 border border-indigo-500 shadow-md bg-indigo-300'>
          {check.hasCompany ==true ? (
              <>
                 <div>
                     <img src={`http://localhost:8000${company.company_logo}`} alt=""  className='h-20 w-20 rounded-full'/>
                </div>
                <div>
                    <h3 className='text-2xl font-serif'>{company.company_name}</h3>
                    <p className='font-thin text-lg'>{company.location}</p>
                    <p className='font-thin text-lg'>{company.company_email}</p>
                    <p className='font-thin text-lg'>{company.website}</p>
                </div>
              </>
          ) : (
              <div className='w-full flex justify-center flex-col items-center mx-auto'>
                <Link to='/register-company' ><button className='py-2 mb-2 px-6 bg-slate-700 text-gray-200 rounded-sm'>Register your company</button></Link>
                <p className='text-2xl'>start here by telling us about your company</p>
              </div>
          )}
                
        </div>
    </div>
  )
}

export default ProfileBanner