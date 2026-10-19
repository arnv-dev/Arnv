import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Github, Linkedin, Instagram } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container-wide">
        
        {/* Main Footer Callout */}
        <div className="footer-callout">
          <span className="footer-tag font-mono">// GET IN TOUCH</span>
          
          <h2 className="footer-title font-serif">
            Let's build something <br />
            <em>that actually matters.</em>
          </h2>

          <p className="footer-desc">
            Whether you have an interesting software idea, want to talk about native macOS apps, 
            or are looking for an ambitious engineering intern who loves getting their hands dirty — my inbox is open.
          </p>

          <a href={`mailto:${personalInfo.email}`} className="footer-email-link font-serif">
            <span>{personalInfo.email}</span>
            <span className="email-arrow">↗</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-left">
            <span className="footer-copy font-mono">
              © {new Date().getFullYear()} Arnav Kapadnis ({personalInfo.domain})
            </span>
            <span className="footer-tagline">
              Crafted with React, Vite &amp; Vanilla CSS • Nashik, India
            </span>
          </div>

          <div className="bottom-right">
            <div className="footer-social-cluster">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" title="GitHub">GitHub</a>
              <span>/</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">LinkedIn</a>
              <span>/</span>
              <a href={personalInfo.socials.instagram} target="_blank" rel="noreferrer" title="Instagram">Instagram</a>
            </div>

            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn font-mono"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
