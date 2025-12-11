import type React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-sm font-semibold text-slate-100">
            Paul Lecomte
          </Link>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex">
            <a href="#about" className="hover:text-brand-soft">
              About
            </a>
            <a href="#projects" className="hover:text-brand-soft">
              Projects
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
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
