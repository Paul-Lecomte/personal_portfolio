import React, { useEffect, useRef } from 'react';

// Lightweight 3D-like background using 2D canvas with simple perspective projection.

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    // assert non-null so TypeScript knows ctx is available in nested functions
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    // Particles parameters
    const COUNT = 90; // conservative number to stay light
    const FOV = 400; // field of view for perspective
    const SPEED = 0.05; // speed multiplier

    type Particle = { x: number; y: number; z: number; size: number; hue: number };
    const particles: Particle[] = [];

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      // use window dimensions for a full-screen fixed canvas to avoid clientWidth being 0
      width = window.innerWidth || canvas.clientWidth || 0;
      height = window.innerHeight || canvas.clientHeight || 0;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: (Math.random() - 0.5) * width * 1.6,
          y: (Math.random() - 0.5) * height * 1.2,
          z: Math.random() * FOV,
          size: 0.5 + Math.random() * 1.8,
          hue: 200 + Math.random() * 60,
        });
      }
    }

    let last = performance.now();

    function step(now: number) {
      const dt = Math.min(50, now - last);
      last = now;

      ctx.clearRect(0, 0, width, height);

      // subtle background gradient
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, 'rgba(10,12,16,0.7)');
      grad.addColorStop(1, 'rgba(8,10,12,0.9)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(width / 2, height / 2 - 30);

      for (let p of particles) {
        // move particle towards camera
        p.z -= (SPEED * dt) * 0.12;
        if (p.z <= 1) {
          p.z = FOV;
          p.x = (Math.random() - 0.5) * width * 1.6;
          p.y = (Math.random() - 0.5) * height * 1.2;
          p.size = 0.6 + Math.random() * 1.6;
        }

        const scale = FOV / (FOV + p.z);
        const x2 = p.x * scale;
        const y2 = p.y * scale;
        const s2 = p.size * scale * 2.2;

        // subtle glow
        const alpha = Math.min(1, (1 - p.z / FOV) * 1.1);
        ctx.beginPath();
        const hue = p.hue;
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.12})`;
        ctx.arc(x2, y2, s2 * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${alpha})`;
        ctx.arc(x2, y2, s2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      rafRef.current = requestAnimationFrame(step);
    }

    const handleResize = () => {
      resize();
      initParticles();
    };

    // initialize
    resize();
    initParticles();
    rafRef.current = requestAnimationFrame(step);

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen block"
      aria-hidden
    />
  );
};

export default BackgroundCanvas;
