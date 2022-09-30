import React from 'react'
import PartnerImg from "../assets/parters.png"

const Partners = () => {
  return (
    <div className='w-full h-[160px] mt-6  flex items-center justify-center py-6 px-6 relative'>
        <img src={PartnerImg} alt=""  className='w-[60%] h-{60%} absolute mx-auto'/>
    </div>
  )
}

export default Partners