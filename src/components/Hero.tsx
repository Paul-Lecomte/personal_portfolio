import type React from 'react';
import { track } from '../utils/analytics';
import { useScrollReveal, useParallax, useTilt, useMagnetic, usePrefersReducedMotion } from '../utils/motion';

const metrics = [
  { label: 'Experience', value: 'Full-stack focus' },
  { label: 'Core stack', value: 'React + Node + SQL' },
  { label: 'Delivery style', value: 'Product + Systems' },
];

const Hero: React.FC = () => {
  const { ref: heroRef, visible } = useScrollReveal({ threshold: 0.12 });
  const { ref: titleRef } = useParallax(16);
  const { ref: cardRef } = useTilt(6);
  const { ref: ctaRef } = useMagnetic(0.12);
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden border-b border-slate-800/70 gradient-hero"
    >
      <div
        ref={heroRef as unknown as React.RefObject<HTMLDivElement>}
        className={`section-shell grid w-full gap-10 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${visible ? 'reveal-visible' : 'reveal-init'}`}
      >
        <div className="max-w-2xl space-y-6">
          <p className="section-kicker">
            Full-stack software engineer
          </p>
          <h1
            ref={titleRef as unknown as React.RefObject<HTMLHeadingElement>}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
            style={reduced ? undefined : { willChange: 'transform' }}
          >
            I design and ship modern full-stack products from frontend UX to backend reliability.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            I build responsive user interfaces, robust APIs, and scalable data flows that feel
            clean for users and maintainable for teams.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Recent work includes web apps, internal tools, and systems projects where performance,
            UX clarity, and engineering quality all matter.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="card-surface"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {metric.label}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-50">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              ref={ctaRef as unknown as React.RefObject<HTMLAnchorElement>}
              href="#projects"
              className="btn-primary"
              aria-label="Review backend case studies"
            >
              View full-stack projects
            </a>
            <a
              href="mailto:lecomtepaulvd@gmail.com?subject=New%20grad%20backend%20role%20-%20Paul%20Lecomte"
              className="btn-secondary"
              aria-label="Email about backend roles"
            >
              Let's work together
            </a>
          </div>
          <a
            href="/Paul-Lecomte-CV.pdf"
            download
            className="btn-link"
            aria-label="Download my resume as PDF"
            onClick={() => track('download_cv')}
          >
            Download resume
            <span className="ml-1" aria-hidden="true">
              ↘
            </span>
          </a>

          <div className="w-full border-t border-slate-800/80 pt-3">
            <p className="text-xs text-slate-500 sm:text-sm">
              Open to full-stack roles and internships. Availability: May 2026.
            </p>
          </div>
        </div>

        <div className="w-full lg:justify-self-end lg:max-w-xl">
          <div
            ref={cardRef as unknown as React.RefObject<HTMLDivElement>}
            className="card-elevated overflow-hidden transition-transform hover:scale-[1.01]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <p className="section-kicker text-accent-200">System snapshot</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-slate-50">
              Product architecture snapshot
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              UX flows {'->'} API contracts {'->'} business logic {'->'} data layer {'->'} monitoring.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Design systems', 'API design', 'Testing', 'CI/CD'].map((item) => (
                <span key={item} className="badge-soft">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-accent-400/30 bg-accent-500/10 p-3 text-xs text-accent-100 sm:text-sm">
              Scroll for experience, project case studies, and end-to-end stack details.
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-slate-400">
        <div className="mx-auto flex h-8 w-14 items-center justify-center rounded-full border border-slate-700/60 bg-glass">
          <div className="h-2 w-1 rounded bg-slate-300 animate-bounce" />
        </div>
        <span className="mt-2 block text-xs uppercase tracking-[0.16em]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
