import React, { useState, useEffect, useCallback } from 'react';
import { BookOpen, X, Sparkles, MapPin, Mail, ArrowUpRight, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import './Journal.css';

export default function Journal() {
  // 'closed' | 'opening' | 'open' | 'closing'
  const [viewState, setViewState] = useState('closed');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Tactile Web Audio synthesizer for book opening
  const playBookOpenSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // 1. Soft paper flutter & slide noise
      const bufferSize = Math.floor(ctx.sampleRate * 0.32);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.45));
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(750, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.14);
      filter.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 0.32);
      filter.Q.value = 1.4;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.01, ctx.currentTime);
      noiseGain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 0.09);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.32);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      whiteNoise.start();

      // 2. Gentle leather spine creak / soft thump
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(105, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.18);
      oscGain.gain.setValueAtTime(0.15, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Audio autoplay policy fallback
    }
  }, []);

  // Tactile Web Audio synthesizer for book closing
  const playBookCloseSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Paper sliding shut
      const bufferSize = Math.floor(ctx.sampleRate * 0.24);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.5));
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.22);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.16, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.24);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      whiteNoise.start();

      // Satisfying closure thud
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(75, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(32, ctx.currentTime + 0.16);
      oscGain.gain.setValueAtTime(0.22, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
      osc.connect(oscGain);
      oscGain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {
      // Audio autoplay fallback
    }
  }, []);

  // Trigger 3D Opening Animation
  const handleOpenBook = () => {
    if (viewState !== 'closed') return;
    playBookOpenSound();
    setViewState('opening');

    // Solidify open state after animation runs
    setTimeout(() => {
      setViewState('open');
    }, 720);
  };

  // Trigger 3D Closing Animation
  const handleCloseBook = () => {
    if (viewState !== 'open') return;
    playBookCloseSound();
    setViewState('closing');

    // Return to clean closed state after folding animation finishes
    setTimeout(() => {
      setViewState('closed');
    }, 500);
  };

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && viewState === 'open') {
        handleCloseBook();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewState]);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="journal" className="journal-wrapper">
      <div id="about" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} aria-hidden="true" />

      <div className="container-wide journal-inner-container">
        
        {/* ===================================================
            VIEW 1: CLOSED BOOK SCENE (SCREENSHOT 3)
            Preserved PNG Cover with Hover CTA
            =================================================== */}
        {viewState === 'closed' && (
          <div className="closed-book-scene">
            <div 
              className="book-cover-wrap" 
              onClick={handleOpenBook}
              role="button"
              tabIndex={0}
              title="Click to open Arnav's Journal"
            >
              <img 
                src="./assets/journal/cover.png" 
                alt="Closed Journal Notebook" 
                className="journal-cover-img" 
                draggable="false"
              />
              
              {/* Ribbon hanging out bottom */}
              <div className="book-hover-cta">
                <BookOpen size={16} />
                <span className="font-mono">CLICK TO OPEN JOURNAL</span>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            VIEW 2: OPEN SPREAD SCENE (HANDCRAFTED 2-PAGE NOTEBOOK)
            Animated with Fluid 3D Unfolding Mechanics
            =================================================== */}
        {viewState !== 'closed' && (
          <div className={`open-spread-scene view-${viewState}`}>
            
            {/* Header bar with Close button */}
            <div className="open-journal-header">
              <span className="journal-spread-tag font-mono">ARNAV'S HARDCOVER FIELD NOTES • VOL. 1</span>
              <button 
                onClick={handleCloseBook} 
                className="close-journal-btn font-mono"
                aria-label="Close Journal (Esc)"
                title="Close Journal (Press Esc)"
              >
                <X size={15} />
                <span>Close Journal</span>
              </button>
            </div>

            {/* Handcrafted Physical Hardcover Notebook */}
            <div className="handcrafted-notebook">
              
              {/* Top silk bookmark loop */}
              <div className="notebook-ribbon-top-wrap" aria-hidden="true">
                <img 
                  src="./assets/journal/bookmark-top.svg" 
                  alt="" 
                  className="notebook-ribbon-top" 
                />
              </div>

              {/* Bottom silk bookmark tail with physics pendulum sway */}
              <div className="notebook-ribbon-bottom-wrap" aria-hidden="true">
                <img 
                  src="./assets/journal/bookmark-bottom.svg" 
                  alt="" 
                  className="notebook-ribbon-bottom" 
                />
              </div>

              {/* Outer Hardcover Leather Backing */}
              <div className="notebook-leather-cover">
                
                {/* 3D Paper Stack: Strictly 2 columns (Left Page & Right Page) */}
                <div className="notebook-paper-stack">
                  
                  {/* Central Spine Fold & Stitching */}
                  <div className="notebook-spine-crease" aria-hidden="true">
                    <div className="spine-stitch-line">
                      {[...Array(14)].map((_, i) => (
                        <span key={i} className="spine-stitch-dot" />
                      ))}
                    </div>
                  </div>

                  {/* LEFT PAGE (Column 1) */}
                  <div className="notebook-page left-page">
                    <div className="page-inner-content">
                      
                      {/* Name in handwriting script */}
                      <div className="author-header">
                        <h2 className="journal-author-script font-hand">Arnav Kapadnis</h2>
                        <div className="journal-role-row">
                          <span className="journal-role-pill font-sans">Computer Engineering</span>
                          <span className="journal-years-pill font-sans">2nd Year</span>
                        </div>
                      </div>

                      {/* Interactive Career Timeline */}
                      <ul className="journal-timeline-list font-sans">
                        <li className="timeline-entry">
                          <span className="t-dot"></span>
                          <span className="t-company">SPPU / JESITMR</span>
                          <span className="t-years font-mono">2024 — Present</span>
                        </li>
                        <li className="timeline-entry">
                          <span className="t-dot"></span>
                          <span className="t-company">Flow (Forked FLAC &amp; SQLite Player)</span>
                          <span className="t-years font-mono">2024 — 2025</span>
                        </li>
                        <li className="timeline-entry">
                          <span className="t-dot"></span>
                          <span className="t-company">Roblox Game Dev (Dead Route)</span>
                          <span className="t-years font-mono">2024</span>
                        </li>
                        <li className="timeline-entry">
                          <span className="t-dot"></span>
                          <span className="t-company">Colab Cloud Server &amp; Java Plugin</span>
                          <span className="t-years font-mono">2023 — 2024</span>
                        </li>
                        <li className="timeline-entry">
                          <span className="t-dot"></span>
                          <span className="t-company">Video Editing &amp; VFX (Premiere, AE, DaVinci)</span>
                          <span className="t-years font-mono">2022 — 2024</span>
                        </li>
                      </ul>

                      {/* Taped Contact Note (bottom left of page) */}
                      <div 
                        className="taped-contact-note font-sans"
                        onClick={handleCopyEmail}
                        role="button"
                        tabIndex={0}
                        title="Click to copy email address"
                      >
                        <div className="tape-strip" aria-hidden="true"></div>
                        <div className="contact-note-content">
                          <div className="contact-note-header font-mono">
                            <span className="contact-pin-label">DISPATCH // CONTACT</span>
                            <span className="copy-action-indicator">
                              {copiedEmail ? <Check size={11} className="text-emerald" /> : <Copy size={11} />}
                            </span>
                          </div>
                          <p className="note-line email-line font-mono">{personalInfo.email}</p>
                          <p className="note-line loc-line">Nashik | Maharashtra, India</p>
                          {copiedEmail && (
                            <span className="copy-toast-inline font-mono">✓ Copied to clipboard!</span>
                          )}
                        </div>
                      </div>

                      {/* "Today" reflection box */}
                      <div className="today-thought-bubble font-sans">
                        <div className="bubble-dots">
                          <span className="b-dot red"></span>
                          <span className="b-dot yellow"></span>
                          <span className="b-dot green"></span>
                        </div>
                        <span className="bubble-title font-mono">Today</span>
                        <p className="bubble-quote">
                          "Turning random curiosity into code. Learning by breaking things and figuring out why they broke."
                        </p>
                        <span className="handwritten-advice font-hand">
                          Write, you'll be a much better engineer ~
                        </span>
                      </div>

                      {/* Left Page Number */}
                      <div className="page-footer-num font-mono">p. 14</div>

                    </div>
                    {/* Shadow overlay during unfold */}
                    <div className="page-lighting-overlay" aria-hidden="true"></div>
                  </div>

                  {/* RIGHT PAGE (Column 2) */}
                  <div className="notebook-page right-page">
                    <div className="page-inner-content right-page-layout">
                      
                      {/* Polaroid photo of Arnav with washi tape */}
                      <div className="polaroid-frame">
                        <div className="washi-tape-polaroid" aria-hidden="true"></div>
                        <div className="polaroid-photo-box">
                          <img 
                            src="./assets/journal/arnvvv.jpg" 
                            alt="Arnav Kapadnis" 
                            className="polaroid-avatar-img"
                          />
                          <div className="polaroid-gloss-glint" aria-hidden="true"></div>
                        </div>
                        <span className="polaroid-badge font-mono">@zenarc.dev</span>
                      </div>

                      {/* Pinned Stickers on the right page */}
                      <div className="page-stickers-cluster">
                        
                        {/* Sticker 1: Blue macOS folder */}
                        <div className="sticker-item sticker-folder" title="Flow.app — Forked open-source player with FLAC &amp; SQLite cache">
                          <img src="./assets/hero/folder.png" alt="Flow" className="sticker-img" />
                          <span className="sticker-label font-mono">Flow.app</span>
                        </div>

                        {/* Sticker 2: Terminal sticker */}
                        <div className="sticker-item sticker-terminal font-mono" title="Shell experiments">
                          <div className="term-mini-header">&gt;_ hello, world!</div>
                          <span className="sticker-label">Experiments.md</span>
                        </div>

                        {/* Sticker 3: Iced coffee */}
                        <div className="sticker-item sticker-coffee" title="Cold brew & late nights">
                          <img src="./assets/hero/coffee.png" alt="Coffee" className="sticker-img" />
                          <span className="sticker-label font-mono">CoffeeLover.png</span>
                        </div>

                        {/* Sticker 4: Lifestyle/Gaming */}
                        <div className="sticker-item sticker-gaming font-mono" title="Gaming enthusiast">
                          <span className="gaming-emoji">🎮</span>
                          <span className="sticker-label">EldenRing &amp; Souls</span>
                        </div>

                        {/* Sticker 5: Tech Badge */}
                        <div className="sticker-item sticker-tech font-mono" title="Vite & React 19 stack">
                          <span className="tech-chip">⚡ React 19</span>
                        </div>

                      </div>

                      {/* Right Page Number */}
                      <div className="page-footer-num font-mono">p. 15</div>

                    </div>
                    {/* Shadow overlay during unfold */}
                    <div className="page-lighting-overlay" aria-hidden="true"></div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}
