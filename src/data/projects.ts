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
    title: 'SwissTransitMap — Swiss Public Transport Visualization & Routing',
    tagline:
      'An interactive Next.js and Leaflet-based map for Swiss public transport, backed by a Node.js/Express API over GTFS and MongoDB.',
    tech: [
      'Next.js',
      'React',
      'Leaflet',
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'GTFS',
    ],
    summary:
      'SwissTransitMap is a full‑stack web app that visualizes the Swiss public transport network using GTFS data. It combines a modern Next.js + React + Leaflet frontend with a Node.js/Express backend and MongoDB to provide fast stop search, route exploration and basic fastest-path queries.',
    order: 1,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Swiss public transport provides rich GTFS data, but it is not directly user friendly: you cannot just “see” the network or quickly explore routes and timetables on an interactive map.',
          'I wanted to build a modern web app that turns raw GTFS files into something visual and usable: an interactive map of the Swiss network with stop search, route inspection and basic journey planning.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Designed a full‑stack architecture with a Next.js/React frontend for the UI and a Node.js/Express backend for GTFS ingestion, data processing and API endpoints.',
          'Used MongoDB as the primary store for GTFS tables (stops, routes, trips, stop times, transfers, etc.) and for preprocessed views that are efficient to query from the map.',
          'Integrated React‑Leaflet to render the network on top of map tiles and to provide smooth panning/zooming interactions, while fetching data from the backend via typed services.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'A backend folder containing an Express.js API that exposes endpoints for stops (search and bounding-box queries), routes, trips, basic real-time data and a fastest-path endpoint.',
          'A set of Mongoose models mapping GTFS entities (stops, routes, trips, stop times, transfers, etc.) to MongoDB collections, plus utility scripts to import and preprocess GTFS feeds.',
          'Frontend built with Next.js (App Router), React, TypeScript, MUI and React‑Leaflet, structured around map components, route info panels and service modules for calling the backend.',
          'Support for GTFS enrichment using pfaedle and Docker, with scripts to generate enhanced GTFS data (including shapes) before ingestion.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Built an end‑to‑end system that goes from raw Swiss GTFS feeds to an interactive map and routing experience, touching data ingestion, APIs and frontend UX.',
          'Gained experience modeling GTFS data in MongoDB and exposing it via a clean, focused REST API for frontend consumption.',
          'Practiced structuring a Next.js + Node.js project with clear boundaries between data processing, API routes and interactive map components.',
        ],
      },
    },
  },
  {
    id: 'arma-reforger-artillery-calculator',
    title: 'Arma Reforger Artillery Calculator',
    tagline:
      'A ballistics helper tool for Arma Reforger that turns map positions and weapon parameters into precise firing solutions.',
    tech: ['C++', 'Game scripting', 'Simulation', 'Ballistics'],
    summary:
      'A calculator for Arma Reforger artillery that computes firing angles and parameters based on positions and weapon characteristics, packaging the logic into reusable, game-friendly components.',
    order: 2,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'In Arma Reforger, getting accurate artillery shots often requires manual calculations or guesswork, especially when taking distance, elevation and weapon-specific parameters into account.',
          'The goal was to build a small, reliable calculator that can turn map positions and weapon data into firing solutions that are fast to use during gameplay.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Implemented the core ballistics and trigonometry logic in a way that can be reused by game scripts, focusing on clear interfaces and predictable behavior.',
          'Separated pure mathematical computations from any game-specific glue code so the core calculations can be tested and reasoned about in isolation.',
          'Documented the assumptions about weapon parameters, gravity and map scale so that the calculator remains understandable and adjustable.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'Core computation module taking origin, target and weapon characteristics and returning firing elevations or settings.',
          'Thin integration layer that exposes the calculator to the Arma Reforger scripting environment or UI.',
          'Configuration points for weapon presets, allowing different artillery pieces to reuse the same underlying logic.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Improved appreciation for separating pure simulation/math code from game integration to keep complexity under control.',
          'Hands-on practice implementing and testing small physics-inspired calculations in a game context.',
          'Learned how to design APIs for tools that must be quick to use under pressure (in-game) but still technically sound.',
        ],
      },
    },
  },
  {
    id: 'profile-roasting',
    title: 'Profile Roasting — Web Tool for Playful Feedback',
    tagline:
      'A small web app that analyzes and playfully “roasts” user profiles, experimenting with UI, APIs and content generation.',
    tech: ['TypeScript', 'React', 'Node.js', 'REST API'],
    summary:
      'A full‑stack experiment that takes user profile data, runs it through a backend, and returns structured “roasts” and feedback, focusing on UI polish and clear API contracts.',
    order: 3,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'I wanted a fun project to practice building a small full‑stack web application end to end: UI, backend API and data flow.',
          'The idea was to “roast” profiles in a light way, which requires turning loosely structured input into consistent, readable output.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Built a React-based frontend where users can paste profile information and receive structured roast/feedback messages.',
          'Implemented a backend API in Node.js/TypeScript that accepts profile data, applies transformation and formatting rules, and returns a normalized response.',
          'Focused on keeping the request/response contract explicit so that the frontend and backend remain loosely coupled and easy to iterate on.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'React frontend responsible for the UI, form handling and displaying roast results.',
          'Node.js/TypeScript backend exposing a small REST API to process profile data and generate roast content.',
          'Shared types or conventions between frontend and backend to keep payloads predictable.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Gained experience delivering a full‑stack feature from UX to API design and implementation.',
          'Practiced thinking about error states and validation for a playful but user-facing tool.',
          'Strengthened skills around structuring React components and state for small, focused apps.',
        ],
      },
    },
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio — React, Vite & Tailwind',
    tagline:
      'A minimal, content-focused portfolio built with React, Vite and Tailwind CSS to showcase backend and systems projects.',
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    summary:
      'The site you are reading: a single-page React application that presents my projects as concise case studies, with a focus on clarity, hierarchy and modern UI patterns.',
    order: 4,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'I needed a portfolio that felt aligned with how I work as an engineer: focused on backend and systems work, with project descriptions that go beyond just screenshots.',
          'Existing templates often emphasized visuals over architecture and algorithms, so I chose to build a simple site that highlights problem–approach–impact for each project.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Built a single-page React application using Vite for fast iteration and Tailwind CSS for utility-first styling.',
          'Centralized all project information in a typed data file so the UI stays simple and easy to maintain as projects evolve.',
          'Designed sections (hero, about, projects, case studies, resume, contact) to answer the key questions recruiters and engineers actually have.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'React + Vite frontend with components for each portfolio section (Hero, About, Projects, CaseStudies, Resume, Contact).',
          'A small TypeScript data layer (`src/data/projects.ts`) that defines projects and case studies as structured data.',
          'Tailwind CSS configuration for a dark, minimal aesthetic with a focus on typography and content hierarchy.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Created a portfolio that feels closer to a set of engineering case studies than a visual gallery, better matching my profile.',
          'Reinforced patterns for structuring small React apps with a clear separation between data and presentation.',
          'Improved my ability to write concise, technical copy for projects with an emphasis on impact and trade-offs.',
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
      'A modern C++ implementation of Conway’s Game of Life with a clear separation between simulation logic and rendering, and an efficient grid representation.',
    order: 5,
    caseStudy: {
      problem: {
        title: 'Problem',
        content: [
          'Conway’s Game of Life is a classic cellular automaton and a good playground for exploring simulation design in C++.',
          'The goal was to build it with clear abstractions and an efficient grid representation that can handle larger boards while keeping the code understandable.',
        ],
      },
      approach: {
        title: 'Approach',
        content: [
          'Implemented the core rules in a simulation engine independent of any UI or rendering layer.',
          'Used standard C++ containers for the grid to keep memory layout straightforward and iteration fast.',
          'Encapsulated neighbor counting and state updates in dedicated functions to keep the logic testable and easy to extend.',
        ],
      },
      architecture: {
        title: 'Architecture',
        content: [
          'Simulation core handling the 2D grid, step function and utility operations such as initializing patterns.',
          'Optional rendering layer (console or simple GUI) built on top of the simulation core to visualize the evolution of the grid.',
          'Simple build setup and clear organization of headers and implementation files for maintainability.',
        ],
      },
      impact: {
        title: 'Impact & Learnings',
        content: [
          'Practiced writing clean, modular C++ with strict separation between logic and presentation.',
          'Gained experience reasoning about performance in iterative grid computations and cache behavior.',
          'Improved skills in testing and verifying correctness of simulations using known patterns and oscillators.',
        ],
      },
    },
  },
];
