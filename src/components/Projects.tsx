import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../utils/motion';
import { projects } from '../data/projects';
import { track } from '../utils/analytics';

const Projects: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  const ordered = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="border-b border-slate-800/70 py-16 md:py-20">
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`section-shell ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <h2 className="section-kicker">Projects</h2>
        <p className="section-title max-w-4xl sm:text-4xl">
          Full-stack case studies with real constraints.
        </p>
        <p className="section-copy">
          Each project captures product problem, technical architecture, trade-offs, and the impact
          of implementation choices across UI and backend layers.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ordered.map((project) => {
            return (
              <article
                key={project.id}
                className="card-surface group flex h-full flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-brand-300/50"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-slate-50">{project.title}</h3>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-200">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="badge-soft border-brand-400/25 bg-brand-900/20 text-brand-100">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="badge-soft">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 rounded-2xl border border-slate-800/70 bg-slate-900/65 p-3 text-xs text-slate-300">
                    <span className="font-semibold text-slate-200">Outcome:</span>{' '}
                    {project.caseStudy.outcome.content[0]}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-3 pt-2">
                  <Link
                    to={`/project/${project.id}`}
                    className="btn-primary px-4 py-2 text-xs uppercase tracking-[0.12em]"
                    aria-label={`View case study for ${project.title}`}
                    onClick={() => track('view_project', { id: project.id, title: project.title })}
                  >
                    View details
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link text-xs"
                    aria-label={`Open ${project.title} on GitHub in a new tab`}
                  >
                    GitHub
                    <span className="ml-1" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
