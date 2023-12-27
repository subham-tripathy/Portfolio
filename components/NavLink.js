import Link from 'next/link'
import React from 'react'

const NavLink = ({href, title}) => {
  return (
    <button onClick={()=>{document.querySelector(href).scrollIntoView({behavior:"smooth", block:"center"})}} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
        {title}
    </button>
  )
}

export default NavLink