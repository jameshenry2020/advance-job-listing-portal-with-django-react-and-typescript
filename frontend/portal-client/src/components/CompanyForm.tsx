import React from 'react'
import { Form } from './Form'
import { Editor } from "@tinymce/tinymce-react";

const CompanyForm = () => {


    const handleFormChange=()=>{
        console.log('its working')
    }
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-2/3 h-auto py-6 border border-gray-200'>
            <h3 className='capitalize text-2xl font-bold font-serif px-4 my-4'>Tell Us About your company</h3>
        <form className="w-full"> 
              <div className='w-full grid grid-cols-2'>  
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='name' 
                     onChange={handleFormChange} 
                     value='' 
                     placeholder='Company Name' label='Company Name' />
                    <p className="text-gray-500 text-sm pt-0 italic">Please fill in your company name.</p>
                    </div>
                    <div className="w-full px-3">
                        <Form name='location'
                         value='' 
                         onChange={handleFormChange} 
                         placeholder='your company HQ location' label='Company HQ'/>
                        <p className="text-gray-500 text-sm pt-0  italic">Where your company is officially headquartered.</p>
                    </div>
                    <div className="w-full  px-3 mb-6 md:mb-0">
                    <Form name='website'
                     value='' 
                     placeholder='Company Website'
                     onChange={handleFormChange} 
                     label='Company Website URL' />
                    
                    </div>
                    <div className="w-full px-3">
                        <Form name='email'
                        value=''
                        placeholder='your company email'
                        onChange={handleFormChange} 
                        label='Email'/>
                    </div>
                </div>
                <div className='mb-4'>
                   <label className='block px-4 text-gray-700 text-sm font-medium font-sans mb-2'>Company Logo</label>
                   <input type="file" 
                    name="logo"
                    onChange={handleFormChange}  
                    placeholder="company logo" className='text-lg shadow appearance-none border-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
                 </div>
                 <div className='px-2'>
                 <label className='block px-3 text-gray-700 text-sm font-medium font-sans mb-2'>Company Dscription</label>
                 <Editor 
                    init={{
                        height:300,
                        menubar: false
                    }}/>
                 {/* <textarea name="description" id="" className='block mx px-4 h-32 text-lg shadow appearance-none border border-gray-300 w-full text-gray-700 py-4'></textarea> */}
                 </div>
                 <button className='px-6 mt-2 mx-4 py-2 bg-slate-800 text-white text-lg'>Save</button>
        </form>
        </div>
    </div>
  )
}

export default CompanyForm