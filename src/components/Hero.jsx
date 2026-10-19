import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

// Synthesized Web Audio API tactile sound generator (zero external audio files needed!)
function playTactileSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;

    if (type === 'lamp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.05);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'vinyl') {
      [261.63, 329.63, 392.0].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);
        gain.gain.setValueAtTime(0.06, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.05);
        osc.stop(now + 0.55);
      });
    } else if (type === 'camera') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(950, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.09);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } else if (type === 'computer') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } else if (type === 'tap' || type === 'nudge') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.08);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'page' || type === 'stamp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);
      gain.gain.setValueAtTime(0.11, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  } catch (e) {
    // Autoplay restrictions or unsupported audio context silently caught
  }
}

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Micro-interaction states for desk artifacts
  const [recordSpinning, setRecordSpinning] = useState(false);
  const [lampLit, setLampLit] = useState(false);
  const [cameraFlash, setCameraFlash] = useState(false);
  const [photoPrinted, setPhotoPrinted] = useState(false);
  const [monitorOn, setMonitorOn] = useState(false);
  const [coffeeSteaming, setCoffeeSteaming] = useState(false);
  const [plantNudged, setPlantNudged] = useState(false);
  const [headphonesActive, setHeadphonesActive] = useState(false);
  const [bookFlipped, setBookFlipped] = useState(false);
  const [stampsPeeled, setStampsPeeled] = useState(false);
  const [paintingInspected, setPaintingInspected] = useState(false);
  const [noteStep, setNoteStep] = useState(0);

  // Floating Toast Feedback
  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (icon, text) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ icon, text, id: Date.now() });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  useEffect(() => {
    const handleScroll = () => {
      const track = document.getElementById('hero-scroll-track');
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollableHeight = track.offsetHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;
      
      const currentScroll = -rect.top;
      const progress = Math.min(1, Math.max(0, currentScroll / scrollableHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click Handlers for all 13 items
  const handlePaintingClick = () => {
    setPaintingInspected(true);
    playTactileSound('tap');
    showToast('🎨', 'The Starry Night — Vincent van Gogh, 1889');
    setTimeout(() => setPaintingInspected(false), 2500);
  };

  const handleLampClick = () => {
    const next = !lampLit;
    setLampLit(next);
    playTactileSound('lamp');
    showToast(next ? '💡' : '🌑', next ? 'Desk lamp switched ON' : 'Desk lamp switched OFF');
  };

  const handleHeadphonesClick = () => {
    const next = !headphonesActive;
    setHeadphonesActive(next);
    playTactileSound('tap');
    showToast('🎧', next ? 'Listening to binaural focus & game OSTs' : 'Headphones taken off');
  };

  const handleRecordClick = () => {
    const next = !recordSpinning;
    setRecordSpinning(next);
    playTactileSound('vinyl');
    showToast('🎵', next ? 'Now spinning: Lo-Fi Study Chords' : 'Vinyl record stopped');
  };

  const handleBookClick = () => {
    setBookFlipped(true);
    playTactileSound('page');
    showToast('📖', '"Sprint" by Jake Knapp: Solve Big Problems in 5 Days');
    setTimeout(() => setBookFlipped(false), 2500);
  };

  const handleCoffeeClick = () => {
    setCoffeeSteaming(true);
    playTactileSound('tap');
    showToast('☕', 'Warm coffee sip: +10 coding energy');
    setTimeout(() => setCoffeeSteaming(false), 3000);
  };

  const handleFolderClick = () => {
    playTactileSound('tap');
    showToast('📁', 'Browsing Case Studies & Deep Dives...');
    const target = document.getElementById('featured-work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleComputerClick = () => {
    const next = !monitorOn;
    setMonitorOn(next);
    playTactileSound('computer');
    showToast('💻', next ? 'Vintage CRT powered ON: arnv.dev online' : 'Monitor powered OFF');
  };

  const handlePlantClick = () => {
    setPlantNudged(true);
    playTactileSound('nudge');
    showToast('🌱', 'Potted plant nudged: Hello from Nashik!');
    setTimeout(() => setPlantNudged(false), 800);
  };

  const handleNoteClick = () => {
    const next = (noteStep + 1) % 4;
    setNoteStep(next);
    playTactileSound('page');
    const tasks = [
      'To-Do: Slicing • Style Guide • Prototypes',
      '✓ Slicing completed',
      '✓ Style guide matched 1:1',
      '✓ All prototypes & interactions shipped!'
    ];
    showToast('📝', tasks[next]);
  };

  const handleStampsClick = () => {
    setStampsPeeled(true);
    playTactileSound('stamp');
    if (navigator.clipboard) {
      navigator.clipboard.writeText('arnavkapadnis123@gmail.com');
    }
    showToast('📬', 'Copied arnavkapadnis123@gmail.com to clipboard!');
    setTimeout(() => setStampsPeeled(false), 3000);
  };

  const handleCameraClick = () => {
    setCameraFlash(true);
    setPhotoPrinted(true);
    playTactileSound('camera');
    showToast('📸', 'Snap! Photo printed from Instax Camera');
    setTimeout(() => setCameraFlash(false), 300);
    setTimeout(() => setPhotoPrinted(false), 5000);
  };

  const handleJournalClick = () => {
    playTactileSound('page');
    showToast('📓', "Opening Arnav's Personal Journal & Timeline...");
    const target = document.getElementById('journal');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Raw scroll progress across the hero track (0 to 1)
  const rawProgress = scrollProgress;

  // Phase 1: Reveal & Parting (0.0 to 0.48)
  // Reaches 100% clean parted state by rawProgress = 0.48!
  const p = Math.min(1, Math.max(0, rawProgress / 0.48));

  // Phase 3: Tactile Resistance Tension before unpinning to Journal (0.84 to 1.00)
  // Generates an elastic resistance drag (0 to 48px) so the transition feels weighted
  const resistanceProgress = Math.max(0, Math.min(1, (rawProgress - 0.84) / 0.16));
  const tensionY = Math.pow(resistanceProgress, 1.7) * 48;

  return (
    <section id="hero-scroll-track" className="hero-scroll-track">
      
      {/* Sticky Viewport Container */}
      <div className="hero-sticky-stage">
        
        {/* Background Architectural Desk Grid with resistance tension */}
        <div 
          className="hero-grid-board"
          style={{ 
            '--p': p,
            '--tension-y': `${-tensionY}px`
          }}
        >
          {/* Flash effect overlay */}
          {cameraFlash && <div className="camera-flash-overlay"></div>}

          {/* Lamp ambient spotlight that moves with the lamp */}
          {lampLit && (
            <div 
              className="desk-lamp-ambient"
              style={{
                transform: `translate(${-p * 220}px, ${p * 20}px)`
              }}
            ></div>
          )}

          {/* SCATTERED TEXT PIECES (Fades out and drifts as you scroll down) */}
          <div 
            className="scattered-text phrase-top-left font-sans"
            style={{
              opacity: Math.max(0, 1 - p * 2.2),
              transform: `translateY(${p * 25}px)`
            }}
          >
            <span>THE WORLD IS</span>
            <span>FULL OF</span>
          </div>

          <div 
            className="scattered-text phrase-mid-right font-sans"
            style={{
              opacity: Math.max(0, 1 - p * 2.2),
              transform: `translateY(${p * 25}px)`
            }}
          >
            <span>UNFINISHED</span>
            <span>IDEAS</span>
          </div>

          <div 
            className="scattered-text phrase-mid-bottom font-sans"
            style={{
              opacity: Math.max(0, 1 - p * 2.2),
              transform: `translateY(${p * 25}px)`
            }}
          >
            <span>&amp; FRUSTRATING</span>
            <span>EXPERIENCES</span>
          </div>

          <div 
            className="scattered-text phrase-bottom-right font-sans"
            style={{
              opacity: Math.max(0, 1 - p * 2.2),
              transform: `translateY(${p * 25}px)`
            }}
          >
            <span className="phrase-sub font-serif">I build the things</span>
            <span className="phrase-bold">THAT MAKE THEM</span>
            <span className="phrase-bold">REAL</span>
          </div>

          {/* CENTER REVEAL IDENTITY (Fades in and scales as elements part away) */}
          <div 
            className="hero-center-identity"
            style={{
              opacity: Math.max(0, (p - 0.25) / 0.75),
              transform: `translate(-50%, -50%) scale(${0.92 + p * 0.08})`,
              pointerEvents: p > 0.5 ? 'auto' : 'none'
            }}
          >
            <h1 className="identity-script font-hand">Arnav Kapadnis</h1>
            <p className="identity-role font-sans">Computer Engineering @ SPPU | Builder &amp; Tinkerer</p>
            <p className="identity-quote font-serif">
              <em>"Building things, breaking things, figuring things out."</em>
            </p>
          </div>

          {/* 13 INTERACTIVE DESK ARTIFACTS (Parting away continuously with scroll) */}
          
          {/* 1. Starry Night Painting (Clickable) */}
          <div 
            className={`desk-item item-painting ${paintingInspected ? 'is-inspected' : ''}`}
            onClick={handlePaintingClick}
            style={{
              transform: `translate(${-p * 195}px, ${-p * 10}px) rotate(${-3 - p * 15}deg) scale(${1 - p * 0.1})`
            }}
            role="button"
            tabIndex={0}
            title="Click to inspect The Starry Night"
          >
            <div className="desk-item-inner">
              <img src="./assets/hero/painting.png" alt="Starry Night" draggable="false" />
            </div>
          </div>

          {/* 2. Green Desk Lamp (Clickable Toggle) */}
          <div 
            className={`desk-item item-lamp ${lampLit ? 'lamp-on' : ''}`}
            onClick={handleLampClick}
            style={{
              transform: `translate(${-p * 220}px, ${p * 20}px) rotate(${p * 15}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to toggle desk lamp"
          >
            <div className="desk-item-inner">
              {lampLit && (
                <>
                  <div className="lamp-downward-beam"></div>
                  <div className="lamp-bulb-glow"></div>
                </>
              )}
              <img src="./assets/hero/lamp.png" alt="Desk Lamp" draggable="false" />
            </div>
          </div>

          {/* 3. Headphones (Clickable Bounce & Sound waves) */}
          <div 
            className={`desk-item item-headphone ${headphonesActive ? 'is-active' : ''}`}
            onClick={handleHeadphonesClick}
            style={{
              transform: `translate(${-p * 285}px, ${p * 230}px) rotate(${5 - p * 30}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to put on headphones"
          >
            <div className="desk-item-inner">
              {headphonesActive && (
                <div className="headphone-waves-emitter pointer-events-none">
                  <span className="wave-ring w-1"></span>
                  <span className="wave-ring w-2"></span>
                </div>
              )}
              <img src="./assets/hero/headphone.png" alt="Headphones" draggable="false" />
            </div>
          </div>

          {/* 4. Vinyl Record (Clickable Spin & Music Notes) */}
          <div 
            className="desk-item item-disk"
            onClick={handleRecordClick}
            style={{
              transform: `translate(${-p * 370}px, ${p * 260}px) scale(${1 - p * 0.05})`
            }}
            role="button"
            tabIndex={0}
            title="Click to spin vinyl record"
          >
            <div className={`desk-item-inner ${recordSpinning ? 'is-spinning' : ''}`}>
              {recordSpinning && (
                <div className="vinyl-notes-emitter pointer-events-none">
                  <span className="floating-note note-1">♪</span>
                  <span className="floating-note note-2">♫</span>
                  <span className="floating-note note-3">♬</span>
                </div>
              )}
              <img src="./assets/hero/disk.png" alt="Vinyl Record" draggable="false" />
            </div>
          </div>

          {/* 5. Sprint Book (Clickable 3D Flip) */}
          <div 
            className={`desk-item item-book ${bookFlipped ? 'is-flipped' : ''}`}
            onClick={handleBookClick}
            style={{
              transform: `translate(${p * 180}px, ${-p * 20}px) rotate(${2 + p * 23}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to flip Sprint design book"
          >
            <div className="desk-item-inner">
              <img src="./assets/hero/book.png" alt="Sprint Book" draggable="false" />
            </div>
          </div>

          {/* 6. Coffee & Croissant (Clickable Sip & Steam) */}
          <div 
            className={`desk-item item-coffee ${coffeeSteaming ? 'is-steaming' : ''}`}
            onClick={handleCoffeeClick}
            style={{
              transform: `translate(${p * 330}px, ${p * 360}px) rotate(${-5 + p * 20}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click for a warm sip of coffee"
          >
            <div className="desk-item-inner">
              {coffeeSteaming && (
                <div className="coffee-steam-emitter pointer-events-none">
                  <span className="steam-particle s-1">~</span>
                  <span className="steam-particle s-2">~</span>
                  <span className="steam-particle s-3">~</span>
                </div>
              )}
              <img src="./assets/hero/coffee.png" alt="Coffee and Croissant" draggable="false" />
            </div>
          </div>

          {/* 7. Claude / Figma Design Folder (Clickable -> Scrolls to Projects) */}
          <div 
            className="desk-item item-folder"
            onClick={handleFolderClick}
            style={{
              transform: `translate(${p * 230}px, ${-p * 30}px) scale(${1 - p * 0.1})`
            }}
            role="button"
            tabIndex={0}
            title="Click to open Selected Projects folder"
          >
            <div className="desk-item-inner">
              <img src="./assets/hero/folder.png" alt="Design Folder" draggable="false" />
            </div>
          </div>

          {/* 8. Vintage CRT Monitor (Clickable Power Toggle & Terminal Screen) */}
          <div 
            className={`desk-item item-computer ${monitorOn ? 'monitor-powered-on' : ''}`}
            onClick={handleComputerClick}
            style={{
              transform: `translate(${p * 310}px, 0px) scale(${1 - p * 0.05})`
            }}
            role="button"
            tabIndex={0}
            title="Click to power on vintage CRT monitor"
          >
            <div className="desk-item-inner">
              {monitorOn && (
                <div className="crt-screen-active pointer-events-none">
                  <div className="crt-scanline"></div>
                  <div className="crt-text-box">
                    <span className="crt-line crt-cmd">&gt; arnv.dev</span>
                    <span className="crt-line crt-status">ONLINE_</span>
                  </div>
                </div>
              )}
              <img src="./assets/hero/computer.png" alt="Vintage Computer" draggable="false" />
            </div>
          </div>

          {/* 9. Potted Plant (Clickable Spring Wobble) */}
          <div 
            className={`desk-item item-plant ${plantNudged ? 'is-nudged' : ''}`}
            onClick={handlePlantClick}
            style={{
              transform: `translate(${-p * 265}px, ${-p * 60}px) rotate(${4 - p * 14}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to nudge potted plant"
          >
            <div className="desk-item-inner">
              <img src="./assets/hero/plant.png" alt="Potted Plant" draggable="false" />
            </div>
          </div>

          {/* 10. Sticky Notes (Clickable Task Progress) */}
          <div 
            className="desk-item item-bluenote"
            onClick={handleNoteClick}
            style={{
              transform: `translate(${-p * 250}px, ${p * 80}px) rotate(${-2 - p * 13}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to check off to-do list tasks"
          >
            <div className="desk-item-inner">
              {noteStep > 0 && (
                <div className="note-check-overlay pointer-events-none">
                  <span className="note-badge">✓ {noteStep}/3</span>
                </div>
              )}
              <img src="./assets/hero/bluenote.png" alt="Sticky Note" draggable="false" />
            </div>
          </div>

          {/* 11. Postage Stamps (Clickable Copy Email) */}
          <div 
            className={`desk-item item-stamps ${stampsPeeled ? 'is-peeled' : ''}`}
            onClick={handleStampsClick}
            style={{
              transform: `translate(${p * 310}px, ${-p * 80}px) rotate(${8 + p * 12}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to copy email address"
          >
            <div className="desk-item-inner">
              {stampsPeeled && (
                <div className="stamp-mark-badge pointer-events-none">
                  <span>COPIED ✉</span>
                </div>
              )}
              <img src="./assets/hero/stamps.png" alt="Postage Stamps" draggable="false" />
            </div>
          </div>

          {/* 12. Instax Camera (Clickable Flash & Polaroid Eject) */}
          <div 
            className="desk-item item-camera"
            onClick={handleCameraClick}
            style={{
              transform: `translate(${p * 245}px, ${-p * 30}px) rotate(${-4 - p * 11}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to snap photo with camera flash"
          >
            <div className="desk-item-inner">
              {photoPrinted && (
                <div className="instax-polaroid-eject pointer-events-none">
                  <div className="polaroid-frame">
                    <div className="polaroid-photo-thumb">
                      <span>⚡ AK</span>
                    </div>
                    <div className="polaroid-label font-sans">Nashik '26</div>
                  </div>
                </div>
              )}
              <img src="./assets/hero/camera.png" alt="Instax Camera" draggable="false" />
            </div>
          </div>

          {/* 13. Leather Journal (Clickable -> Scrolls to About Journal) */}
          <div 
            className="desk-item item-journal"
            onClick={handleJournalClick}
            style={{
              transform: `translate(${p * 140}px, ${-p * 40}px) rotate(${6 + p * 16}deg)`
            }}
            role="button"
            tabIndex={0}
            title="Click to open personal journal"
          >
            <div className="desk-item-inner">
              <img src="./assets/hero/journal.png" alt="Journal" draggable="false" />
            </div>
          </div>

        </div>

        {/* Dwell Phase Subtle Scroll Indicator */}
        {rawProgress >= 0.48 && rawProgress < 0.94 && !toast && (
          <div 
            className="hero-dwell-indicator font-sans pointer-events-none"
            style={{
              opacity: Math.min(1, Math.max(0, (rawProgress - 0.48) / 0.08)) * (1 - Math.max(0, (rawProgress - 0.84) / 0.10))
            }}
          >
            <span>Scroll to explore work</span>
            <span className="dwell-chevron">↓</span>
          </div>
        )}

        {/* Floating Feedback Toast for Micro-interactions */}
        {toast && (
          <div className="hero-interactive-toast font-sans" role="status" aria-live="polite">
            <span className="toast-icon">{toast.icon}</span>
            <span className="toast-text">{toast.text}</span>
          </div>
        )}

      </div>

    </section>
  );
}
