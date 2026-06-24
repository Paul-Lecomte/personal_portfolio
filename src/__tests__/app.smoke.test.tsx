import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

describe('App smoke test', () => {
  it('renders the brand name in the navigation', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    expect(screen.getByText('PORTFOLIO_OS_v2.0')).toBeTruthy();
  });

  it('renders the hero section heading', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    const headings = screen.getAllByText(/Master of Science/);
    expect(headings.length).toBeGreaterThanOrEqual(1);
    const csTexts = screen.getAllByText('Computer Science.');
    expect(csTexts.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the hire me button', () => {
    render(
      <HelmetProvider>
        <App />
      </HelmetProvider>
    );

    const buttons = screen.getAllByText('Hire Me');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });
});