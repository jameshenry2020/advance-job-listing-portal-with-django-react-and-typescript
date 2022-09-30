import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import SearchForm from '../components/SearchForm'
import Partners from '../components/Partners'
import JobCard from '../components/JobCard'
import { JobData } from '../features/types'
import { getJobList, getNextPreviousJobList } from "../features/job/jobSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const Home = () => {
   const [nextUrl, setNextUrl]=useState<string | null>(null)
   const [previousUrl, setPreviousUrl]=useState<string | null>(null)

    const joblists = useAppSelector((state)=> state.jobs)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getJobList());
        
     }, [dispatch])

     useEffect(() => {
      if (joblists.jobs.next !== null) {
        setNextUrl(joblists.jobs.next)
        }
       if (joblists.jobs.previous !== null) {
        setPreviousUrl(joblists.jobs.previous)
       }
     
     }, [joblists.jobs.next])
     

     const {jobs:{results}, loading}=joblists

     const paginationClick=(url:string | null)=>{
             if (url !== null) {
              dispatch(getNextPreviousJobList(url))
             }else{
              return;
             }
              
     }

     
        
  return (
    <>
    <Navbar/>
    <Banner/>
    <SearchForm/>
    <Partners/>
       {loading ? " loading ..." : results.length == 0  ? (
        <p className='text-gray-600 mb-2 text-2xl text-center mt-4'>no job listing match your search </p>
       ) : ( 
          <>
           <div className=' w-full container mt-6 flex flex-col items-center justify-center'>
           <h2 className='mb-2 text-gray-800'>Latest jobs</h2>
           {results.map((job:JobData)=>(
             <JobCard key={job.id} {...job}/>
           ))}
         </div>
          <div className='w-full flex justify-center py-8 px-6 space-x-2 items-center'>
           <button onClick={()=>paginationClick(previousUrl)}  className={previousUrl ? 'bg-blue-600 text-white py-1' : 'bg-gray-300 text-gray-700 py-1'} disabled={previousUrl ===null ? true : false}>prev</button>
           <span className='rounded-full h-8 w-8 text-center'>{joblists.jobs.page_number}</span>
           <button onClick={()=>paginationClick(nextUrl)} className={nextUrl ? 'bg-blue-700 rounded-xl text-white py-1' : 'bg-gray-300 text-gray-700 py-1'} disabled={nextUrl===null ? true : false}>next</button>
         </div>
         </>
       )} 
    
    </>
  )
}

export default Home;