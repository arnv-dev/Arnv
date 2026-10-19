import React, { useState, useRef, useEffect } from 'react';
import { 
  ExternalLink, Play, Pause, Music, ShieldAlert, Cpu, 
  Map, Terminal, Layers, ArrowUpRight, CheckCircle2, ChevronRight, AlertTriangle, Sparkles,
  Server, HardDrive, Radio, Network, Database,
  SkipBack, SkipForward, Volume2, VolumeX, ListMusic
} from 'lucide-react';
import { Github } from './SocialIcons';
import { projects } from '../data/portfolioData';
import WaveTransition from './WaveTransition';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  // Interactive Flow demo states: 'player' | 'architecture'
  const audioRef = useRef(null);
  const activeLyricRef = useRef(null);
  const lyricsContainerRef = useRef(null);
  const [flowViewMode, setFlowViewMode] = useState('player');
  const [flowPlaying, setFlowPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [activeLyric, setActiveLyric] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  // Format seconds to mm:ss
  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Flow Audio playback controls
  const toggleFlowAudio = (currentTrack) => {
    if (!audioRef.current) return;
    if (flowPlaying) {
      audioRef.current.pause();
      setFlowPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setFlowPlaying(true);
        })
        .catch((err) => {
          console.warn("Direct audio playback failed, falling back to preview audio:", err);
          if (currentTrack?.fallbackSrc && audioRef.current.src !== currentTrack.fallbackSrc) {
            audioRef.current.src = currentTrack.fallbackSrc;
            setIsUsingFallback(true);
            audioRef.current.play()
              .then(() => setFlowPlaying(true))
              .catch(e => console.error("Fallback audio failed:", e));
          }
        });
    }
  };

  const handleTimeUpdate = (currentTrack) => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 1;
    setAudioCurrentTime(cur);
    setAudioDuration(dur);
    setAudioProgress((cur / dur) * 100);

    // Synchronize lyrics with audio playback
    const lyrics = currentTrack?.lyrics || [];
    let activeIdx = 0;
    for (let i = 0; i < lyrics.length; i++) {
      if (cur >= lyrics[i].time) {
        activeIdx = i;
      } else {
        break;
      }
    }
    setActiveLyric(activeIdx);
  };

  const handleAudioScrub = (e) => {
    if (!audioRef.current || !audioDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = pct * audioDuration;
    audioRef.current.currentTime = newTime;
    setAudioCurrentTime(newTime);
    setAudioProgress(pct * 100);
  };

  const handleNextTrack = (playlistLength) => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlistLength);
    setActiveLyric(0);
    setAudioCurrentTime(0);
    setAudioProgress(0);
    setIsUsingFallback(false);
  };

  const handlePrevTrack = (playlistLength) => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlistLength) % playlistLength);
    setActiveLyric(0);
    setAudioCurrentTime(0);
    setAudioProgress(0);
    setIsUsingFallback(false);
  };

  const handleSeekLyric = (time, idx) => {
    setActiveLyric(idx);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setAudioCurrentTime(time);
      if (!flowPlaying) {
        audioRef.current.play().then(() => setFlowPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Reload audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (flowPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentTrackIndex]);

  // Smoothly scroll the active lyric line to the top of the container automatically
  useEffect(() => {
    if (activeLyricRef.current && lyricsContainerRef.current) {
      const container = lyricsContainerRef.current;
      const activeEl = activeLyricRef.current;

      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const relativeTop = activeRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: Math.max(0, relativeTop),
        behavior: 'smooth'
      });
    }
  }, [activeLyric]);

  // Interactive Dead Route map stage
  const [selectedMapStage, setSelectedMapStage] = useState(0);

  // Interactive BriteSide AI comparison toggle
  const [legalMode, setLegalMode] = useState('plain'); // 'raw' | 'plain'

  // Interactive Colab Minecraft Architecture toggle: 'topology' | 'java' | 'colab'
  const [mcViewMode, setMcViewMode] = useState('topology');

  const categories = ['All', 'Native Application', 'Game Development', 'Systems & Infrastructure', 'AI & Product Design'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="featured-work" className="featured-work-wrapper">
      {/* Anchor for Navbar link */}
      <div id="projects" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} aria-hidden="true" />

      {/* White rectangle box that blends with cream hero, then expands to full white page */}
      <div className="work-white-sheet">
        {/* Subtle physical sheet indicator */}
        <div className="sheet-pill-notch" aria-hidden="true"></div>

        <div className="work-content-container">
          
          {/* Section Header matching Smriti Rawat's Reference Screenshot */}
          <div className="work-header-wrap">
            <div className="work-header-left">
              <p className="type-work-eyebrow font-serif">CASE STUDIES</p>
              <h2 className="type-work-headline font-sans">
                Think. Design. <br />
                Develop. Launch. <br />
                <span className="repeat-muted">Repeat</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="project-filter-row">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-btn ${filter === cat ? 'is-active' : ''}`}
                >
                  {cat === 'All' ? 'All Builds' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Grid of Case Studies (Matching Screenshot) */}
          <div className="case-studies-grid">
            {filteredProjects.map((project) => {
              // Custom pastel colors per card matching Smriti's palette
              const cardBg = 
                project.id === 'flow' ? '#F4F0E5' :
                project.id === 'dead-route' ? '#EAE8F2' :
                project.id === 'minecraft-lab' ? '#E6EFE8' : '#E8EEF5';

              return (
                <article key={project.id} className="case-study-card">
                  
                  {/* Top Preview Card with Interactive Widget */}
                  <div 
                    className="case-study-preview"
                    style={{ backgroundColor: cardBg }}
                  >
                    {/* Floating Circular Action Button */}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="preview-floating-action"
                        title={`View ${project.title} on GitHub`}
                        aria-label={`Open case study: ${project.title}`}
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    )}

                    {/* 1. FLOW AUDIO PLAYER MOCKUP */}
                    {project.id === 'flow' && (() => {
                      const playlist = project.playlist || [project.mockAudio];
                      const currentTrack = playlist[currentTrackIndex] || playlist[0];
                      const activeSource = isUsingFallback ? currentTrack.fallbackSrc : currentTrack.audioSrc;

                      return (
                        <div className="preview-window macos-window">
                          {/* Hidden Real HTML5 Audio Element */}
                          <audio
                            ref={audioRef}
                            src={encodeURI(activeSource)}
                            onTimeUpdate={() => handleTimeUpdate(currentTrack)}
                            onEnded={() => handleNextTrack(playlist.length)}
                            onError={() => {
                              if (!isUsingFallback && currentTrack.fallbackSrc) {
                                console.log("Audio file not found, switching to fallback preview audio");
                                setIsUsingFallback(true);
                                if (audioRef.current) {
                                  audioRef.current.src = currentTrack.fallbackSrc;
                                  if (flowPlaying) audioRef.current.play().catch(() => {});
                                }
                              }
                            }}
                            preload="metadata"
                          />

                          <div className="window-bar">
                            <div className="window-dots">
                              <span className="dot red"></span>
                              <span className="dot yellow"></span>
                              <span className="dot green"></span>
                            </div>
                            <span className="window-title font-mono">Flow.app — Forked Open-Source Core • FLAC &amp; SQLite</span>
                          </div>

                          {/* Interactive Mode Switcher */}
                          <div className="flow-tab-switcher">
                            <button
                              type="button"
                              className={`flow-tab-btn ${flowViewMode === 'player' ? 'is-active' : ''}`}
                              onClick={() => setFlowViewMode('player')}
                            >
                              <Music size={12} />
                              <span>Live Player &amp; Synced Lyrics</span>
                            </button>
                            <button
                              type="button"
                              className={`flow-tab-btn ${flowViewMode === 'architecture' ? 'is-active' : ''}`}
                              onClick={() => setFlowViewMode('architecture')}
                            >
                              <Database size={12} />
                              <span>FLAC &amp; SQLite Architecture</span>
                            </button>
                          </div>

                          {flowViewMode === 'player' ? (
                            <div className="flow-interactive-demo">
                              {/* Track Info & Main Playback Controls */}
                              <div className="player-disc-row">
                                <div className={`vinyl-artwork ${flowPlaying ? 'is-spinning' : ''}`}>
                                  <div className="vinyl-center">
                                    <Music size={18} />
                                  </div>
                                </div>

                                <div className="track-meta">
                                  <div className="track-meta-top">
                                    <span className="track-badge font-mono">FORKED CORE • {currentTrack.format}</span>
                                    {isUsingFallback && (
                                      <span className="track-preview-badge font-mono">SYNTH PREVIEW</span>
                                    )}
                                  </div>
                                  <h5 className="track-name">{currentTrack.songTitle}</h5>
                                  <span className="track-artist">{currentTrack.artist}</span>
                                </div>

                                <div className="flow-controls-cluster">
                                  <button
                                    type="button"
                                    onClick={() => handlePrevTrack(playlist.length)}
                                    className={`track-nav-btn ${playlist.length <= 1 ? 'is-disabled' : ''}`}
                                    aria-label="Previous track"
                                    title={playlist.length <= 1 ? "Only 1 track in library" : "Previous track"}
                                    disabled={playlist.length <= 1}
                                  >
                                    <SkipBack size={14} />
                                  </button>

                                  <button 
                                    type="button"
                                    onClick={() => toggleFlowAudio(currentTrack)}
                                    className={`demo-play-btn ${flowPlaying ? 'is-playing' : ''}`}
                                    aria-label={flowPlaying ? "Pause preview" : "Play preview"}
                                    title={flowPlaying ? "Pause playback" : "Play audio"}
                                  >
                                    {flowPlaying ? <Pause size={16} /> : <Play size={16} className="translate-x-0.5" />}
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => handleNextTrack(playlist.length)}
                                    className={`track-nav-btn ${playlist.length <= 1 ? 'is-disabled' : ''}`}
                                    aria-label="Next track"
                                    title={playlist.length <= 1 ? "Only 1 track in library" : "Next track"}
                                    disabled={playlist.length <= 1}
                                  >
                                    <SkipForward size={14} />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={toggleMute}
                                    className={`track-nav-btn ${isMuted ? 'is-muted' : ''}`}
                                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                                    title={isMuted ? "Unmute" : "Mute"}
                                  >
                                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => setShowPlaylistMenu(!showPlaylistMenu)}
                                    className={`playlist-toggle-btn ${showPlaylistMenu ? 'is-open' : ''}`}
                                    aria-label="Toggle playlist"
                                    title="Favorite songs playlist"
                                  >
                                    <ListMusic size={14} />
                                    <span className="playlist-count font-mono">{playlist.length}</span>
                                  </button>
                                </div>
                              </div>

                              {/* Interactive Playlist Drawer Popup */}
                              {showPlaylistMenu && (
                                <div className="playlist-drawer font-sans">
                                  <div className="playlist-drawer-head font-mono">
                                    <span>FAVORITE TRACKS IN /public/music/</span>
                                    <button 
                                      type="button" 
                                      className="close-drawer-btn" 
                                      onClick={() => setShowPlaylistMenu(false)}
                                    >
                                      ✕
                                    </button>
                                  </div>
                                  <div className="playlist-items-list">
                                    {playlist.map((t, idx) => (
                                      <div
                                        key={t.id || idx}
                                        onClick={() => {
                                          setCurrentTrackIndex(idx);
                                          setActiveLyric(0);
                                          setShowPlaylistMenu(false);
                                          setIsUsingFallback(false);
                                        }}
                                        className={`playlist-track-row ${currentTrackIndex === idx ? 'is-active-track' : ''}`}
                                      >
                                        <div className="track-idx font-mono">0{idx + 1}</div>
                                        <div className="track-details">
                                          <span className="track-row-title">{t.songTitle}</span>
                                          <span className="track-row-artist">{t.artist}</span>
                                        </div>
                                        <span className="track-row-dur font-mono">{t.duration}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="playlist-add-hint font-mono">
                                    💡 Tip: Place any <code>.mp3</code> or <code>.flac</code> into <code>public/music/</code> to hear your songs!
                                  </div>
                                </div>
                              )}

                              {/* Audio Scrubber & Live Progress Bar */}
                              <div className="audio-progress-container">
                                <div 
                                  className="audio-scrubber-track" 
                                  onClick={handleAudioScrub}
                                  title="Click to seek"
                                >
                                  <div 
                                    className="audio-scrubber-fill" 
                                    style={{ width: `${audioProgress}%` }}
                                  >
                                    <span className="audio-scrubber-thumb"></span>
                                  </div>
                                </div>
                                <div className="audio-time-row font-mono">
                                  <span>{formatTime(audioCurrentTime)}</span>
                                  <span>{formatTime(audioDuration || 228)}</span>
                                </div>
                              </div>

                              {/* Dynamic Waveform Graphic */}
                              <div className="audio-waveform-bar">
                                {[40, 65, 30, 85, 95, 45, 60, 80, 50, 70, 90, 60, 40, 75, 88, 55, 35, 70, 95, 40].map((h, i) => (
                                  <span 
                                    key={i} 
                                    className={`wave-col ${flowPlaying ? 'wave-animate' : ''}`}
                                    style={{ 
                                      height: `${h}%`, 
                                      animationDelay: `${(i % 5) * 0.15}s` 
                                    }}
                                  ></span>
                                ))}
                              </div>

                              {/* Synced Lyrics Inspector with Fluid Typography */}
                              <div className="lyrics-box font-mono">
                                <div className="lyrics-header">
                                  <div className="lyrics-head-left">
                                    <Terminal size={11} />
                                    <span>CUSTOM .LRC PARSER (CLICK LINE TO SEEK)</span>
                                  </div>
                                  <span className="lyrics-head-tag font-mono">
                                    {isUsingFallback ? "PREVIEW AUDIO" : currentTrack.cacheStatus || "SQLITE HIT (0.2ms)"}
                                  </span>
                                </div>
                                <div className="lyrics-lines" ref={lyricsContainerRef}>
                                  {currentTrack.lyrics.map((l, idx) => (
                                    <div 
                                      key={idx} 
                                      ref={activeLyric === idx ? activeLyricRef : null}
                                      onClick={() => handleSeekLyric(l.time, idx)}
                                      className={`lyric-line ${activeLyric === idx ? 'is-active-line' : ''}`}
                                      title="Click to jump to this lyric"
                                    >
                                      <span className="lyric-time">[{formatTime(l.time)}]</span>
                                      <span className="lyric-content">{l.text}</span>
                                      {activeLyric === idx && (
                                        <span className="active-verse-glow" aria-hidden="true"></span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Telemetry Chips */}
                              <div className="flow-telemetry-strip">
                                <span className="flow-chip">
                                  <strong>TRACK:</strong> {currentTrackIndex + 1}/{playlist.length} {currentTrack.songTitle}
                                </span>
                                <span className="flow-chip">
                                  <strong>ENGINE:</strong> Hi-Res FLAC
                                </span>
                                <span className="flow-chip">
                                  <strong>CACHE:</strong> SQLite (Songs, Covers, Lyrics)
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="flow-arch-pane">
                              <div className="pipeline-flow">
                                <div className="pipe-node highlight-fork">
                                  <span className="node-icon font-mono">FORKED CORE</span>
                                  <span className="node-label">Open-Source Base</span>
                                  <span className="node-sub font-mono">Rebuilt Engine</span>
                                </div>
                                <span className="pipe-arrow">→</span>
                                <div className="pipe-node highlight-flac">
                                  <span className="node-icon font-mono">AUDIO PIPELINE</span>
                                  <span className="node-label">Hi-Res FLAC</span>
                                  <span className="node-sub font-mono">24-bit / 96 kHz</span>
                                </div>
                                <span className="pipe-arrow">→</span>
                                <div className="pipe-node highlight-sql">
                                  <span className="node-icon font-mono">LOCAL DB</span>
                                  <span className="node-label">SQLite Cache</span>
                                  <span className="node-sub font-mono">Covers, Metadata</span>
                                </div>
                                <span className="pipe-arrow">→</span>
                                <div className="pipe-node highlight-lyrics">
                                  <span className="node-icon font-mono">LYRICS ENGINE</span>
                                  <span className="node-label">Multi-API Cascade</span>
                                  <span className="node-sub font-mono">Automated Fallback</span>
                                </div>
                              </div>

                              <div className="flow-arch-intel">
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">OPEN-SOURCE FORK &amp; HI-RES FLAC</span>
                                  <span className="intel-desc">Deconstructed open-source player core, replacing legacy audio decoders with native bit-perfect FLAC streaming pipelines up to 24-bit / 96 kHz.</span>
                                </div>
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">SQLITE METADATA CACHE LAYER</span>
                                  <span className="intel-desc">Indexed song collections, remote/embedded album cover art binaries, and parsed <code>.lrc</code> strings into SQLite, achieving instant sub-millisecond cold launches.</span>
                                </div>
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">MULTI-SERVICE LYRICS &amp; CUSTOM ANIMATED PARSER</span>
                                  <span className="intel-desc">Queries primary lyrics endpoints with automatic failover to secondary APIs. Feeds an in-house timestamp parser featuring fluid typographic animations.</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    {/* 2. DEAD ROUTE MAP PROGRESSION */}
                    {project.id === 'dead-route' && (
                      <div className="preview-window game-window">
                        <div className="window-bar">
                          <div className="window-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <span className="window-title font-mono">MapProgression.lua</span>
                        </div>

                        <div className="game-interactive-demo">
                          <div className="map-stages-list">
                            {project.mapStages.map((stage, idx) => (
                              <div 
                                key={idx}
                                onClick={() => setSelectedMapStage(idx)}
                                className={`map-stage-item ${selectedMapStage === idx ? 'is-selected' : ''}`}
                              >
                                <span className="stage-num font-mono">{stage.step}</span>
                                <div className="stage-info">
                                  <span className="stage-title">{stage.name}</span>
                                  <span className="stage-desc">{stage.desc}</span>
                                </div>
                                <ChevronRight size={15} className="stage-arrow" />
                              </div>
                            ))}
                          </div>

                          <div className="map-intel-box">
                            <span className="intel-label font-mono">ACTIVE SECTOR INTEL:</span>
                            <p className="intel-text">
                              {selectedMapStage === 0 && "Tutorial Zone: Scavenge supplies, test R6 weapon handling & stamina loop."}
                              {selectedMapStage === 1 && "Defensive Perimeter: Barricade broken pumps while sprinters attack in 3 waves."}
                              {selectedMapStage === 2 && "Precision Chokepoint: Fog reduces visibility. Long-range sniper combat across broken concrete."}
                              {selectedMapStage === 3 && "Climax Extraction: Survive 90 seconds against heavy brutes while signaling rescue transport."}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 3. MINECRAFT SERVER & EPHEMERAL VM INFRASTRUCTURE */}
                    {project.id === 'minecraft-lab' && (
                      <div className="preview-window mc-infra-window">
                        <div className="window-bar">
                          <div className="window-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <span className="window-title font-mono">Infra: Colab VM ⇄ Ngrok ⇄ Java Plugin</span>
                        </div>

                        {/* Interactive Tab Switcher */}
                        <div className="mc-tab-switcher">
                          <button
                            type="button"
                            className={`mc-tab-btn ${mcViewMode === 'topology' ? 'is-active' : ''}`}
                            onClick={() => setMcViewMode('topology')}
                          >
                            <Network size={12} />
                            <span>Topology</span>
                          </button>
                          <button
                            type="button"
                            className={`mc-tab-btn ${mcViewMode === 'java' ? 'is-active' : ''}`}
                            onClick={() => setMcViewMode('java')}
                          >
                            <Server size={12} />
                            <span>NgrokIPSync.java</span>
                          </button>
                          <button
                            type="button"
                            className={`mc-tab-btn ${mcViewMode === 'colab' ? 'is-active' : ''}`}
                            onClick={() => setMcViewMode('colab')}
                          >
                            <Terminal size={12} />
                            <span>Colab Boot Shell</span>
                          </button>
                        </div>

                        <div className="mc-infra-content">
                          {mcViewMode === 'topology' && (
                            <div className="mc-topology-pane">
                              <div className="pipeline-flow">
                                <div className="pipe-node">
                                  <span className="node-icon font-mono">CLIENT</span>
                                  <span className="node-label">Player Client</span>
                                </div>
                                <span className="pipe-arrow">⇄</span>
                                <div className="pipe-node highlight-tunnel">
                                  <span className="node-icon font-mono">NGROK DAEMON</span>
                                  <span className="node-label">TCP Reverse Tunnel</span>
                                  <span className="node-sub font-mono">:25565 ⇄ Dynamic IP</span>
                                </div>
                                <span className="pipe-arrow">⇄</span>
                                <div className="pipe-node highlight-vm">
                                  <span className="node-icon font-mono">COLAB VM</span>
                                  <span className="node-label">PaperMC Server</span>
                                  <span className="node-sub font-mono">Ubuntu Ephemeral</span>
                                </div>
                                <span className="pipe-arrow">⇄</span>
                                <div className="pipe-node highlight-drive">
                                  <span className="node-icon font-mono">G-DRIVE</span>
                                  <span className="node-label">FUSE Mount</span>
                                  <span className="node-sub font-mono">World &amp; Player NBT</span>
                                </div>
                              </div>

                              <div className="mc-infra-intel">
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">EPHEMERAL LIFECYCLE</span>
                                  <span className="intel-desc">Google Colab tears down and re-provisions clean containers on session timeout. Google Drive FUSE persists binary-level world states.</span>
                                </div>
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">DYNAMIC TUNNELING</span>
                                  <span className="intel-desc">Ngrok TCP tunnel bypasses CGNAT and outbound firewall rules. Generates a new external host on every restart.</span>
                                </div>
                                <div className="intel-row">
                                  <span className="intel-badge font-mono">AUTO-DISCOVERY</span>
                                  <span className="intel-desc">Compiled Java plugin fetches active host from <code>http://127.0.0.1:4040/api/tunnels</code> and syncs directly into server MOTD.</span>
                                </div>
                              </div>
                            </div>
                          )}

                          {mcViewMode === 'java' && (
                            <div className="mc-code-pane font-mono">
                              <div className="code-header">
                                <span className="code-filename">NgrokIPSync.java — Compiled PaperMC Plugin</span>
                                <span className="code-tag">Java 17 / Spigot API</span>
                              </div>
                              <pre className="code-block">
{`package com.arnv.ngroksync;

