import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { PROFILE_STATS } from '../data/projects';
import { GithubIcon } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-color)',
      padding: '48px 24px 32px 24px',
      marginTop: '80px'
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px'
      }}>
        {/* Branding & Bio */}
        <div>
          <div style={{
            background: 'var(--behance-blue)',
            color: '#fff',
            fontWeight: 900,
            fontSize: '1.1rem',
            padding: '4px 12px',
            borderRadius: 'var(--radius-sm)',
            display: 'inline-flex',
            marginBottom: '10px'
          }}>
            BĒ | GENERIS2001
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', maxWidth: '400px' }}>
            High-performance Web3 & AI dApps, GenLayer Intelligent Contracts, and Document Intelligence Oracles.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href={PROFILE_STATS.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '0.84rem' }}
          >
            <GithubIcon size={16} /> GitHub Profile
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '0.84rem' }}
          >
            <ExternalLink size={16} /> Vercel Deployments
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: '1440px',
        margin: '24px auto 0 auto',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: 'var(--text-dim)'
      }}>
        <div>© 2026 Generis2001. Designed with Behance aesthetic standards.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Built with <Heart size={14} color="#ff2a85" fill="#ff2a85" /> using Vite, React & TypeScript
        </div>
      </div>
    </footer>
  );
};
