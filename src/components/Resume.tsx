import type React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="border-t border-slate-800 bg-slate-950/80 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
          Resume
        </h2>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Summary
        </h3>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Final-year Computer Science student focused on backend and full‑stack engineering. I work
          mainly with Rust, C++, TypeScript/React and Node.js, and I enjoy turning messy data and
          product ideas into clean, testable systems.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Technical highlights
            </h4>
            <ul className="space-y-2 list-disc list-inside">
              <li>Rust and C++ for performance-sensitive or systems-level components.</li>
              <li>TypeScript, React and Next.js for modern frontends and full‑stack projects.</li>
              <li>Node.js for APIs, messaging backends and data processing pipelines.</li>
              <li>PostgreSQL and MongoDB for relational and document data modeling.</li>
              <li>Algorithms and data structures, including shortest-path (Dijkstra) on graphs.</li>
              <li>Git, Docker, GitHub Actions and Linux for day-to-day development and CI/CD.</li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              What I’m looking for
            </h4>
            <p>
              Internships and new grad roles where I can work on backends, infrastructure or
              data-intensive systems, ideally in teams that care about code quality and mentoring.
            </p>
            <p>
              I’m especially interested in roles that touch routing, distributed systems, developer
              tools or platforms that need strong reliability guarantees.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-brand-soft hover:text-brand-soft"
          >
            Request full resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
