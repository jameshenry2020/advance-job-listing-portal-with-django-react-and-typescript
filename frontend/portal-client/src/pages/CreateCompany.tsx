import React, {useEffect} from 'react'
import CompanyForm from '../components/CompanyForm'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";

const CreateCompany = () => {
  const navigate=useNavigate()

  return (
    <div>
        <CompanyForm />
    </div>
  )
}

export default CreateCompany