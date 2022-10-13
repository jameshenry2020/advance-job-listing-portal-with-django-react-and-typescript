import React, {useEffect} from 'react'
import CompanyForm from '../components/CompanyForm'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const CreateCompany = () => {
  const navigate=useNavigate()
  const token = localStorage.getItem('token')


  useEffect(() => {
    if(token===null){
      navigate("/login")
    }
      
  }, [token])
  

  return (
    <div>
        <Navbar/>
        <CompanyForm />
    </div>
  )
}

export default CreateCompany