import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;
import java.net.URI;
import java.net.http.*;
import com.google.gson.*;

public class NgrokIPSync extends JavaPlugin {
  @Override
  public void onEnable() {
    // Poll Ngrok local daemon after VM network init
    Bukkit.getScheduler().runTaskLaterAsynchronously(this, () -> {
      try {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest req = HttpRequest.newBuilder()
          .uri(URI.create("http://127.0.0.1:4040/api/tunnels"))
          .GET().build();
        
        var res = client.send(req, HttpResponse.BodyHandlers.ofString());
        JsonObject root = JsonParser.parseString(res.body()).getAsJsonObject();
        String publicUrl = root.getAsJsonArray("tunnels").get(0)
          .getAsJsonObject().get("public_url").getAsString();
        
        String cleanAddr = publicUrl.replace("tcp://", "");
        getLogger().info("[IPSync] Bound to dynamic endpoint: " + cleanAddr);
        Bukkit.getServer().setMotd("§a● LIVE SERVER §f| " + cleanAddr);
      } catch (Exception err) {
        getLogger().severe("[IPSync] Daemon poll failed: " + err.getMessage());
      }
    }, 100L); // 5s tick delay
  }
}`}
                              </pre>
                            </div>
                          )}

                          {mcViewMode === 'colab' && (
                            <div className="mc-shell-pane font-mono">
                              <div className="code-header">
                                <span className="code-filename">colab_server_init.sh — Ephemeral VM Bootstrapper</span>
                                <span className="code-tag">Bash / Linux Kernel</span>
                              </div>
                              <pre className="code-block">
{`# 1. Mount Persistent Storage across VM wipes
from google.colab import drive
drive.mount('/content/drive')

