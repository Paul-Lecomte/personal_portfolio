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
    expect(await screen.findByText(/Backend & Full/i)).toBeInTheDocument();
    expect(await screen.findByText(/Featured Projects/i)).toBeInTheDocument();
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
