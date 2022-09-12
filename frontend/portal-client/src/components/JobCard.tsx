import React from 'react'
import { JobData, Company } from "../features/types";

export interface JobProps{
    company:Company,
    job_title:string,
    allow_location:string,
    salary:string,
    skills:string[],
    posted_data:string
}

const JobCard =({job_title, company, allow_location, salary, skills}:JobProps) => {
    
  return (
    <div className='container w-[90%] h-28 mb-4 bg-black rounded-lg shadow flex justify-between px-6 items-center'>
       <div className='flex  justify-between items-center space-x-4 px-4'>
            <div className=''>
               <img src={company.logo_img}alt="" className='w-20 h-20 rounded-full object-fill' />
            </div>
            <div className='py-2 px-4'>
                <h3 className='text-lg font-medium text-white font-serif'>{company.name}</h3>
                <h2>{job_title}</h2>
                <p><span className='text-gray-600 bg-slate-100'>{allow_location}</span> <span>salary {salary}</span></p>
            </div>  
       </div>
       <div className=''>
            <p>{skills.map((skill)=>(
                <span className='mr-1'>{skill}</span>
            ))}</p>
       </div>
       <div className='flex space-x-4 items-center'>
         <h3 className='text-white font-bold font-mono text-xl'>sept 6</h3>
         <button className='bg-gray-300 text-gray-900 py-1'>Learn More</button> 
       </div>
    </div>
  )
}

export default JobCard