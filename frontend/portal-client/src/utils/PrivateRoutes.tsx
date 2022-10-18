import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes() {
  const auth_token = localStorage.getItem('token')
  return (
    auth_token ? (
      <>
      <Outlet/> 
      </>
    ) :
      <Navigate to="/login"/>
  )
}

export default PrivateRoutes;