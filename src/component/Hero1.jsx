import { useContext } from "react"
import { Link } from 'react-router-dom'
import hero from '../assets/32249.jpg'
import { AuthContext } from '../context/authContext'
function Hero() {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='flex bg-slate-200  sm:flex-row-reverse mt-16 h-screen sm:px-28   px-3  flex-col justify-between items-center '>
            <img src={hero} className=' sm:w-[50%] w-full' alt="" />
            <div className=" p-8 flex flex-col sm:gap-4  gap-2 justify-center items-center sm:text-left text-center">
                <h1 className='font-bold sm:text-4xl text-xl    '>Get Connect for Organ</h1>
                <span className='font-normal text-gray-600 sm:text-sm text-xs'>If you’ve just found out that you need an organ transplant, or you know someone who does, it can be an overwhelming feeling. </span>
                {<Link to={currentUser ? "/request" : "/signin"}>
                    <button className='flex justify-center items-center sm:px-5 sm:py-3 px-3 py-1 transition-all duration-300 bg-[#EE619C] font-bold text-white rounded-full hover:bg-white hover:text-[#EE619C] hover:border hover:border-[#EE619C]'>Request For Organ</button>
                </Link>}
            </div>
        </div>
    )
}

export default Hero