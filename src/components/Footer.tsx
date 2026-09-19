import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { CREATOR } from '../data/projects';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border)',
      padding: '36px 24px 24px',
      marginTop: '80px'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Left */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <img
              src={CREATOR.avatar}
              alt={CREATOR.name}
              style={{ width: '28px', height: '28px', borderRadius: '50%', border: '2px solid var(--border)' }}
            />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)' }}>
              {CREATOR.name}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', maxWidth: '380px', lineHeight: 1.5 }}>
            Web3 & AI Architect — GenLayer Intelligent Contracts, OKX X Layer, and high-performance blockchain frontends.
          </p>
        </div>

        {/* Right links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href={CREATOR.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GithubIcon size={15} /> GitHub
          </a>
          <a href={`${CREATOR.githubUrl}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <ExternalLink size={14} /> All Repos
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container" style={{
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.78rem',
        color: 'var(--text-muted)'
      }}>
        <span>© {new Date().getFullYear()} {CREATOR.name}. All rights reserved.</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Made with <Heart size={13} color="var(--pink)" fill="var(--pink)" /> using Vite & React
        </span>
      </div>
    </footer>
  );
};
