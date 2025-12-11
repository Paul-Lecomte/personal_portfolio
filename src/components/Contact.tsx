import type React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-soft">
          Contact
        </h2>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Let’s talk.
        </h3>
        <p className="mt-3 text-sm text-slate-300 sm:text-base">
          I’m open to internships and new grad roles in backend, infrastructure and data-intensive
          systems.
        </p>

        <div className="mt-6 space-y-3 text-sm text-slate-300">
          <p>
            The fastest way to reach me is by email. I’m also active on GitHub and LinkedIn, where
            you can find more projects and details.
          </p>
          <ul className="space-y-1">
            <li>
              <span className="text-slate-400">Email:</span>{' '}
              <a
                href="mailto:your.email@domain.com"
                className="text-brand-soft hover:text-brand-primary"
              >
                your.email@domain.com
              </a>
            </li>
            <li>
              <span className="text-slate-400">GitHub:</span>{' '}
              <a
                href="https://github.com/Paul-Lecomte"
                target="_blank"
                rel="noreferrer"
                className="text-brand-soft hover:text-brand-primary"
              >
                github.com/Paul-Lecomte
              </a>
            </li>
            <li>
              <span className="text-slate-400">LinkedIn:</span>{' '}
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="text-brand-soft hover:text-brand-primary"
              >
                linkedin.com/in/your-linkedin
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          I try to respond to relevant opportunities within a few days.
        </p>
      </div>
    </section>
  );
};

export default Contact;
