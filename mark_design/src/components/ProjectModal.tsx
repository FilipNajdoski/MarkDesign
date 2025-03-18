
import React, { useState } from 'react';
import { Project } from '../data/projects';
import '../styles/project-modal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const goToPreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };
  
  const goToNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-gallery">
          <div className="modal-image-container">
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${project.title} - Image ${currentImageIndex + 1}`} 
              className="modal-image"
            />
            
            <button className="gallery-nav prev" onClick={goToPreviousImage}>
              &lt;
            </button>
            <button className="gallery-nav next" onClick={goToNextImage}>
              &gt;
            </button>
          </div>
          
          <div className="image-thumbnails">
            {project.images.map((image, index) => (
              <div 
                key={index}
                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="modal-content">
          <h2>{project.title}</h2>
          <span className="modal-category">{project.category}</span>
          <p className="modal-description">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
