import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectData = [];

const ProjectsSection = () => {
  return (
    <div className="text-white" id="projects">
      <h1 className="text-white text-4xl font-bold text-center my-10">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-evenly gap-10">
        {ProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageURL={project.image}
            description={project.desciption}
            gitURL={project.gitURL}
            previewURL={project.previewURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
