import { X } from "lucide-react"
import { NavLink } from "react-router-dom"
import logo from '@/assets/Tandilyans_logo.png'

interface IPropseNavMobile{
    showNav: boolean
    hideNavHandler: () => void
}
const NavMobile = ({showNav,  hideNavHandler}: IPropseNavMobile) => {
    const navOpenStyle = showNav ? 'translate-x-0' : '-translate-x-full'


   const  mobileMenuItemClick = () => {
        hideNavHandler()
    }

  return (
    <div>
        <div className={`fixed ${navOpenStyle}  w-[100vw] h-[100vh] z-[101] bg-gray-800 opacity-70 left-0 top-0 ring-0 bottom-0 transform transition-all duration-300 delay-300  right-0`}>
        </div>
         <ul className={`text-white ${navOpenStyle}  fixed flex justify-center items-center flex-col h-[100%] trasform transition-all duration-300 delay-300 w-[60%] bg-yellow-700 space-y-14 z-[10006] top-0`}>
            <li>
                <img src={logo} alt="Tandilyans" />
            </li>
            <li onClick={() => mobileMenuItemClick()}>
                <NavLink to='/' className='nav_link text-[25px] sm:text-[30px]'>Գլղավոր էջ</NavLink>
            </li>
            <li onClick={() => mobileMenuItemClick()}>
                <NavLink to='/products' className='nav_link text-[25px] sm:text-[30px]'>Տեսականի</NavLink>

            </li>
    
            <li onClick={() => mobileMenuItemClick()}>
                <NavLink to='/contact' className='nav_link text-[25px] sm:text-[30px]'>Կապ</NavLink>
            </li>
            <X onClick={() => hideNavHandler()} className='text-white w-[30px] absolute top-[-30px] right-[20px] cursor-pointer'/>
        </ul>
    </div>
    
  )
}

export default NavMobile