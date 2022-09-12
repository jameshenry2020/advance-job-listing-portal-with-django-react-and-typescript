import React from 'react'
import Bannerbg from "../assets/Off-white.jpg"

const Banner = () => {
  return (
    <div className='w-full h-[70vh] relative'>
        <img src={Bannerbg} alt="" className='w-full h-full absolute top-0 object-cover -z-10'/>
        <div className='w-full h-[90%] justify-center py-6 items-center flex flex-col'>
            <h2 className='font-bold capitalize text-gray-700 text-4xl font-serif py-4'>Find  remote jobs</h2>
            <h3 className='font-serif capitalize text-3xl font-semibold mb-2'>work from anywhere</h3>
            <p className='px-4'>the largest remote work community with over 5000 visitors and 1000 remote job post per week </p>
            <div>
                <button className='bg-red-500 py-2 text-white'>Post remote jobs</button>
            </div>
        </div>
    </div>
  )
}

export default Banner;