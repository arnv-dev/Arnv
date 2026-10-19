import React from 'react';
import { 
  Code2, Sparkles, BookOpen, Film, Server, 
  Terminal, CheckCircle, ArrowRight, Layers, ArrowUpRight
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container-wide">
        
        {/* Section Header */}
        <div className="section-head-wrap">
          <div>
            <div className="section-label">
              <span>/03</span>
              <span>•</span>
              <span>Technical Toolkit</span>
            </div>
            <h2 className="section-title">
              Tools I actually use, <br />
              <em>and topics I'm currently studying.</em>
            </h2>
            <p className="section-desc">
              No fabricated 99% progress bars or endless walls of logos. Here is an honest inventory 
              of what I can build with today, and what's actively on my learning desk.
            </p>
          </div>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-main-grid">

          {/* 1. DAILY CODE & FOUNDATIONS */}
          <div className="skill-card-block">
            <div className="block-head">
              <div className="block-icon-wrap text-forest">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="block-title">Currently Using &amp; Foundations</h3>
                <span className="block-sub font-mono">Hands-on experience in actual code</span>
              </div>
            </div>

            <div className="skills-items-list">
              {skillsData.currentlyUsing.map((item, idx) => (
                <div key={idx} className="skill-row">
                  <div className="skill-main-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-detail">{item.detail}</span>
                  </div>
                  <span className="skill-level-badge font-mono">{item.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. ACTIVELY LEARNING */}
          <div className="skill-card-block">
            <div className="block-head">
              <div className="block-icon-wrap text-rust">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="block-title">Actively Learning &amp; Deepening</h3>
                <span className="block-sub font-mono">Current 12-18 month focus areas</span>
              </div>
            </div>

            <div className="skills-items-list">
              {skillsData.activelyLearning.map((item, idx) => (
                <div key={idx} className="skill-row">
                  <div className="skill-main-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-detail">{item.detail || item.focus}</span>
                  </div>
                  <span className="skill-learning-badge font-mono">{item.focus || "In Progress"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. SYSTEMS & INFRASTRUCTURE */}
          <div className="skill-card-block">
            <div className="block-head">
              <div className="block-icon-wrap text-blue">
                <Server size={20} />
              </div>
              <div>
                <h3 className="block-title">Systems, DevOps &amp; Game Tech</h3>
                <span className="block-sub font-mono">Infrastructure and game systems experiments</span>
              </div>
            </div>

            <div className="skills-items-list">
              {(skillsData.systemsDevOps || skillsData.systemsAndCreative.slice(0, 3)).map((item, idx) => (
                <div key={idx} className="skill-row">
                  <div className="skill-main-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-detail">{item.detail}</span>
                  </div>
                  <span className="skill-tag-pill font-mono">Systems</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. CREATIVE TOOLKIT */}
          <div className="skill-card-block">
            <div className="block-head">
              <div className="block-icon-wrap text-gold">
                <Film size={20} />
              </div>
              <div>
                <h3 className="block-title">Creative Toolkit &amp; Media</h3>
                <span className="block-sub font-mono">Cinematic motion, editing &amp; audiovisuals</span>
              </div>
            </div>

            <div className="skills-items-list">
              {(skillsData.creativeToolkit || skillsData.systemsAndCreative.slice(3)).map((item, idx) => (
                <div key={idx} className="skill-row">
                  <div className="skill-main-info">
                    <span className="skill-name">{item.name}</span>
                    <span className="skill-detail">{item.detail}</span>
                  </div>
                  <span className="skill-tag-pill font-mono">Creative</span>
                </div>
              ))}
            </div>

            {/* Featured Creative Reel Spotlight */}
            {skillsData.featuredReel && (
              <a 
                href={skillsData.featuredReel.url}
                target="_blank"
                rel="noreferrer"
                className="reel-spotlight-pill"
                title="Watch creative filming & VFX reel on Instagram"
              >
                <div className="reel-pill-left">
                  <div className="reel-pill-badge font-mono">
                    <Sparkles size={11} />
                    <span>FEATURED REEL EXPERIMENT</span>
                  </div>
                  <p className="reel-pill-text">
                    {skillsData.featuredReel.desc}
                  </p>
                  <span className="reel-pill-tools font-mono">{skillsData.featuredReel.tools}</span>
                </div>
                <div className="reel-pill-action font-mono">
                  <span>Watch Reel</span>
                  <ArrowUpRight size={13} />
                </div>
              </a>
            )}
          </div>

        </div>

        {/* "CURRENTLY LOADING..." Terminal Status Box */}
        <div className="currently-loading-banner">
          <div className="loading-header font-mono">
            <Terminal size={15} className="loading-icon" />
            <span>SYSTEM MONITOR // LEARNING_PIPELINE.LOG</span>
          </div>

          <div className="loading-progress-grid font-mono">
            <div className="prog-item">
              <div className="prog-label">
                <span>Computer Science &amp; DSA (C++)</span>
                <span className="prog-percent">65% Active Focus</span>
              </div>
              <div className="prog-bar-track">
                <div className="prog-bar-fill" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="prog-item">
              <div className="prog-label">
                <span>Native Audio &amp; SQLite Architecture (Flow FLAC Player)</span>
                <span className="prog-percent">50% In Progress</span>
              </div>
              <div className="prog-bar-track">
                <div className="prog-bar-fill" style={{ width: '50%' }}></div>
              </div>
            </div>

            <div className="prog-item">
              <div className="prog-label">
                <span>Full-Stack &amp; Modern AI Integrations</span>
                <span className="prog-percent">40% Exploring</span>
              </div>
              <div className="prog-bar-track">
                <div className="prog-bar-fill" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="prog-item">
              <div className="prog-label">
                <span>Notes app ideas waiting to be built</span>
                <span className="prog-percent font-mono">100% Unlimited</span>
              </div>
              <div className="prog-bar-track">
                <div className="prog-bar-fill fill-accent" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
