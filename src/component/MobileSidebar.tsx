import React from 'react'
function MobileSidebar() {
    return (
        <div className="fixed h-screen w-3/5 z-50 bg-[#FEFEFF] shadow-lg top-0 left-0 transition ease-in delay-150 ">

            <div className="profile flex justify-center items-center py-10 ">
                <button className='px-4 py-2 bg-[#FC565E] rounded-full text-white font-light'>Sign Up / Log In</button>
            </div>

            <div className="menu px-5 py-3  ">
                <ul className='flex flex-col justify-between gap-2 text-xl font-medium'>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#FC565E] '><span className='text-[#FC565E]'>|</span><a href="/"> Home</a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#FC565E] ' ><span className='text-[#FC565E]'>|</span><a href="">About</a> </li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#FC565E] '><span className='text-[#FC565E]'>|</span><a href="">Sign Up</a></li>
         
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#FC565E] '><span className='text-[#FC565E]'>|</span><a href="">Login</a></li>
                    <div className=" font-normal">
                        {/* 
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="/profile">Profile</a> </li>
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="about">About</a></li>
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="login">Login </a></li> */}

                    </div>
                </ul>
            </div>

        </div >
    )
}

export default MobileSidebar