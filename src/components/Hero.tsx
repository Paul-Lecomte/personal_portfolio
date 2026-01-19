import type React from 'react';
import { track } from '../utils/analytics';

const tech = {
  Languages: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Sass',
    'Less',
    'Node.js',
    'PHP',
    'Python',
    'Rust',
    'C++',
  ],
  Frameworks: [
    'Next.js',
    'React',
    'Vue.js',
    'Nuxt.js',
    'Tailwind CSS',
    'Vite',
    'Express.js',
    'Babylon.js',
    'Lightweight Charts',
    'Symfony',
  ],
  Databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Neo4j'],
  Tools: ['Figma', 'Git', 'VSCode', 'JetBrains', 'Bulma', 'Vercel', 'GraphQL', 'AWS'],
  APIs: ['OpenAI', 'Gemini', 'SBB CFF FFS', 'Mapbox', 'Google Maps API', 'REST', 'GraphQL API'],
};

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-soft">
            Backend & Full‑Stack Engineering
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Paul Lecomte
          </h1>
          <p className="text-lg text-slate-300 sm:text-xl">
            I build reliable backends and web apps in Rust, C++, and TypeScript — with a focus on
            performance and clear architecture.
          </p>
          <p className="text-sm text-slate-400">
            Recent work includes GTFS routing, interactive mapping, and simulation tools. Case
            studies highlight problem → approach → impact.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Python',
              'C++',
              'TypeScript',
              'React',
              'Node.js',
              'Rust',
              'PostgreSQL',
              'MongoDB',
              'GitHub Actions',
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200 shadow-sm shadow-slate-900/60 backdrop-blur transition hover:border-brand-soft hover:text-brand-soft"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="mailto:lecomtepaulvd@gmail.com?subject=Hiring%20inquiry%20—%20Paul%20Lecomte"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-slate-50 shadow-lg shadow-brand-primary/40 transition hover:bg-brand-soft"
              aria-label="Hire me via email"
            >
              Hire me
            </a>
            <a
              href="/Paul-Lecomte-CV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-brand-soft hover:text-brand-soft"
              aria-label="Download my resume as PDF"
              onClick={() => track('download_cv')}
            >
              Download my resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-brand-soft hover:text-brand-soft"
            >
              View Projects
            </a>
          </div>

          {/* Highlights orientés impact pour scannabilité */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Highlights
            </p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>
                Transforms raw GTFS data into interactive maps and fast queries (Next.js + Node.js).
              </li>
              <li>
                Designs robust APIs and backends in TypeScript/Rust, with testing and CI.
              </li>
              <li>
                Implements simulations/technical tools (C++/Rust) with clear architecture.
              </li>
            </ul>
          </div>

          <p className="pt-2 text-xs text-slate-500">
            Open to internships and new grad roles in backend and full‑stack engineering.
          </p>
        </div>

        <div className="mt-8 w-full md:mt-0 md:max-w-lg lg:max-w-xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/70 backdrop-blur overflow-hidden">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Tech snapshot
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {Object.entries(tech).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-xs text-slate-200 shadow-sm transition hover:border-brand-soft hover:text-brand-soft"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
