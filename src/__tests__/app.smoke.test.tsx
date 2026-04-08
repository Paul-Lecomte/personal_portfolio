import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { HelmetProvider } from 'react-helmet-async';

describe('App', () => {
  beforeEach(() => {
    cleanup();
  });

  it('renders main sections on home', async () => {
    window.history.pushState({}, '', '/');
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    const heroTags = await screen.findAllByText(/Full-stack software engineer/i);
    expect(heroTags.length).toBeGreaterThanOrEqual(1);
    expect(await screen.findByText(/Full-stack case studies with real constraints/i)).toBeInTheDocument();
    const projectsLabels = await screen.findAllByText(/Projects/i);
    expect(projectsLabels.length).toBeGreaterThanOrEqual(1);
    const contacts = await screen.findAllByText(/Contact/i);
    expect(contacts.length).toBeGreaterThanOrEqual(1);
  });

  it('renders project not found for invalid id', async () => {
    window.history.pushState({}, '', '/project/unknown-id');
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );
    expect(await screen.findByText(/Project not found/i)).toBeInTheDocument();
  });
});
