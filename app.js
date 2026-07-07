import React, { useEffect, useMemo, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';

const skills = [
  { label: 'HTML', category: 'Web' },
  { label: 'CSS', category: 'Web' },
  { label: 'JavaScript', category: 'Web' },
  { label: 'React', category: 'Web' },
  { label: 'C Programming', category: 'Game' },
  { label: 'Python', category: 'App' },
  { label: 'Git & GitHub', category: 'Web' },
  { label: 'Responsive Design', category: 'Web' },
];

const projects = [
  {
    title: '50 Shades of Zombies',
    description: 'A Roblox game where players survive waves of zombies, upgrade weapons, and explore custom levels. I handle gameplay mechanics, progression, and polish in Roblox Studio.',
    repo: 'https://github.com/arnv-dev/50-shades-of-zombies.git',
    tags: ['Roblox', 'Game', 'Lua'],
  },
  {
    title: 'Flow',
    description: 'A macOS music player built with sleek controls, rhythm-inspired visuals, and smooth playback. Flow shows how I combine design with native application development.',
    repo: 'https://github.com/arnv-dev/Flow.git',
    tags: ['macOS', 'App', 'UI'],
  },
  {
    title: 'Portfolio Website',
    description: 'A modern online resume built with React and separate HTML/CSS/JS files. This site is designed to grow as I add new work and skills.',
    repo: 'https://github.com/arnv-dev/zenarc-site.git',
    tags: ['React', 'Web', 'Portfolio'],
  },
];

const categories = ['All', 'Web', 'Game', 'App'];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [favoriteMode, setFavoriteMode] = useState('Creative');

  useEffect(() => {
    document.documentElement.dataset.theme = favoriteMode.toLowerCase();
  }, [favoriteMode]);

  const visibleSkills = useMemo(() => {
    if (activeCategory === 'All') return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="page-wrap">
      <header className="site-header">
        <div className="site-brand">
          <span className="dot"></span> arnv.dev
        </div>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-card">
        <div className="hero-glow"></div>
        <div className="hero-copy">
          <p className="pretitle">Hello, I’m Arnav</p>
          <h1>Building modern web experiences, native apps, and Roblox games.</h1>
          <p>This portfolio is now powered by React, separate HTML/CSS/JS files, and smooth interactive sections that show my current work and future direction.</p>
          <div className="actions">
            <a className="btn" href="#projects">See Projects</a>
            <a className="btn-secondary" href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-header">
          <small>01</small>
          <h2>About Me</h2>
        </div>
        <div className="intro-panel">
          <p>As a Computer Engineering student, I love blending code, design, and game development. I build interactive websites, experiment with game mechanics in Roblox, and create native experiences like the macOS music player Flow.</p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-header">
          <small>02</small>
          <h2>Skills</h2>
        </div>
        <div className="interactive-panel">
          <p>Filter skills by category and explore the areas I’m actively growing in.</p>
          <div className="skill-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="skills-grid">
          {visibleSkills.map((skill) => (
            <div key={skill.label} className="skill-chip">{skill.label}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-header">
          <small>03</small>
          <h2>Featured Work</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View Repo</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <small>04</small>
          <h2>Fun</h2>
        </div>
        <div className="interactive-panel">
          <p>Toggle the mood and see the site respond instantly. I like building interactive experiences that feel alive.</p>
          <button onClick={() => setFavoriteMode((prev) => (prev === 'Creative' ? 'Focused' : 'Creative'))} type="button">
            Switch to {favoriteMode === 'Creative' ? 'Focused' : 'Creative'} mode
          </button>
          <div className="card">
            <p>Current mode: <strong>{favoriteMode}</strong>. This kind of interactive storytelling is what makes modern portfolio sites feel more exciting.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-header">
          <small>05</small>
          <h2>Contact</h2>
        </div>
        <div className="contact-panel">
          <p>Want to collaborate or learn more about my projects? Send me a message and I’ll get back as soon as I can.</p>
          <a href="mailto:arnav@example.com">arnav@example.com</a>
        </div>
      </section>

      <footer className="footer">
        Built with React, modern JS, and separate CSS for a cleaner developer experience.
      </footer>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
