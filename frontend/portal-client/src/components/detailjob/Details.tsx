import React from 'react'
import Logo from "../../assets/logo.png"
import { FiMapPin } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { JobData } from '../../features/types';
import Moment from 'react-moment';

type JobProp={
    job:JobData
}


const Details = ({job}:JobProp) => {
  return (
    <div className='w-full h-screen mb-6'>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8 px-6 py-2'>
                <h4 className='text-lg capitalize font-thin'>posted <Moment format="MMM D YYYY" withTitle>{job.created_at}</Moment></h4>
                 <h2 className='text-gray-700 font-serif text-2xl mb-4 font-bold'>{job.job_title}</h2>
                 <p className='my-2 uppercase '><span className='rounded-sm bg-indigo-300 border text-indigo-900 border-indigo-800 px-8 py-1 text-lg font-thin'>{job.job_type}</span>  <span className='rounded-sm bg-indigo-300 border text-indigo-900 border-indigo-800 px-8 py-1 text-lg font-thin'>{job.region}</span></p>
                 <h4 className='text-2xl font-bold font-serif py-2'>Job Description</h4>
                 <p className='text-lg font-sans py-2 font-thin'>
                    {job.job_description}
                </p>
                <h4 className='text-2xl font-bold font-serif capitalize py-2'>Skill requirement</h4>
                <p className='my-2'> 
                {
                    job.skills.map(skill =>{
                        return (
                            <span key={skill.id} className='px-6 py-1 mr-2 rounded-sm text-lg text-gray-700 bg-gray-300'>{skill.name}</span>
                        )
                    })
                }      
                </p>
                <h4 className='text-2xl font-bold font-serif capitalize py-2'>Additional  requirement</h4>
                <p>
                <ul>
                    <li className='text-start'>good communication skill </li>
                    <li className='text-start'>moderate knowledge of Nodejs </li>
                    <li className='text-start'>good communication skill </li>
                    <li className='text-start'>good communication skill </li>
                </ul>
                </p>
                <h4 className='text-2xl font-bold font-serif'>About the Company</h4>
                <p className='font-thin text-lg font-sans'>
                    {job.company.description}
                </p>
                <button className='py-1 bg-red-500 hover:bg-red-900 text-white font-semibold'>Apply for this position</button>
            </div>
            <div className='w-full border col-span-4'>
                <div className='w-[80%] h-[65vh] border shadow-md bg-white'>
                    <div className='w-full h-full mx-auto flex flex-col justify-center items-center space-y-2'>
                        <img src={job.company.company_logo} alt="" className='w-20 h-20' />
                        <p>{job.company.company_name}</p>
                        <p className='flex items-center'><FiMapPin size={20} color='gray' className='mr-1'/>{job.company.location} </p>
                        <p className='flex items-center cursor-pointer'><FaGlobeAmericas size={20} className='mr-1' />{job.company.website}</p>
                        <button className='py-1 bg-indigo-500 text-gray-200'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details