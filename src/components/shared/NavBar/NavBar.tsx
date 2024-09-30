import { Link } from "react-router-dom"
import tandilyans_logo from  '@/assets/Tandilyans_logo.png'
import NavMenu from "./NavMenu"
import NavRight from "./NavRight"
import { Menu } from "lucide-react"

interface IPropsNav {
    openNav: () => void
}

const NavBar = ({openNav}: IPropsNav) => {
    return (
        <div className='w-full sticky top-0 z-[12] bg-white  dark:bg-zinc-700 '>
            <div className="container h-[70px] flex items-center justify-between">
                <div className="logo_div">
                    <Link to="/" className="flex items-center gap-1">
                        <img src={tandilyans_logo} alt="Tandilyans.am" className="w-[60px]" />
                    </Link>
                </div>

                <NavMenu direction="row"/>

                <NavRight/>

                <Menu className='text-black md:hidden w-[30px]  h-[30px] rotate-180' onClick={openNav}/>
            </div>
        </div>
    )
}

export default NavBar