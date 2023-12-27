import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactLink = ({ contactIMG, contactURL }) => {
  return (
    <div>
        <Link href={contactURL}>
            <Image src={contactIMG} className='w-auto h-10 lg:h-20 rounded-full bg-gray-700 border border-gray-700 hover:bg-white hover:border-white shadow-sm hover:shadow-gray-300'/>
        </Link>
    </div>
  )
}

export default ContactLink