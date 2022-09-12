import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className='w-full mt-20 flex justify-center items-center'>
        <div className='bg-white rounded shadow w-1/2 h-auto py-6 border border-gray-200'>
           <h3 className='text-4xl font-semibold text-center pt-4 pb-2 font-serif'>Create an account</h3>
           
            <form action="" className='px-8 pt-6 pb-2 mb-4 w-[80%] mx-auto'>
                <div className='mb-4'>
                   <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>Email address:</label>
                   <input type="email" name="email"  placeholder='email' className='text-lg shadow appearance-none border border-gray-200 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
                </div>
                <div className='mb-4'>
                   <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>Names:</label>
                   <input type="text" name="hirer-name"  placeholder='your names' className='text-lg shadow appearance-none border border-gray-200 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
                </div>
                
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans mb-2'>Password</label>
                    <input type="password" name="" placeholder='password' className='shadow appearance-none border border-gray-200 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="" className='block text-gray-700 text-sm font-medium font-sans mb-2'>Confirm Password</label>
                    <input type="password" name="" placeholder='repeat password' className='shadow appearance-none border border-gray-200 rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                </div>
                <div className='w-full flex justify-center'>
                     <button className='py-3 px-8  bg-gray-900 rounded text-white'>Sign Up</button>
                </div>      
            </form>
             <div className='w-full  px-8  flex justify-center items-center flex-col'>
                 <p className='mb-4 text-lg font-thin text-center'><small>or signup with ...</small></p>
                 <button className='py-1 mb-2 px-2 flex items-center w-72 bg-blue-600 hover:bg-blue-900 text-white '> <span className='px-4 py-2 rounded bg-white box-border mr-2'><FcGoogle size={30} className=''/></span> Sign Up with Google</button>
                 <p className='mb-4 text-lg text-gray-800 font-semibold text-center'>already have an account <Link to='/login' className='text-indigo-500'>Sign in here</Link></p>
             </div>
        </div>
    </div>
  )
}

export default SignupForm