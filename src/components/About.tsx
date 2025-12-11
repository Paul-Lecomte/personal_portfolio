import type React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">About</h2>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          I like turning ideas into clean, testable systems.
        </h3>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          I’m a final-year Computer Science student with a strong focus on backend and full‑stack
          development. Most of my work lives in Rust, C++, and TypeScript — building routing
          backends over GTFS data, messaging APIs, and web frontends with React.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="space-y-3 text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Core strengths
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="font-medium text-slate-100">Backend & systems engineering</span> —
                designing APIs, routing engines and data models that are easy to reason about and
                extend.
              </li>
              <li>
                <span className="font-medium text-slate-100">Algorithms & data</span> — shortest-path
                algorithms like Dijkstra, graph modeling and working with GTFS and other
                real‑world datasets.
              </li>
              <li>
                <span className="font-medium text-slate-100">Full‑stack delivery</span> — wiring
                backends to frontends in React/Next.js, with basic DevOps (Docker, GitHub Actions,
                Linux) to ship and iterate.
              </li>
            </ul>
          </div>
          <div className="space-y-3 text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              What I like working on
            </h4>
            <p>
              I’m particularly interested in problems that combine algorithms, real-world data and
              reliability constraints: routing, scheduling, messaging and data pipelines.
            </p>
            <p>
              I enjoy small, focused codebases with good tests, clear boundaries and a strong code
              review culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
