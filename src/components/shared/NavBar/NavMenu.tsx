import NavMenuItem from "./NavMenuItem"

const NavMenu = ({direction}: {direction: string}) => {
  return (
    <ul className={`nav_menu flex max-md:hidden   gap-7 ${direction === 'column' ? 'flex-col md:items-center items-start text-white' : 'flex-row items-center text-black dark:text-white'} `}>
        <NavMenuItem name="Գլղավոր էջ" path="/" />
        <NavMenuItem name="ՏԵսականի" path="/products"/>
        <NavMenuItem name="Կապ" path="/contact"/>
    </ul>
  )
}

export default NavMenu