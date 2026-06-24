import { expect, vi } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

if (!window.matchMedia) {
  // minimal mock
  // @ts-expect-error jsdom shim
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  });
}

if (typeof IntersectionObserver === 'undefined') {
  // @ts-expect-error jsdom shim
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
}

if (!HTMLCanvasElement.prototype.getContext) {
  // @ts-expect-error jsdom shim
  HTMLCanvasElement.prototype.getContext = () => {
    const gradient = { addColorStop: vi.fn() };
    return {
      clearRect: vi.fn(),
      createLinearGradient: vi.fn(() => gradient),
      fillRect: vi.fn(),
      save: vi.fn(),
      translate: vi.fn(),
      beginPath: vi.fn(),
      arc: vi.fn(),
      fill: vi.fn(),
      restore: vi.fn(),
      setTransform: vi.fn(),
    } as unknown as CanvasRenderingContext2D;
  };
}
