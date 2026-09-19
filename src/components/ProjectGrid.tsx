import React from 'react';
import type { Project } from '../data/projects';
import { Eye, Heart, Search } from 'lucide-react';
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
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    confetti({
      particleCount: 20,
      spread: 55,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      },
      colors: ['#e0365a', '#1769ff', '#7c3aed', '#f59e0b']
    });
    onToggleLike(projectId, e);
  };

  if (projects.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '80px 20px',
        color: 'var(--text-muted)'
      }}>
        <Search size={44} style={{ marginBottom: '16px', opacity: 0.4 }} />
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text)', marginBottom: '8px' }}>
          No results found
        </h3>
        <p style={{ fontSize: '0.9rem' }}>
          Try different keywords or clear your search filter.
        </p>
      </div>
    );
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => {
        const isLiked = likedProjects[project.id];
        const likesCount = project.appreciations + (isLiked ? 1 : 0);

        return (
          <article
            key={project.id}
            className="project-card"
            onClick={() => onSelectProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSelectProject(project)}
            aria-label={`View project: ${project.title}`}
          >
            {/* Image */}
            <div className="card-img-wrap">
              <img src={project.image} alt={project.title} loading="lazy" />

              {/* Badges in image */}
              <div className="card-badges">
                <span className={`cat-pill ${project.category}`}>
                  {project.categoryLabel}
                </span>
                {project.liveUrl && (
                  <span className="live-badge">Live</span>
                )}
              </div>

              {/* Hover overlay */}
              <div className="card-overlay" />
            </div>

            {/* Card body */}
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-subtitle">{project.subtitle}</p>
              <p className="card-desc">{project.description}</p>
            </div>

            {/* Card footer */}
            <div className="card-footer">
              <div className="card-meta">
                <span className="card-meta-item" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-dim)' }}>
                  {project.language}
                </span>
                <span style={{ color: 'var(--border)' }}>·</span>
                <span className="card-meta-item">
                  <Eye size={13} /> {project.views.toLocaleString()}
                </span>
              </div>

              <button
                className={`heart-btn ${isLiked ? 'liked' : ''}`}
                onClick={(e) => handleHeartClick(project.id, e)}
                aria-label={isLiked ? 'Unlike project' : 'Like project'}
              >
                <Heart
                  size={14}
                  fill={isLiked ? 'currentColor' : 'none'}
                />
                {likesCount.toLocaleString()}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
