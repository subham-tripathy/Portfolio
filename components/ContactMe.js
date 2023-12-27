import React from 'react'
import ContactLink from './ContactLink'

import facebook from '../images/facebook.webp'
import github from '../images/github.webp'
import hackerrank from '../images/hackerrank.webp'
import instagram from '../images/instagram.webp'
import linkedin from '../images/linkedin.webp'




const ContactLinks = [
    {
        name: "facebook",
        image: facebook,
        url: "https://www.facebook.com/subham.tripathy.1656",
    },
    {
        name: "github",
        image: github,
        url: "https://github.com/subham-tripathy/",
    },
    {
        name: "hackerrank",
        image: hackerrank,
        url: "https://www.hackerrank.com/subham_tripathy",
    },
    {
        name: "instagram",
        image: instagram,
        url: "https://www.instagram.com/i_m_rajabhai/",
    },
    {
        name: "linkedin",
        image: linkedin,
        url: "https://www.linkedin.com/in/subham-tripathy/",
    },
]




const ContactMe = () => {
  return (
    <div className='text-white mt-24 ml-10' id='contact'>
        <h1 className='text-4xl  font-bold'>Let's Connect</h1>
        <div className='flex flex-wrap mt-5 items-center'>
            <p className='max-w-[45%] mr-5'>I am currently looking for new opportunities, my index is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you.</p>
            <div className='flex justify-evenly rounded-2xl border border-gray-400 p-7 xl:p-10 space-x-5 mt-5 xl:ml-10'>
                {ContactLinks.map((link, index)=>
                    <ContactLink
                        key={index}
                        contactIMG={link.image} 
                        contactURL={link.url}
                    />
                )}
            </div>
        </div>
    </div>
  )
}

export default ContactMe