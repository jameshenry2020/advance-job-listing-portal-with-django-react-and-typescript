import React, {useState, useEffect} from 'react'
import { Form } from './Form'
import { Editor } from "@tinymce/tinymce-react";
import { FiChevronDown } from "react-icons/fi";
import { Select, SelectOption } from './Select';
import { SkillsOption } from "../features/types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createNewJobPost } from "../features/job/jobSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import axios from 'axios';


const JobForm = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const [jobopen, setJobopen]=useState('worldwide')
    const [skills, setSkills]=useState<SkillsOption[]>([])
    const [jobform, setJobform]=useState({
        category:"",
        job_type:"",
        region:"",
        salary:"",
        job_zone:"",

    })
    const [application, setApplication]=useState('')
    const [job_title, setJobTitle]=useState('')
    

    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const [selectskill, setSelectSkill]=useState<SelectOption[]>([])

        useEffect(() => {
           getSkillsfromBackend();
        }, [])

        const getSkillsfromBackend=()=>{
              axios.get(`${process.env.REACT_APP_BACKEND_URL}skills/`)
             .then((res)=>{
                const results:SkillsOption[]=res.data
                setSkills(results)
                return results
                
             }).catch((err)=>{
    
             })
            }
    
   
    const handleRadiochange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setJobopen(e.target.value)
    }

    const handleSelectChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setJobform({...jobform, [e.target.name]:e.target.value})
    }
    const handleTitleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
            setJobTitle(event.target.value)
    }
    const handleApplicationChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setApplication(event.target.value)
}

    let jskills:any=[]
    const {category, job_type, region, job_zone, salary }=jobform
    const handleSubmit = (e:React.SyntheticEvent)=>{
            e.preventDefault();
            if (selectskill.length > 0) {
                for(var skill of selectskill){
                    jskills.push(skill.value)
                }
            }
            const data={job_title, category, job_type, 'skills':jskills,  salary, application, region, job_zone, 'job_description':description}
            if (Boolean(data)) {
                 dispatch(createNewJobPost(data))
                 toast.success("a new job post is added")
                 setJobform({
                    category:"",
                    job_type:"",
                    region:"",
                    salary:"",
                    job_zone:"",
                 })
                 setJobTitle("")
                 setDescription("")
                 setApplication("")
            }else{
                toast.error('a required field is missing..')
                return;
            }
    }
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-2/3 h-auto py-6 border border-gray-200'>
            <h3 className='capitalize text-2xl font-bold font-serif px-4 my-4'>Tell Us about the Position</h3>
          <form onSubmit={handleSubmit} className="w-full" > 
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form value={job_title}
                     name='job_title'
                     onChange={handleTitleChange} 
                     placeholder='position ' label='Job Title' />
                    <p className="text-gray-500 text-sm pt-0 italic">Example: “Senior Designer”. Titles must describe one position..</p>
                    </div>
                    <div className='w-full grid grid-cols-2'>  
                
                        <div className="w-full px-3">
                        <div className='mb-4 relative'>
                        <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>Category</label>
                            <select onChange={handleSelectChange} className="block appearance-none w-full   bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='category' value={jobform.category}>
                                <option>choose category</option>
                                <option value="backend programming">backend Programming</option>
                                <option value="frontend developement">frontend programming</option>
                                <option value="fullstack development">full stack programming</option>
                                <option value="devOps">devOps engineer</option>
                                <option value="product management">product management</option>
                                <option value="marketing">digital marketing</option>
                                <option value="design">design</option>
                            </select> 
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                            </div>
                        </div>
                        </div>

                        <div className="w-full  px-3 mb-4 md:mb-0">
                        <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans'>Required Skills</label> 
                        <Select options={skills} multiple value={selectskill} onChange={o=> setSelectSkill(o)}/>  
                        </div>
        
                    </div>
                     
                    <div className='mb-4 px-3 relative'>
                     <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Job Type</label>
                        <select onChange={handleSelectChange} value={jobform.job_type} className="block appearance-none w-full bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='job_type'>
                            <option value=''>choose Job type</option>
                            <option value="full time">full time</option>
                            <option value="contract">contract</option>
                            <option value="internship">internship</option>
                            <option value="part time">part time</option>
                            
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
                                <select onChange={handleSelectChange} value={jobform?.region} className="block appearance-none w-full bg-white border border-gray-200  px-4 py-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='region'>
                                    <option value="">choose region</option>
                                    <option value="africa only">africa only</option>
                                    <option value="usa only">usa only</option>
                                    <option value="europe only">europe only</option>
                                    <option value="uk only">uk only</option>
                                    <option value="canada only">canada only</option>
                                    
                                </select> 
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                                </div>
                            </div>
                            <div className='w-full relative'>
                                <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans mb-2'> Time Zone</label>
                                <select onChange={handleSelectChange} value={jobform?.job_zone} className="block appearance-none w-full bg-white border border-gray-200  px-4 py-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='job_zone'>
                                    <option value="">choose Time zone</option>
                                    <option value="est utc-5" >est utc-5 </option>
                                    <option value="mmt utc-6">pst utc-6</option>
                                    <option value="mmt utc-7">mmt utc-7</option>
                                    <option value="mst utc-8">mst utc-8</option>
                                         
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                                <FiChevronDown size={20} color='gray'/>
                                </div>
                            </div>
                     </div>

                     <div className='mb-4 px-3 relative'>
                     <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Expected Salary</label>
                        <select onChange={handleSelectChange} value={jobform.salary} className="block appearance-none w-full bg-white border border-gray-200  px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='salary'>
                            <option value="">choose Salary</option>
                            <option value="20k-50k">20k -50k</option>
                            <option value="50k-80k">50k - 80k</option>
                            <option value="80k-150k">80k - 150k</option>
                            <option value="150k-190k">150k - 190k</option>
                            
                        </select> 
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 top-6 text-gray-700">
                           <FiChevronDown size={20} color='gray'/>
                        </div>
                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form value={application}
                     name='application-mode'
                     onChange={handleApplicationChange} 
                     placeholder='Aplication Link or HR Email ' label='Aplication Link or Email' />
                    <p className="text-gray-500 text-sm pt-0 italic">Example: ”. application link or your company hr email.</p>
                    </div>

                 <div className='px-2'>
                 <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Job Dscription</label>
                    <Editor 
                        value={value}
                        init={{
                            height:300,
                            menubar: false
                        }}
                        onEditorChange={(newValue, editor) => {
                            setValue(newValue);
                            setDescription(editor.getContent({format: 'text'}));
                          }}/>
                
                 </div>
                 <button className='px-6 mt-2 mx-4 py-2 bg-slate-800 text-white text-lg'>Post Job</button>
        </form>
        </div>
    </div>
  )

}

export default JobForm;