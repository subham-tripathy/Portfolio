'use client'

import Image from 'next/image'
import React from 'react'
import myPic from '../images/mypic.webp';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <div id='home'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600'>Hello, I am</span>
            <br />
            <TypeAnimation
              sequence={[
                'Subham Tripathy', 1000,
                'A Web Developer', 1000,
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
            />
          </h1>
          <p className='my-5 mb-10 text-gray-400 text-base sm:text-lg lg:text-xl'>I am a Full Stack Web Developer with a passion for creating interactive and resposive web applications.</p>
          <div>
            <Link href={'https://bit.ly/DownloadSubhamTripathyResume'} className='my-10 px-6 py-3 rounded-full bg-white hover:bg-gray-200 font-bold bg-gradient-to-tr from-blue-600 to-green-600'>Download CV</Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-6 lg:mt-2 rounded-full bg-[#181818] lg:h-[350px] lg:w-[350px] sm:h-[250px] sm:w-[250px]">
          <Image src={myPic} className='rounded-full lg:h-[350px] lg:w-[350px] sm:h-[250px] sm:w-[250px]' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection