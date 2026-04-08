import type React from 'react';
import { track } from '../utils/analytics';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="section-shell max-w-5xl">
        <h2 className="section-kicker">
          Contact
        </h2>
        <h3 className="section-title max-w-4xl sm:text-4xl">
          Let’s build something great together.
        </h3>
        <p className="section-copy">
          Open to full-stack roles, internships, and collaborations focused on modern web products,
          API-driven systems, and thoughtful user experiences.
        </p>

        <div className="mt-7 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card-elevated space-y-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            <p>
              The fastest way to reach me is email. I respond quickly to relevant opportunities and
              can share project details, architecture notes, and code samples on request.
            </p>
            <a
              href="mailto:lecomtepaulvd@gmail.com"
              className="btn-accent"
              aria-label="Send me an email"
              onClick={() => track('click_contact', { method: 'email' })}
            >
              Email me directly
            </a>
            <p className="rounded-2xl border border-accent-400/30 bg-accent-500/10 p-4 text-xs text-accent-100 sm:text-sm">
              <span className="font-semibold text-accent-50">Email pitch snippet:</span>{' '}
              "We are hiring for a full-stack role. Your product and engineering work looks aligned.
              Are you open to discussing opportunities?"
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              Availability: May 2026. Interview slots open this month.
            </p>
          </div>

          <div className="card-surface">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">Profiles</p>
            <ul className="mt-4 space-y-3">
            <li>
              <a
                href="mailto:lecomtepaulvd@gmail.com"
                className="inline-flex items-center gap-2 text-brand-200 hover:text-brand-100"
                aria-label="Send me an email"
                onClick={() => track('click_contact', { method: 'email' })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.28-.75a.75.75 0 0 0-.78.75v.232l8.25 4.95 8.25-4.95V6.75a.75.75 0 0 0-.78-.75H3.78Zm17.22 3.116-8.48 5.094a.75.75 0 0 1-.78 0L3.78 9.116v8.384c0 .414.336.75.75.75h14.94a.75.75 0 0 0 .75-.75V9.116Z" />
                </svg>
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Paul-Lecomte"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-200 hover:text-brand-100"
                aria-label="Open my GitHub profile in a new tab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 .75a11.25 11.25 0 0 0-3.557 21.932c.56.103.765-.242.765-.54 0-.266-.01-.97-.015-1.904-3.113.677-3.77-1.5-3.77-1.5-.51-1.294-1.245-1.64-1.245-1.64-.997-.682.076-.668.076-.668 1.103.078 1.683 1.132 1.683 1.132.98 1.679 2.572 1.193 3.198.912.1-.71.383-1.193.697-1.468-2.484-.283-5.096-1.242-5.096-5.529 0-1.22.435-2.217 1.152-2.998-.116-.283-.5-1.426.11-2.973 0 0 .94-.301 3.08 1.145a10.63 10.63 0 0 1 2.804-.377c.952.004 1.912.128 2.805.377 2.138-1.446 3.077-1.145 3.077-1.145.612 1.547.229 2.69.113 2.973.716.781 1.15 1.778 1.15 2.998 0 4.298-2.617 5.243-5.11 5.521.394.34.744 1.011.744 2.037 0 1.47-.013 2.655-.013 3.016 0 .3.202.649.77.538A11.25 11.25 0 0 0 12 .75Z"/>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/paul-lecomte-539b46216"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-200 hover:text-brand-100"
                aria-label="Open my LinkedIn profile in a new tab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h4.98V24H0V8.98zM8.44 8.98h4.78v2.05h.07c.66-1.25 2.29-2.57 4.71-2.57 5.04 0 5.97 3.32 5.97 7.64V24h-4.98v-6.43c0-1.53-.03-3.49-2.13-3.49-2.13 0-2.45 1.66-2.45 3.38V24H8.44V8.98z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-500 sm:text-sm">
          I try to respond to relevant opportunities within a few days.
        </p>
      </div>
    </section>
  );
};

export default Contact;
