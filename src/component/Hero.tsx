import {useContext} from "react"
import { Link } from 'react-router-dom'
import hero from '../assets/hero.png'
import { AuthContext } from '../context/authContext'
function Hero() {
  const {currentUser} =useContext(AuthContext)
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center '>
    <img src={hero} className='sm:h-full sm:w-full w-full' alt="" />
    <div className=" p-8 flex flex-col sm:gap-4 gap-2 justify-center items-center sm:text-left text-center">
        <h1 className='font-bold sm:text-4xl text-xl    '>Your organs can save up to eight lives.</h1>
        <span className='font-normal text-gray-600 sm:text-sm text-xs'>The gift of life. Give life, give hope, be an organ donor.</span>
       {<Link to={ currentUser ? "/profile" : "/signin"}>
        <button className='flex justify-center items-center sm:px-5 sm:py-3 px-3 py-1 transition-all duration-300 bg-[#EE619C] font-bold text-white rounded-full hover:bg-white hover:text-[#EE619C] hover:border hover:border-[#EE619C]'>Register As Donar</button>
        </Link>}
    </div>
    </div>
  )
}

export default Hero