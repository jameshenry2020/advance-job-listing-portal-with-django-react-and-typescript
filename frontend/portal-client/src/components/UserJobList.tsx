import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from "../app/hooks";

import Spinner from './Spinner';
import Job from './Job';
import { CompanyJobType } from "../features/types";

const UserJobList = () => {
  const {jobs}=useAppSelector((state)=>state.company)
   
  return (

    <div>
        <div className='py-4  text-center'>
          {   
             jobs.length == 0 ? (
            <p className='text-gray-600 mb-2 text-2xl text-center mt-4'>no job listing match your search </p>
          ) : (
            <>
            <h1 className='text-gray-600 mb-2'>Jobs Posted</h1>
            {jobs.map((job:CompanyJobType)=>(
               <Job key={job.pkid} {...job}/>
            ))}
            </>
          )}
        </div>
    </div>
  )
}

export default UserJobList