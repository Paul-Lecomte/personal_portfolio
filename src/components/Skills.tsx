import type React from 'react';
import { useScrollReveal } from '../utils/motion';

const skillGroups = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Rust', 'C++', 'Python', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'] },
  { title: 'Databases', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'] },
  { title: 'DevOps', items: ['Docker', 'GitHub Actions', 'Linux'] },
  { title: 'Tools', items: ['Git', 'Figma', 'Vercel', 'Postman'] },
];

const Skills: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-950/80 py-16 md:py-24">
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`mx-auto max-w-6xl px-4 ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">Skills</h2>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          A focused stack for backend systems and modern web apps.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          I prioritize reliable backends, clean data modeling, and clear frontends that make complex
          systems easy to use.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/60"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {group.title}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

