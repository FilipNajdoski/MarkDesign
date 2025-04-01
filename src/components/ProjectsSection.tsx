import React, { useState } from 'react';
import projects, { getProjectsByCategory, getCategories, Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import CategoryView from './CategoryView';
import '../styles/projects.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = getCategories();
  const projectsByCategory = getProjectsByCategory();
  
  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  const selectCategory = (category: string) => {
    setSelectedCategory(category);
  };
  
  const backToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Нашите Проекти</h2>
        <p className="projects-intro">
          Разгледајте ги некои од нашите неодамнешни проекти што ги имаме дизајнирано и изработено за нашите клиенти. Изберете категорија за да видите повеќе детали.
        </p>
        
        {!selectedCategory ? (
          <div className="categories-grid">
            {categories.map((category) => (
              <div 
                key={category} 
                className="category-card"
                onClick={() => selectCategory(category)}
              >
                {/* Show first project image from this category as thumbnail */}
                <div className="category-image">
                  <img 
                    src={projectsByCategory[category][0].featuredImage} 
                    alt={category} 
                  />
                </div>
                <div className="category-info">
                  <h3>{category}</h3>
                  <span className="category-count">
                    {projectsByCategory[category].length} проекти
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <CategoryView 
            category={selectedCategory}
            projects={projectsByCategory[selectedCategory]}
            onSelectProject={openModal}
            onBack={backToCategories}
          />
        )}
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