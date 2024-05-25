import React from 'react'
import ProjectCard from './ProjectCard'
import projectPic1 from '../images/projects/1.webp';
import projectPic2 from '../images/projects/2.webp';


const ProjectData = [
  {
    id: 1,
    title: "CinePhile",
    desciption: "CinePhile: Your ultimate movie destination. Search films, TV series, and explore the hottest releases in our Trending and Popular sections. Elevate your cinematic experience with CinePhile's curated content. 🍿🎬",
    image: projectPic1,
    gitURL: "https://github.com/subham-tripathy/CinePhile",
    previewURL: "https://bit.ly/cine-phile",
  },
  {
    id: 2,
    title: "Library Management System",
    desciption: "The Library Management System project is a software solution designed to efficiently organize and manage library resources. It automates tasks such as cataloging, borrowing, and tracking book availability for streamlined library operations.",
    image: projectPic2,
    gitURL: "https://github.com/subham-tripathy/LibraryManagementSystem",
    previewURL: "https://bit.ly/LibraryManagementSystemProject",
  },
]






const ProjectsSection = () => {
  return (
    <div className='text-white' id='projects'>
        <h1 className='text-white text-4xl font-bold text-center my-10'>My Projects</h1>
        <div className='flex flex-wrap justify-evenly gap-10'>
          {
            ProjectData.map((project)=>
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  imageURL={project.image}
                  description={project.desciption}
                  gitURL={project.gitURL}
                  previewURL={project.previewURL}
                />
              )
          }
        </div>
    </div>
  )
}

export default ProjectsSection