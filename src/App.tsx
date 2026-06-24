import { useEffect, useRef, useState, type FC } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

const NAV_ITEMS = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#research', label: 'Research' },
  { href: '/#experience', label: 'Experience' },
];

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-init');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.reveal-section');
    sections.forEach((el) => {
      el.classList.add('reveal-init');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

const MainPage: FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  useRevealOnScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileNavOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scroll to hash on mount if there's a hash in the URL
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="/#"]');
      if (!anchor) return;
      e.preventDefault();
      const id = anchor.getAttribute('href')!.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileNavOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <Helmet>
        <title>Paul Lecomte — Master of Science in Computer Science</title>
        <meta
          name="description"
          content="I design and ship modern full-stack products from frontend UX to backend reliability. Based in Switzerland. Academic depth meets industrial execution."
        />
      </Helmet>

      {/* ============ NAVBAR ============ */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/80 backdrop-blur-md border-b border-outline-variant'
            : 'bg-transparent'
        }`}
      >
        <nav className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface">
            PORTFOLIO_OS_v2.0
          </Link>

          <div className="hidden md:flex items-center gap-8 font-label-mono text-label-mono">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button className="bg-primary-container text-on-primary-container px-6 py-2 font-label-mono text-label-mono hover:opacity-90 transition-all active:opacity-80">
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-4 p-2 text-on-surface-variant"
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
            onClick={() => setMobileNavOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{mobileNavOpen ? 'close' : 'menu'}</span>
          </button>
        </nav>

        {mobileNavOpen && (
          <div
            ref={mobilePanelRef}
            className="md:hidden bg-surface-container border-b border-outline-variant px-margin-mobile py-6 flex flex-col gap-4"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="relative min-h-screen flex flex-col justify-center swiss-grid px-margin-mobile md:px-margin-desktop overflow-hidden pt-16">
          <div className="max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/10 border border-primary/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-label-mono text-caption text-primary uppercase tracking-widest">
                  Available May 2026
                </span>
              </div>

              <h1 className="font-display text-[40px] md:text-display mb-6 text-on-surface leading-tight">
                Master of Science in{' '}
                <span className="text-primary">Computer Science.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-10">
                I design and ship modern full-stack products from frontend UX to backend
                reliability.{' '}
                <span className="text-on-surface font-medium underline decoration-primary decoration-2 underline-offset-4">
                  Based in Switzerland.
                </span>{' '}
                Academic depth meets industrial execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#projects" className="btn-primary">
                  VIEW FULL-STACK PROJECTS
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a href="/Paul-Lecomte-CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  DOWNLOAD RESUME
                  <span className="material-symbols-outlined">download</span>
                </a>
              </div>
            </div>

            {/* Terminal card */}
            <div className="lg:col-span-4 hidden lg:block relative h-[500px]">
              <div className="absolute inset-0 bg-surface-container border border-outline-variant flex flex-col">
                <div className="h-8 bg-surface-container-high border-b border-outline-variant flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-4 font-label-mono text-[10px] text-on-surface-variant">
                    architecture.sys
                  </span>
                </div>
                <div className="p-6 font-label-mono text-[12px] text-primary/80 overflow-hidden leading-relaxed">
                  <pre>{`{
  "engineer": "Paul Lecomte",
  "status": "BUILDING",
  "location": "CH-CHE",
  "stack": {
    "frontend": ["Next.js", "React"],
    "backend": ["Node.js", "Rust"],
    "systems": ["C++", "Docker"],
    "cloud": ["AWS", "Terraform"]
  },
  "principles": [
    "Clean Architecture",
    "Type Safety",
    "High Performance"
  ]
}`}</pre>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
            </div>
          </div>
        </section>

        {/* ============ SNAPSHOT ============ */}
        <section className="py-24 bg-surface-container-lowest border-y border-outline-variant reveal-section">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="section-kicker mb-4">01. Snapshot</h2>
                <h3 className="font-headline-lg text-headline-lg">Product Architecture Snapshot</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Design systems', 'API design', 'Testing', 'CI/CD'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-outline text-caption font-label-mono uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                {
                  icon: 'architecture',
                  title: 'Structural Integrity',
                  desc: 'Building systems that scale horizontally without compromising on latency or maintainability.',
                },
                {
                  icon: 'terminal',
                  title: 'Precision Logic',
                  desc: 'Writing deterministic code in C++ and Rust for critical performance bottlenecks.',
                },
                {
                  icon: 'layers',
                  title: 'Modern Full-stack',
                  desc: 'Leveraging the React ecosystem with strict TypeScript typing for end-to-end safety.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-8 border border-outline-variant bg-surface hover:border-primary/50 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-primary mb-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {card.icon}
                  </span>
                  <h4 className="font-headline-md text-headline-md mb-4">{card.title}</h4>
                  <p className="text-on-surface-variant font-body-md">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop reveal-section" id="research">
          <div className="max-w-max-width mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-outline-variant group-hover:border-primary/40 transition-colors duration-500" />
              <div className="relative bg-surface-variant h-[500px] overflow-hidden">
                <img
                  src="/picture.jpg"
                  alt="Paul Lecomte — Engineer Portrait"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>

            <div>
              <h2 className="section-kicker mb-4">02. Persona</h2>
              <h3 className="font-headline-lg text-headline-lg mb-8 leading-tight">
                Full-stack engineer with a <br />
                systems mindset.
              </h3>
              <div className="space-y-6 text-on-surface-variant text-body-lg">
                <p>
                  My approach is defined by the intersection of academic rigor and pragmatic
                  delivery. With a Master's in Computer Science from Switzerland, I don't just
                  "make it work"—I ensure it works efficiently, securely, and predictably.
                </p>
                <p>
                  I specialize in building bridges between complex data structures and intuitive
                  user interfaces. Whether it's optimizing a routing algorithm or crafting a
                  pixel-perfect component library, I apply the same level of engineering
                  discipline.
                </p>
                <div className="pt-6 border-t border-outline-variant">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
                        MSc.
                      </div>
                      <div className="font-label-mono text-caption uppercase text-primary">
                        Computer Science
                      </div>
                    </div>
                    <div>
                      <div className="font-headline-lg text-headline-lg text-on-surface mb-1">
                        2026
                      </div>
                      <div className="font-label-mono text-caption uppercase text-primary">
                        Available for Hire
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROJECTS (Bento) ============ */}
        <section className="py-24 bg-surface-container-low reveal-section" id="projects">
          <div className="section-shell">
            <div className="mb-16">
              <h2 className="section-kicker mb-4">03. Execution</h2>
              <h3 className="font-headline-lg text-headline-lg">Selected Projects</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/* Project 1: SwissTransit */}
              <Link to="/project/swiss-transit" className="md:col-span-8 group relative overflow-hidden bg-surface border border-outline-variant h-[450px] block">
                <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center text-on-surface-variant font-label-mono text-caption uppercase tracking-widest opacity-30 z-0">
                  [ Swiss Transit Map ]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <div className="font-label-mono text-caption text-primary mb-3">
                    SYSTEMS / ALGORITHMS
                  </div>
                  <h4 className="font-headline-lg text-headline-lg mb-4">
                    SwissTransit Routing Platform
                  </h4>
                  <p className="text-on-surface-variant max-w-lg mb-6">
                    Designed a multi-modal routing engine handling 10k+ concurrent requests with
                    sub-50ms latency using custom graph traversal algorithms.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-primary font-bold">50ms</span>
                      <span className="font-label-mono text-[10px] uppercase text-on-surface-variant">
                        LATENCY
                      </span>
                    </div>
                    <div className="h-4 w-[1px] bg-outline-variant" />
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-primary font-bold">10k+</span>
                      <span className="font-label-mono text-[10px] uppercase text-on-surface-variant">
                        REQ/SEC
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 2: Ballistics */}
              <Link to="/project/checkers-ai" className="md:col-span-4 group relative overflow-hidden bg-surface border border-outline-variant h-[450px] block">
                <div className="absolute inset-0 bg-surface-container-highest p-8 font-label-mono text-[12px] opacity-10">
                  <pre>v = sqrt((2*m*g)/(rho*A*Cd))</pre>
                </div>
                <div className="relative p-10 flex flex-col h-full z-20">
                  <div className="font-label-mono text-caption text-primary mb-3">
                    C++ / AI / ALGORITHMS
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-4">
                    Deterministic Checkers AI
                  </h4>
                  <p className="text-on-surface-variant mb-auto">
                    Expert-level checkers engine with alpha-beta pruning and neural network evaluation.
                  </p>
                  <div className="mt-8 flex justify-between items-end">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      calculate
                    </span>
                    <span className="w-12 h-12 flex items-center justify-center border border-outline hover:bg-primary-container hover:text-on-primary-container transition-all">
                      <span className="material-symbols-outlined">north_east</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Project 3: Swiss PB Map */}
              <Link to="/project/swiss-pb-map" className="md:col-span-8 group relative overflow-hidden bg-surface border border-outline-variant h-[450px] block">
                <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center text-on-surface-variant font-label-mono text-caption uppercase tracking-widest opacity-30 z-0">
                  [ Swiss Athletics Map ]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                  <div className="font-label-mono text-caption text-primary mb-3">
                    DATA / VISUALIZATION
                  </div>
                  <h4 className="font-headline-lg text-headline-lg mb-4">
                    Swiss PB Map V2
                  </h4>
                  <p className="text-on-surface-variant max-w-lg mb-6">
                    High-precision interactive geospatial visualization for personal best tracking across Swiss athletic routes with WebGL rendering.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-primary font-bold">60fps</span>
                      <span className="font-label-mono text-[10px] uppercase text-on-surface-variant">
                        RENDER
                      </span>
                    </div>
                    <div className="h-4 w-[1px] bg-outline-variant" />
                    <div className="flex items-center gap-2">
                      <span className="font-label-mono text-primary font-bold">50k+</span>
                      <span className="font-label-mono text-[10px] uppercase text-on-surface-variant">
                        ROUTES
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 4: Range & Rain */}
              <Link to="/project/range-and-rain" className="md:col-span-4 group relative overflow-hidden bg-surface border border-outline-variant h-[450px] block">
                <div className="absolute inset-0 bg-surface-container-highest p-8 font-label-mono text-[12px] opacity-10">
                  <pre>RK4 + G7 Drag Model</pre>
                </div>
                <div className="relative p-10 flex flex-col h-full z-20">
                  <div className="font-label-mono text-caption text-primary mb-3">
                    C++ / MATHEMATICS / WEATHER
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-4">
                    Range & Rain
                  </h4>
                  <p className="text-on-surface-variant mb-auto">
                    Deterministic ballistics solver with real-time weather data for sub-MOA precision at 1000m.
                  </p>
                  <div className="mt-8 flex justify-between items-end">
                    <span className="material-symbols-outlined text-primary text-4xl">
                      ballistics
                    </span>
                    <span className="w-12 h-12 flex items-center justify-center border border-outline hover:bg-primary-container hover:text-on-primary-container transition-all">
                      <span className="material-symbols-outlined">north_east</span>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Project 5: Profile Feedback Pipeline */}
              <Link to="/project/profile-roasting" className="md:col-span-12 group relative overflow-hidden bg-surface border border-outline-variant p-10 flex flex-col md:flex-row gap-12 items-center block">
                <div className="flex-1">
                  <div className="font-label-mono text-caption text-primary mb-3">
                    NODE.JS / DATA PIPELINE
                  </div>
                  <h4 className="font-headline-lg text-headline-lg mb-4">
                    Profile Feedback Pipeline
                  </h4>
                  <p className="text-on-surface-variant text-body-lg mb-8 max-w-2xl">
                    Automated LLM-driven feedback loop for professional profile optimization.
                    Reduced processing time by 85% while increasing user engagement metrics by
                    2.4x.
                  </p>
                  <div className="flex gap-4">
                    {['REDIS', 'OPENAI API', 'POSTGRES'].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-surface-variant text-caption font-label-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full md:w-1/3 bg-surface-container rounded p-6 border border-outline-variant">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-label-mono text-caption uppercase text-on-surface-variant">
                      Pipeline Efficiency
                    </span>
                    <span className="text-primary font-bold">+85%</span>
                  </div>
                  <div className="w-full bg-outline-variant h-2 mb-8">
                    <div className="bg-primary h-full" style={{ width: '85%' }} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-surface rounded">
                      <div className="text-headline-md font-bold mb-1">2.4x</div>
                      <div className="text-[10px] font-label-mono uppercase text-on-surface-variant tracking-tighter">
                        Engagement
                      </div>
                    </div>
                    <div className="p-4 bg-surface rounded">
                      <div className="text-headline-md font-bold mb-1">0.8s</div>
                      <div className="text-[10px] font-label-mono uppercase text-on-surface-variant tracking-tighter">
                        Mean P95
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ============ EXPERIENCE ============ */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-dim reveal-section" id="experience">
          <div className="max-w-max-width mx-auto">
            <div className="max-w-2xl mb-24">
              <h2 className="section-kicker mb-4">04. Methodology</h2>
              <h3 className="font-headline-lg text-headline-lg">End-to-end Execution</h3>
              <p className="text-on-surface-variant text-body-lg mt-6">
                My process is built on the Swiss ideal of precision engineering: rigorous
                planning followed by masterful craftsmanship.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-outline-variant hidden md:block" />
              <div className="space-y-24">
                {[
                  {
                    num: '01',
                    label: 'CONTEXT',
                    title: 'Product Discovery',
                    desc: 'Understanding the "Why" before the "How". I dive deep into stakeholder requirements and user constraints to define the architectural boundary.',
                  },
                  {
                    num: '02',
                    label: 'BLUEPRINT',
                    title: 'System Architecture',
                    desc: 'Defining data models, API contracts, and infrastructure topology. Choosing the right tool (Rust for safety, C++ for speed, Node for agility) for the specific problem.',
                  },
                  {
                    num: '03',
                    label: 'CRAFT',
                    title: 'Implementation',
                    desc: 'Clean, testable, and documented code. I build with a focus on future-proofing—meaning well-defined interfaces and minimal side effects.',
                  },
                  {
                    num: '04',
                    label: 'QUALITY',
                    title: 'Validation',
                    desc: 'Rigorous testing cycles, CI/CD automation, and performance benchmarking to ensure the system meets the high standards of Swiss engineering.',
                  },
                ].map((step) => (
                  <div key={step.num} className="relative md:pl-16">
                    <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-primary hidden md:block" />
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <span className="font-label-mono text-primary text-xl mb-4 block">
                          {step.num}/ {step.label}
                        </span>
                        <h4 className="font-headline-md text-headline-md mb-4 uppercase tracking-tighter">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-on-surface-variant">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ TECH STACK ============ */}
        <section className="py-24 bg-surface-container-lowest reveal-section" id="stack">
          <div className="section-shell">
            <div className="text-center mb-20">
              <h2 className="section-kicker mb-4">05. Toolkit</h2>
              <h3 className="font-headline-lg text-headline-lg">Technological Stack</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                {
                  title: 'Languages',
                  icons: [
                    'devicon-typescript-plain colored',
                    'devicon-rust-plain',
                    'devicon-cplusplus-plain colored',
                    'devicon-python-plain colored',
                    'devicon-go-original-wordmark colored',
                  ],
                },
                {
                  title: 'Frameworks',
                  icons: [
                    'devicon-nextjs-original-wordmark',
                    'devicon-react-original colored',
                    'devicon-nodejs-plain-wordmark colored',
                    'devicon-tailwindcss-original-wordmark colored',
                  ],
                },
                {
                  title: 'Databases',
                  icons: [
                    'devicon-postgresql-plain colored',
                    'devicon-redis-plain colored',
                    'devicon-mongodb-plain-wordmark colored',
                    'devicon-sqlite-plain-wordmark colored',
                  ],
                },
                {
                  title: 'Tools',
                  icons: [
                    'devicon-docker-plain colored',
                    'devicon-amazonwebservices-plain-wordmark colored',
                    'devicon-terraform-plain-wordmark colored',
                    'devicon-git-plain colored',
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="p-8 border border-outline-variant">
                  <div className="font-label-mono text-caption text-on-surface-variant uppercase mb-8 pb-4 border-b border-outline-variant">
                    {group.title}
                  </div>
                  <div className="flex flex-wrap gap-6">
                    {group.icons.map((cls) => (
                      <i
                        key={cls}
                        className={`${cls} text-3xl opacity-80 hover:opacity-100 transition-opacity`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ APPROACH / PHILOSOPHY ============ */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface reveal-section">
          <div className="max-w-max-width mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <h2 className="section-kicker mb-4">06. Philosophy</h2>
                <h3 className="font-headline-lg text-headline-lg">
                  How I approach engineering
                </h3>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {[
                  {
                    num: '01',
                    title: 'Product-first Execution',
                    desc: 'Technology exists to solve human and business problems. I build with the user\'s intent as the North Star.',
                  },
                  {
                    num: '02',
                    title: 'Fast Feedback Loops',
                    desc: 'Rapid iteration, continuous deployment, and proactive monitoring to catch issues before they reach production.',
                  },
                  {
                    num: '03',
                    title: 'Clean Architecture',
                    desc: 'Decoupling business logic from frameworks to ensure long-term agility and system resilience.',
                  },
                ].map((item) => (
                  <div key={item.num}>
                    <div className="font-display text-primary/20 text-6xl mb-4 font-extrabold">
                      {item.num}
                    </div>
                    <h4 className="font-headline-md text-headline-md mb-4">{item.title}</h4>
                    <p className="text-on-surface-variant font-body-md">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="py-32 px-margin-mobile md:px-margin-desktop relative reveal-section" id="contact">
          <div className="max-w-max-width mx-auto text-center">
            <div className="inline-block px-4 py-1 border border-primary/30 text-primary font-label-mono text-caption uppercase mb-8">
              Ready to Collaborate
            </div>
            <h2 className="font-display text-[48px] md:text-[64px] mb-12">
              Let's build something{' '}
              <br />
              <span className="text-primary italic">great</span> together.
            </h2>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
              {[
                { icon: 'mail', label: 'lecomtepaulvd@gmail.com', href: 'mailto:lecomtepaulvd@gmail.com' },
                { icon: 'person', label: 'LinkedIn', href: 'https://linkedin.com/in/paul-lecomte-539b46216' },
                { icon: 'code', label: 'GitHub', href: 'https://github.com/Paul-Lecomte' },
              ].map((link, i) => (
                <a
                  key={link.label}
                  className="group flex items-center gap-4 text-headline-md font-headline-md hover:text-primary transition-colors"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-12 h-12 flex items-center justify-center bg-surface-container border border-outline-variant group-hover:border-primary transition-all">
                    <span className="material-symbols-outlined">{link.icon}</span>
                  </span>
                  {link.label}
                  {i < 2 && <div className="hidden md:block w-px h-12 bg-outline-variant last:hidden" />}
                </a>
              ))}
            </div>

            <div className="relative inline-block px-12 py-8 border border-outline-variant bg-surface-container-lowest">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 bg-surface-container-lowest font-label-mono text-caption text-primary">
                CURRENT_STATUS
              </div>
              <p className="font-label-mono text-body-md text-on-surface-variant">
                Compiling next big thing... <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center py-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto gap-gutter">
          <div className="font-headline-md text-headline-md text-primary">PORTFOLIO_OS</div>
          <div className="font-label-mono text-caption text-on-surface-variant text-center md:text-left">
            © {new Date().getFullYear()} MSCS GRADUATE. ALL RIGHTS RESERVED. COMPILED WITH PRECISION.
          </div>
          <div className="flex gap-8 font-label-mono text-caption">
            <a
              href="https://github.com/Paul-Lecomte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-all hover:underline decoration-primary underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/paul-lecomte-539b46216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-all hover:underline decoration-primary underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-secondary transition-all hover:underline decoration-primary underline-offset-4"
            >
              ResearchGate
            </a>
            <a
              href="/Paul-Lecomte-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-all hover:underline decoration-primary underline-offset-4"
            >
              CV_Download
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/project/:id"
            element={
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="font-label-mono text-label-mono text-on-surface-variant">Loading project...</div></div>}>
                <ProjectDetail />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;