'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon'
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import MenuOverlay from './MenuOverlay'

const navLinks = [
    {
        title: "Home",
        path: "#home"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
    {
        title: "About",
        path: "#about"
    }
]



const NavBar = () => {
const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>SUBHAM</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen?(
                            <button onClick={()=>setNavbarOpen(true)} className='flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-7 w-7'/>
                            </button>
                        ):(
                            <button onClick={()=>setNavbarOpen(false)} className='flex items-center px-3 py-2 rounded border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-7 w-7'/>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id='navbar'>
                    <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8'>
                        {
                            navLinks.map((link, index)=>(
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}></NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                navbarOpen? <MenuOverlay links={navLinks}/> : null
            }
        </nav>
    )
}

export default NavBar