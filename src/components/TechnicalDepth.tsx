import type React from 'react';
import { useScrollReveal } from '../utils/motion';

type SkillItem = {
	name: string;
	logo: string;
};

type SkillGroup = {
	title: string;
	items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
	{
		title: 'Languages',
		items: [
			{ name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
			{ name: 'CSS', logo: 'https://cdn.simpleicons.org/css/663399' },
			{ name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
			{ name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
			{ name: 'Sass', logo: 'https://cdn.simpleicons.org/sass/CC6699' },
			{ name: 'Less', logo: 'https://cdn.simpleicons.org/less/1D365D' },
			{ name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
			{ name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
			{ name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
			{ name: 'Rust', logo: 'https://cdn.simpleicons.org/rust/000000' },
			{ name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
		],
	},
	{
		title: 'Frameworks',
		items: [
			{ name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
			{ name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
			{ name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
			{ name: 'Vue.js', logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
			{ name: 'Nuxt.js', logo: 'https://cdn.simpleicons.org/nuxtdotjs/00DC82' },
			{ name: 'Vite', logo: 'https://cdn.simpleicons.org/vite/646CFF' },
			{ name: 'Express.js', logo: 'https://cdn.simpleicons.org/express/FFFFFF' },
			{ name: 'Babylon.js', logo: 'https://cdn.simpleicons.org/babylondotjs/F06129' },
			{ name: 'Lightweight Charts', logo: 'https://cdn.simpleicons.org/tradingview/131722' },
			{ name: 'Symfony', logo: 'https://cdn.simpleicons.org/symfony/FFFFFF' },
		],
	},
	{
		title: 'Databases',
		items: [
			{ name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
			{ name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
			{ name: 'Neo4j', logo: 'https://cdn.simpleicons.org/neo4j/CC0033' },
		],
	},
	{
		title: 'Tools',
		items: [
			{ name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/F24E1E' },
			{ name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
			{ name: 'VS Code', logo: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
			{ name: 'JetBrains', logo: 'https://cdn.simpleicons.org/jetbrains/FFFFFF' },
			{ name: 'Bulma', logo: 'https://cdn.simpleicons.org/bulma/00D1B2' },
			{ name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
			{ name: 'GraphQL', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
			{ name: 'AWS', logo: 'https://cdn.simpleicons.org/amazonaws/FF9900' },
		],
	},
	{
		title: 'APIs',
		items: [
			{ name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/FFFFFF' },
			{ name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
			{ name: 'SBB CFF FFS', logo: 'https://cdn.simpleicons.org/sbb/E2001A' },
			{ name: 'Mapbox', logo: 'https://cdn.simpleicons.org/mapbox/FFFFFF' },
			{ name: 'Google Maps API', logo: 'https://cdn.simpleicons.org/googlemaps/4285F4' },
			{ name: 'REST API', logo: 'https://cdn.simpleicons.org/openapiinitiative/6BA539' },
			{ name: 'GraphQL API', logo: 'https://cdn.simpleicons.org/graphql/E10098' },
		],
	},
];

const TechnicalDepth: React.FC = () => {
	const { ref, visible } = useScrollReveal({ threshold: 0.15 });

	return (
		<section id="technical-depth" className="border-b border-slate-800/70 bg-ink-950/45 py-16 md:py-20">
			<div
				ref={ref as unknown as React.RefObject<HTMLDivElement>}
				className={`section-shell ${visible ? 'reveal-visible' : 'reveal-init'}`}
			>
				<h2 className="section-kicker">Skills</h2>
				<p className="section-title max-w-4xl sm:text-4xl">
					Tech stack with logos and language names.
				</p>
				<p className="section-copy">
					A quick overview of the technologies I use regularly across full-stack projects.
					Each skill includes the official logo and name for easy scanning.
				</p>

				<div className="mt-8 grid gap-5">
					{skillGroups.map((group) => (
						<div key={group.title} className="card-surface">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-200">
								{group.title}
							</p>
							<div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{group.items.map((item) => (
									<div
										key={item.name}
										className="flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-3 py-2"
									>
										<img
											src={item.logo}
											alt={`${item.name} logo`}
											className="h-5 w-5 flex-shrink-0"
											loading="lazy"
											decoding="async"
										/>
										<span className="text-sm font-medium text-slate-200">{item.name}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export default TechnicalDepth;

