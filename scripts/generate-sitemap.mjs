// Generate sitemap.xml and robots.txt from src/data/projects.ts at build time
// Uses dynamic import of the TS file via Vite path resolution at runtime (Node ESM)
// Requires env: VITE_SITE_URL=https://<TON_DOMAINE>/

import { writeFile, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || '';
const BASE = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;

async function loadProjects() {
  // Import the compiled TS via relative path from project root using dynamic import of TS transpiled by Node?
  // Simpler: import the TS directly; Node 20 doesn't transpile TS, but Vite isn't available here.
  // Workaround: load via dynamic import of the source using a tiny eval transpile with esbuild at runtime.
  const esbuild = await import('esbuild');
  const entry = resolve(__dirname, '../src/data/projects.ts');
  const result = await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
  });
  const { text } = result.outputFiles[0];
  const moduleUrl = 'data:text/javascript;base64,' + Buffer.from(text).toString('base64');
  const mod = await import(moduleUrl);
  return mod.projects ?? [];
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function generate() {
  if (!BASE) {
    console.warn('[sitemap] Missing VITE_SITE_URL, generating relative URLs');
  }
  const projects = await loadProjects();
  const urls = [
    `${BASE || ''}/`,
    ...projects.map((p) => `${BASE || ''}/project/${p.id}`),
  ];

  const now = new Date().toISOString();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
urls
  .map(
    (u) =>
      `  <url>\n    <loc>${xmlEscape(u)}</loc>\n    <changefreq>weekly</changefreq>\n    <lastmod>${now}</lastmod>\n    <priority>${u.endsWith('/') ? '1.0' : '0.8'}</priority>\n  </url>`
  )
  .join('\n') +
`\n</urlset>\n`;

  const outDir = resolve(__dirname, '../dist');
  await mkdir(outDir, { recursive: true });
  await writeFile(resolve(outDir, 'sitemap.xml'), sitemap, 'utf8');

  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${BASE || ''}/sitemap.xml\n`;
  await writeFile(resolve(outDir, 'robots.txt'), robots, 'utf8');

  // Also copy existing root files if present (non-blocking)
  try {
    await copyFile(resolve(__dirname, '../robots.txt'), resolve(outDir, 'robots.txt'));
  } catch {}
  try {
    await copyFile(resolve(__dirname, '../sitemap.xml'), resolve(outDir, 'sitemap.xml'));
  } catch {}
  try {
    await copyFile(resolve(__dirname, '../apple-touch-icon.png'), resolve(outDir, 'apple-touch-icon.png'));
  } catch {}
  try {
    await copyFile(resolve(__dirname, '../favicon.svg'), resolve(outDir, 'favicon.svg'));
  } catch {}
  try {
    await copyFile(resolve(__dirname, '../og-image.svg'), resolve(outDir, 'og-image.svg'));
  } catch {}
  try {
    await copyFile(resolve(__dirname, '../public/favicon.ico'), resolve(outDir, 'favicon.ico'));
  } catch {}

  console.log('[sitemap] Generated sitemap.xml and robots.txt');
}

generate().catch((err) => {
  console.error('[sitemap] Failed:', err);
  process.exit(1);
});
