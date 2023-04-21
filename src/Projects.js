import React from "react";
import Project from "./Project";
import './Projects.css'

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Kitchen App",
      description: "This is the application about recipes",
      technologies: ["Spring Boot", "Thymeleaf"],
      image: "Project1.png",
      link: "https://github.com/M727-Y/kitchenApp",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the second project",
      technologies: ["Vue.js", "Express"],
      image: "project2.png",
      link: "https://github.com/username/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the third project",
      technologies: ["Angular", "Ruby on Rails"],
      image: "project3.png",
      link: "https://github.com/username/project3",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
