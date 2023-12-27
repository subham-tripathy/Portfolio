import AboutSection from '@/components/AboutSection'
import ContactMe from '@/components/ContactMe'
import HeroSection from '@/components/HeroSection'
import NavBar from '@/components/NavBar'
import ProjectsSection from '@/components/ProjectsSection'
import React from 'react'

const Page = () => {
  return (
    <main className='flex flex-col min-h-screen bg-[#121212] pt-24'>
      <NavBar/>
      <div className="container py-4 mx-auto">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactMe/>
      </div>


    </main>
  )
}

export default Page