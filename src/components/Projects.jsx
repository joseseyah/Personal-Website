import { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'RotaGuru',
    description: 'An intelligent rota generator that automates shift scheduling for teams and businesses.',
    tags: ['Web App', 'JavaScript', 'Scheduling'],
    category: 'web',
    github: 'https://github.com/joseseyah',
  },
  {
    title: 'PDF Merger',
    description: 'A utility tool for merging multiple PDF documents into a single file quickly and efficiently.',
    tags: ['Python', 'Utility', 'Automation'],
    category: 'tools',
    github: 'https://github.com/joseseyah',
  },
  {
    title: 'Alien Invasion',
    description: 'A retro-style arcade game built with Python and Pygame featuring alien invasion gameplay.',
    tags: ['Python', 'Pygame', 'Game Dev'],
    category: 'tools',
    github: 'https://github.com/joseseyah/Alien-Invasion',
  },
  {
    title: 'BrickBreaker',
    description: 'A classic brick breaker game recreated using Python Tkinter with retro aesthetics.',
    tags: ['Python', 'Tkinter', 'Game Dev'],
    category: 'tools',
    github: 'https://github.com/joseseyah',
  },
  {
    title: 'Auxilium',
    description: 'A first-year team project — a full website built with HTML, CSS, JavaScript, and database integration.',
    tags: ['Team Project', 'Full-Stack', 'Database'],
    category: 'web',
    github: 'https://github.com/joseseyah',
  },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Tools & Games', value: 'tools' },
]

function Projects() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-subtitle">
          A selection of projects spanning web apps, tools, and games.
        </p>

        <div className="projects__filters">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`projects__filter ${active === f.value ? 'projects__filter--active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <div key={project.title} className="projects__card">
              <div className="projects__card-top">
                <div className="projects__card-folder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="projects__card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
