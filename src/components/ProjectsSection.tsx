import React, { useState, useCallback, useEffect, useRef } from 'react';
import projects, { getProjectsByCategory, getCategories, Project } from '../data/projects';
import ProjectModal from './ProjectModal';
import '../styles/projects.css';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const categories = getCategories();
  const projectsByCategory = getProjectsByCategory();

  // Get the images to display in the carousel
  const getActiveImages = useCallback((): { images: string[]; title: string; description: string } => {
    if (activeProjectId !== null) {
      const project = projects.find(p => p.id === activeProjectId);
      if (project) return { images: project.images, title: project.title, description: project.description };
    }
    if (activeCategory && projectsByCategory[activeCategory]) {
      const allImages = projectsByCategory[activeCategory].flatMap(p => p.images);
      return { images: allImages, title: activeCategory, description: '' };
    }
    // Default: show all featured images
    const allFeatured = projects.map(p => p.featuredImage);
    return { images: allFeatured, title: 'Сите проекти', description: '' };
  }, [activeProjectId, activeCategory, projectsByCategory]);

  const activeData = getActiveImages();

  // Reset image index when active data changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProjectId, activeCategory]);

  // Auto-slide
  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (activeData.images.length > 1) {
      autoSlideRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex(prev =>
            prev === activeData.images.length - 1 ? 0 : prev + 1
          );
          setIsTransitioning(false);
        }, 300);
      }, 4000);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [activeData.images.length, activeProjectId, activeCategory]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
        // If collapsing active category, clear selections
        if (activeCategory === category) {
          setActiveCategory(null);
          setActiveProjectId(null);
        }
      } else {
        next.add(category);
        setActiveCategory(category);
        setActiveProjectId(null);
      }
      return next;
    });
  };

  const selectProject = (project: Project) => {
    setActiveProjectId(project.id);
    setActiveCategory(project.category);
  };

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setActiveProjectId(null);
    if (!expandedCategories.has(category)) {
      setExpandedCategories(prev => new Set(prev).add(category));
    }
  };

  const goToPrev = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(prev =>
        prev === 0 ? activeData.images.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToNext = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(prev =>
        prev === activeData.images.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const goToDot = (index: number) => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const openModal = (project: Project) => {
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
        <h2 className="section-title reveal">Нашите Проекти</h2>
        <p className="projects-intro reveal reveal-delay-1">
          Разгледајте ги некои од нашите неодамнешни проекти што ги имаме дизајнирано и изработено за нашите клиенти. Изберете категорија за да видите повеќе детали.
        </p>

        <div className="projects-split-layout reveal reveal-delay-2">
          {/* Left Panel - Categories */}
          <aside className="projects-sidebar">
            <div className="sidebar-header">
              <h3>Категории</h3>
            </div>
            <nav className="categories-nav">
              {categories.map((category) => {
                const isExpanded = expandedCategories.has(category);
                const isActive = activeCategory === category && activeProjectId === null;
                const categoryProjects = projectsByCategory[category];

                return (
                  <div key={category} className="category-nav-group">
                    <button
                      className={`category-nav-item ${isActive ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => toggleCategory(category)}
                    >
                      <span className="category-nav-label">
                        <span className="category-nav-icon">
                          {isExpanded ? '−' : '+'}
                        </span>
                        {category}
                      </span>
                      <span className="category-nav-count">{categoryProjects.length}</span>
                    </button>

                    {/* Subcategory / Project list */}
                    <div className={`subcategory-list ${isExpanded ? 'open' : ''}`}>
                      {categoryProjects.map((project) => (
                        <button
                          key={project.id}
                          className={`subcategory-item ${activeProjectId === project.id ? 'active' : ''}`}
                          onClick={() => selectProject(project)}
                        >
                          <span className="subcategory-dot"></span>
                          {project.title}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* Right Panel - Carousel */}
          <div className="projects-carousel-panel">
            <div className="carousel-title-bar">
              <h3>{activeData.title}</h3>
              {activeProjectId !== null && (
                <button
                  className="carousel-detail-btn"
                  onClick={() => {
                    const p = projects.find(pr => pr.id === activeProjectId);
                    if (p) openModal(p);
                  }}
                >
                  Детали →
                </button>
              )}
            </div>

            <div className="carousel-container">
              <div className="carousel-viewport">
                <img
                  src={activeData.images[currentImageIndex]}
                  alt={activeData.title}
                  className={`carousel-image ${isTransitioning ? 'transitioning' : ''}`}
                />

                {activeData.images.length > 1 && (
                  <>
                    <button className="carousel-nav carousel-prev" onClick={goToPrev} aria-label="Previous image">
                      ‹
                    </button>
                    <button className="carousel-nav carousel-next" onClick={goToNext} aria-label="Next image">
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Dots */}
              {activeData.images.length > 1 && (
                <div className="carousel-dots">
                  {activeData.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToDot(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Counter */}
              <div className="carousel-counter">
                {currentImageIndex + 1} / {activeData.images.length}
              </div>
            </div>

            {activeData.description && (
              <p className="carousel-description">{activeData.description}</p>
            )}
          </div>
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