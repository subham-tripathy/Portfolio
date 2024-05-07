'use client'

import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import pcPic from '../images/pc-pic.webp'
import TabButton from './TabButton'
import Link from 'next/link'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML, CSS, JavaScript</li>
                <li>SQL</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bahelors of Technology</li>
                <li className='ml-5 list-none'>GIET University, Gunupur</li>
                <li className='mt-5'>High School</li>
                <li className='ml-5 list-none'>Kendriya Vidyalaya, Rayagada</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <Link href='https://drive.google.com/file/d/1eXaE_hpluzcXBpqXm1EN5SbwprbC55Si/view?usp=drive_link'><li>2nd Prize at University Level Hackathon (Organised By GIET University and Coding Ninjas)</li></Link>

                <Link href='https://drive.google.com/file/d/1QD-ukxi-L2Js9z0YqISlYjorc3UAq-1g/view?usp=sharing'><li>Online Internship at CodSoft</li></Link>
 
                <Link href='https://drive.google.com/file/d/1DNv7DdthNzHeiyPJ9fUUu67pgp6LdlFV/view?usp=sharing'><li>JavaScript (basic) Certificate By HackerRank</li></Link>

                <Link href='https://drive.google.com/file/d/1OG_ZCs3LiAkgOjETViyyOM7W8hjGRH-P/view?usp=sharing'><li>Python (basic) Certificate By HackerRank</li></Link>

                <Link href='https://drive.google.com/file/d/1EOOPHqS5WHcd87V-6OkmF__z2giB7WpV/view?usp=sharing'><li>SQL (basic) Certificate By HackerRank</li></Link>
            </ul>
        )
    }
]




const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }


    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src={pcPic} width={400} height={400} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I specialize as a Full Stack Web Developer, driven by a keen interest in crafting dynamic and adaptable web applications. Proficient in HTML, CSS, JavaScript, React.js, Next.js, Node.js, and SQL. My expertise encompasses a broad technology stack. A rapid learner, I consistently seek opportunities to broaden my knowledge and enhance my skill repertoire. Emphasizing collaboration, I thrive as a team player and eagerly anticipate the chance to contribute to the development of outstanding applications alongside others.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}>
                            Skills
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}>
                            Education
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className='mt-8 text-white ml-10'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection