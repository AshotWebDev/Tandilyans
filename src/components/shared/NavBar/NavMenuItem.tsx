
import { NavLink } from 'react-router-dom'

const NavMenuItem = ({name, path} : any) => {
  return (
    <li className=' font-medium hover:text-yellow-700'>
        <NavLink to={path} className={({isActive}) => isActive ? 'text-yellow-700' : 'black'}>{name}</NavLink>
    </li>
  )
}

export default NavMenuItem