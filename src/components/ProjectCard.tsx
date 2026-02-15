import type React from 'react';
import { Link } from 'react-router-dom';
import { useTilt } from '../utils/motion';
import { track } from '../utils/analytics';
import type { Project } from '../data/projects';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { ref: cardRef } = useTilt(4);

  return (
    <article
      ref={cardRef as unknown as React.RefObject<HTMLDivElement>}
      className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-slate-950/60 transition-transform hover:shadow-brand"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">{project.title}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            {project.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800/80 px-2.5 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2 text-sm text-slate-300">
          <p>
            <span className="font-semibold text-slate-200">Problem:</span> {project.problem}
          </p>
          <p>
            <span className="font-semibold text-slate-200">Role:</span> {project.role}
          </p>
        </div>

        <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Challenges
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {project.challenges.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Solution
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-4">
              {project.solution.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-sm text-slate-300">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Outcome</p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            {project.outcome.slice(0, 2).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-4 text-xs">
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center font-medium text-brand-soft hover:text-brand-primary"
          aria-label={`View case study for ${project.title}`}
          onClick={() => track('view_project', { id: project.id, title: project.title })}
        >
          View case study
          <span className="ml-1">→</span>
        </Link>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-slate-400 hover:text-slate-200"
          aria-label={`Open ${project.title} on GitHub in a new tab`}
        >
          GitHub
          <span className="ml-1" aria-hidden="true">
            ↗
          </span>
        </a>
        {project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-slate-400 hover:text-slate-200"
            aria-label={`Open live demo for ${project.title} in a new tab`}
          >
            Live demo
            <span className="ml-1" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;

