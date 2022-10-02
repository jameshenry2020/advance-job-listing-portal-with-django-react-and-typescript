import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIRequest from "../../axiosapi";
import { UserReturnData, LoginReturnType, AuthError, SignupDataType } from "../types";
import { AxiosError } from "axios";


type loginType={
    email:string,
    password:string
}

type activateData={
    uid:string,
    token:string
}

// signup action creator
export const signupUser=createAsyncThunk<
   UserReturnData,
   SignupDataType,
   {
     rejectValue:AuthError
   }
>(
    'auth/signupUser', 
    async (data, {rejectWithValue}) => {
        try {
        const res = await APIRequest.post('auth/users/', data);
        const response: UserReturnData= res.data
        return response
        } catch (err:any) {
            let error:AxiosError<AuthError>=err
            if(!error.response){
                throw err
            }
            return rejectWithValue(error.response.data)
            
    }
})




export const activateUser=createAsyncThunk('auth/activateUser',
async (data:activateData) => {
        const res = await APIRequest.post('auth/users/activation/', data) 
        const result:number= res.status
        return result;
})


//login action creator
export const loginUser=createAsyncThunk<
 LoginReturnType,
 loginType,
  {
    rejectValue:AuthError
  }
>(
    "auth/loginUser",
   async (data, {rejectWithValue}) => {
     try {
        const res = await APIRequest.post('auth/jwt/create/', data)
        const result:LoginReturnType = res.data
        return result
     } catch (err:any) {
        let error: AxiosError<AuthError> = err // cast the error for access
        if (!error.response) {
        throw err
        }
            // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error.response.data)
     }
   }
)

export const getLoggedInUser=createAsyncThunk(
    'auth/getLoggedInuser',
    async () => {
        const response=await APIRequest.get('auth/users/me/');
        const res:UserReturnData=response.data
        return res
    })






type AuthState={
    user:UserReturnData,
    auth:LoginReturnType
    loading:boolean
    isAuthenticated:boolean
    errors:string | null | undefined
    isSuccess:boolean
    message:string
    activate_status:number
}


const initialState:AuthState={
    user:{
        pkid:0,
        first_name:"",
        last_name:"",
        email:""
    },
    auth:{
        refresh:"",
        access:""
    },
    loading:false,
    errors:null,
    isAuthenticated:false,
    isSuccess:false,
    message:'',
    activate_status:0,
}




const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('user')
            state.isAuthenticated=false
            state.errors=null

        },
    },
    extraReducers(builder) {
        builder
        .addCase(signupUser.pending, (state)=>{
            state.loading=true
        })
        .addCase(signupUser.fulfilled, (state, action)=>{
            state.user=action.payload
            state.isSuccess=true
            state.loading=false
            state.message="account created successfully please check your email to activate your account"
        })
        .addCase(signupUser.rejected, (state, action)=>{
            if (action.payload) {
                state.isSuccess=false
                state.errors = action.payload.errorMessage
              } else {
                state.errors = action.error.message
                state.isSuccess=false
              }
        })

        .addCase(activateUser.pending, (state)=>{
            state.loading=true
        })
        .addCase(activateUser.fulfilled, (state, action)=>{
            if (action.payload === 204) {
                state.isSuccess=true
                state.loading=false
                state.message="account activated successfully you can login now"
            }
            state.activate_status=action.payload
            
        })
        .addCase(activateUser.rejected, (state, action)=>{  
                state.isSuccess=false
                state.errors = action.error.message
                state.message="activation failed invalid token or token has expired"
                        
        })
        .addCase(loginUser.pending, (state)=>{
            state.loading=true
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
             localStorage.setItem('token', action.payload.access)
             localStorage.setItem('refresh_token', action.payload.refresh)
             state.auth.access=JSON.parse(localStorage.getItem('token') || "")
             state.auth.refresh=JSON.parse(localStorage.getItem('refresh_token') || "")
             if(localStorage.getItem('token')){
                state.isAuthenticated=true
                state.isSuccess=true
             }
             state.loading=false       
            state.message="login success"
        })
        .addCase(loginUser.rejected, (state, action)=>{
            if (action.payload) {
                state.isSuccess=false
                state.errors = action.payload.errorMessage
                state.isAuthenticated=false
              } else {
                state.errors = action.error.message
                state.isSuccess=false
                state.isAuthenticated=false
              }
        })

        .addCase(getLoggedInUser.pending, (state)=>{
            state.loading=true
        })
        .addCase(getLoggedInUser.fulfilled, (state, action)=>{
             localStorage.setItem('user', JSON.stringify(action.payload))
             state.user=JSON.parse(localStorage.getItem('user') || "")
             state.isSuccess=true
             state.loading=false
                
        })
        .addCase(getLoggedInUser.rejected, (state, action)=>{  
                state.isSuccess=false
                state.errors = action.error.message
                state.message="you are not authorized"
                        
        })
    },
})

export const { logout }=authSlice.actions
export default authSlice.reducer;