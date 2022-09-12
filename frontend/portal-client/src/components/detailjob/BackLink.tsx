import React from 'react'
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const BackLink = () => {
  return (
    <div className='w-full container flex justify-between mt-16 px-4 py-2 items-center'>
        <Link to={"/"} className='flex space-x-2'><span className='py-0 bg-transparent font-bold text-blue-500'><FiArrowLeft size={30} /></span>  Go Back</Link>
        <Link to={"/morejob"} className='font-serif font-bold text-lg'>see more related jobs</Link>
    </div>
  )
}

export default BackLink