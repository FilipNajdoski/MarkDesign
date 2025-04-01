import React from 'react';
import { Project } from '../data/projects';

interface CategoryViewProps {
  category: string;
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onBack: () => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({ 
  category, 
  projects, 
  onSelectProject, 
  onBack 
}) => {
  return (
    <div className="category-view">
      <div className="category-header">
        <button 
          className="back-button" 
          onClick={onBack}
          aria-label="Back to categories"
        >
          ← Сите категории
        </button>
        <h3 className="category-title">{category}</h3>
      </div>
      
      <div className="category-projects">
        {projects.map(project => (
          <div 
            key={project.id} 
            className="project-item"
            onClick={() => onSelectProject(project)}
          >
            <div className="project-thumbnail">
              <img src={project.featuredImage} alt={project.title} />
            </div>
            <h4 className="project-title">{project.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
