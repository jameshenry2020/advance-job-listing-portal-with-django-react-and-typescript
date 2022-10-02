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

export default APIRequest;