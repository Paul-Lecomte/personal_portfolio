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
  caseStudy: {
    problem: CaseStudySection;
    approach: CaseStudySection;
    architecture: CaseStudySection;
    impact: CaseStudySection;
  };
};

export const projects: Project[] = [
  {
    id: 'swiss-pb-map',
    title: 'Swiss PB Map — Rust Backend Rewrite',
    tagline:
      'Rewriting a public transport routing backend in Rust for clarity, correctness and future performance gains.',
    tech: ['Rust', 'MongoDB', 'Dijkstra', 'REST API'],
    summary:
      'Rebuilt the backend of a public transport map to compute fastest paths over Swiss timetable data, improving reliability and architecture.',
    order: 1,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'The existing backend powering a Swiss public transport map had grown hard to evolve. Routing logic was spread across multiple components and it was difficult to reason about performance and correctness.',
          'I wanted a backend where shortest-path computation, data access and API boundaries were all clearly defined — and that could scale with more complex routing features.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Reimplemented the core backend in Rust, focusing on type safety, ownership and explicit error handling.',
          'Isolated the shortest-path logic (Dijkstra) from the HTTP layer and the database to enable focused testing and iteration.',
          'Defined clear domain models for stops, connections and timetables so correctness becomes easier to reason about.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'API layer in Rust exposing REST endpoints (e.g. /routes) to compute fastest paths between stops.',
          'Routing engine module implementing a Dijkstra-based algorithm over a graph derived from timetable data.',
          'Data layer backed by MongoDB for storing stops, trips and connections, with a clean interface for loading graph structures.',
          'Configuration and observability hooks for database connections, timeouts and future logging/metrics.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Clear separation of concerns between API, routing logic and data access, making future features easier to add.',
          'Safer codebase thanks to Rust’s type system and ownership model, reducing runtime errors.',
          'Stronger understanding of mapping GTFS-like data into graphs suitable for shortest-path algorithms.',
        ],
      },
    },
  },
  {
    id: 'gtfs-backend',
    title: 'GTFS Routing Backend — Fastest-Path over Public Transit Data',
    tagline:
      'Building a backend that turns GTFS feeds into usable, fastest routes between stops.',
    tech: ['Node.js', 'TypeScript', 'GTFS', 'Shortest-path algorithms'],
    summary:
      'Backend service that ingests GTFS data and computes fastest routes between stops, with a clean separation between ingestion, graph building and routing.',
    order: 2,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'GTFS feeds describe public transport schedules, but they don’t directly tell you the fastest way to get from A to B at a given time.',
          'The goal was to design a backend that ingests GTFS data, structures it and exposes an API to compute fastest routes while staying understandable and maintainable.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Built a Node.js backend that consumes GTFS files (stops, trips, stop_times and more).',
          'Transformed GTFS data into a graph representation tuned for shortest-path algorithms.',
          'Implemented a shortest-path algorithm (such as Dijkstra or a time-dependent variant) tailored to public transit constraints.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'Ingestion pipeline that parses GTFS text files, normalizes data and builds indexed structures.',
          'Graph and algorithm layer that represents trips as edges and runs a fastest-path computation.',
          'API layer exposing endpoints like /route?from=...&to=...&time=..., returning a structured route with legs and timing.',
          'Error handling and validation to deal with malformed requests and missing data gracefully.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Deeper understanding of GTFS and how to convert it into routing graphs.',
          'Practical experience joining algorithms with real-world, messy data in a backend service.',
          'Clear picture of trade-offs between speed, memory usage and implementation complexity.',
        ],
      },
    },
  },
  {
    id: 'spleet-messaging',
    title: 'Spleet — Messaging Backend & Product Roadmap',
    tagline:
      'Designing the backend and roadmap for a messaging product focused on reliability and evolvability.',
    tech: ['TypeScript', 'Node.js', 'REST APIs', 'Product roadmap'],
    summary:
      'Designed and implemented core backend concepts for a messaging app, from data models and APIs to a concrete roadmap for evolving features.',
    order: 3,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Early prototypes of Spleet, a focused messaging app, lacked a clear backend architecture and roadmap.',
          'The challenge was to design data models and APIs that support core messaging features while staying simple enough to iterate quickly.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Defined core entities such as users, conversations, messages and delivery states.',
          'Designed a REST/JSON API for sending and retrieving messages, with attention to message ordering and consistency.',
          'Structured a product roadmap that moves from an MVP (1:1 chats, basic history) to features like group chats and read receipts.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'Backend service in TypeScript/Node.js handling authentication (if present), message creation and retrieval.',
          'Data models for users, conversations and messages that separate business logic from persistence.',
          'API endpoints for creating conversations, sending messages and listing histories with clear contracts.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Hands-on experience turning a product idea into a concrete roadmap and backend structure.',
          'Practice designing clean data models and APIs for a near real-time application.',
          'Better intuition for trade-offs between features, complexity and reliability in an early-stage product.',
        ],
      },
    },
  },
  {
    id: 'cpp-game-of-life',
    title: "Conway's Game of Life — C++ Implementation",
    tagline: 'Exploring simulation design and performance in modern C++.',
    tech: ['C++', 'STL', 'Simulation'],
    summary:
      'Implemented Conway’s Game of Life in modern C++ with a clean separation between simulation logic and rendering, and an efficient grid representation.',
    order: 4,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Conway’s Game of Life is a classic cellular automaton and a good playground for exploring simulation design.',
          'The goal was to build it in modern C++ with clear abstractions and an efficient grid representation that can handle larger boards.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Implemented the core rules in a simulation engine independent of any UI or rendering.',
          'Represented the grid using standard C++ containers to keep memory layout straightforward and iteration fast.',
          'Encapsulated neighbor counting and state updates to keep the logic testable and easy to extend.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'Simulation core handling the 2D grid, step function and utility operations.',
          'Optional rendering layer (console or simple GUI) built on top of the simulation core.',
          'Simple build setup and clear organization of headers and implementation files.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Practice writing clean, modular C++ with clear boundaries between logic and presentation.',
          'Experience reasoning about performance in iterative grid computations.',
          'Improved skills in testing and verifying correctness of simulations.',
        ],
      },
    },
  },
];

