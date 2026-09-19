import React from 'react';
import { CREATOR } from '../data/projects';
import { MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export const HeroBanner: React.FC = () => {
  return (
    <section style={{ borderBottom: '1px solid var(--border)', background: '#fff' }}>
      <div className="container" style={{ padding: '36px 24px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '28px',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {/* Avatar + Info */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flex: '1 1 400px' }}>
            {/* Avatar */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img
                src={CREATOR.avatar}
                alt={CREATOR.name}
                style={{
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px var(--border), var(--shadow-card)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute', bottom: 2, right: 2,
                background: '#fff', borderRadius: '50%', padding: 2, display: 'flex'
              }}>
                <CheckCircle2 size={18} color="var(--blue)" fill="var(--blue)" />
              </div>
            </div>

            {/* Text */}
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.9rem',
                fontWeight: 800,
                color: 'var(--text)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2
              }}>
                {CREATOR.name}
              </h1>

              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                marginTop: '4px',
                fontFamily: 'var(--font-heading)'
              }}>
                {CREATOR.role}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                <MapPin size={13} />
                <span>{CREATOR.location}</span>
              </div>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.88rem',
                marginTop: '10px',
                lineHeight: 1.6,
                maxWidth: '600px'
              }}>
                {CREATOR.bio}
              </p>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
                {CREATOR.skills.map((skill, idx) => (
                  <span key={idx} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats box */}
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            minWidth: '240px',
            alignSelf: 'flex-start'
          }}>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
              <div>
                <div className="stat-val">{CREATOR.totalProjects}+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div>
                <div className="stat-val" style={{ color: 'var(--blue)' }}>
                  {(CREATOR.totalViews / 1000).toFixed(1)}k
                </div>
                <div className="stat-label">Views</div>
              </div>
              <div>
                <div className="stat-val" style={{ color: 'var(--pink)' }}>
                  {(CREATOR.totalAppreciations / 1000).toFixed(1)}k
                </div>
                <div className="stat-label">Likes</div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--border)' }} />

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={CREATOR.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                <GithubIcon size={16} /> View GitHub Profile
              </a>
              <a
                href={`${CREATOR.githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ justifyContent: 'center', width: '100%' }}
              >
                <ExternalLink size={15} /> All Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
