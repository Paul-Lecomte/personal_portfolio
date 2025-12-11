import type React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const ordered = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
          Featured Projects
        </h2>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Selected work in routing, web and simulations.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
          Each project has its own short case study describing the problem, approach, architecture
          and impact.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ordered.map((project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/60 transition hover:border-brand-soft/80 hover:shadow-md hover:shadow-brand-primary/20"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  {project.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
              </div>
              <div className="mt-4 flex items-center justify-between pt-2">
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-brand-soft hover:text-brand-primary"
                >
                  View case study
                  <span className="ml-1 text-xs">→</span>
                </Link>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs text-slate-400 hover:text-slate-200"
                >
                  GitHub
                  <span className="ml-1" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
