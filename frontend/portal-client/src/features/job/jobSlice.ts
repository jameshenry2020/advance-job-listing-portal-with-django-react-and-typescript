
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
    error:""
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

    },
})

export default jobSlice.reducer
