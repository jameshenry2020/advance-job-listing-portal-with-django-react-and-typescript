import React from 'react'
import Logo from "../assets/logo.png"

const ProfileBanner = () => {
  return (
    <div className='w-full relative'>
        <div className='w-[90%] mx-auto flex items-center space-x-4 p-4 rounded-md h-44 border border-indigo-500 shadow-md bg-indigo-300'>
                <div>
                     <img src={Logo} alt=""  className='h-20 w-20 rounded-full'/>
                </div>
                <div>
                    <h3 className='text-2xl font-serif'>company name</h3>
                    <p className='font-thin text-lg'>company addres</p>
                    <p className='font-thin text-lg'>company email</p>
                </div>
        </div>
    </div>
  )
}

export default ProfileBanner