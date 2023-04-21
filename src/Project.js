import React from "react";
import './Project.css'

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-info">
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-technologies">
          <p>Technologies:</p>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <ul>
          <img src={project.image} alt={project.title} />
        </ul>
        <a href={project.link} className="project-button">View Project</a>
      </div>
    </div>
  );
};

export default Project;
