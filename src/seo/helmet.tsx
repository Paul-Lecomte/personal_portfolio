import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SITE_NAME = 'Paul Lecomte';
export const DEFAULT_TITLE = 'Paul Lecomte — Full-Stack Software Engineer';
export const DEFAULT_DESC =
  'Full-stack software engineer building modern web applications from interface to infrastructure. Explore projects, architecture decisions, and product-focused case studies.';

const SITE_URL = (import.meta as any).env?.VITE_SITE_URL || '';
const BASE_URL = SITE_URL.endsWith('/') ? SITE_URL : SITE_URL ? SITE_URL + '/' : '';

export type SeoProps = {
  title?: string;
  description?: string;
  path?: string; // "/" or "/project/:id"
  image?: string; // absolute or root-relative
  canonical?: string; // override
  noindex?: boolean;
  jsonLd?: object | object[];
};

function absoluteUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  if (!BASE_URL) return pathOrUrl; // fallback best-effort
  return `${BASE_URL.replace(/\/$/, '')}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

export const SeoHelmet: React.FC<SeoProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  path = '/',
  image = '/og-image.svg',
  canonical,
  noindex,
  jsonLd,
}) => {
  const url = canonical || absoluteUrl(path) || undefined;
  const img = absoluteUrl(image) || image;

  return (
    <Helmet prioritizeSeoTags titleTemplate="%s | Paul Lecomte">
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {img && <meta property="og:image" content={img} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {img && <meta name="twitter:image" content={img} />}

      {Array.isArray(jsonLd)
        ? jsonLd.map((obj, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(obj)}
            </script>
          ))
        : jsonLd && (
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          )}
    </Helmet>
  );
};

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Paul Lecomte',
    url: BASE_URL || undefined,
    jobTitle: 'Full-stack software engineer',
    sameAs: [
      'https://github.com/Paul-Lecomte',
      'https://linkedin.com/in/paul-lecomte-539b46216',
    ],
    description: DEFAULT_DESC,
  } as const;
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL || undefined,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}{search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  } as const;
}

export function breadcrumbForProject(id: string, title: string) {
  const home = BASE_URL || '/';
  const proj = absoluteUrl(`/project/${id}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: home,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: absoluteUrl('/#projects'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: proj,
      },
    ],
  } as const;
}

export function softwareSourceCode(project: {
  id: string;
  title: string;
  summary: string;
  githubUrl: string;
  tech?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/project/${project.id}`),
    codeRepository: project.githubUrl,
    programmingLanguage: project.tech?.join(', '),
    license: undefined,
  } as const;
}
