
import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectModal from './ProjectModal';
import '../styles/projects.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Нашите Проекти</h2>
        <p className="projects-intro">
          Разгледајте ги некои од нашите неодамнешни проекти што ги имаме дизајнирано и изработено за нашите клиенти. Кликнете на сликата за да видите повеќе детали.
        </p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.featuredImage} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default ProjectsSection;
