import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProjectGrid } from './components/ProjectGrid';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import type { Project } from './data/projects';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>({});

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      // Category match
      const matchCategory = activeCategory === 'all' || proj.category === activeCategory;
      
      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        proj.title.toLowerCase().includes(q) ||
        proj.subtitle.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.language.toLowerCase().includes(q) ||
        proj.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [searchQuery, activeCategory]);

  // Total appreciations counter
  const totalAppreciations = useMemo(() => {
    const baseSum = PROJECTS.reduce((acc, p) => acc + p.appreciations, 0);
    const addedLikes = Object.values(likedProjects).filter(Boolean).length;
    return baseSum + addedLikes;
  }, [likedProjects]);

  const handleToggleLike = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Modal Next/Prev navigation
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        totalAppreciations={totalAppreciations}
      />

      <main style={{ flex: 1 }}>
        <HeroBanner />

        {/* Section Header */}
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto 20px auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 800,
              color: '#ffffff'
            }}>
              Featured Creative Work
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Showing {filteredProjects.length} of {PROJECTS.length} repositories from @Generis2001
            </p>
          </div>
        </div>

        <ProjectGrid
          projects={filteredProjects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          likedProjects={likedProjects}
          onToggleLike={handleToggleLike}
        />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
        isLiked={selectedProject ? !!likedProjects[selectedProject.id] : false}
        onToggleLike={handleToggleLike}
      />
    </div>
  );
}

export default App;