# 2. Extract Ngrok daemon & authenticate
!curl -s -O https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
!tar -xzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin
!ngrok config add-authtoken $NGROK_AUTH_TOKEN

# 3. Spawn background TCP reverse tunnel on 25565
import subprocess
tunnel = subprocess.Popen(["ngrok", "tcp", "25565", "--log=stdout"])

# 4. Launch PaperMC server from Google Drive FUSE directory
%cd /content/drive/MyDrive/mc_colab_server
!java -Xms4G -Xmx10G -XX:+UseG1GC -jar paper-1.20.4.jar nogui`}
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* 4. BRITESIDE AI POLICY ANALYZER */}
                    {project.id === 'briteside-ai' && (
                      <div className="preview-window ai-window">
                        <div className="window-bar">
                          <div className="window-dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                          </div>
                          <span className="window-title font-mono">BriteSide AI — Clause Arbitrator</span>
                        </div>

                        <div className="ai-demo-wrap">
                          <div className="ai-view-switcher">
                            <button 
                              onClick={() => setLegalMode('raw')} 
                              className={`switch-tab ${legalMode === 'raw' ? 'is-active' : ''}`}
                            >
                              Raw Legal Terms (14.2)
                            </button>
                            <button 
                              onClick={() => setLegalMode('plain')} 
                              className={`switch-tab ${legalMode === 'plain' ? 'is-active' : ''}`}
                            >
                              Plain English Summary
                            </button>
                          </div>

                          <div className="ai-content-box">
                            {legalMode === 'raw' ? (
                              <div className="raw-legal-text font-mono">
                                "By accessing or utilizing the Services, you grant the Company an irrevocable, 
                                perpetual, sublicensable, royalty-free license to exploit, modify, and distribute 
                                user-submitted metadata for advertising..."
                              </div>
                            ) : (
                              <div className="plain-english-text">
                                <div className="alert-row danger">
                                  <AlertTriangle size={15} />
                                  <span className="alert-title font-mono">CRITICAL RISK: PERPETUAL DATA EXPLOITATION</span>
                                </div>
                                <p className="plain-summary">
                                  They keep your data forever. Even if you delete your account, they can sell or reuse 
                                  your activity for commercial ads without asking again.
                                </p>
                                <span className="cite-badge font-mono">Citation: Paragraph 14.2, Lines 41-47</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Bottom Information (Title, Editorial Summary, Tags matching Screenshot 2) */}
                  <div className="case-study-info">
                    <h3 className="case-study-title font-sans">{project.title}</h3>
                    <p className="case-study-desc">{project.tagline}</p>

                    {/* Tag Pills & GitHub Action */}
                    <div className="case-study-footer">
                      <div className="case-study-tags">
                        <span className="case-study-category-badge font-mono">{project.category}</span>
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="case-study-tag font-mono">{tag}</span>
                        ))}
                      </div>

                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="case-study-gh-btn font-mono"
                          title="Inspect code on GitHub"
                        >
                          <Github size={15} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>

                </article>
              );
            })}
          </div>

        </div>
      </div>

      {/* Animated Journal Cream Waves connecting Work to Journal */}
      <WaveTransition />
    </section>
  );
}
