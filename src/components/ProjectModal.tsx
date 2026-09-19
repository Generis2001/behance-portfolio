import React from 'react';
import type { Project } from '../data/projects';
import { X, ExternalLink, Heart, ChevronLeft, ChevronRight, CheckCircle, Code2, Cpu, ArrowUpRight } from 'lucide-react';
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
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    confetti({
      particleCount: 30,
      spread: 65,
      origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
      colors: ['#e0365a', '#1769ff', '#7c3aed']
    });
    onToggleLike(project.id, e);
  };

  const likesCount = project.appreciations + (isLiked ? 1 : 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Sticky modal header */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          padding: '14px 24px',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          {/* Nav arrows */}
          <button className="btn-ghost" onClick={onPrevProject} style={{ padding: '6px' }} title="Previous project">
            <ChevronLeft size={18} />
          </button>
          <button className="btn-ghost" onClick={onNextProject} style={{ padding: '6px' }} title="Next project">
            <ChevronRight size={18} />
          </button>

          {/* Title */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {project.title}
            </h2>
            <span style={{ fontSize: '0.78rem', color: 'var(--blue)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
              {project.subtitle}
            </span>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <button className={`heart-btn ${isLiked ? 'liked' : ''}`} onClick={handleHeartClick}>
              <Heart size={15} fill={isLiked ? 'currentColor' : 'none'} />
              Appreciate ({likesCount})
            </button>

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.82rem', padding: '7px 16px' }}>
                <ArrowUpRight size={14} /> Live Demo
              </a>
            )}

            <button
              onClick={onClose}
              style={{ background: '#f5f5f5', border: '1px solid var(--border)', borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal body */}
        <div style={{ padding: '0 0 40px 0' }}>
          {/* Full-width hero image */}
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block', background: '#f5f5f5' }}
          />

          {/* Content area */}
          <div style={{ padding: '36px 36px 0', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            {/* Left */}
            <div>
              {/* Category pill */}
              <span className={`cat-pill ${project.category}`} style={{ marginBottom: '16px', display: 'inline-flex' }}>
                {project.categoryLabel}
              </span>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginTop: '12px', marginBottom: '12px' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '28px' }}>
                {project.description}
              </p>

              {/* Architecture */}
              <div style={{ background: '#f8f9ff', border: '1.5px solid #e0e7ff', borderRadius: 'var(--radius-md)', padding: '18px 22px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--blue)', fontWeight: 700, fontSize: '0.88rem', fontFamily: 'var(--font-heading)' }}>
                  <Cpu size={16} /> Architecture
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  {project.details.architecture}
                </p>
              </div>

              {/* Features */}
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '14px', color: 'var(--text)' }}>
                Key Features
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {project.details.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} color="var(--green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Code snippet */}
              {project.details.codeSnippet && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: 'var(--purple)', fontWeight: 700, fontSize: '0.86rem', fontFamily: 'var(--font-heading)' }}>
                    <Code2 size={15} /> Implementation Preview
                  </div>
                  <pre style={{
                    background: '#1a1a2e', borderRadius: 'var(--radius-md)',
                    padding: '18px 22px', fontFamily: 'var(--font-mono)', fontSize: '0.83rem',
                    color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.65, border: 'none'
                  }}>
                    <code>{project.details.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Right sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Links */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'center' }}>
                  <GithubIcon size={15} /> Source Code
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <ExternalLink size={15} /> Open Live App
                  </a>
                )}
              </div>

              {/* Tech stack */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px', color: 'var(--text)' }}>
                  Tech Stack
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.details.techStack.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px', color: 'var(--text)' }}>
                  Keywords
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} style={{ fontSize: '0.76rem', color: 'var(--blue)', background: 'rgba(23,105,255,0.08)', border: '1px solid rgba(23,105,255,0.18)', padding: '2px 9px', borderRadius: 'var(--radius-full)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specs */}
              {project.details.stats.length > 0 && (
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '18px' }}>
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', marginBottom: '12px', color: 'var(--text)' }}>
                    Specifications
                  </h5>
                  {project.details.stats.map((stat, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', padding: '4px 0', borderBottom: idx < project.details.stats.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                      <span style={{ color: 'var(--text)', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
