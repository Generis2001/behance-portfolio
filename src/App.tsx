import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { PROJECTS, CREATOR } from './data/projects';
import type { Project } from './data/projects';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      const matchCat = activeCategory === 'all' || proj.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q
        || proj.title.toLowerCase().includes(q)
        || proj.subtitle.toLowerCase().includes(q)
        || proj.description.toLowerCase().includes(q)
        || proj.language.toLowerCase().includes(q)
        || proj.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  const totalAppreciations = useMemo(() => {
    const base = PROJECTS.reduce((acc, p) => acc + p.appreciations, 0);
    const extra = Object.values(likedProjects).filter(Boolean).length;
    return base + extra;
  }, [likedProjects]);

  const handleToggleLike = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProjects((prev) => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const i = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    setSelectedProject(filteredProjects[(i + 1) % filteredProjects.length]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const i = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    setSelectedProject(filteredProjects[(i - 1 + filteredProjects.length) % filteredProjects.length]);
  };

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        totalAppreciations={totalAppreciations}
      />

      <HeroBanner />

      {/* Main content */}
      <main>
        <div className="container" style={{ padding: '32px 24px 0' }}>
          {/* Section heading */}
          <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text)' }}>
              {activeCategory === 'all' ? 'All Projects' : filteredProjects[0]?.categoryLabel || 'Projects'}
            </h2>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {filteredProjects.length} of {PROJECTS.length} from{' '}
              <a href={CREATOR.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', textDecoration: 'none', fontWeight: 600 }}>
                github.com/{CREATOR.name}
              </a>
            </span>
          </div>

          <ProjectGrid
            projects={filteredProjects}
            onSelectProject={setSelectedProject}
            likedProjects={likedProjects}
            onToggleLike={handleToggleLike}
          />
        </div>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNextProject={handleNext}
          onPrevProject={handlePrev}
          isLiked={!!likedProjects[selectedProject.id]}
          onToggleLike={handleToggleLike}
        />
      )}
    </>
  );
}

export default App;
