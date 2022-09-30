import React, {useState} from 'react'
import { searchJobList } from "../features/job/jobSlice";
import { useAppDispatch} from "../app/hooks";

const SearchForm = () => {
  const [searchquery, setSearchQuery]=useState({
    jobName:"",
    location:""
  })
  const dispatch=useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
            e.preventDefault();
            setSearchQuery({
              ...searchquery,
              [e.target.name]:e.target.value
            })
  }
const {jobName, location}=searchquery

  const handleSearchSubmit=(e:React.SyntheticEvent)=>{
      e.preventDefault();
      const params={jobName, location}
      if (!params) {
          return;
      }else{
        dispatch(searchJobList(params))
      setSearchQuery({
        jobName:"",
        location:""
      })
      }
      
  }
 
  return (
    <div className='w-full'>
        <div className='flex justify-center w-full md:w-[70%] mx-auto container bg-white rounded-lg shadow-md py-8 px-8 border border-gray-300 -mt-12'>
            <form onSubmit={handleSearchSubmit} className='flex justify-center w-full px-10 mx-auto space-x-1'>
                <input type="text" onChange={handleChange} value={searchquery.jobName} name='jobName' placeholder='search jobs' className='md:w-1/3 w-full appearance-none rounded-md shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                <input type="text" onChange={handleChange} value={searchquery.location} name='location' placeholder='location'  className=' hidden md:block w-1/3 appearance-none rounded-md shadow text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                <button className='py-2 bg-indigo-500 text-gray-200'>search</button>
            </form>
        </div>
    </div>
  )
}

export default SearchForm