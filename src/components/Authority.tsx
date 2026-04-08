import type React from 'react';
import { useScrollReveal } from '../utils/motion';

const metrics = [
  { label: 'Primary role', value: 'Full-stack developer' },
  { label: 'Preferred products', value: 'Web apps + APIs' },
  { label: 'Quality focus', value: 'Testing + readability' },
  { label: 'Collaboration', value: 'Product-driven teams' },
];

const stack = ['TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'GitHub Actions'];

const Authority: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="authority" className="border-b border-slate-800/70 bg-ink-950/40 py-16 md:py-20">
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`section-shell ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <h2 className="section-kicker">About</h2>
        <p className="section-title max-w-4xl text-balance sm:text-4xl">
          Full-stack engineer with a systems mindset.
        </p>
        <p className="section-copy">
          I enjoy turning ambiguous ideas into shipped products: thoughtful frontend experiences,
          pragmatic backend architecture, and reliable delivery workflows that teams can build on.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="card-surface"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {metric.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface space-y-4 text-sm text-slate-300">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
              Focused stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {stack.map((item) => (
                <span key={item} className="badge-soft">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="card-elevated space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-100">
              What I bring to teams
            </h3>
            <p>
              I connect product goals to technical execution across frontend, backend, and data.
              That means clear architecture decisions, maintainable codebases, and releases that are
              both fast and stable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;

