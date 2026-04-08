export type CaseStudySection = {
  title: string;
  content: string[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  summary: string;
  order: number;
  githubUrl: string;
  metrics: string[];
  problem: string;
  role: string;
  challenges: string[];
  solution: string[];
  outcome: string[];
  liveDemoUrl?: string;
  caseStudy: {
    problem: CaseStudySection;
    constraints: CaseStudySection;
    systemDesign: CaseStudySection;
    architectureDiagram: CaseStudySection;
    techStack: CaseStudySection;
    performance: CaseStudySection;
    tradeoffs: CaseStudySection;
    outcome: CaseStudySection;
    lessons: CaseStudySection;
  };
};

export const projects: Project[] = [
  {
    id: 'swiss-pb-map',
    title: 'SwissTransit Routing Platform',
    tagline:
      'Backend-first GTFS ingestion and routing APIs for Swiss public transport data.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'GTFS', 'React'],
    summary:
      'A production-style pipeline that ingests GTFS data, normalizes it into a relational model, and serves routing and stop queries with predictable latency.',
    order: 1,
    githubUrl: 'https://github.com/Paul-Lecomte/swiss-pb-map',
    metrics: [
      'P95 route lookup: 120ms (example)',
      'Dataset size: 22M rows (example)',
      'Throughput: 18k records/s (example)',
    ],
    problem:
      'GTFS data is rich but hard to explore; planners need reliable routing and fast stop search across a national dataset.',
    role: 'Backend engineer owning ingestion, data modeling, and API performance.',
    challenges: [
      'Normalizing inconsistent GTFS feeds into a stable schema with explicit contracts.',
      'Keeping routing queries fast under large data volumes.',
      'Balancing preprocessing time with query latency in the live API.',
    ],
    solution: [
      'Built an ingestion pipeline that validates and normalizes GTFS into PostgreSQL.',
      'Precomputed graph structures for fast routing queries and stop search.',
      'Added caching for repeat queries and hot routes.',
    ],
    outcome: [
      'Delivered a stable routing API with predictable latency.',
      'Reduced query variance by standardizing data contracts.',
    ],
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Swiss transit data is large and inconsistent across feeds, but riders need fast, reliable routing and stop exploration.',
          'The goal was a backend system that turns raw GTFS data into a stable, low-latency API.',
        ],
      },
      constraints: {
        title: 'Constraints',
        content: [
          'Large national dataset with frequent updates and inconsistent schemas.',
          'Routing queries must remain fast under heavy read patterns.',
          'Ingestion must be repeatable and idempotent to support regular refreshes.',
        ],
      },
      systemDesign: {
        title: 'System Design',
        content: [
          'ETL pipeline ingests GTFS feeds, validates contracts, and normalizes into relational tables.',
          'Graph build step precomputes routing structures for low-latency queries.',
          'API layer exposes routing, stop search, and route exploration endpoints with caching.',
        ],
      },
      architectureDiagram: {
        title: 'Architecture Diagram',
        content: [
          'Diagram: GTFS feed -> validation -> normalization -> graph build -> routing API -> cache -> client apps.',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        content: [
          'TypeScript, Node.js, PostgreSQL, Redis, Docker, GitHub Actions, GTFS tooling.',
        ],
      },
      performance: {
        title: 'Performance Metrics',
        content: [
          'P95 route lookup: 120ms (example).',
          'Graph build time: 2m 40s for 20M rows (example).',
          'Ingestion throughput: 18k records/s (example).',
        ],
      },
      tradeoffs: {
        title: 'Trade-offs',
        content: [
          'Precomputing graphs improves latency but increases memory usage.',
          'Batch ingestion simplifies correctness but delays real-time updates.',
        ],
      },
      outcome: {
        title: 'Outcome',
        content: [
          'Stable routing and stop-search APIs with predictable latency.',
          'Clear data contracts reduced downstream query failures.',
        ],
      },
      lessons: {
        title: 'Lessons Learned',
        content: [
          'Schema validation upfront prevents cascading data quality issues.',
          'Indexing strategy is the main lever for reliable query performance.',
        ],
      },
    },
  },
  {
    id: 'arma-reforger-artillery-calculator',
    title: 'Deterministic Ballistics Solver',
    tagline:
      'A simulation engine that converts map coordinates into reliable firing solutions.',
    tech: ['C++', 'Simulation', 'Math', 'CLI'],
    summary:
      'A deterministic math engine that produces repeatable firing solutions with clear parameter contracts, designed for fast in-game usage.',
    order: 2,
    githubUrl: 'https://github.com/Paul-Lecomte/Arma-Reforger-Artillery-Calculator',
    metrics: [
      'Calculation time: 2ms per shot (example)',
      'Preset coverage: 12 weapons (example)',
    ],
    problem:
      'Players need fast, accurate artillery solutions without manual trigonometry during gameplay.',
    role: 'Solo developer implementing the math engine and interfaces.',
    challenges: [
      'Keeping calculations deterministic across varying input quality.',
      'Separating pure math logic from integration logic for testability.',
      'Balancing precision with fast execution.',
    ],
    solution: [
      'Built a core ballistics module with explicit input contracts.',
      'Separated computation from integration and configuration layers.',
      'Documented assumptions and validated inputs for repeatable results.',
    ],
    outcome: [
      'Delivered a reusable solver with predictable outputs.',
      'Reduced manual calculation steps for players.',
    ],
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Artillery calculations are error-prone and slow without tooling.',
          'The goal was a deterministic solver with fast, reliable outputs.',
        ],
      },
      constraints: {
        title: 'Constraints',
        content: [
          'Must run quickly in a game scripting context.',
          'Inputs vary in quality and must be validated.',
          'Results must be deterministic across executions.',
        ],
      },
      systemDesign: {
        title: 'System Design',
        content: [
          'Core math engine handles distance, elevation, and firing angle computation.',
          'Configuration layer defines weapon presets and validates input ranges.',
          'Integration layer exposes a minimal API for game scripts or tools.',
        ],
      },
      architectureDiagram: {
        title: 'Architecture Diagram',
        content: [
          'Diagram: Input coordinates -> validation -> ballistics engine -> firing solution output.',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        content: ['C++, standard math library, lightweight CLI interface.'],
      },
      performance: {
        title: 'Performance Metrics',
        content: [
          'Average compute time: 2ms per shot (example).',
          'Deterministic output across 1,000 test runs (example).',
        ],
      },
      tradeoffs: {
        title: 'Trade-offs',
        content: [
          'Higher precision adds compute time, so defaults prioritize speed.',
          'Strict validation rejects inputs but protects reliability.',
        ],
      },
      outcome: {
        title: 'Outcome',
        content: [
          'Fast, deterministic solver that reduces in-game error rates.',
          'Reusable components for future simulation tools.',
        ],
      },
      lessons: {
        title: 'Lessons Learned',
        content: [
          'Determinism improves trust in tool outputs.',
          'Clear contracts simplify testing and integration.',
        ],
      },
    },
  },
  {
    id: 'profile-roasting',
    title: 'Profile Feedback Pipeline',
    tagline:
      'A backend API that normalizes messy profile data into structured feedback.',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'REST API'],
    summary:
      'A structured API pipeline that validates raw profile input, normalizes it, and returns predictable feedback payloads with clear error handling.',
    order: 3,
    githubUrl: 'https://github.com/Paul-Lecomte/profile_roasting',
    metrics: [
      'Validation errors: <1% (example)',
      'P95 response time: 90ms (example)',
    ],
    problem:
      'Raw profile data needs to be transformed into structured, readable feedback with consistent formatting.',
    role: 'Backend and UI developer building the API contracts and validation.',
    challenges: [
      'Normalizing loosely structured inputs into stable schemas.',
      'Keeping response formatting predictable across edge cases.',
      'Designing a clean contract between UI and API.',
    ],
    solution: [
      'Built a TypeScript API with validation and normalization layers.',
      'Defined explicit request/response schemas and error codes.',
      'Added tests for edge cases and malformed inputs.',
    ],
    outcome: [
      'Delivered a stable API with predictable response formatting.',
      'Improved reliability through input validation and contracts.',
    ],
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Loosely structured inputs create inconsistent output formatting.',
          'The goal was a backend pipeline with reliable, repeatable responses.',
        ],
      },
      constraints: {
        title: 'Constraints',
        content: [
          'Inputs are messy and often incomplete.',
          'Response format must remain stable for UI rendering.',
          'Low latency required for interactive use.',
        ],
      },
      systemDesign: {
        title: 'System Design',
        content: [
          'Validation layer sanitizes inputs and enforces schema rules.',
          'Normalization layer maps raw data into structured fields.',
          'Response formatter outputs consistent payloads with error codes.',
        ],
      },
      architectureDiagram: {
        title: 'Architecture Diagram',
        content: [
          'Diagram: Client input -> validation -> normalization -> formatter -> response.',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        content: ['TypeScript, Node.js, PostgreSQL, REST API, Docker.'],
      },
      performance: {
        title: 'Performance Metrics',
        content: [
          'P95 API response: 90ms (example).',
          'Validation error rate: <1% (example).',
        ],
      },
      tradeoffs: {
        title: 'Trade-offs',
        content: [
          'Stricter validation reduces flexibility but improves reliability.',
          'Normalization adds overhead but simplifies downstream consumers.',
        ],
      },
      outcome: {
        title: 'Outcome',
        content: [
          'Consistent, predictable payloads for UI rendering.',
          'Clear error handling improved user trust.',
        ],
      },
      lessons: {
        title: 'Lessons Learned',
        content: [
          'Contracts are the backbone of reliable APIs.',
          'Validation pays off quickly when inputs are messy.',
        ],
      },
    },
  },
  {
    id: 'personal-portfolio',
    title: 'Systems Portfolio Platform',
    tagline:
      'A content-first portfolio optimized for backend case studies and technical depth.',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    summary:
      'A single-page application that presents backend case studies with clear hierarchy, metrics, and system diagrams.',
    order: 4,
    githubUrl: 'https://github.com/Paul-Lecomte/portfolio',
    metrics: ['Lighthouse performance: 95+ (example)', 'CLS: 0.01 (example)'],
    problem:
      'Traditional portfolios over-index on visuals and under-deliver on technical depth.',
    role: 'Designer and engineer responsible for content, UI, and implementation.',
    challenges: [
      'Condensing system design into scannable, recruiter-friendly sections.',
      'Balancing motion and performance on a single-page app.',
      'Maintaining a consistent dark technical design system.',
    ],
    solution: [
      'Structured content around problem, constraints, and outcomes.',
      'Built reusable components and data-driven project content.',
      'Optimized layout and performance for fast scanning.',
    ],
    outcome: [
      'Delivered a portfolio that reads like a set of backend case studies.',
      'Improved recruiter clarity with concise, evidence-based copy.',
    ],
    liveDemoUrl: 'https://paulportfolio-beta.vercel.app/',
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Most templates highlight visuals but hide architectural reasoning.',
          'The goal was a portfolio that communicates systems thinking fast.',
        ],
      },
      constraints: {
        title: 'Constraints',
        content: [
          'Single-page layout must stay fast and accessible.',
          'Content needs to be recruiter-friendly and skimmable.',
        ],
      },
      systemDesign: {
        title: 'System Design',
        content: [
          'Content-driven React sections with a typed project data layer.',
          'Reusable UI components optimized for clarity and scannability.',
          'Structured case studies with consistent section order.',
        ],
      },
      architectureDiagram: {
        title: 'Architecture Diagram',
        content: [
          'Diagram: data layer -> section components -> page layout -> deployment.',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        content: ['TypeScript, React, Vite, Tailwind CSS, Vercel.'],
      },
      performance: {
        title: 'Performance Metrics',
        content: [
          'Lighthouse performance: 95+ (example).',
          'CLS: 0.01 (example).',
        ],
      },
      tradeoffs: {
        title: 'Trade-offs',
        content: [
          'Single-page layout simplifies navigation but limits deep content.',
          'Minimal motion improves clarity but reduces visual flair.',
        ],
      },
      outcome: {
        title: 'Outcome',
        content: [
          'Recruiter-friendly narrative that emphasizes backend systems work.',
          'Fast, focused site that highlights reliability and performance.',
        ],
      },
      lessons: {
        title: 'Lessons Learned',
        content: [
          'Strong hierarchy matters more than flashy visuals.',
          'Metrics build trust quickly when shown early.',
        ],
      },
    },
  },
  {
    id: 'cpp-game-of-life',
    title: "Conway's Game of Life Engine",
    tagline: 'A performant simulation core with deterministic updates in modern C++.',
    tech: ['C++', 'Simulation', 'STL'],
    summary:
      'A modular C++ simulation engine that separates update logic from rendering, with a focus on deterministic performance and clean data structures.',
    order: 5,
    githubUrl: 'https://github.com/Paul-Lecomte/conway_game_of_life',
    metrics: ['Update step: 1.4ms at 512x512 (example)', 'Memory footprint: 2.1MB (example)'],
    problem:
      'A classic cellular automaton is a strong testbed for clean simulation design and performance practices.',
    role: 'C++ developer focused on simulation architecture and data structures.',
    challenges: [
      'Keeping the update loop readable while maintaining performance.',
      'Designing a grid representation that scales to larger boards.',
      'Separating simulation logic from rendering concerns.',
    ],
    solution: [
      'Implemented a modular simulation core with dedicated update utilities.',
      'Used efficient data structures for grid iteration and state changes.',
      'Kept rendering optional and decoupled from core logic.',
    ],
    outcome: [
      'Delivered a clear, maintainable simulation engine in modern C++.',
      'Improved understanding of performance trade-offs in grid computations.',
    ],
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Simulation engines require clean abstractions without sacrificing performance.',
          'The goal was a deterministic, testable Game of Life core.',
        ],
      },
      constraints: {
        title: 'Constraints',
        content: [
          'Must handle larger grids without significant slowdown.',
          'Deterministic outputs required for testing and benchmarking.',
        ],
      },
      systemDesign: {
        title: 'System Design',
        content: [
          'Core engine manages grid state and update steps.',
          'Utility functions encapsulate neighbor counting and rules.',
          'Optional rendering layer consumes the core simulation output.',
        ],
      },
      architectureDiagram: {
        title: 'Architecture Diagram',
        content: [
          'Diagram: grid state -> update step -> next state -> renderer/analysis.',
        ],
      },
      techStack: {
        title: 'Tech Stack',
        content: ['C++, STL, optional CLI renderer.'],
      },
      performance: {
        title: 'Performance Metrics',
        content: [
          'Update step: 1.4ms at 512x512 (example).',
          'Memory footprint: 2.1MB (example).',
        ],
      },
      tradeoffs: {
        title: 'Trade-offs',
        content: [
          'Dense grids are faster but increase memory usage.',
          'Pure CPU implementation keeps portability but limits GPU scaling.',
        ],
      },
      outcome: {
        title: 'Outcome',
        content: [
          'Deterministic simulation core with clear boundaries.',
          'Reusable structure for future simulation tools.',
        ],
      },
      lessons: {
        title: 'Lessons Learned',
        content: [
          'Data layout drives performance more than algorithmic changes.',
          'Separation of concerns keeps simulations testable.',
        ],
      },
    },
  },
];
