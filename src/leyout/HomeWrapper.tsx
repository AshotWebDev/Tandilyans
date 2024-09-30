import Footer from '@/components/shared/Footer/Footer'
import NavBar from '@/components/shared/NavBar/NavBar'
import NavMobile from '@/components/shared/NavMobile/NavMobile'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const HomeWrapper = () => {
  const [showNav, setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const hideNavHandler = () => setShowNav(false)
  return (
    <div className='home_wrapper'>
        <NavBar openNav={showNavHandler}/>
        <NavMobile showNav={showNav} hideNavHandler={hideNavHandler}/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default HomeWrapper