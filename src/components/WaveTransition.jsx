import React from 'react';
import './WaveTransition.css';

export default function WaveTransition() {
  return (
    <div className="wave-transition-wrapper" aria-hidden="true">
      <svg 
        className="animated-editorial-waves" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
      >
        <defs>
          <path 
            id="gentle-wave-curve" 
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" 
          />
        </defs>
        <g className="wave-parallax-group">
          {/* Wave 1: Deeper warm cream shadow wave */}
          <use 
            href="#gentle-wave-curve" 
            x="48" 
            y="0" 
            className="wave-layer wave-1" 
          />
          {/* Wave 2: Mid-tone warm cream wave */}
          <use 
            href="#gentle-wave-curve" 
            x="48" 
            y="3" 
            className="wave-layer wave-2" 
          />
          {/* Wave 3: Translucent journal cream wave */}
          <use 
            href="#gentle-wave-curve" 
            x="48" 
            y="5" 
            className="wave-layer wave-3" 
          />
          {/* Wave 4: 100% Solid Journal Cream base wave */}
          <use 
            href="#gentle-wave-curve" 
            x="48" 
            y="7" 
            className="wave-layer wave-4" 
          />
        </g>
      </svg>
      {/* Seamless anchor strip merging into section#journal */}
      <div className="wave-seamless-anchor" />
    </div>
  );
}
