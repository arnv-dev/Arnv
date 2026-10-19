import React, { useState, useEffect } from 'react';
import { Folder, Smile, Image as ImageIcon, FileText, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'projects', 'about', 'playground', 'skills', 'unmentioned'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Monogram Badge */}
        <button 
          onClick={() => scrollTo('hero')} 
          className="nav-monogram" 
          aria-label="Arnav Kapadnis Home"
        >
          <span className="monogram-text">AK</span>
          <span className="monogram-dot" title="Available for internships & builds"></span>
        </button>

        {/* Floating Pill Dock matching Screenshots 1 & 2 */}
        <nav className="nav-pill" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <button 
                onClick={() => scrollTo('projects')} 
                className={`nav-item ${activeSection === 'projects' ? 'is-active' : ''}`}
              >
                <Folder size={17} className="nav-icon" />
                <span className="nav-text">Work</span>
              </button>
            </li>

            <li>
              <button 
                onClick={() => scrollTo('about')} 
                className={`nav-item ${activeSection === 'about' ? 'is-active' : ''}`}
              >
                <Smile size={17} className="nav-icon" />
                <span className="nav-text">About</span>
              </button>
            </li>

            <li>
              <button 
                onClick={() => scrollTo('playground')} 
                className={`nav-item ${activeSection === 'playground' ? 'is-active' : ''}`}
              >
                <ImageIcon size={17} className="nav-icon" />
                <span className="nav-text">Playground</span>
              </button>
            </li>

            <li>
              <a 
                href="mailto:arnavkapadnis207@gmail.com" 
                className="nav-item"
                title="Get in touch / Request Resume"
              >
                <FileText size={17} className="nav-icon" />
                <span className="nav-text">Resume</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
