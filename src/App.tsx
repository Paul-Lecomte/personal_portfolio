import type React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Proof from './components/Proof';
import Projects from './components/Projects';
import TechnicalDepth from './components/TechnicalDepth';
import About from './components/About';
import Contact from './components/Contact';
import { Suspense, lazy, useEffect, useState } from 'react';
import { SeoHelmet } from './seo/helmet';
import { personJsonLd, webSiteJsonLd } from './seo/helmet';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BackgroundCanvas = lazy(() => import('./components/BackgroundCanvas'));

const navItems = [
  { href: '#authority', label: 'About' },
  { href: '#proof', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#technical-depth', label: 'Stack' },
  { href: '#about', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

const MainPage: React.FC = () => {
  // état pour réduire les animations (préférence utilisateur)
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem('reducedMotion');
    } catch (err) {
      // Ignore storage access errors (e.g. privacy mode).
      stored = null;
      void err;
    }
    if (stored === 'true' || stored === 'false') return stored === 'true';
    // fallback au média query
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
  });
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('reducedMotion', String(reducedMotion));
    } catch (err) {
      void err;
    }
    // informer les listeners (canvas) du changement
    const ev = new CustomEvent('reduced-motion-change', { detail: { reducedMotion } });
    window.dispatchEvent(ev);
  }, [reducedMotion]);

  return (
    <div className="relative z-10 min-h-screen text-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-slate-100 focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-ink-950/70 backdrop-blur-xl" role="banner">
        <div className="section-shell flex items-center justify-between py-3">
          <Link to="/" className="font-display text-base font-semibold tracking-tight text-slate-100">
            Paul Lecomte <span className="text-brand-300">Portfolio</span>
          </Link>
          <nav className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.15em] text-slate-300 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand-200">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="hidden rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-brand-300 hover:text-brand-200 md:inline-flex"
              aria-pressed={reducedMotion}
              aria-label={reducedMotion ? 'Enable animations' : 'Reduce animations'}
              onClick={() => setReducedMotion((v) => !v)}
            >
              {reducedMotion ? 'Animations off' : 'Reduce motion'}
            </button>
            <button
              type="button"
              className="inline-flex rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-200 transition hover:border-brand-300 hover:text-brand-200 md:hidden"
              aria-expanded={mobileNavOpen}
              aria-label="Toggle navigation"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {mobileNavOpen ? (
          <nav className="section-shell border-t border-slate-800/80 pb-4 pt-3 md:hidden" aria-label="Mobile primary">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-800/70 bg-slate-900/50 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-200"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="mt-2 inline-flex rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-200"
              aria-pressed={reducedMotion}
              onClick={() => setReducedMotion((v) => !v)}
            >
              {reducedMotion ? 'Animations off' : 'Reduce motion'}
            </button>
          </nav>
        ) : null}
      </header>

      <main id="main" className="pb-10">
        <SeoHelmet
          title="Paul Lecomte — Full-Stack Software Engineer"
          description="Full-stack software engineer building production web apps, APIs, and data-driven systems with clear architecture and measurable impact."
          path="/"
          image="/og-image.svg"
          jsonLd={[personJsonLd(), webSiteJsonLd()]}
        />
        <Hero />
        <Authority />
        <Proof />
        <Projects />
        <TechnicalDepth />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/80 bg-ink-950/65 py-10" role="contentinfo">
        <div className="section-shell flex flex-col gap-2 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          © {new Date().getFullYear()} Paul Lecomte
          <span className="text-slate-600">Built for reliability, clarity, and measurable outcomes.</span>
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
