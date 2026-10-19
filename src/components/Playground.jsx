import React from 'react';
import { ArrowUpRight, Terminal, Music, Flame, Sparkles, Film } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Playground.css';

export default function Playground() {
  const experiments = [
    {
      title: "Flow — Forked Hi-Res Audio Player",
      tag: "Case study",
      badge: "Forked Open-Source + FLAC + SQLite",
      desc: "Forked an open-source audio player to engineer bit-perfect high-res FLAC support, multi-API lyrics with backup fallbacks, a custom animated .lrc parser, and an SQLite metadata cache for instant song list, cover art, and lyrics loading.",
      link: "https://github.com/arnv-dev/Flow",
      icon: <Music size={20} className="exp-icon" />,
      color: "#D05938"
    },
    {
      title: "Dead Route — Roblox Shooter",
      tag: "Case study",
      badge: "Lua + Roblox Studio",
      desc: "Designed low-poly map progression (Camp → Gas Station → Bridge → Cargo Ship) with dynamic enemy wave scaling and spatial audio.",
      link: "https://github.com/arnv-dev/50-shades-of-zombies",
      icon: <Flame size={20} className="exp-icon" />,
      color: "#365B43"
    },
    {
      title: "Colab Cloud VM & Ngrok Reverse Tunnel",
      tag: "Case study",
      badge: "PaperMC + Java Plugin + Ngrok",
      desc: "Engineered a persistent Minecraft host on ephemeral Google Colab VMs using Google Drive FUSE storage and a compiled Java plugin querying 127.0.0.1:4040 for dynamic IP sync.",
      link: "https://github.com/arnv-dev",
      icon: <Terminal size={20} className="exp-icon" />,
      color: "#C28E34"
    },
    {
      title: "Creative Filming & VFX Reel",
      tag: "Visual experiment",
      badge: "After Effects + DaVinci Resolve",
      desc: "Creative filming, scripting, and post-production in After Effects and DaVinci Resolve. Explored pacing, visual framing, and color grades just for the sake of trying.",
      link: "https://www.instagram.com/reel/DbYdKXOIwIf/?utm_source=ig_web_copy_link&vrfl=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==",
      icon: <Film size={20} className="exp-icon" />,
      color: "#8B5CF6",
      customPrompt: "> render --comp reel_vfx.aep --lut kodak_warm.cube",
      customStatus: "✓ exported 4K 60fps to Instagram"
    }
  ];

  return (
    <section id="playground" className="playground-section">
      <div className="container-wide">
        
        {/* Header matching Screenshot 5 */}
        <div className="playground-head">
          <h2 className="playground-title font-sans">Late-night experiments</h2>
          <p className="playground-subtitle font-serif">
            <em>Late-night explorations with code, game systems &amp; AI</em>
          </p>
        </div>

        {/* Blueprint Grid Paper Container */}
        <div className="experiments-grid-frame">
          <div className="experiments-row">
            {experiments.map((exp, idx) => (
              <div key={idx} className="experiment-card">
                
                {/* Visual Preview Header */}
                <div className="card-thumb-box" style={{ borderColor: exp.color }}>
                  <div className="thumb-top-row">
                    <div className="thumb-icon-wrap" style={{ color: exp.color }}>
                      {exp.icon}
                    </div>
                    <span className="case-study-tag font-mono">{exp.tag}</span>
                  </div>

                  <div className="thumb-mock-terminal font-mono">
                    <span className="mock-prompt">{exp.customPrompt || `> git clone ${exp.badge.toLowerCase().replace(/\s+/g, '-')}`}</span>
                    <span className="mock-status">{exp.customStatus || "✓ build passed in 218ms"}</span>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="card-body">
                  <h3 className="card-title font-sans">{exp.title}</h3>
                  <p className="card-desc font-sans">{exp.desc}</p>
                  
                  <a 
                    href={exp.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="read-more-link font-sans"
                  >
                    <span>{exp.link.includes('instagram.com') ? "Watch on Instagram" : "Read more"}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
