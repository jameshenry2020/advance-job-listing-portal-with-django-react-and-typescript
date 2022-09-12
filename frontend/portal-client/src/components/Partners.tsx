import React from 'react'
import PartnerImg from "../assets/parters.png"

const Partners = () => {
  return (
    <div className='w-full h-[160px] mt-8  flex items-center justify-center py-8 px-6 relative'>
        <img src={PartnerImg} alt=""  className='w-[60%] h-{70%} absolute mx-auto'/>
    </div>
  )
}

export default Partners