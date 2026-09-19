import React from 'react';
import { Search, Eye, Heart, Sparkles } from 'lucide-react';
import { CREATOR } from '../data/projects';
import { GithubIcon } from './Icons';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  totalAppreciations: number;
}

const CATEGORIES = [
  { id: 'all', label: 'All Work' },
  { id: 'web3', label: 'Web3 & GenLayer' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'contracts', label: 'Smart Contracts' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'games', label: 'UI & Games' },
];

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  totalAppreciations
}) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: 'rgba(255,255,255,0.97)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Top row */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '12px 24px',
      }}>
        {/* Logo / Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <img
            src={CREATOR.avatar}
            alt={CREATOR.name}
            style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--border)' }}
          />
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.1rem',
            color: 'var(--text)',
            letterSpacing: '-0.01em'
          }}>
            {CREATOR.name}
          </span>
          <span style={{ color: 'var(--text-dim)', fontSize: '1rem' }}>·</span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.83rem',
            color: 'var(--text-muted)',
            fontWeight: 500
          }}>
            Portfolio
          </span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Search */}
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{
            position: 'absolute', left: '12px', top: '50%',
            transform: 'translateY(-50%)', color: 'var(--text-muted)'
          }} />
          <input
            type="text"
            placeholder="Search projects…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 14px 8px 36px',
              background: 'var(--bg-surface)',
              border: '1.5px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text)',
              fontSize: '0.86rem',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              transition: 'var(--transition)'
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--blue)'; e.target.style.background = '#fff'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.background = 'var(--bg-surface)'; }}
          />
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <Eye size={14} />
            <span>{(CREATOR.totalViews / 1000).toFixed(1)}k views</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <Heart size={14} />
            <span>{totalAppreciations.toLocaleString()} appreciations</span>
          </div>
        </div>

        {/* GitHub CTA */}
        <a
          href={CREATOR.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ flexShrink: 0 }}
        >
          <GithubIcon size={15} /> Follow
        </a>

        <a
          href={`mailto:hello@generis2001.dev`}
          className="btn-primary"
          style={{ flexShrink: 0 }}
        >
          <Sparkles size={15} /> Work Together
        </a>
      </div>

      {/* Category Tab Filter Row */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        borderTop: '1px solid var(--border)',
        overflowX: 'auto',
        padding: '0 24px',
      }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-tab ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </header>
  );
};
