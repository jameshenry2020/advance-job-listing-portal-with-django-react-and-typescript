import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIRequest from "../../axiosapi";
import { Company, AuthError, CompanyJobType } from "../types"
import { AxiosError } from "axios";

export const createCompany=createAsyncThunk<
    Company,
    IncomingData,
    {
        rejectValue:AuthError
    }
    >('company/createCompany', 

    async (data, {rejectWithValue}) => {
       const {company_name, company_email, location, website, company_logo, description} = data
    try {
        let formd = new FormData();
        formd.append('company_name', company_name)
        formd.append('location', location)
        formd.append('website', website)
        formd.append('company_email', company_email)
        formd.append('company_logo', company_logo)
        formd.append('description', description)
        const response = await APIRequest.post('create-company/', formd)
        const res:Company = response.data
        return res

    } catch (err:any) {
        let error:AxiosError<AuthError> =err
               if(!error.response){
                   throw err
               }
               return rejectWithValue(error.response.data)
        
    }
})


export const getCompanyDetail=createAsyncThunk('company/getCompanyDetail',
async () => {
    const response = await APIRequest.get('company/')
    const res:Company = response.data
    return res;
})

export const getJobsByCompany=createAsyncThunk('company/getJobsByCompany',
async () => {
    const response =await APIRequest.get('company/jobs/')
    const result:CompanyJobType[] = response.data
    return result
})





type IncomingData={
    company_name:string,
    location:string,
    company_email:string,
    website:string,
    company_logo:File | string
    description:string

}


type CStateType={
    company:Company,
    loading:boolean,
    errors:string
    jobs:CompanyJobType[]
}

const initialState:CStateType={
       company:{
        pkid: 0,
        id: "",
        created_at: "",
        company_name: "",
        location: "",
        website: "",
        company_email: "",
        company_logo: "",
        description: "",
        user: 0
       },
       loading:false,
       errors:"",
       jobs:[]

}




const companySlice=createSlice({
    name:"company",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createCompany.pending, (state)=>{
            state.loading=true
        })
        .addCase(createCompany.fulfilled, (state, action)=>{
            state.loading=false
            state.company=action.payload
        })
        .addCase(createCompany.rejected, (state, action)=>{
            if(action.payload){
                state.loading=false 
                state.errors =action.payload.errorMessage   
            }else{
                state.loading=false
                state.errors=action.error.message  || ""    
            }
        })

        .addCase(getCompanyDetail.pending, (state)=>{
            state.loading=true
        })
        .addCase(getCompanyDetail.fulfilled, (state, action)=>{
            state.loading=false
            state.company=action.payload
        })
        .addCase(getCompanyDetail.rejected, (state, action)=>{
                state.loading=false
                state.errors=action.error.message  || ""    
            
        })

        .addCase(getJobsByCompany.pending, (state)=>{
            state.loading=true
        })
        .addCase(getJobsByCompany.fulfilled, (state, action)=>{
            state.loading=false
            state.jobs=action.payload
        })
        .addCase(getJobsByCompany.rejected, (state, action)=>{
                state.loading=false
                state.errors=action.error.message  || ""    
            
        })

    }
})


export default companySlice.reducer;








