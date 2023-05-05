import React from "react";
import Project from "./Project";
import './Projects.css'

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Cash4Work",
      description: "This is the third project",
      technologies: ["React Js", "Node Js", "React Native", "Socket.io","MySql"],
      image: "project3.png",
      link: "https://cash4-work.web.app/jobs",
    },
    {
      id: 2,
      title: "Must be corrected",
      description: "The project about employee list. You have options to add, edit, view, delete employee. The project is connected to backend server.",
      technologies: ["Angular.js", "Express","NodeJs"],
      image: "project2.png",
      link: "https://github.com/M727-Y/101312178_comp3133_assig2",
    },
    {
      id: 3,
      title: "Kitchen App",
      description: "This is the application about recipes",
      technologies: ["Spring Boot", "Thymeleaf"],
      image: "Project1.png",
      link: "https://github.com/M727-Y/kitchenApp",
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
