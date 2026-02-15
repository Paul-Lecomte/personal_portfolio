import type React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="border-t border-slate-800 bg-slate-950/80 py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-soft">
          Ready to collaborate
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Let's build something reliable together.
        </h2>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          Open to internships and junior roles where I can contribute to backend systems, data
          pipelines, and full-stack delivery.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:lecomtepaulvd@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-brand hover:bg-brand-600"
          >
            Contact me
          </a>
          <a
            href="https://github.com/Paul-Lecomte"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-brand-soft hover:text-brand-soft"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/paul-lecomte-539b46216"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-brand-soft hover:text-brand-soft"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

