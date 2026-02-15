import React, { useEffect, useRef } from 'react';

// Lightweight 3D-like background using 2D canvas with simple perspective projection.

const BackgroundCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const runningRef = useRef<boolean>(false);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;

        let ctx: CanvasRenderingContext2D | null = null;
        try {
            ctx = canvasEl.getContext('2d');
        } catch {
            return;
        }
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let dpr = Math.max(1, window.devicePixelRatio || 1);

        function resize() {
            const el = canvasEl as HTMLCanvasElement; // non-null assertion for TS
            dpr = Math.max(1, window.devicePixelRatio || 1);
            width = window.innerWidth || el.clientWidth || 0;
            height = window.innerHeight || el.clientHeight || 0;
            el.width = Math.round(width * dpr);
            el.height = Math.round(height * dpr);
            // @ts-ignore setTransform may be absent in tests
            ctx!.setTransform?.(dpr, 0, 0, dpr, 0, 0);
        }

        function drawStaticBackground() {
            ctx!.clearRect(0, 0, width, height);
            const grad = ctx!.createLinearGradient(0, 0, 0, height);
            grad.addColorStop(0, 'rgba(10,12,16,0.7)');
            grad.addColorStop(1, 'rgba(8,10,12,0.9)');
            ctx!.fillStyle = grad;
            ctx!.fillRect(0, 0, width, height);
        }

        // Particles parameters
        const BASE_COUNT = 90;
        const FOV = 400;
        const SPEED = 0.5;

        type Particle = { x: number; y: number; z: number; size: number; hue: number };
        let particles: Particle[] = [];

        function initParticles(count: number) {
            particles = [];
            for (let i = 0; i < count; i++) {
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
        let throttle = 0; // simple throttle to ~60/2 fps when needed

        function step(now: number) {
            if (!runningRef.current) return;

            const dt = Math.min(50, now - last);
            last = now;

            // throttle every other frame if hidden
            if (document.hidden) {
                throttle = (throttle + 1) % 2;
                if (throttle !== 0) {
                    rafRef.current = requestAnimationFrame(step);
                    return;
                }
            }

            ctx!.clearRect(0, 0, width, height);

            const grad = ctx!.createLinearGradient(0, 0, 0, height);
            grad.addColorStop(0, 'rgba(10,12,16,0.7)');
            grad.addColorStop(1, 'rgba(8,10,12,0.9)');
            ctx!.fillStyle = grad;
            ctx!.fillRect(0, 0, width, height);

            ctx!.save();
            ctx!.translate(width / 2, height / 2 - 30);

            for (let p of particles) {
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

                const alpha = Math.min(1, (1 - p.z / FOV) * 1.1);
                ctx!.beginPath();
                const hue = p.hue;
                ctx!.fillStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.12})`;
                ctx!.arc(x2, y2, s2 * 6, 0, Math.PI * 2);
                ctx!.fill();

                ctx!.beginPath();
                ctx!.fillStyle = `hsla(${hue}, 80%, 70%, ${alpha})`;
                ctx!.arc(x2, y2, s2, 0, Math.PI * 2);
                ctx!.fill();
            }

            ctx!.restore();

            rafRef.current = requestAnimationFrame(step);
        }

        const handleResize = () => {
            resize();
            drawStaticBackground();
            if (runningRef.current) {
                initParticles(currentCount);
            }
        };

        // initial sizing
        resize();

        // determine reduced motion preference (localStorage overrides media query)
        const stored = (() => {
            try {
                return localStorage.getItem('reducedMotion');
            } catch {
                return null;
            }
        })();
        const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || false;
        let reducedMotion = stored === 'true' ? true : stored === 'false' ? false : prefersReduced;

        let currentCount = reducedMotion ? Math.max(20, Math.round(BASE_COUNT * 0.25)) : BASE_COUNT;

        if (reducedMotion) {
            runningRef.current = false;
            drawStaticBackground();
        } else {
            runningRef.current = true;
            initParticles(currentCount);
            rafRef.current = requestAnimationFrame(step);
        }

        function handlePrefChange(e: Event | MediaQueryListEvent | CustomEvent) {
            let nextReduced = reducedMotion;
            if ('detail' in e && (e as CustomEvent).detail?.reducedMotion !== undefined) {
                nextReduced = Boolean((e as CustomEvent).detail.reducedMotion);
            } else if ('matches' in e) {
                nextReduced = (e as MediaQueryListEvent).matches;
            }

            if (nextReduced === reducedMotion) return;
            reducedMotion = nextReduced;
            currentCount = reducedMotion ? Math.max(20, Math.round(BASE_COUNT * 0.25)) : BASE_COUNT;

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }

            if (reducedMotion) {
                runningRef.current = false;
                drawStaticBackground();
            } else {
                runningRef.current = true;
                initParticles(currentCount);
                rafRef.current = requestAnimationFrame(step);
            }
        }

        const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
        mq?.addEventListener?.('change', handlePrefChange as any);
        window.addEventListener('reduced-motion-change', handlePrefChange as any);
        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', () => {
            // pause when hidden
            if (document.hidden && rafRef.current) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            } else if (!document.hidden && runningRef.current && !rafRef.current) {
                rafRef.current = requestAnimationFrame(step);
            }
        });

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            mq?.removeEventListener?.('change', handlePrefChange as any);
            window.removeEventListener('reduced-motion-change', handlePrefChange as any);
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