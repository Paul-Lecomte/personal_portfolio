import type React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-sm font-semibold text-slate-100">
            Paul Lecomte
          </a>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a href="#about" className="hover:text-brand-soft">
              About
            </a>
            <a href="#projects" className="hover:text-brand-soft">
              Projects
            </a>
            <a href="#case-studies" className="hover:text-brand-soft">
              Case Studies
            </a>
            <a href="#resume" className="hover:text-brand-soft">
              Resume
            </a>
            <a href="#contact" className="hover:text-brand-soft">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <CaseStudies />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;

