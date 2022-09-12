import React from 'react'


interface FromProps{
    label:string,
    name:string,
    placeholder:string
}
interface CategoryProps{
    label:string,
    name:string,
    options:string[]
}
export const Form = ({label, name, placeholder}:FromProps) => {
  return (
        <div className='mb-4'>
                   <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>{label}</label>
                   <input type="text" name={name}  placeholder={placeholder} className='text-lg shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
        </div>
    
  )
}




