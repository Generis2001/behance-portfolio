import React from 'react';
import { Search, Eye, Heart, Sparkles } from 'lucide-react';
import { PROFILE_STATS } from '../data/projects';
import { GithubIcon } from './Icons';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  totalAppreciations: number;
}

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'web3', label: 'Web3 & GenLayer' },
  { id: 'ai', label: 'AI & Agents' },
  { id: 'contracts', label: 'Smart Contracts' },
  { id: 'fullstack', label: 'Fullstack Apps' },
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
      zIndex: 100,
      background: 'rgba(8, 10, 15, 0.88)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '20px'
      }}>
        {/* Left Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            background: 'var(--behance-blue)',
            color: '#fff',
            fontWeight: 900,
            fontSize: '1.25rem',
            padding: '6px 14px',
            borderRadius: 'var(--radius-sm)',
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-heading)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 14px rgba(0,87,255,0.4)'
          }}>
            BĒ <span style={{ opacity: 0.65, fontWeight: 400 }}>|</span> GENERIS
          </div>

          {/* Quick GitHub Badge */}
          <a
            href={PROFILE_STATS.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '0.82rem', padding: '6px 14px' }}
          >
            <GithubIcon size={15} />
            github.com/Generis2001
          </a>
        </div>

        {/* Center Search Input */}
        <div style={{ flex: '1', maxWidth: '420px', position: 'relative' }}>
          <Search
            size={17}
            style={{
              position: 'absolute',
              left: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-dim)'
            }}
          />
          <input
            type="text"
            placeholder="Search projects by name, technology, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '9px 16px 9px 40px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-main)',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-body)',
              outline: 'none',
              transition: 'var(--transition-fast)'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--behance-blue)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* Right Stats & Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            background: 'rgba(255,255,255,0.03)',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <Eye size={15} color="#3b82f6" />
              <span>{(PROFILE_STATS.projectViews / 1000).toFixed(1)}k Views</span>
            </div>
            <div style={{ width: '1px', height: '14px', background: 'var(--border-color)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <Heart size={15} color="#ff2a85" fill="#ff2a85" />
              <span>{totalAppreciations} Likes</span>
            </div>
          </div>

          <a
            href="mailto:contact@generis2001.dev"
            className="btn-behance"
            style={{ fontSize: '0.85rem', padding: '8px 18px' }}
          >
            <Sparkles size={15} />
            Hire / Collaborate
          </a>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '10px 24px 14px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        overflowX: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.04)'
      }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginRight: '6px' }}>
          Explore:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                border: isActive ? '1px solid var(--behance-blue)' : '1px solid var(--border-color)',
                background: isActive ? 'var(--behance-blue)' : 'var(--bg-surface)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                fontSize: '0.83rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
