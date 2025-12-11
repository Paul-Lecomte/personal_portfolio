import type React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-start justify-center px-4">
          <p className="text-sm text-slate-400">Project not found.</p>
          <Link
            to="/?section=projects#projects"
            className="mt-4 inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-soft hover:text-brand-soft"
          >
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          to="/?section=projects#projects"
          className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-brand-soft"
        >
          ← Back to portfolio
        </Link>

        <header className="mt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
            Case Study
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {project.title}
          </h1>
          <p className="text-sm text-slate-300">{project.tagline}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
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

        <section className="mt-8 space-y-6 text-sm text-slate-300">
          {(['problem', 'approach', 'architecture', 'impact'] as const).map((key) => {
            const section = project.caseStudy[key];
            return (
              <article key={key} className="space-y-2">
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {section.title}
                </h2>
                <div className="space-y-2">
                  {section.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail;
