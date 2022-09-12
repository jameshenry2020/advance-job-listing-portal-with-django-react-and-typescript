import React from 'react'
import Logo from "../../assets/logo.png"
import { FiMapPin } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";

const Details = () => {
  return (
    <div className='w-full h-screen mb-6'>
        <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8 px-6 py-2'>
                <h4 className='text-lg capitalize font-thin'>posted sept 6</h4>
                 <h2 className='text-gray-700 font-serif text-2xl mb-4 font-bold'>job role software developer</h2>
                 <p className='my-2 uppercase '><span className='rounded-sm bg-indigo-300 border text-indigo-900 border-indigo-800 px-8 py-1 text-lg font-thin'>full time</span>  <span className='rounded-sm bg-indigo-300 border text-indigo-900 border-indigo-800 px-8 py-1 text-lg font-thin'>anywhere in the world</span></p>
                 <h4 className='text-2xl font-bold font-serif py-2'>Job Description</h4>
                 <p className='text-lg font-sans py-2 font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Voluptate blanditiis dignissimos molestiae itaque magnam illum 
                    fugit obcaecati nihil ex eligendi. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Exercitationem, ad!
                    Voluptate blanditiis dignissimos molestiae itaque magnam illum 
                    fugit obcaecati nihil ex eligendi. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Exercitationem, ad!
                    Voluptate blanditiis dignissimos molestiae itaque magnam illum 
                    fugit obcaecati nihil ex eligendi. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Exercitationem, ad!
                    Voluptate blanditiis dignissimos molestiae itaque magnam illum 
                    fugit obcaecati nihil ex eligendi. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Exercitationem, ad!
                </p>
                <h4 className='text-2xl font-bold font-serif capitalize py-2'>Skill requirement</h4>
                <p className='my-2'><span className='px-6 py-1 rounded-sm text-lg text-gray-700 bg-gray-300'>skill one</span> <span className='px-6 py-1 rounded-sm text-lg bg-gray-300 text-gray-700'>skill two</span> <span className='px-6 py-1 rounded-sm text-lg bg-gray-300 text-gray-700'>skill three</span></p>
                <h4 className='text-2xl font-bold font-serif capitalize py-2'>Additional  requirement</h4>
                <p>
                <ul>
                    <li className='text-start'>good communication skill </li>
                    <li className='text-start'>moderate knowledge of Nodejs </li>
                    <li className='text-start'>good communication skill </li>
                    <li className='text-start'>good communication skill </li>
                </ul>
                </p>
                <h4 className='text-2xl font-bold font-serif'>About the Company</h4>
                <p className='font-thin text-lg font-sans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequatur quae debitis sequi magnam voluptatum, doloremque eius 
                    perspiciatis repudiandae consectetur, neque expedita, harum quasi 
                    quas quo. Iste quis quas magni veritatis labore!
                     Accusantium tenetur earum cumque sit? Fuga libero rerum dolore!
                </p>
                <button className='py-1 bg-red-500 hover:bg-red-900 text-white font-semibold'>Apply for this position</button>
            </div>
            <div className='w-full border col-span-4'>
                <div className='w-[80%] h-[60vh] border shadow-md bg-white'>
                    <div className='w-full h-full mx-auto flex flex-col justify-center items-center space-y-2'>
                        <img src={Logo} alt="" className='w-20 h-20' />
                        <p>company name</p>
                        <p className='flex items-center'><FiMapPin size={20} color='gray' className='mr-1'/>San Fransico </p>
                        <p className='flex items-center cursor-pointer'><FaGlobeAmericas size={20} className='mr-1' />  company website</p>
                        <button className='py-1 bg-indigo-500 text-gray-200'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details