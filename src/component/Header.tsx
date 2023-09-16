import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import Hamburger from 'hamburger-react'
import MobileSidebar from '../component/MobileSidebar'
import { AuthContext } from '../context/authContext'


function Header() {
    const [show, setShow] = useState(false)
  
    
    return (
        <div className='w-screen sm:h-32 h-24 bg-[#FEFEFF] sm:px-28 px-3  flex justify-between items-center'>
            <img src={logo} alt="" className='h-20' />
            <div className="sm:hidden flex">
                    <Hamburger size={23} color="#EE619C" rounded onToggle={toggled => {
                        if (toggled) {
                            setShow(true)
                        } else {
                            // close a menu
                            setShow(false)
                        }
                    }} /></div>
            <ul className=' font-normal  font-sans sm:flex hidden gap-10 text-gray-700'>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/"> Home</a></li>

                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/about"> About</a></li>

                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/signup"> Sign Up</a></li>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/signin"> Login</a></li>

            </ul>

            {show && <MobileSidebar />
            }

        </div>
    )
}

export default Header
