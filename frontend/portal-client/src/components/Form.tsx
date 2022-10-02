import React from 'react'


interface FromProps{
    label:string,
    name:string,
    placeholder:string
    value:string
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void |null
}
interface CategoryProps{
    label:string,
    name:string,
    options:string[]
}

export const Form = ({label, name, value, placeholder, onChange}:FromProps) => {
  return (
        <div className='mb-4'>
                   <label className='block text-gray-700 text-sm font-medium font-sans mb-2'>{label}</label>
                   <input type="text"
                    name={name} 
                    value={value} 
                    placeholder={placeholder} 
                    onChange={onChange}
                    className='text-lg shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/> 
        </div>
    
  )
}




