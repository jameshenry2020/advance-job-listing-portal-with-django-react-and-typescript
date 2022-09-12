import React from 'react'
import Navbar from '../components/Navbar'
import ProfileBanner from '../components/ProfileBanner'
import UserJobList from '../components/UserJobList'

const UserProfile = () => {
  return (
    <div>
        <Navbar/>
        <ProfileBanner />
        <UserJobList/>

    </div>
  )
}

export default UserProfile