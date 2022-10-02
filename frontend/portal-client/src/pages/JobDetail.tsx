import React, {useEffect} from 'react'
import Navbar from '../components/Navbar'
import BackLink from '../components/detailjob/BackLink'
import Details from '../components/detailjob/Details'
import { useParams } from "react-router-dom";
import { getJobDetails } from "../features/job/jobSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const JobDetail = () => {
  const {jobId}:any =useParams();
  const dispatch=useAppDispatch()
  const job=useAppSelector((state) => state.jobs.job_detail)

  useEffect(() => {
    dispatch(getJobDetails(jobId))
  
  }, [dispatch, jobId])
  

  console.log(job)
  return (
    <>
      <Navbar/>
      <BackLink />
      <Details job={job} />
    </>
  )
}

export default JobDetail