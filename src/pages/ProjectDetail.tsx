import { useEffect, type FC } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { projects } from '../data/projects';

const ProjectDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-headline-lg mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = project.nextProjectId
    ? projects.find((p) => p.id === project.nextProjectId)
    : undefined;

  return (
    <>
      <Helmet>
        <title>{project.title} | PORTFOLIO_OS_v2.0</title>
        <meta name="description" content={project.tagline} />
      </Helmet>

      <div className="min-h-screen">
        {/* ============ NAVBAR ============ */}
        <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
          <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
            <Link
              to="/"
              className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
            >
              PORTFOLIO_OS_v2.0
            </Link>
            <div className="hidden md:flex gap-8 items-center">
              <Link
                to="/#projects"
                className="font-label-mono text-label-mono text-primary border-b border-primary transition-colors duration-200"
              >
                Projects
              </Link>
              <Link
                to="/#stack"
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Stack
              </Link>
              <Link
                to="/#research"
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Research
              </Link>
              <Link
                to="/#experience"
                className="font-label-mono text-label-mono text-on-surface-variant hover:text-primary transition-colors duration-200"
              >
                Experience
              </Link>
              <a href="/#contact" className="bg-primary-container text-on-primary-container px-4 py-2 font-label-mono text-label-mono hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                Hire Me
              </a>
            </div>
            <Link
              to="/"
              className="md:hidden text-on-surface font-label-mono text-caption flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Back
            </Link>
          </div>
        </nav>

        <main className="pt-16 min-h-screen" style={{
          backgroundImage:
            'linear-gradient(rgba(172, 136, 132, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(172, 136, 132, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}>
          {/* ============ HERO ============ */}
          <header className="relative overflow-hidden border-b border-outline-variant">
            <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24 relative z-10">
              <div className="flex flex-col gap-6 max-w-3xl">
                <div className="flex items-center gap-4">
                  <span className="bg-primary-container/10 text-primary px-3 py-1 font-label-mono text-caption border border-primary/20">
                    {project.caseId}
                  </span>
                  <span className="text-on-surface-variant font-label-mono text-caption">
                    DEPLOYED: {project.deployed}
                  </span>
                </div>
                <h1 className="font-display text-[40px] md:text-display text-on-surface leading-tight">
                  {project.title.split(project.subtitle)[0]}
                  <br />
                  <span className="text-primary-container">{project.subtitle}</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter mt-16 border-t border-outline-variant pt-8">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col">
                    <span className="font-label-mono text-caption text-primary uppercase tracking-widest mb-2">
                      {metric.label}
                    </span>
                    <span className="font-display text-headline-lg text-on-surface">
                      {metric.value}
                    </span>
                    <span className="font-label-mono text-caption text-on-surface-variant">
                      {metric.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ============ MAIN CONTENT ============ */}
          <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-24">
              {/* Technical Architecture */}
              <div>
                <h2 className="font-headline-lg text-headline-lg mb-12 flex items-center gap-4">
                  <span className="w-8 h-1 bg-primary" />
                  Technical Architecture
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary mb-4">input</span>
                    <h3 className="font-headline-md text-headline-md mb-2">Data Ingestion</h3>
                    <p className="font-body-md text-on-surface-variant">
                      Automated GTFS-Realtime processing pipelines with schema validation and
                      structural normalization.
                    </p>
                  </div>
                  <div className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary mb-4">
                      settings_ethernet
                    </span>
                    <h3 className="font-headline-md text-headline-md mb-2">Processing</h3>
                    <p className="font-body-md text-on-surface-variant">
                      Distributed Node.js worker nodes utilizing multi-threading for complex route
                      graph calculations.
                    </p>
                  </div>
                  <div className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary mb-4">database</span>
                    <h3 className="font-headline-md text-headline-md mb-2">Storage</h3>
                    <p className="font-body-md text-on-surface-variant">
                      PostgreSQL for relational persistence with Redis L1 caching for sub-millisecond
                      hot-path access.
                    </p>
                  </div>
                  <div className="p-6 bg-surface-container border border-outline-variant hover:border-primary transition-colors">
                    <span className="material-symbols-outlined text-primary mb-4">api</span>
                    <h3 className="font-headline-md text-headline-md mb-2">API Layer</h3>
                    <p className="font-body-md text-on-surface-variant">
                      RESTful endpoints with rate-limiting and JWT-based security, documented via
                      OpenAPI 3.1.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deep Dive */}
              <div className="space-y-16">
                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-8">The Challenge</h2>
                  <p className="font-body-lg text-on-surface-variant mb-6">{project.challenge}</p>
                  <div className="aspect-video w-full border border-outline-variant bg-surface-container-low flex items-center justify-center relative group overflow-hidden">
                    <div className="absolute inset-0 bg-surface-container-higher flex items-center justify-center text-on-surface-variant font-label-mono text-caption uppercase tracking-widest">
                      [ VISUALIZATION_MODULE_01 ]
                    </div>
                    <div className="relative z-10 text-center p-8 bg-surface/80 backdrop-blur-sm border border-outline-variant">
                      <span className="font-label-mono text-primary">VISUALIZATION_MODULE_01</span>
                      <p className="font-caption text-on-surface-variant mt-2">
                        Real-time Data Visualization
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-8">The Solution</h2>
                  <p className="font-body-lg text-on-surface-variant mb-6">{project.solution}</p>
                </div>

                {/* Code Snippet */}
                <div className="bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
                  <div className="bg-surface-variant px-4 py-2 border-b border-outline-variant flex justify-between items-center">
                    <span className="font-label-mono text-caption text-on-surface-variant">
                      src/services/routing/engine.ts
                    </span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-error/40" />
                      <div className="w-2 h-2 rounded-full bg-on-surface-variant/40" />
                      <div className="w-2 h-2 rounded-full bg-secondary/40" />
                    </div>
                  </div>
                  <pre className="p-6 font-label-mono text-label-mono leading-relaxed overflow-x-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#5c403c #101415' }}>
                    <span className="text-primary-container">async</span> function{' '}
                    <span className="text-secondary-container">calculateOptimalPath</span>(
                    originId: <span className="text-secondary">string</span>, destId:{' '}
                    <span className="text-secondary">string</span>) {'{'}
                    {'\n'}  <span className="text-on-surface-variant">// Check L1 Cache for pre-computed fragments</span>
                    {'\n'}  <span className="text-primary-container">const</span> cached ={' '}
                    <span className="text-primary-container">await</span>{' '}
                    redis.<span className="text-secondary-container">get</span>(
                    <span className="text-outline">{'`route:${originId}:${destId}`'}</span>);
                    {'\n'}  <span className="text-primary-container">if</span> (cached){' '}
                    <span className="text-primary-container">return</span> JSON.
                    <span className="text-secondary-container">parse</span>(cached);
                    {'\n\n'}  <span className="text-on-surface-variant">// Fallback to Graph Traversal if cache miss</span>
                    {'\n'}  <span className="text-primary-container">const</span> graph ={' '}
                    <span className="text-primary-container">await</span>{' '}
                    pg.<span className="text-secondary-container">query</span>(
                    {'\n'}    <span className="text-outline">'SELECT * FROM transit.graph_traverse($1, $2)'</span>,
                    {'\n'}    [originId, destId]
                    {'\n'}  );
                    {'\n\n'}  <span className="text-on-surface-variant">// Normalize and warm cache asynchronously</span>
                    {'\n'}  workerPool.<span className="text-secondary-container">dispatch</span>(
                    <span className="text-outline">'warm_cache'</span>, {'{'} originId, destId, graph {'}'});
                    {'\n'}  {'\n'}  <span className="text-primary-container">return</span>{' '}
                    graph.rows[<span className="text-secondary-container">0</span>];
                    {'\n'}{'}'}
                  </pre>
                </div>

                <div>
                  <h2 className="font-headline-lg text-headline-lg mb-8">The Results</h2>
                  <p className="font-body-lg text-on-surface-variant">{project.results}</p>
                </div>
              </div>
            </div>

            {/* ============ SIDEBAR ============ */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24">
                <div className="p-8 bg-surface-container border border-outline-variant space-y-8">
                  <div>
                    <h3 className="font-label-mono text-caption text-primary uppercase tracking-widest mb-6">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface-variant border border-outline-variant text-on-surface font-label-mono text-caption"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-outline-variant pt-8">
                    <h3 className="font-label-mono text-caption text-primary uppercase tracking-widest mb-6">
                      Core Modules
                    </h3>
                    <ul className="space-y-4 font-label-mono text-caption text-on-surface-variant">
                      {project.modules.map((mod) => (
                        <li key={mod} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-primary" />
                          {mod}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-outline-variant pt-8">
                    <h3 className="font-label-mono text-caption text-primary uppercase tracking-widest mb-6">
                      Project Metadata
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-label-mono text-caption">
                          Duration
                        </span>
                        <span className="text-on-surface font-label-mono text-caption">
                          {project.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-label-mono text-caption">
                          Role
                        </span>
                        <span className="text-on-surface font-label-mono text-caption">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-label-mono text-caption">
                          Status
                        </span>
                        <span className="text-on-surface font-label-mono text-caption">
                          {project.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant font-label-mono text-caption">
                          Repo
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-label-mono text-caption hover:underline"
                        >
                          View Source
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary-container text-on-primary-container">
                  <h4 className="font-headline-md text-headline-md mb-2">
                    View Source Code
                  </h4>
                  <p className="font-caption mb-4 opacity-90">
                    Explore the full repository on GitHub. Open source contributions and detailed
                    documentation available.
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-on-primary-container text-primary-container font-label-mono text-label-mono py-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-[20px]">code</span>
                    VIEW_ON_GITHUB
                  </a>
                </div>
              </div>
            </aside>
          </section>

          {/* ============ NEXT PROJECT ============ */}
          {nextProject && (
            <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant">
              <Link
                to={`/project/${nextProject.id}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-8"
              >
                <div>
                  <span className="font-label-mono text-caption text-on-surface-variant uppercase tracking-widest">
                    Next Evolution
                  </span>
                  <h3 className="font-display text-[32px] md:text-display group-hover:text-primary transition-colors mt-2">
                    {nextProject.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <span className="font-label-mono text-label-mono hidden md:block">
                    VIEW_CASE_STUDY
                  </span>
                  <span className="material-symbols-outlined text-[48px] group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </section>
          )}
        </main>

        {/* ============ FOOTER ============ */}
        <footer className="bg-surface-container-lowest border-t border-outline-variant">
          <div className="flex flex-col md:flex-row justify-between items-center py-12 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto gap-gutter">
            <div className="font-headline-md text-headline-md text-primary font-bold">
              PORTFOLIO_OS_v2.0
            </div>
            <div className="font-label-mono text-caption text-on-surface-variant text-center md:text-left">
              © {new Date().getFullYear()} MSCS GRADUATE. ALL RIGHTS RESERVED. COMPILED WITH
              PRECISION.
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/Paul-Lecomte"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-mono text-caption text-on-surface-variant hover:text-secondary hover:underline decoration-primary underline-offset-4 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/paul-lecomte-539b46216"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-mono text-caption text-on-surface-variant hover:text-secondary hover:underline decoration-primary underline-offset-4 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="/Paul-Lecomte-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-mono text-caption text-on-surface-variant hover:text-secondary hover:underline decoration-primary underline-offset-4 transition-all"
              >
                CV_Download
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectDetail;