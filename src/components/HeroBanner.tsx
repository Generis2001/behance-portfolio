import React from 'react';
import { PROFILE_STATS } from '../data/projects';
import { CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const HeroBanner: React.FC = () => {
  return (
    <section style={{
      maxWidth: '1440px',
      margin: '24px auto 36px auto',
      padding: '0 24px',
    }}>
      {/* Cover Canvas Banner */}
      <div style={{
        borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, #0d1322 0%, #151b2e 50%, #0c1833 100%)',
        border: '1px solid var(--border-color)',
        padding: '36px 40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)'
      }}>
        {/* Subtle Decorative Gradient Mesh Background */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(0,87,255,0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-50px',
          left: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,42,133,0.12) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Creator Profile Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flex: '1 1 500px' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={PROFILE_STATS.avatar}
                alt={PROFILE_STATS.name}
                style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: 'var(--radius-full)',
                  border: '3px solid var(--behance-blue)',
                  boxShadow: '0 8px 25px rgba(0, 87, 255, 0.4)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                background: '#080a0f',
                borderRadius: '50%',
                padding: '2px',
                display: 'flex'
              }}>
                <CheckCircle2 size={22} color="#0057FF" fill="#0057FF" />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h1 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  lineHeight: 1.1
                }}>
                  {PROFILE_STATS.name}
                </h1>
                <span className="pill-badge web3" style={{ fontSize: '0.72rem' }}>
                  Pro Creator
                </span>
              </div>

              <p style={{
                color: '#60a5fa',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                marginTop: '4px'
              }}>
                {PROFILE_STATS.role}
              </p>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.92rem',
                marginTop: '8px',
                maxWidth: '640px',
                lineHeight: 1.5
              }}>
                {PROFILE_STATS.bio}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                {PROFILE_STATS.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'var(--text-main)',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-code)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics & Actions Box */}
          <div style={{
            background: 'rgba(8, 10, 15, 0.65)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '240px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>
                  13+
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Projects
                </div>
              </div>
              <div style={{ width: '1px', background: 'var(--border-color)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#60a5fa' }}>
                  38.9k
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Views
                </div>
              </div>
              <div style={{ width: '1px', background: 'var(--border-color)' }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', color: '#ff2a85' }}>
                  5.4k
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Appreciations
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href={PROFILE_STATS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-behance"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.86rem' }}
              >
                <GithubIcon size={16} /> Follow on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
