import React from 'react'
import { JobData, Company, Skills } from "../features/types";
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export interface JobProps{
    company:Company,
    job_title:string,
    region:string,
    salary:string,
    skills:Skills[],
  
}

const JobCard =({id, job_title, company, region, salary, skills, created_at}:JobData) => {
    
  return (
    <div className='container w-[80%] h-28 mb-4 bg-black rounded-lg shadow flex justify-between px-6 items-center'>
       <div className='flex  justify-between items-center space-x-4 px-4'>
            <div className=''>
               <img src={`http://localhost:8000${company.company_logo}`} alt="" className='w-20 h-20 rounded-full object-fill' />
            </div>
            <div className='py-2 px-4'>
                <h3 className='text-lg font-medium text-white font-serif'>{company.company_name}</h3>
                <h2>{job_title}</h2>
                <p><span className='text-gray-600 bg-slate-100'>{region}</span> <span>salary {salary}</span></p>
            </div>  
       </div>
       <div className=''>
            <p>{skills.map((skill)=>(
                <span key={skill.id} className='mr-1 bg-indigo-500'>{skill.name}</span>
            ))}</p>
       </div>
       <div className='flex space-x-4 items-center'>
         <h3 className='text-white font-bold font-mono text-xl'><Moment fromNow>{created_at}</Moment></h3>
         <Link to={`remote-work/${id}`} className='bg-gray-300 px-6  rounded-md text-center text-lg font-semibold  shadow-sm text-gray-900 py-1'>Learn More</Link> 
       </div>
    </div>
  )
}

export default JobCard