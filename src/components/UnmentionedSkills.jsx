import React, { useState } from 'react';
import { Sparkles, Terminal, Copy, Check, MousePointer2 } from 'lucide-react';
import { personalInfo, unmentionedSkills } from '../data/portfolioData';
import './UnmentionedSkills.css';

export default function UnmentionedSkills() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pixelCursorActive, setPixelCursorActive] = useState(true);
  const [randomIdea, setRandomIdea] = useState(null);

  const funnyIdeas = [
    "A CLI tool that plays sad violin music whenever a C++ build fails.",
    "Running production headless game servers inside ephemeral Google Colab notebook instances.",
    "An AI that tells me to close my 43 browser tabs and go to sleep.",
    "A macOS widget that calculates how much coffee I converted into bug fixes today.",
    "A game where you try to defeat a boss that uses my own unoptimized code against me."
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const spawnRandomIdea = () => {
    const nextIdea = funnyIdeas[Math.floor(Math.random() * funnyIdeas.length)];
    setRandomIdea(nextIdea);
  };

  return (
    <section 
      id="unmentioned" 
      className={`unmentioned-section font-mono ${pixelCursorActive ? 'has-pixel-cursor' : ''}`}
    >
      <div className="container-wide">
        
        {/* Section Top Bar */}
        <div className="unmentioned-top-bar">
          <div className="terminal-title-wrap">
            <span className="cursor-indicator font-mono">█</span>
            <span className="top-bar-title">EASTER_EGG // THINGS_NOT_ON_MY_RESUME.TXT</span>
          </div>

          <div className="cursor-toggle-wrap">
            <button 
              onClick={() => setPixelCursorActive(!pixelCursorActive)}
              className={`pixel-toggle-btn ${pixelCursorActive ? 'is-active' : ''}`}
              title="Toggle Retro Pixel Mouse Cursor"
            >
              <MousePointer2 size={14} />
              <span>Pixel Cursor: {pixelCursorActive ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* The Two-Column Screenshot Layout */}
        <div className="unmentioned-card">
          
          {/* LEFT COLUMN: Hit me up */}
          <div className="hit-me-up-col">
            <h3 className="section-label-mono">Hit me up:</h3>

            <ul className="links-arrow-list">
              <li>
                <a 
                  href={personalInfo.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="arrow-link"
                >
                  <span className="arrow-sym">→</span>
                  <span className="link-text">LinkedIn</span>
                </a>
              </li>

              <li>
                <a 
                  href={personalInfo.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="arrow-link"
                >
                  <span className="arrow-sym">→</span>
                  <span className="link-text">GitHub</span>
                </a>
              </li>

              <li>
                <a 
                  href={personalInfo.socials.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="arrow-link"
                >
                  <span className="arrow-sym">→</span>
                  <span className="link-text">Instagram (zenarc.dev)</span>
                </a>
              </li>

              <li>
                <a 
                  href="https://youtube.com/@zenarc" 
                  target="_blank" 
                  rel="noreferrer"
                  className="arrow-link"
                >
                  <span className="arrow-sym">→</span>
                  <span className="link-text">YouTube (ZenArc)</span>
                </a>
              </li>

              <li>
                <a 
                  href={personalInfo.socials.email} 
                  className="arrow-link"
                >
                  <span className="arrow-sym">→</span>
                  <span className="link-text">Email</span>
                </a>
              </li>
            </ul>

            {/* Quick Copy Email Snippet */}
            <div className="quick-copy-box">
              <span className="direct-email-label">DIRECT INBOX:</span>
              <div className="copy-action-row">
                <span className="email-string">{personalInfo.email}</span>
                <button 
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={14} className="text-lime" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Unmentioned skills */}
          <div className="skills-col">
            <h3 className="section-label-mono">Unmentioned skills:</h3>

            <div className="unmentioned-skills-list">
              {/* Exact reference items */}
              <div className="skill-line">
                <span className="skill-name-str">Setting food on fire:</span>
                <span className="skill-rating-str">Intermediate</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Spelling foccacia wrong:</span>
                <span className="skill-rating-str highlight-expert">Expert</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Eating a full pack of hobnobs:</span>
                <span className="skill-rating-str highlight-expert">Expert</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Dad dancing:</span>
                <span className="skill-rating-str">Improving every day</span>
              </div>

              {/* Arnav's personalized gems from the brief */}
              <div className="skill-line">
                <span className="skill-name-str">Turning random ideas into side projects:</span>
                <span className="skill-rating-str">Expert in starting</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Debugging a bug I introduced myself:</span>
                <span className="skill-rating-str">Advanced</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Opening 37 tabs instead of finishing tutorials:</span>
                <span className="skill-rating-str highlight-legendary">Legendary</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Saying "one last improvement":</span>
                <span className="skill-rating-str">Unlimited</span>
              </div>

              <div className="skill-line">
                <span className="skill-name-str">Making things look cooler than necessary:</span>
                <span className="skill-rating-str">Self-taught</span>
              </div>
            </div>

            {/* 2 AM Side Project Generator */}
            <div className="side-project-generator">
              <button 
                onClick={spawnRandomIdea}
                className="spawn-idea-btn font-mono"
              >
                <Sparkles size={14} />
                <span>Simulate a 2 AM Side Project Idea</span>
              </button>

              {randomIdea && (
                <div className="spawned-idea-bubble">
                  <span className="idea-prefix">$ cat ~/ideas/late_night.txt</span>
                  <p className="idea-body">"{randomIdea}"</p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
