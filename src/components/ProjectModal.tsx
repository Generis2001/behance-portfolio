import React from 'react';
import type { Project } from '../data/projects';
import { X, ExternalLink, Heart, ChevronLeft, ChevronRight, CheckCircle, Code2, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
  isLiked: boolean;
  onToggleLike: (projectId: string, e: React.MouseEvent) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  onPrevProject,
  isLiked,
  onToggleLike
}) => {
  if (!project) return null;

  const handleHeartClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { x, y },
      colors: ['#ff2a85', '#0057ff', '#00f0ff', '#8b5cf6']
    });

    onToggleLike(project.id, e);
  };

  const appreciationCount = project.appreciations + (isLiked ? 1 : 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Bar */}
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(15, 19, 29, 0.95)',
          backdropFilter: 'blur(12px)',
          padding: '16px 28px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          zIndex: 10
        }}>
          {/* Title & Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onPrevProject}
              className="btn-secondary"
              style={{ padding: '6px', borderRadius: '50%' }}
              title="Previous Project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={onNextProject}
              className="btn-secondary"
              style={{ padding: '6px', borderRadius: '50%' }}
              title="Next Project"
            >
              <ChevronRight size={18} />
            </button>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2
              }}>
                {project.title}
              </h2>
              <span style={{ fontSize: '0.8rem', color: '#60a5fa', fontFamily: 'var(--font-heading)' }}>
                {project.subtitle}
              </span>
            </div>
          </div>

          {/* Top Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              className={`heart-btn ${isLiked ? 'liked' : ''}`}
              onClick={handleHeartClick}
            >
              <Heart size={16} fill={isLiked ? '#ff2a85' : 'transparent'} color={isLiked ? '#ff2a85' : 'currentColor'} />
              <span>Appreciate ({appreciationCount})</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-behance"
                style={{ fontSize: '0.82rem', padding: '7px 16px' }}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: 'none',
                color: 'var(--text-main)',
                padding: '8px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '32px 36px' }}>
          {/* Main Visual Showcase Hero Banner */}
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '32px'
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Project Details Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '36px'
          }}>
            {/* Left Content Area */}
            <div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '12px'
              }}>
                Project Overview & Architecture
              </h3>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                {project.description}
              </p>

              {/* Architecture Breakdown */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '20px 24px',
                marginBottom: '28px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#60a5fa', fontWeight: 600 }}>
                  <Cpu size={18} /> Architecture & System Design
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                  {project.details.architecture}
                </p>
              </div>

              {/* Key Features List */}
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '14px'
              }}>
                Key Capabilities & Deliverables
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {project.details.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)', fontSize: '0.94rem' }}>
                    <CheckCircle size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Code Snippet Preview (if available) */}
              {project.details.codeSnippet && (
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#a78bfa', fontWeight: 600, fontSize: '0.9rem' }}>
                    <Code2 size={16} /> Technical Implementation Snippet
                  </div>
                  <pre style={{
                    background: '#090c15',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 20px',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.84rem',
                    color: '#e2e8f0',
                    overflowX: 'auto',
                    lineHeight: 1.6
                  }}>
                    <code>{project.details.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Right Sidebar Metadata */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* External Links Box */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <GithubIcon size={16} /> View GitHub Source
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-behance"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <ExternalLink size={16} /> Open Vercel Application
                  </a>
                )}
              </div>

              {/* Tech Stack Pills Box */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '20px'
              }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  Technologies & Frameworks
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.details.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: 'rgba(0, 87, 255, 0.12)',
                        border: '1px solid rgba(0, 87, 255, 0.25)',
                        color: '#60a5fa',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-code)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Stats */}
              {project.details.stats && project.details.stats.length > 0 && (
                <div style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px'
                }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                    Project Specifications
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.details.stats.map((stat, idx) => (
                      <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem' }}>
                        <span style={{ color: 'var(--text-dim)' }}>{stat.label}:</span>
                        <span style={{ color: '#ffffff', fontWeight: 600, fontFamily: 'var(--font-heading)' }}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
