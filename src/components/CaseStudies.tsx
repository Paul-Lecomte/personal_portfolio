import type React from 'react';
import { projects } from '../data/projects';

const CaseStudies: React.FC = () => {
  const ordered = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="case-studies" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
          Case Studies
        </h2>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          How I approach backend and systems problems.
        </p>

        <div className="mt-10 space-y-14">
          {ordered.map((project) => (
            <article
              key={project.id}
              id={`case-${project.id}`}
              className="scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm shadow-slate-950/60"
            >
              <header className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                <p className="text-sm text-slate-300">{project.tagline}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </header>

              <div className="mt-5 space-y-6 text-sm text-slate-300">
                {(['problem', 'approach', 'architecture', 'impact'] as const).map((key) => {
                  const section = project.caseStudy[key];
                  return (
                    <section key={key}>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        {section.title}
                      </h4>
                      <div className="mt-2 space-y-2">
                        {section.content.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

