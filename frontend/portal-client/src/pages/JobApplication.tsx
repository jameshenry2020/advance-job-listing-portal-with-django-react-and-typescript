import React, {useState} from 'react'
import { Form } from '../components/Form';
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { jobApplication } from "../features/job/jobSlice";
import { toast } from "react-toastify";
import { isValidUrl } from "../utils/config";


type FieldError={
   github_link:string[],
   portfolio_link:string[]
}

const JobApplication = () => {
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  const {errors}=useAppSelector((state)=> state.jobs)
  const [applyform, setApplyform]=useState({
    applicant_name:"",
    email:"",
    github_link:"",
    portfolio_link:""
  })

  const [resume, setResume]=useState<File | string>("")
  const [validpdf, SetValidPdf]=useState("")
  const [formerror, setFormError]=useState<FieldError | any>(null)
  const {job_id} : any=useParams();

  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
     setApplyform({...applyform, [e.target.name]:e.target.value})
  }
  const {applicant_name, email, github_link, portfolio_link}=applyform
  const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files !== null) {
           const  file_to_upload=e.target.files[0]
           if(file_to_upload.type === 'application/pdf'){
            setResume(file_to_upload)
           }else{
            SetValidPdf('wrong file type select only pdf are allowed')
           }
        }
  }
console.log(formerror)
  const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data={applicant_name, email, 'position': job_id, github_link, portfolio_link, resume}
        if (resume) {
           try {
            const orignalResult= await dispatch(jobApplication(data)).unwrap()
            navigate('/application-success')
            toast.success(`hi ${orignalResult.applicant_name} your application has  been sent`)

           } catch (rejectedValueOrSerializedError: any) {
              setFormError(rejectedValueOrSerializedError)
              toast.error('oop an error ocurred please try again')
           }
        }

  }
  return (
    <div className='w-full mt-10 mb-6 flex justify-center items-center'>
      <div className='bg-white rounded shadow w-2/3 h-auto py-6 border border-gray-200'>
      <h3 className='capitalize text-2xl font-bold font-serif px-4 my-4'>Application form</h3>
         <form className="w-full " onSubmit={handleSubmit}> 
              <div className='w-full grid grid-cols-2'>  
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form 
                     name='applicant_name' 
                     value={applicant_name}
                     onChange={handleChange}
                     placeholder='Your Full Name' label='Applicant Name' />
                     
                    </div>
                    <div className="w-full px-3">
                        <Form name='email'
                         value={email}
                         onChange={handleChange} 
                         placeholder='your email address' label='Email Address'/>

                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='github_link'
                     value={github_link}
                     placeholder='Github Link'
                     onChange={handleChange} 
                     label='Your GitHub URL' />
                     {formerror && (
                         <p className='text-lg text-red-500'>{formerror.github_link[0]}</p>
                     )}
                    </div>
                    <div className="w-full px-3">
                        <Form name='portfolio_link'
                        value={portfolio_link}
                        placeholder='show us your portfolio'
                        onChange={handleChange} 
                        label='Portfolio Url'/>
                        {formerror && (
                         <p className='text-lg text-red-500'>{formerror.portfolio_link[0]}</p>
                        )}
                    </div>
                </div>
                <div className='mb-4'>
                   <label className='block px-4 text-gray-700 text-lg font-medium font-sans mb-2'>Resume</label>
                   <input type="file" 
                    name="resume"
                    onChange={handleFileChange}  
                    placeholder="your resume in pdf " className='text-lg shadow appearance-none border-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                    <p className='text-lg px-4 text-red-500'>{validpdf}</p> 
                      <p className="text-gray-600 text-sm pt-0 px-4 italic">upload your updated resume in pdf not more than 5mb</p>
                 </div>
                           
                 <button className='px-6 mt-2 mx-4 py-2 bg-slate-800 text-white text-lg'>Submit</button>
        </form> 
      </div>
    </div>
  )
}

export default JobApplication