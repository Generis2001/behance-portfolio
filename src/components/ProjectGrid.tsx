import React from 'react';
import type { Project } from '../data/projects';
import { Eye, Heart, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  likedProjects: Record<string, boolean>;
  onToggleLike: (projectId: string, e: React.MouseEvent) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject,
  likedProjects,
  onToggleLike
}) => {
  const handleHeartClick = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Confetti effect on appreciation click!
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#ff2a85', '#0057ff', '#00f0ff', '#8b5cf6']
    });

    onToggleLike(projectId, e);
  };

  if (projects.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '80px 20px',
        background: 'var(--bg-surface)',
        borderRadius: 'var(--radius-lg)',
        border: '1px border var(--border-color)',
        maxWidth: '600px',
        margin: '40px auto'
      }}>
        <Layers size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: '#fff' }}>
          No Projects Match Your Search
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '8px' }}>
          Try clearing search filters or selecting another category tag above.
        </p>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: '1440px', margin: '0 auto 60px auto', padding: '0 24px' }}>
      <div className="projects-grid">
        {projects.map((project) => {
          const isLiked = likedProjects[project.id];
          const appreciationCount = project.appreciations + (isLiked ? 1 : 0);

          return (
            <div
              key={project.id}
              className="behance-card"
              onClick={() => onSelectProject(project)}
              style={{ cursor: 'pointer' }}
            >
              {/* Image Preview Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingTop: '60%',
                overflow: 'hidden',
                backgroundColor: '#0c0f18'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />

                {/* Top Badges */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  right: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}>
                  <span className={`pill-badge ${project.category === 'ai' ? 'ai' : project.category === 'web3' ? 'web3' : 'pink'}`}>
                    {project.categoryLabel}
                  </span>

                  {project.liveUrl && (
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#34d399',
                      border: '1px solid rgba(16, 185, 129, 0.4)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      backdropFilter: 'blur(8px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#34d399',
                        boxShadow: '0 0 8px #34d399'
                      }} />
                      LIVE DEMO
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom Details */}
              <div style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flex: 1
              }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.3
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: '#60a5fa',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    marginTop: '2px',
                    fontFamily: 'var(--font-heading)'
                  }}>
                    {project.subtitle}
                  </p>

                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    marginTop: '8px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 1.5
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Footer Action Row */}
                <div style={{
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  {/* Language & Stats */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{
                      fontFamily: 'var(--font-code)',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)'
                    }}>
                      {project.language}
                    </span>
                    <span style={{ color: 'var(--border-color)' }}>•</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <Eye size={14} color="#64748b" />
                      <span>{project.views}</span>
                    </div>
                  </div>

                  {/* Heart Appreciation Button */}
                  <button
                    className={`heart-btn ${isLiked ? 'liked' : ''}`}
                    onClick={(e) => handleHeartClick(project.id, e)}
                  >
                    <Heart
                      size={15}
                      fill={isLiked ? '#ff2a85' : 'transparent'}
                      color={isLiked ? '#ff2a85' : 'currentColor'}
                    />
                    <span>{appreciationCount}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
