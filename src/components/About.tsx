import React from 'react';
import { useScrollReveal } from '../utils/motion';

const About: React.FC = () => {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 });
  return (
    <section id="about" className="border-b border-slate-800/70 py-16 md:py-20">
      <div
        ref={ref as unknown as React.RefObject<HTMLDivElement>}
        className={`section-shell ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <h2 className="section-kicker">Approach</h2>
        <p className="section-title max-w-4xl sm:text-4xl">How I approach full-stack engineering.</p>
        <p className="section-copy max-w-4xl">
          I care about the full product lifecycle: from initial discovery and interface design to
          API implementation, deployment, and iteration. Good software should feel simple while
          being technically solid under the hood.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="card-surface border-l-2 border-l-accent-300 text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
              How I work
            </h4>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed">
              <li>
                <span className="font-medium text-slate-100">Product-first execution</span> — I keep
                business goals visible while making technical decisions.
              </li>
              <li>
                <span className="font-medium text-slate-100">Fast feedback loops</span> — I prototype,
                test early, and iterate with real usage signals.
              </li>
              <li>
                <span className="font-medium text-slate-100">Clean architecture boundaries</span> — I
                keep UI, services, and data layers clear for long-term maintainability.
              </li>
            </ul>
          </div>
          <div className="card-surface text-sm text-slate-300">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
              What I am looking for
            </h4>
            <ul className="mt-3 list-disc space-y-3 pl-5 leading-relaxed">
              <li>
                Full-stack roles where I can own meaningful product slices from UI to backend.
              </li>
              <li>
                Teams building modern web products with strong engineering standards and mentorship.
              </li>
              <li>
                Environments that value measurable user impact, readability, and continuous learning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
