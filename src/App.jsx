import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journal from './components/Journal';
import Playground from './components/Playground';
import Projects from './components/Projects';
import Skills from './components/Skills';
import UnmentionedSkills from './components/UnmentionedSkills';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Floating Pill Navigation */}
      <Navbar />

      <main>
        {/* Smriti-Style Hero: Scroll-Driven Parting with 13 Authentic Desk Items */}
        <Hero />

        {/* Selected Work / Case Studies: White elevated sheet blending into full white page */}
        <Projects />

        {/* Smriti-Style About: Interactive Closed/Open Hardcover Journal */}
        <Journal />

        {/* Smriti-Style Playground: Late-night experiments on blueprint grid */}
        <Playground />

        {/* Honest Technical Skills & System Progress Monitor */}
        <Skills />

        {/* Screenshot-Style Monospace Unmentioned Skills & Hit Me Up */}
        <UnmentionedSkills />
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer />
    </div>
  );
}
