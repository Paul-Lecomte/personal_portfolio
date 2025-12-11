import type React from 'react';

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
            Final-year Computer Science student building reliable backends and web apps in Rust,
            C++, and TypeScript.
          </p>
          <p className="text-sm text-slate-400">
            I enjoy working across the stack — from routing engines over GTFS data and messaging
            backends to React frontends and small DevOps setups with Docker and GitHub Actions.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              'Rust',
              'C++',
              'TypeScript',
              'React',
              'Node.js',
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
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-medium text-slate-50 shadow-lg shadow-brand-primary/40 transition hover:bg-brand-soft"
            >
              View Projects
            </a>
            <a
              href="#resume"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-brand-soft hover:text-brand-soft"
            >
              View Resume
            </a>
          </div>

          <p className="pt-2 text-xs text-slate-500">
            Currently looking for software engineering internships and graduate roles in backend and
            full‑stack engineering.
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
