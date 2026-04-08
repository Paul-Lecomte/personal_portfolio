import type React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { SeoHelmet, breadcrumbForProject, softwareSourceCode } from '../seo/helmet';

const sectionKeys = [
  'problem',
  'constraints',
  'systemDesign',
  'architectureDiagram',
  'techStack',
  'performance',
  'tradeoffs',
  'outcome',
  'lessons',
] as const;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="relative z-10 min-h-screen text-slate-100">
        <div className="section-shell flex min-h-screen max-w-5xl flex-col items-start justify-center">
          <SeoHelmet title="Project not found — Paul Lecomte" description="The requested project could not be found." noindex path={`/project/${id ?? ''}`} />
          <p className="text-sm text-slate-400">Project not found.</p>
          <Link
            to="/?section=projects#projects"
            className="btn-secondary mt-4"
          >
            ← Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  const desc = project.summary || project.tagline;

  return (
    <main className="relative z-10 min-h-screen text-slate-100">
      <SeoHelmet
        title={`${project.title} — Case Study — Paul Lecomte`}
        description={desc}
        path={`/project/${project.id}`}
        jsonLd={[breadcrumbForProject(project.id, project.title), softwareSourceCode(project)]}
      />
      <div className="section-shell max-w-7xl py-8 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/?section=projects#projects"
            className="btn-link text-xs uppercase tracking-[0.14em]"
          >
            ← Back to portfolio
          </Link>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary px-4 py-2 text-xs uppercase tracking-[0.14em]"
            aria-label={`Open GitHub repository for ${project.title} in a new tab`}
          >
            View on GitHub
            <span className="ml-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <header className="mt-6 rounded-3xl border border-slate-800/70 bg-ink-900/55 p-6 sm:p-8">
          <p className="section-kicker">
            Case Study
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-base text-slate-300">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge-soft border-brand-400/30 bg-brand-900/20 text-brand-100">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="card-surface lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">Contents</p>
            <nav className="mt-4 space-y-2" aria-label="Case study section navigation">
              {sectionKeys.map((key, index) => {
                const section = project.caseStudy[key];
                return (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="block rounded-xl px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300 transition hover:bg-slate-800/60 hover:text-slate-100"
                  >
                    {index + 1}. {section.title}
                  </a>
                );
              })}
            </nav>
          </aside>

          <section className="space-y-4 text-sm text-slate-300 sm:text-base">
            {sectionKeys.map((key) => {
            const section = project.caseStudy[key];
            return (
              <article id={key} key={key} className="card-surface scroll-mt-24 space-y-3 leading-relaxed">
                <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-200">
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
      </div>
    </main>
  );
};

export default ProjectDetail;
