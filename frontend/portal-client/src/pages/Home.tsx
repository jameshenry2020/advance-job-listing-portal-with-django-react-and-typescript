import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import Partners from '../components/Partners'
import JobCard from '../components/JobCard'
import { data } from "../assets/dummy";
import { JobData } from '../features/types'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <SearchForm/>
    <Partners/>
     <div className=' w-full container mt-10 flex flex-col items-center justify-center'>
      <h2 className='mb-2 text-gray-800'>Latest jobs</h2>
      {data.map((job:JobData)=>(
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
     <div className='w-full flex justify-center py-8 px-6 space-x-2 items-center'>
      <button className='bg-gray-300 text-black py-1'>prev</button>
      <span className='rounded-full h-8 w-8 text-center'>1</span>
      <button className='bg-blue-500 rounded-xl text-white py-1'>next</button>
    </div>
    </>
  )
}

export default Home;