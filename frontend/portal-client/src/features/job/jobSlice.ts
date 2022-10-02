
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { JobData, SearchParam } from "../types";
import APIRequest from "../../axiosapi";
import axios from "axios";

export const getJobList=createAsyncThunk('jobs/getJobList', 

  async () => {
     const res =await APIRequest.get('jobs/')
     const response:ResponseType=res.data

     return response
  })

export const getNextPreviousJobList=createAsyncThunk('jobs/getNextPreviousJobList', 
async (url:string) => {
    const nextRes = await axios.get(url)
    const response:ResponseType=nextRes.data
    return response
})
export const searchJobList=createAsyncThunk('jobs/searchJobList', 
async (params:SearchParam) => {
    const searchRes = await APIRequest.get(`jobs/?job_title=${params.jobName}&region=${params.location}`)
    const response:ResponseType=searchRes.data
    return response
})


export const getJobDetails=createAsyncThunk('jobs/getJobDetails',
  async (job_id:string) => {
      const res = await APIRequest.get(`jobs/${job_id}/`)
      const response:JobData = res.data
      return response
})


interface ResponseType{
    count:number
    next:string | null
    previous:string | null
    page_number:number
    results:JobData[]
}



type StateType={
    jobs:ResponseType
    loading:boolean
    error:string
    job_detail:JobData

}

const initialState:StateType={
    jobs:{
        count:0,
        next:null,
        previous:null,
        page_number:0,
        results:[],
    },
    loading:false,
    error:"",
    job_detail:{
        id:'',
        pkid: 0,
        created_at: '',
        company:{
            pkid: 0,
            id: '',
            created_at: '',
            company_name: '',
            location: '',
            website: '',
            company_email: '',
            company_logo: '',
            description: '',
            user: 0
        },
        job_title:'',
        salary:'',
        skills:[],
        category: '',
        job_type: '',
        region: '',
        job_zone: null,          
        application: '',
        job_description:''
    }
}

const jobSlice= createSlice({
    name:"jobs",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
        .addCase(getJobList.pending, (state)=>{
            state.loading=true

        })
        .addCase(getJobList.fulfilled, (state, action)=>{
            state.loading=false
            state.jobs=action.payload
            
        })
        .addCase(getJobList.rejected, (state, action)=>{
            if (action.error){
                state.error=action.error.message || "";
                state.loading=false;
            } 
        })

        .addCase(getNextPreviousJobList.pending, (state)=>{
            state.loading=true

        })
        .addCase(getNextPreviousJobList.fulfilled, (state, action)=>{
            state.loading=false
            state.jobs=action.payload
            
        })
        .addCase(getNextPreviousJobList.rejected, (state, action)=>{
            if (action.error){
                state.error=action.error.message || "";
                state.loading=false;
            } 
        })
        .addCase(searchJobList.pending, (state)=>{
            state.loading=true

        })
        .addCase(searchJobList.fulfilled, (state, action)=>{
            state.loading=false
            state.jobs=action.payload
            
        })
        .addCase(searchJobList.rejected, (state, action)=>{
            if (action.error){
                state.error=action.error.message || "";
                state.loading=false;
            } 
        })

        .addCase(getJobDetails.pending, (state)=>{
            state.loading=true

        })
        .addCase(getJobDetails.fulfilled, (state, action)=>{
            state.loading=false
            state.job_detail=action.payload
            
        })
        .addCase(getJobDetails.rejected, (state, action)=>{
            if (action.error){
                state.error=action.error.message || "";
                state.loading=false;
            } 
        })

    },
})

export default jobSlice.reducer
