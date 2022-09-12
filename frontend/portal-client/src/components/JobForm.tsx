import React, {useState} from 'react'
import { Form } from './Form'
import { Editor } from "@tinymce/tinymce-react";
import { FiChevronDown } from "react-icons/fi";
import Select from 'react-select';
import makeAnimated from "react-select/animated"


const animatedComponent = makeAnimated()
const options = [
    { value: 1, label: 'Python' },
    { value: 2, label: 'JavaScript' },
    { value: 3, label: 'Java' },
    { value: 4, label: 'React' },
    { value: 5, label: 'C#' },
    { value: 6, label: 'Django' },
    { value: 7, label: 'Nodejs' },
    { value: 8, label: 'RestAPI' },
  ];

const JobForm = () => {
    const [jobopen, setJobopen]=useState('worldwide')

    const handleRadiochange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setJobopen(e.target.value)
    }
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-2/3 h-auto py-6 border border-gray-200'>
            <h3 className='capitalize text-2xl font-bold font-serif px-4 my-4'>Tell Us about the Position</h3>
        <form className="w-full"> 
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='name' placeholder='position ' label='Job Title' />
                    <p className="text-gray-500 text-sm pt-0 italic">Example: “Senior Designer”. Titles must describe one position..</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>  
                
                        <div className="w-full px-3">
                        <div className='mb-4 relative'>
                        <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>Category</label>
                            <select className="block appearance-none w-full  bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category'>
                                <option>choose category</option>
                                <option>backend Programming</option>
                                <option>frontend programming</option>
                                <option>full stack programming</option>
                                <option>devOps engineer</option>
                                <option>product management</option>
                                <option>digital marketing</option>
                                <option>design</option>
                            </select> 
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                            </div>
                        </div>
                        </div>

                        <div className="w-full  px-3 mb-4 md:mb-0">
                        <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans'>Required Skills</label> 
                        <Select options={options} isMulti isSearchable className='px-4 py-2' components={animatedComponent}/>  
                        </div>
        
                    </div>
                     
                    <div className='mb-4 px-3 relative'>
                     <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Job Type</label>
                        <select className="block appearance-none w-full bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category'>
                            <option>choose Job type</option>
                            <option>full time</option>
                            <option>contract</option>
                            <option>internship</option>
                            <option>part time</option>
                            
                        </select> 
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                           <FiChevronDown size={20} color='gray'/>
                        </div>
                    </div>
                    <div className='mb-4 px-3'>
                        <p>is  the job open worldwide</p>
                        <div className='flex items-center'>
                        <label htmlFor="" className='px-3 font-bold text-lg'>Yes</label>
                        <input type="radio" name="" value="worldwide" checked={jobopen === "worldwide"} onChange={handleRadiochange}  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                        </div>
                        <div className='flex items-center'>
                        <label htmlFor="" className='px-3 font-bold text-lg'>No</label>
                        <input type="radio" value="not worldwide" name="" checked={jobopen === "not worldwide"} onChange={handleRadiochange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </div>
                    </div>
                     <div className={jobopen === 'not worldwide' ? 'w-full px-3 grid grid-cols-2': 'hidden'}>
                            <div className='px-3 relative'>
                                <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans mb-2'>Region</label>
                                <select className="block appearance-none w-full bg-white border border-gray-200  px-4 py-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category'>
                                    <option>choose region</option>
                                    <option>africa only</option>
                                    <option>usa only</option>
                                    <option>europe only</option>
                                    <option>uk only</option>
                                    <option>canada only</option>
                                    
                                </select> 
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                                </div>
                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans mb-2'> Time Zone</label>
                                <select className="block appearance-none w-full bg-white border border-gray-200  px-4 py-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category'>
                                    <option>choose region</option>
                                    <option>est utc-5 </option>
                                    <option>pst utc-6</option>
                                    <option>mmt utc-7</option>
                                    <option>mst utc-8</option>
                                         
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                                </div>
                            </div>
                     </div>

                     <div className='mb-4 px-3 relative'>
                     <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Expected Salary</label>
                        <select className="block appearance-none w-full bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='salary'>
                            <option>choose Salary</option>
                            <option>20k -50k</option>
                            <option>50k - 80k</option>
                            <option>80k - 150k</option>
                            <option>150k - 190k</option>
                            
                        </select> 
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                           <FiChevronDown size={20} color='gray'/>
                        </div>
                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='application-mode' placeholder='Aplication Link or HR Email ' label='Aplication Link or Email' />
                    <p className="text-gray-500 text-sm pt-0 italic">Example: ”. application link or your company hr email.</p>
                    </div>

                 <div className='px-2'>
                 <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Job Dscription</label>
                    <Editor 
                        init={{
                            height:300,
                            menubar: false
                        }}/>
                
                 </div>
                 <button className='px-6 mt-2 mx-4 py-2 bg-slate-800 text-white text-lg'>Post Job</button>
        </form>
        </div>
    </div>
  )
}

export default JobForm