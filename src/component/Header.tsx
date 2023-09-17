import { useState ,useContext} from 'react'
import logo from '../assets/logo.jpg'
import Hamburger from 'hamburger-react'
import MobileSidebar from '../component/MobileSidebar'
import { AuthContext } from '../context/authContext'
import { Link } from 'react-router-dom'


function Header() {
    const [show, setShow] = useState(false)
  const {currentUser}  = useContext(AuthContext)
  console.log(currentUser);
  
    
    return (
        <div className='w-screen sm:h-24 h-20 bg-[#FEFEFF] sm:px-28 px-3  flex justify-between items-center'>
          <Link to="/">
            <img src={logo} alt="" className='h-20' />
            </Link>
            <div className="sm:hidden flex">
                    <Hamburger size={23} color="#EE619C" rounded onToggle={toggled => {
                        if (toggled) {
                            setShow(true)
                        } else {
                            // close a menu
                            setShow(false)
                        }
                    }} /></div>
            <ul className=' font-normal  font-sans sm:flex hidden gap-10 text-gray-700  items-center'>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <Link to="/"> Home</Link></li>

                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <Link to="/about"> About</Link></li>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <Link to="/contact"> Contact</Link></li>
                { !currentUser ?
                (
                  <>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/signup"> Sign Up</a></li>
                <li className='border-b-2 font-semibold text-xl border-[#EE619C] w-20 flex justify-center'> <a href="/signin"> Login</a></li>
                </>)
                : (
                  <div className="user flex gap-2 justify-center items-center" >
                        <img src={currentUser?.photoURL ? currentUser?.photoURL : null} alt="" className='w-8 h-8 rounded-full object-contain border'/>
                        <span className='text-black text-base uppercase'>{currentUser?.displayName}</span>
                        </div>
                )
                }

            </ul>

            {show && <MobileSidebar />
            }

        </div>
    )
}

export default Header
