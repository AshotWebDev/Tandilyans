import { Facebook, Instagram } from "lucide-react"
import { CardModal } from "../CartModal/CardModal"
import Theme from "./Theme"


const NavRight = () => {
  return (
    <div className='nav_right flex items-center gap-3'>
        <CardModal/>
        <Theme type="dropdown"/>
        
        <div className="w-[2px] h-[20px] bg-zinc-700 dark:bg-slate-300"></div>

        <div className="social_media flex items-center gap-3">
            <a href="#">
                <Instagram className="h-5 w-5 text-red-500"/>
            </a>
            <a href="#">
                <Facebook className="h-5 w-5 text-blue-500"/>
            </a>
        </div>
    </div>
  )
}

export default NavRight