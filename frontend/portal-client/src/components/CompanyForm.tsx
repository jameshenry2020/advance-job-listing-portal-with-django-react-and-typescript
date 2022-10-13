import React,{useState} from 'react'
import { Form } from './Form'
import { Editor } from "@tinymce/tinymce-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createCompany } from "../features/company/companySlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from './Spinner';



const CompanyForm = () => {
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const companyState=useAppSelector((state)=>state.company)
    const {company, loading, errors}=companyState
    const [companydata, setCompanyData]=useState({
        company_name:"",
        location:"",
        website:"",
        company_email:"",
    })
    const [companylogo, setCompanyLogo]=useState<File | string>("")
    const [value, setValue] = useState('');
    const [text, setText] = useState('');

    const handleFormChange=(evt: React.ChangeEvent<HTMLInputElement>)=>{
             setCompanyData({...companydata, [evt.target.name]:evt.target.value})
    }
    const {company_name, location, website, company_email}=companydata
    const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files != null ) {
            setCompanyLogo(e.target.files[0])
        }
    }
  

    const data={company_name, location, company_email, website, 'company_logo':companylogo, 'description':text}
    console.log(data)
    
    const handleSubmit = async (e:React.SyntheticEvent)=>{
            e.preventDefault();
            try {
                const resultp=await dispatch(createCompany(data)).unwrap()
                navigate('/new-post')
                toast.success(`${resultp.company_name} account is created successfully`)

            } catch (rejectedValueOrSerializedError) {
                console.log(rejectedValueOrSerializedError)
                toast.error('oop an error ocurred please try again')
            }
    }
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-2/3 h-auto py-6 border border-gray-200'>
            { loading && (
                <Spinner/>
            )}
            <h3 className='capitalize text-2xl font-bold font-serif px-4 my-4'>Tell Us About your company</h3>
        <form onSubmit={handleSubmit} className="w-full"> 
              <div className='w-full grid grid-cols-2'>  
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='name' 
                     onChange={handleFormChange} 
                     value={company_name} 
                     placeholder='Company Name' label='Company Name' />
                    <p className="text-gray-500 text-sm pt-0 italic">Please fill in your company name.</p>
                    </div>
                    <div className="w-full px-3">
                        <Form name='location'
                         value={location} 
                         onChange={handleFormChange} 
                         placeholder='your company HQ location' label='Company HQ'/>
                        <p className="text-gray-500 text-sm pt-0  italic">Where your company is officially headquartered.</p>
                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='website'
                     value={website} 
                     placeholder='Company Website'
                     onChange={handleFormChange} 
                     label='Company Website URL' />
                    
                    </div>
                    <div className="w-full px-3">
                        <Form name='email'
                        value={company_email}
                        placeholder='your company email'
                        onChange={handleFormChange} 
                        label='Email'/>
                    </div>
                </div>
                <div className='mb-4'>
                   <label className='block px-4 text-gray-700 text-sm font-medium font-sans mb-2'>Company Logo</label>
                   <input type="file" 
                    name="logo"
                    onChange={handleFileChange}  
                    placeholder="company logo" className='text-lg shadow appearance-none border-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
                 </div>
                 <div className='px-2'>
                 <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Company Dscription</label>
                 <Editor 
                    value={value}
                    init={{
                        height:300,
                        menubar: false
                    }}
                    onEditorChange={(newValue, editor) => {
                        setValue(newValue);
                        setText(editor.getContent({format: 'text'}));
                      }}
                    />
                 {/* <textarea name="description" id="" className='block mx px-4 h-32 text-lg shadow appearance-none border border-gray-300 w-full text-gray-700 py-4'></textarea> */}
                 </div>
                 <button className='px-6 mt-2 mx-4 py-2 bg-slate-800 text-white text-lg'>Save</button>
        </form>
        </div>
    </div>
  )
}

export default CompanyForm