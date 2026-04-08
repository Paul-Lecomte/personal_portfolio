import type React from 'react';
import { useScrollReveal } from '../utils/motion';

const proofPoints = [
  {
    title: 'Product-focused delivery',
    detail: 'Ship features that connect UX needs, API contracts, and clean implementation details.',
  },
  {
    title: 'Frontend + backend ownership',
    detail: 'Work across React interfaces, Node/TypeScript services, and relational data models.',
  },
  {
    title: 'Engineering quality',
    detail: 'Use tests, CI, and code reviews to keep shipping velocity high without sacrificing reliability.',
  },
  {
    title: 'Continuous improvement',
    detail: 'Refactor for readability, improve performance bottlenecks, and simplify developer workflows.',
  },
];

const evidence = [
  { label: 'Experience lane', value: 'Full-stack web development' },
  { label: 'Build mindset', value: 'User-first + engineering-first' },
  { label: 'Code quality', value: 'Typed, tested, maintainable' },
  { label: 'Team style', value: 'Collaborative and iterative' },
];

const Proof: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="proof" className="border-b border-slate-800/70 py-16 md:py-20">
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`section-shell ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <h2 className="section-kicker">Experience</h2>
        <p className="section-title max-w-4xl sm:text-4xl">
          How I execute from idea to production.
        </p>
        <p className="section-copy">
          I work end to end: understanding product context, designing architecture, implementing
          features, and validating quality before release.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {evidence.map((item) => (
            <div
              key={item.label}
              className="card-surface text-sm text-slate-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-50">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {proofPoints.map((point) => (
            <div
              key={point.title}
              className="card-surface text-sm text-slate-300"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
                {point.title}
              </p>
              <p className="mt-2 leading-relaxed">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;

