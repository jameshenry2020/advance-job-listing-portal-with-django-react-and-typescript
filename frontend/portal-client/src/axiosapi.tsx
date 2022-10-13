import axios from "axios"





const baseURL=process.env.REACT_APP_BACKEND_URL


let headers = {
    'Content-Type':'application/json',
    Authorization:''
}

if (localStorage.getItem('token')) {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`
}

const APIRequest = axios.create({
    baseURL:baseURL,
    headers
})

APIRequest.interceptors.response.use(
    (response)=>
        new Promise((resolve, reject)=>{
            resolve(response)
        }),
    (error)=>{
        if (!error.response) {
            return new Promise((resolve, reject)=>{
                reject(error)
            })
        }
        if (error.response.status === 401) {
            localStorage.removeItem('token')
            localStorage.removeItem('refresh_token')
            localStorage.removeItem('user')
            

        }else{
            return new Promise((resolve, reject)=>{
                reject(error);
            })
        }
    }
)

export default APIRequest;