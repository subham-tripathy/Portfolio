import React from 'react'
import ProjectCard from './ProjectCard'
import projectPic1 from '../images/projects/1.webp';


const ProjectData = [
  {
    title: "Data Harmony",
    desciption: "Data Harmony Description Here...........",
    image: projectPic1,
    previewURL: "https://google.com",
  },
  {
    title: "EduMatch",
    desciption: "EduMatch Description Here...........",
    image: projectPic1,
    previewURL: "https://google.com",
  },
  {
    title: "Desi Mart",
    desciption: "Desi Mart Description Here...........",
    image: projectPic1,
    previewURL: "https://google.com",
  },
  {
    title: "CinePhile",
    desciption: "CinePhile: Your ultimate movie destination. Search films, TV series, and explore the hottest releases in our Trending and Popular sections. Elevate your cinematic experience with CinePhile's curated content. 🍿🎬",
    image: projectPic1,
    previewURL: "https://bit.ly/cine-phile",
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
                  previewURL={project.previewURL}
                />
              )
          }
        </div>
    </div>
  )
}

export default ProjectsSection