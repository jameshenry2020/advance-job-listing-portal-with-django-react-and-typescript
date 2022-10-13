import React, {useState, useEffect} from 'react'
import { FiAlignJustify,  } from "react-icons/fi";
import { FaTimes  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { persistLogInUser, logout, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu]=useState(false)
    const [stickyClass, setStickyClass] = useState('fixed');
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    const globalState=useAppSelector((state)=> state.authentication.auth)
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
      }, []);
    useEffect(() => {
        if (token !==null) {
            dispatch(persistLogInUser()) 
        }   
    }, [token, dispatch])
    

    const stickNavbar = ()=>{
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 80 ? setStickyClass('h-[70px] border-b fixed top-0 bg-white border-gray-200 shadow-md z-50 ') : setStickyClass('top-0 z-50');
        }
    }

    const toggleMenu = ()=>{
        setOpenMenu(!openMenu)
        
    }
    const handleLogout=()=>{
          dispatch(logout())
          navigate("/login")
          dispatch(reset())                 
    }
    

  return (
    <div className={`w-full  ${stickyClass} `}>
        <div className='container flex mx-auto px-4 py-2 justify-between items-center'>
                <div>
                  <Link to={'/'}><h1 className='font-extrabold text-3xl capitalize  text-blue-600 px-2 py-2'>sitelogo</h1></Link>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex px-4  space-x-4'>
                        <li className=''>Interview Prep</li>
                        <li className=''>Remote Companies</li>
                        <li className=''>Create a Cv</li>
                        <li className='bg-red-600 text-white rounded-md'>
                           <Link to={'/new-post'} className='px-6 py-2 rounded-md bg-red-500 text-center text-lg font-bold text-white shadow-sm cursor-pointer'> Post a Job</Link>   
                        </li>
                        {globalState.access !== "" ? (
                            <>
                            <button onClick={handleLogout} className='px-6 py-2 rounded-md bg-blue-500 text-center text-lg font-bold text-white shadow-sm cursor-pointer'>Log Out</button>
                            <Link to='/profile' className='px-6 py-2  text-center text-lg font-bold text-gray-600  cursor-pointer'>profile</Link>
                            </>
                        ):(

                            <Link to='/login' className='px-6 py-2 rounded-md bg-blue-500 text-center text-lg font-bold text-white shadow-sm cursor-pointer'>Log In</Link>
                        )}
                       
                    </ul>
                </div>
                <div onClick={toggleMenu} className='block md:hidden'>
                   { openMenu ? <FaTimes size={30}/> : <FiAlignJustify size={30}/>}
                </div>
                    <div className={openMenu ? 'w-full h-auto  py-6 absolute top-[80px] left-0 bottom-0 flex flex-col items-center bg-gray-400 duration-200': 'absolute left-[-100%] top-[80px] bottom-0 duration-2anner00'}>
                        <ul className='w-full'>
                            <li>Interview Prep</li>
                            <li>Remote Companies</li>
                            <li>Create a Cv</li>
                            <li className='bg-red-600 text-white rounded-md mx-4 mb-2'>
                            <button> Post a Job</button>   
                            </li>
                            <li className='px-6 py-2 rounded-md bg-blue-500 text-center text-lg font-bold text-white shadow-sm cursor-pointer mx-4'>Log In</li>
                        </ul>
                    </div>        
        </div>
        
        
    </div>
  )
}

export default Navbar