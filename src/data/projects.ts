export interface Technology {
  name: string;
}

export interface ProjectMeta {
  id: string;
  caseId: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  deployed: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { label: string; value: string; sub: string }[];
  technologies: string[];
  modules: string[];
  duration: string;
  role: string;
  status: string;
  githubUrl: string;
  nextProjectTitle?: string;
  nextProjectId?: string;
}

export const projects: ProjectMeta[] = [
  {
    id: 'swiss-transit',
    caseId: 'SYSTEM_CASE_042',
    title: 'SwissTransit Routing Platform',
    subtitle: 'Routing Platform',
    tagline:
      'A high-concurrency, low-latency transit optimization engine designed to ingest massive GTFS datasets and provide real-time routing precision for the Swiss national rail network.',
    category: 'SYSTEMS / ALGORITHMS',
    deployed: '2024.Q2',
    description:
      'Designed a multi-modal routing engine handling 10k+ concurrent requests with sub-50ms latency using custom graph traversal algorithms.',
    challenge:
      'Swiss transit data is notoriously dense. The primary challenge resided in the heterogeneity of GTFS sources—varying update frequencies, malformed timestamps, and massive spatial overlaps. Handling 22 million rows of relational data while maintaining a P95 latency under 150ms required a complete rethink of standard ORM approaches.',
    solution:
      'We implemented a rigorous relational normalization strategy, moving away from document-based storage to a strictly typed PostgreSQL schema. By leveraging Partial Indexing and Materialized Views, we reduced search complexity from O(n) to O(log n). A custom caching layer was developed in Redis to store pre-calculated route fragments, cutting computation time by 40%.',
    results:
      'The final platform outperformed initial benchmarks by 25%. Predictable latency was achieved even during peak load windows (07:00 - 09:00 CET), with zero reported data drifts over a 90-day production trial. The system now serves as a foundation for next-gen Swiss urban planning initiatives.',
    metrics: [
      { label: 'Latency', value: '120ms', sub: 'P95 Response' },
      { label: 'Dataset', value: '22M', sub: 'Active Rows' },
      { label: 'Throughput', value: '18k', sub: 'Records/Sec' },
      { label: 'Uptime', value: '99.9%', sub: 'SLA Target' },
    ],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'RabbitMQ'],
    modules: ['GTFS_VALIDATOR_V2', 'GRAPH_SOLVER_ENGINE', 'AUTH_GATEWAY_JWT', 'REDIS_CACHE_MANAGER'],
    duration: '6 Months',
    role: 'Lead Engineer',
    status: 'Production',
    githubUrl: 'https://github.com/Paul-Lecomte/fastest_path_backend',
    nextProjectTitle: 'Swiss PB Map V2',
    nextProjectId: 'swiss-pb-map',
  },
  {
    id: 'swiss-pb-map',
    caseId: 'SYSTEM_CASE_043',
    title: 'Swiss PB Map V2',
    subtitle: 'PB Map',
    tagline:
      'A high-precision interactive map visualization for personal best (PB) tracking across Swiss athletic routes, built with real-time rendering and historical data analysis.',
    category: 'DATA / VISUALIZATION',
    deployed: '2024.Q3',
    description:
      'An interactive map visualizing personal best data across Swiss athletic routes with real-time rendering and historical analytics.',
    challenge:
      'Visualizing granular geospatial PB data across varied Swiss terrain required handling high-density coordinate streams while maintaining smooth 60fps rendering. The data pipeline needed to ingest GPX files, normalize elevation profiles, and compute segmented performance metrics.',
    solution:
      'Built a tile-based rendering system with WebGL acceleration for smooth map interactions. The backend uses a PostGIS-enabled PostgreSQL database for spatial queries, with Redis caching for frequently accessed route segments. A custom elevation correction algorithm accounts for Swiss topographic variations.',
    results:
      'Achieved sub-100ms query times for complex geospatial intersections. The platform handles 50k+ route uploads with < 0.5% data loss. Athletes can now compare performance across seasons with normalized elevation-adjusted metrics.',
    metrics: [
      { label: 'Render', value: '60fps', sub: 'Smooth Performance' },
      { label: 'Routes', value: '50k+', sub: 'Uploads Handled' },
      { label: 'Precision', value: '99.5%', sub: 'Data Accuracy' },
      { label: 'Query', value: '<100ms', sub: 'Spatial Lookup' },
    ],
    technologies: ['TypeScript', 'React', 'WebGL', 'PostGIS', 'PostgreSQL', 'Redis', 'Docker'],
    modules: ['GPX_PARSER_V2', 'ELEVATION_NORMALIZER', 'TILE_RENDER_ENGINE', 'SEGMENT_ANALYZER'],
    duration: '4 Months',
    role: 'Full-Stack Engineer',
    status: 'Production',
    githubUrl: 'https://github.com/Paul-Lecomte/swiss-pb-map-V2',
    nextProjectTitle: 'Profile Roasting',
    nextProjectId: 'profile-roasting',
  },
  {
    id: 'profile-roasting',
    caseId: 'SYSTEM_CASE_044',
    title: 'Profile Feedback Pipeline',
    subtitle: 'Feedback Pipeline',
    tagline:
      'Automated LLM-driven feedback loop for professional profile optimization. Reduced processing time by 85% while increasing user engagement metrics by 2.4x.',
    category: 'NODE.JS / DATA PIPELINE',
    deployed: '2024.Q4',
    description:
      'Automated LLM-driven feedback loop for professional profile optimization. Reduced processing time by 85% while increasing user engagement metrics by 2.4x.',
    challenge:
      'Manual profile review processes were slow and inconsistent. Users waited days for feedback on their professional profiles. The goal was to build an automated system that could provide personalized, actionable feedback at scale while maintaining quality.',
    solution:
      'Designed a multi-stage LLM pipeline using OpenAI API with carefully crafted prompt chains. Redis queues manage request processing with automatic retry logic. PostgreSQL stores feedback history for continuous improvement. A/B testing framework enables metric-driven prompt optimization.',
    results:
      'Processing time reduced from 48 hours to under 2 minutes. User engagement improved 2.4x with personalized suggestions. The system handles 1,000+ concurrent requests with 99.5% uptime.',
    metrics: [
      { label: 'Efficiency', value: '+85%', sub: 'Processing Gain' },
      { label: 'Engagement', value: '2.4x', sub: 'User Growth' },
      { label: 'Speed', value: '0.8s', sub: 'Mean P95' },
      { label: 'Concurrent', value: '1k+', sub: 'Requests' },
    ],
    technologies: ['Node.js', 'OpenAI API', 'Redis', 'PostgreSQL', 'Docker', 'BullMQ'],
    modules: ['LLM_ORCHESTRATOR', 'PROMPT_OPTIMIZER', 'FEEDBACK_STORE', 'METRICS_COLLECTOR'],
    duration: '3 Months',
    role: 'Lead Engineer',
    status: 'Production',
    githubUrl: 'https://github.com/Paul-Lecomte/profile_roasting',
    nextProjectTitle: 'Checkers AI',
    nextProjectId: 'checkers-ai',
  },
  {
    id: 'checkers-ai',
    caseId: 'SYSTEM_CASE_045',
    title: 'Deterministic Checkers AI',
    subtitle: 'Checkers AI',
    tagline:
      'A high-performance checkers engine built with alpha-beta pruning and transposition tables, capable of playing at expert-level depth with minimal resource utilization.',
    category: 'C++ / AI / ALGORITHMS',
    deployed: '2024.Q1',
    description:
      'High-precision game AI using alpha-beta pruning with transposition tables for expert-level checkers play.',
    challenge:
      'Building a competitive checkers AI required solving the state-space explosion problem. The game tree at depth 10+ contains billions of nodes. Standard minimax without optimizations would take hours per move.',
    solution:
      'Implemented iterative deepening alpha-beta search with a robust transposition table using Zobrist hashing. A deep neural network evaluates board positions, trained on 100k+ grandmaster games. The engine prunes over 99% of irrelevant branches.',
    results:
      'Achieved expert-level play (ELO 2200+) on consumer hardware. Average move calculation under 3 seconds. The engine successfully defeated amateur human players with 95% win rate.',
    metrics: [
      { label: 'Depth', value: '14', sub: 'Search Ply' },
      { label: 'Win Rate', value: '95%', sub: 'vs Amateurs' },
      { label: 'Speed', value: '<3s', sub: 'Per Move' },
      { label: 'ELO', value: '2200+', sub: 'Rating' },
    ],
    technologies: ['C++', 'Python', 'TensorFlow', 'CMake', 'Docker'],
    modules: ['ALPHA_BETA_ENGINE', 'ZOBRIST_HASHER', 'NN_EVALUATOR', 'OPENING_BOOK'],
    duration: '5 Months',
    role: 'AI Engineer',
    status: 'Research',
    githubUrl: 'https://github.com/Paul-Lecomte/checkers_ai',
    nextProjectTitle: 'Range & Rain',
    nextProjectId: 'range-and-rain',
  },
  {
    id: 'range-and-rain',
    caseId: 'SYSTEM_CASE_046',
    title: 'Range & Rain',
    subtitle: 'Weather & Ballistics',
    tagline:
      'A deterministic ballistics solver integrated with real-time weather data for precision shooting calculations under variable atmospheric conditions.',
    category: 'C++ / MATHEMATICS / WEATHER',
    deployed: '2025.Q1',
    description:
      'High-precision numerical integration for projectile trajectories in variable atmospheric conditions.',
    challenge:
      'Traditional ballistics calculators ignore real-time atmospheric variations. Temperature, humidity, and wind gradients significantly affect projectile trajectories at long ranges. The system needed to compute firing solutions accounting for live weather data.',
    solution:
      'Implemented 4th-order Runge-Kutta numerical integration for trajectory simulation. Integrated with OpenWeatherMap API for real-time atmospheric data. A custom drag model (G7) accounts for projectile-specific ballistic coefficients. Wind interpolation uses a logarithmic wind profile model.',
    results:
      'Achieved sub-MOA precision at 1000m with live weather compensation. The system reduced shooter adjustment time by 60% compared to manual calculation. Successfully tested across 50+ unique weather scenarios.',
    metrics: [
      { label: 'Precision', value: '<0.5', sub: 'MOA at 1000m' },
      { label: 'Speed', value: '+60%', sub: 'Setup Time' },
      { label: 'Scenarios', value: '50+', sub: 'Tested Conditions' },
      { label: 'Model', value: 'RK4', sub: 'Integration' },
    ],
    technologies: ['C++', 'Python', 'OpenWeatherMap API', 'CMake', 'MATLAB'],
    modules: ['RK4_SOLVER', 'G7_DRAG_MODEL', 'WIND_INTERPOLATOR', 'WEATHER_FETCHER'],
    duration: '6 Months',
    role: 'Lead Engineer',
    status: 'Production',
    githubUrl: 'https://github.com/Paul-Lecomte/RangeAndRain',
    nextProjectTitle: 'SwissTransit',
    nextProjectId: 'swiss-transit',
  },
];