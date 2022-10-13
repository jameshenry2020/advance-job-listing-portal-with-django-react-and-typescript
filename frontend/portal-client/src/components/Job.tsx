import React from 'react'
import { CompanyJobType } from "../features/types";
import Moment from 'react-moment';

const Job = ({job_title, job_description,salary, job_type, category, nums_of_applicant, created_at, skills}:CompanyJobType) => {
  return (
    <div className='w-full  mb-2   text-gray-700'>
      
        <div className='w-[70%] mx-auto h-32 bg-white border border-gray-300 shadow-md'>
            <h2 className='text-gray-600 text-left px-6 py-2 capitalize'>{job_title}</h2>
            <p className='text-left px-6'>{job_description}</p>
            <div className='w-full h-10 shadow-md flex justify-evenly bg-gray-200'>
                <p className='fonts-thin text-lg text-gray-600'>{category}</p>
                <p className='fonts-thin text-lg text-gray-600'>{job_type}</p>
                <p className='fonts-thin text-lg text-gray-600'>salary : {salary}</p>
                <p className='fonts-thin text-lg text-gray-600'><Moment fromNow>{created_at}</Moment></p>
                <p className='fonts-thin text-lg text-gray-600'>applicants: {nums_of_applicant}</p>
            </div>
        </div>
    </div>
  )
}

export default Job