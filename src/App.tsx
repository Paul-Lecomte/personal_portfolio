import type React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { Suspense, lazy, useEffect, useState } from 'react';
import { SeoHelmet } from './seo/helmet';
import { personJsonLd, webSiteJsonLd } from './seo/helmet';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BackgroundCanvas = lazy(() => import('./components/BackgroundCanvas'));

const MainPage: React.FC = () => {
  // état pour réduire les animations (préférence utilisateur)
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem('reducedMotion');
      if (stored === 'true' || stored === 'false') return stored === 'true';
    } catch {}
    // fallback au média query
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  });

  useEffect(() => {
    try {
      localStorage.setItem('reducedMotion', String(reducedMotion));
    } catch {}
    // informer les listeners (canvas) du changement
    const ev = new CustomEvent('reduced-motion-change', { detail: { reducedMotion } });
    window.dispatchEvent(ev);
  }, [reducedMotion]);

  return (
    <div className="min-h-screen text-slate-100 relative z-10">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-slate-100 focus:outline-none"
      >
        Aller au contenu principal
      </a>

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur" role="banner">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="text-sm font-semibold text-slate-100">
            Paul Lecomte
          </Link>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 sm:flex" aria-label="Navigation principale">
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
          {/* Toggle réduire les animations */}
          <button
            type="button"
            className="ml-4 inline-flex items-center rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-brand-soft hover:text-brand-soft"
            aria-pressed={reducedMotion}
            aria-label={reducedMotion ? 'Activer les animations' : 'Réduire les animations'}
            onClick={() => setReducedMotion((v) => !v)}
          >
            {reducedMotion ? 'Animations Reduced' : 'Reduce animations'}
          </button>
        </div>
      </header>

      <main id="main">
        <SeoHelmet
          title="Paul Lecomte — Backend & Full‑Stack Engineer"
          description="Backend & full‑stack projects in Rust, C++ and TypeScript. Case studies with problem → approach → impact."
          path="/"
          image="/og-image.svg"
          jsonLd={[personJsonLd(), webSiteJsonLd()]}
        />
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/80 py-8" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 text-center">
          © {new Date().getFullYear()} Paul Lecomte
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/project/:id"
          element={
            <Suspense fallback={<div className="p-6 text-slate-300">Loading…</div>}>
              <ProjectDetail />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
