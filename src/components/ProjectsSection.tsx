import React, { useState, useEffect, useRef, useMemo } from 'react';
import useInstagramPosts from '../hooks/useInstagramPosts';
import '../styles/projects.css';

const ProjectsSection = () => {
  const { posts, loading, error } = useInstagramPosts();
  const [activeHashtag, setActiveHashtag] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const hashtags = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach(post => post.hashtags.forEach(tag => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const visiblePosts = useMemo(
    () => (activeHashtag ? posts.filter(post => post.hashtags.includes(activeHashtag)) : posts),
    [posts, activeHashtag]
  );

  const currentPost = visiblePosts[currentImageIndex];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeHashtag, posts.length]);

  const changeImage = (getNext: (prev: number) => number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(getNext);
      setIsTransitioning(false);
    }, 300);
  };

  // Auto-slide
  useEffect(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (visiblePosts.length > 1) {
      autoSlideRef.current = setInterval(() => {
        changeImage(prev => (prev === visiblePosts.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [visiblePosts.length, activeHashtag]);

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const goToPrev = () => {
    stopAutoSlide();
    changeImage(prev => (prev === 0 ? visiblePosts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    stopAutoSlide();
    changeImage(prev => (prev === visiblePosts.length - 1 ? 0 : prev + 1));
  };

  const goToDot = (index: number) => {
    stopAutoSlide();
    changeImage(() => index);
  };

  const selectHashtag = (tag: string | null) => {
    setActiveHashtag(prev => (prev === tag ? null : tag));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title reveal">Нашите Проекти</h2>
        <p className="projects-intro reveal reveal-delay-1">
          Разгледајте ги некои од нашите неодамнешни проекти што ги имаме дизајнирано и изработено за нашите клиенти. Изберете ознака за да ги видите поврзаните проекти.
        </p>

        <div className="projects-split-layout reveal reveal-delay-2">
          {/* Left Panel - Hashtags */}
          <aside className="projects-sidebar">
            <div className="sidebar-header">
              <h3>Ознаки</h3>
            </div>
            <div className="hashtag-pills">
              <button
                className={`hashtag-pill ${activeHashtag === null ? 'active' : ''}`}
                onClick={() => setActiveHashtag(null)}
              >
                Сите
                <span className="hashtag-pill-count">{posts.length}</span>
              </button>
              {hashtags.map(([tag, count]) => (
                <button
                  key={tag}
                  className={`hashtag-pill ${activeHashtag === tag ? 'active' : ''}`}
                  onClick={() => selectHashtag(tag)}
                >
                  #{tag}
                  <span className="hashtag-pill-count">{count}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Right Panel - Carousel */}
          <div className="projects-carousel-panel">
            <div className="carousel-title-bar">
              <h3>{activeHashtag ? `#${activeHashtag}` : 'Сите проекти'}</h3>
            </div>

            <div className="carousel-container">
              <div className="carousel-viewport">
                {loading && <p className="carousel-status">Се вчитува...</p>}
                {!loading && (error || visiblePosts.length === 0) && (
                  <p className="carousel-status">Нема достапни слики.</p>
                )}

                {currentPost && (
                  <>
                    <img
                      src={currentPost.imageUrl}
                      alt={currentPost.caption || 'Mark Design проект'}
                      className={`carousel-image ${isTransitioning ? 'transitioning' : ''}`}
                    />
                    {currentPost.caption && (
                      <div className={`carousel-caption ${isTransitioning ? 'transitioning' : ''}`}>
                        <p>{currentPost.caption}</p>
                      </div>
                    )}
                  </>
                )}

                {visiblePosts.length > 1 && (
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
              {visiblePosts.length > 1 && (
                <div className="carousel-dots">
                  {visiblePosts.map((post, idx) => (
                    <button
                      key={post.id}
                      className={`carousel-dot ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => goToDot(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Counter */}
              {visiblePosts.length > 0 && (
                <div className="carousel-counter">
                  {currentImageIndex + 1} / {visiblePosts.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
