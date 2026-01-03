export type ProjectCategory = "Web App" | "Shopify" | "Game Dev" | "Archive";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  category: ProjectCategory;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export interface TimelineItem {
  year: number;
  text: string;
}

export interface StatItem {
  value: number;
  label: string;
}

// --- MASTER PROJECT LIST ---
export const projects: Project[] = [
  // --- 1. FEATURED: Social App ---
  {
    id: "social-app",
    slug: "nyxus",
    title: "Nyxus - Niche Social Media App",
    shortDescription: "A modern social media platform built for the Tarot Traveler community.",
    fullDescription: "Developed as a bespoke client project for [Tarot Traveler](https://www.tarottraveler.com/), Nyxus redefines how niche communities interact. Unlike generic platforms, this application features a 'Deity Offering' system that gamifies engagement, along with a fully customizable widget dashboard. Built with Next.js 16 and Supabase, it handles real-time data for chat and notifications while maintaining strict privacy standards requested by the client.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind", "Supabase", "PostgreSQL"],
    category: "Web App",
    featured: true,
    githubUrl: "https://github.com/RaizenStyx/Project-Wicka",
    liveUrl: "https://project-wicka.vercel.app/", 
    imageUrl: "/images/nyxus.png",
  },

  // --- 2. SHOPIFY EXPERIENCE ---
  {
    id: "wau-experience",
    slug: "we-are-underground",
    title: "We Are Underground (Partner Developer)",
    shortDescription: "Technical support and custom theme modifications for a top Shopify Partner Agency.",
    fullDescription: "Served as a Technical Support Specialist for We Are Underground, directly assisting hundreds of merchants with their live stores. My role focused on 'surgical' code edits—diagnosing issues within existing Liquid/CSS/JS files and implementing custom features without disrupting the core theme architecture. I acted as the bridge between non-technical merchants and complex codebase requirements, ensuring high customer satisfaction and resolving ticket-based requests efficiently.",
    techStack: ["Shopify Liquid", "JavaScript", "HTML/CSS", "HelpScout/Support"],
    category: "Shopify",
    featured: true,
    imageUrl: "/images/wau.png",
  },
  {
    id: "freelance-shopify",
    slug: "freelance-consulting",
    title: "Freelance Optimization",
    shortDescription: "Technical audits and conversion optimization for independent merchants.",
    fullDescription: "Operating as an independent consultant, I help merchants bridge the gap between out-of-the-box themes and custom requirements. Work typically involves 'Rescue Missions'—fixing broken Liquid logic left by previous devs—as well as GA4 pixel integration, Core Web Vitals speed optimization, and creating custom 'Section' blocks that allow merchants to edit complex layouts without touching code.",
    techStack: ["Liquid", "JavaScript", "Google Analytics 4", "CSS Modules"],
    category: "Shopify",
    imageUrl: "/images/freelancer.png", 
  },
  {
    id: "demo-store-optimization",
    slug: "demo-store-optimization",
    title: "Demo Store: 'Slate Coffee'",
    shortDescription: "A clean implementation of Shopify 2.0 architecture and custom sections.",
    fullDescription: "Designed as a sandbox to explore Shopify's Online Store 2.0 architecture. This project takes the baseline Dawn theme and extends it with custom-coded Liquid sections and vanilla JavaScript interactions (such as dynamic accordions). It serves as a reference for clean, app-free development practices, prioritizing maintainability and strict adherence to Shopify's modern JSON template standards.",
    techStack: ["Shopify Liquid", "Vanilla JavaScript", "CSS", "JSON Templates"],
    category: "Shopify",
    imageUrl: "/images/coffeelogo.png", 
  },
  {
    id: "speed-seo-audit",
    slug: "shopify-speed-seo-audit",
    title: "Shopify Speed & SEO Audit",
    shortDescription: "A breakdown of my standard procedure for optimizing high-volume stores.",
    fullDescription: "A documented case study outlining the strategies I utilized during my agency tenure to improve LCP and CLS metrics. It details the process of identifying 'Liquid Render Blocking' resources, deferring third-party scripts, and optimizing asset delivery. This project serves as a comprehensive checklist for how I approach performance bottlenecks on any Shopify storefront.",
    techStack: ["Lighthouse", "Chrome DevTools", "Liquid Optimization", "Core Web Vitals"],
    category: "Shopify",
    imageUrl: "/images/lighthouse.png", 
  },

  // --- 3. GAME DEV ---
  {
    id: "magician-robber",
    slug: "magician-robber",
    title: "Magician Robber",
    shortDescription: "Team Lead for a 6-person Unreal Engine 5 Blueprint prototype.",
    fullDescription: "Served as Team Lead for a 6-person development squad. This project was strictly built using Unreal's Blueprint visual scripting system to prototype mechanics rapidly. My primary technical contribution—beyond gameplay logic—was managing the complex Git workflow. I handled merge conflicts and organized branch structures, ensuring the team could collaborate on the same `.uasset` files without data loss—a notorious challenge in Blueprint-based teams.",
    techStack: ["Unreal Engine 5", "Blueprints", "Project Management", "Git", "Jira"],
    category: "Game Dev",
    featured: true,
    githubUrl: "https://github.com/SNHU-Game-Dev/Team-Project",
    imageUrl: "/images/magrob.png",
  },
  {
    id: "platformer-ue5",
    slug: "prince-of-daggers",
    title: "Prince of Daggers (2.5D Prototype)",
    shortDescription: "Physics-based wall-running mechanic built in a 2.5D grey-box environment.",
    fullDescription: "A focused study on 2.5D character movement constraints. The goal was to program a responsive 'Wall Run' mechanic without relying on pre-made character movement components. I utilized line traces (Raycasts) to calculate wall normals and applied vector math to launch the geometric player-avatar parallel to surfaces. The project uses placeholder assets (grey-boxing) to prioritize code iteration over visual fidelity.",
    techStack: ["Unreal Engine 5", "Blueprints", "Vector Math", "2.5D Physics"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/PlatformerGameProject",
    imageUrl: "/images/platformer.png",
  },
  {
    id: "unreal-arena-shooter",
    slug: "unreal-arena-shooter",
    title: "Unreal Arena Shooter",
    shortDescription: "Infinite deathmatch arena with pickups and player state management.",
    fullDescription: "An FPS deathmatch prototype focusing on the 'Gameplay Loop'—Spawn, Combat, Die, Respawn. Unlike linear levels, this project manages a continuous game state. Key implementations include a Shield/Health pickup system, standard Unreal character animation blending, and a dynamic HUD that updates via Event Dispatchers. The AI utilizes simple sensing components to engage in an endless free-for-all against the player.",
    techStack: ["Unreal Engine 5", "C++", "UMG UI", "State Management"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/ArenaShooterUnreal",
    imageUrl: "/images/unreal-arena.png", 
  },
  {
    id: "bulls-and-cows",
    slug: "bulls-and-cows",
    title: "Bulls and Cows (Hybrid C++)",
    shortDescription: "Terminal-style word logic embedded within a 3D environment.",
    fullDescription: "A unique blend of C++ logic and Unreal environment interaction. While the core game is a classic 'Wordle-style' console puzzle running on pure C++ strings and algorithms, it is wrapped in a 3D level. The player must physically navigate the world and interact with specific triggers (like a signpost) to switch camera perspectives and engage the C++ logic layer.",
    techStack: ["Unreal Engine 5", "C++", "Blueprint Interop"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/UnrealWithCPP",
    imageUrl: "/images/bullandcow.png",
  },

  // --- 4. WEB APPS ---
  {
    id: "science-news",
    slug: "science-news-summarizer",
    title: "Science News Summarizer",
    shortDescription: "AI-powered news aggregator utilizing the Hugging Face API.",
    fullDescription: "A responsive React application that solves information overload. It fetches real-time data from space and technology RSS feeds and passes the content through a Hugging Face summarization model. The challenge was handling the asynchronous nature of AI responses and managing the 'Loading' states gracefully for a smooth user experience.",
    techStack: ["React", "TypeScript", "Hugging Face API", "Tailwind"],
    category: "Web App",
    githubUrl: "https://github.com/RaizenStyx/ScienceNewsSummarizer",
    liveUrl: "https://science-news-summarizer.vercel.app/",
    imageUrl: "/images/ai-sum.png", 
  },
  {
    id: "lore-forge",
    slug: "lore-forge",
    title: "Lore Forge",
    shortDescription: "Context-aware AI generation tool for RPG Game Masters.",
    fullDescription: "Lore Forge goes beyond simple chat prompts by structuring OpenAI API outputs into usable RPG game data. The application uses rigid prompt engineering to force the AI to return consistent formats (like JSON objects for Items or NPCs), allowing the UI to render them as game cards rather than raw text. It demonstrates how to integrate indeterminate AI responses into a deterministic React UI.",
    techStack: ["TypeScript", "React", "OpenAI API", "Vercel SDK"],
    category: "Web App",
    featured: true,
    githubUrl: "https://github.com/RaizenStyx/lore-forge",
    liveUrl: "https://lore-forge-zeta.vercel.app/",
    imageUrl: "/images/loreforge.png",
  },
  {
    id: "ai-orcale",
    slug: "ai-orcale",
    title: "The AI Oracle",
    shortDescription: "Dual-mode AI app for spiritual intention setting and ritual planning.",
    fullDescription: "A re-imagining of the Lore Forge architecture applied to the wellness niche. This app features two distinct AI 'Personalities' (Modes)—one for generating calming daily intentions and another for structuring complex ritual steps. It demonstrates how prompt engineering can drastically change the 'feel' of a software product. Also developed for the [Tarot Traveler](https://www.tarottraveler.com/) community.",
    techStack: ["TypeScript", "React", "OpenAI API", "Prompt Engineering"],
    category: "Web App",
    githubUrl: "https://github.com/RaizenStyx/ai-oracle",
    liveUrl: "https://ai-oracle-eight.vercel.app/",
    imageUrl: "/images/ai-or.png", 
  },
  {
    id: "task-manager",
    slug: "task-manager",
    title: "TypeScript Task Manager",
    shortDescription: "Clean, accessible task management app demonstrating React Hooks.",
    fullDescription: "A fundamental study in React State Management without external libraries. This app implements full CRUD (Create, Read, Update, Delete) functionality using only `useState` and `useEffect`. It features local storage persistence, ensuring tasks remain saved between browser sessions.",
    techStack: ["TypeScript", "React", "Local Storage API"],
    category: "Web App",
    githubUrl: "https://github.com/RaizenStyx/ReactTaskManager",
    liveUrl: "https://react-task-manager-red.vercel.app/",
    imageUrl: "/images/taskmanager.png",
  },

  // --- 5. BROWSER GAMES (HTML5 Canvas) ---
  {
    id: "key-and-dug",
    slug: "key-and-dug",
    title: "Keys and Dungeons", // Updated title
    shortDescription: "A tile-based puzzle game about inventory management and pathfinding.",
    fullDescription: "A logic-puzzle game built from scratch without a game engine. The core mechanic involves a custom tile-collision system where the player must navigate a grid, collect keys, and unlock specific doors to progress. It demonstrates array-based map design and strict inventory logic (1 key = 1 door).",
    techStack: ["JavaScript", "HTML5 Canvas", "Tile Logic"],
    category: "Game Dev",
    liveUrl: "/games/KeyAndDug/keyanddug.html",
    imageUrl: "/images/keydun.png", 
  },
  {
    id: "galaga-clone",
    slug: "galaga-clone",
    title: "Space Shooter Prototype", // Renamed to reflect it's a prototype
    shortDescription: "Arcade-style shooting mechanics built with raw JavaScript.",
    fullDescription: "A self-directed study in entity management. I built this to test my ability to handle player input and projectile logic without a tutorial. It features movement clamping (keeping the player on screen), collision detection between bullets and static targets, and a 'fire rate' limitation system.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/MyGalagaV0.1/index.html",
    imageUrl: "/images/galaga.png",
  },
  {
    id: "kill-the-blocks",
    slug: "kill-the-blocks",
    title: "Block Breaker", // More descriptive title
    shortDescription: "Classic paddle-and-ball physics implementation.",
    fullDescription: "A study in vector reflection. This project implements the core mechanics of a Breakout-style game. The challenge was calculating the ball's bounce angle relative to where it hit the paddle—hitting the edges increases velocity and changes the angle, mimicking the 'feel' of arcade physics.",
    techStack: ["JavaScript", "HTML5 Canvas", "Vector Math"],
    category: "Game Dev",
    liveUrl: "/games/KillTheBlocks/blocks.html",
    imageUrl: "/images/block.png",
  },
  {
    id: "racing-game",
    slug: "racing-game",
    title: "Retro Racing",
    shortDescription: "Top-down racing with smooth angular rotation.",
    fullDescription: "Implementing 2D car movement. Instead of snapping 90 degrees, the car utilizes angular rotation to turn smoothly. This project handles the math required to translate forward momentum based on the car's current facing angle.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/Racing/racing.html",
    imageUrl: "/images/racing.png",
  },
  {
    id: "snake-game",
    slug: "snake-game",
    title: "Snake",
    shortDescription: "The classic algorithm implementation.",
    fullDescription: "The Hello World of game dev. Implemented using a queue structure to track the snake's tail segments and grid-based movement. A foundational project for understanding game loops.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/Snake/snake.html",
    imageUrl: "/images/snake.png",
  },
  {
    id: "tennis-game",
    slug: "tennis-game",
    title: "Retro Tennis",
    shortDescription: "Pong-style physics with basic AI tracking.",
    fullDescription: "A study in simple AI behavior. The opponent paddle automatically tracks the ball's Y-position to intercept shots. It shares the 'velocity scaling' mechanic from the Block Breaker game, allowing players to speed up the ball by hitting it with the paddle's edge.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/Tennis/tennis.html",
    imageUrl: "/images/tennis.png",
  },

  // --- ARCHIVE ---
  {
    id: "retro-games",
    slug: "canvas-retro-games",
    title: "Retro Canvas Games Collection",
    shortDescription: "A compilation of my early JavaScript game loop experiments.",
    fullDescription: "This archive contains my earliest explorations into programming. Before using engines like Unreal, I forced myself to build games pixel-by-pixel in code to understand the fundamentals of rendering and input handling.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Archive",
    githubUrl: "https://github.com/RaizenStyx/GameDevPortfolio"
  },
  {
    id: "upwork-clone",
    slug: "upwork-clone",
    title: "UpWork Clone",
    shortDescription: "React UI study focusing on component composition.",
    fullDescription: "A purely visual clone of the Upwork job board. This project was an exercise in breaking down a complex professional interface into reusable React components and styling them to match a reference design.",
    techStack: ["React", "CSS", "UI Design"],
    category: "Archive",
    liveUrl: "https://up-work-clone.vercel.app/",
    githubUrl: "https://github.com/RaizenStyx/UpWorkClone"
  },
  {
    id: "oop-programs",
    slug: "oop-java-cpp",
    title: "OOP & Software Collection",
    shortDescription: "Console apps and a C# Weather GUI application.",
    fullDescription: "A collection of academic projects demonstrating core CS concepts. It includes a C# Weather Application (GUI) that fetches API data, as well as Java/C++ console programs exploring inheritance, polymorphism, and memory management.",
    techStack: ["C#", "Java", "C++", ".NET"],
    category: "Archive",
    githubUrl: "https://github.com/stars/RaizenStyx/lists/OOP"
  },
  {
    id: "crypto-dashboard",
    slug: "crypto-dashboard",
    title: "Crypto Dashboard",
    shortDescription: "Real-time API data fetching example.",
    fullDescription: "A dashboard that fetches live cryptocurrency pricing. This project was practice for handling `useEffect` loops and parsing JSON data from external public APIs.",
    techStack: ["JavaScript", "React", "REST API"],
    category: "Archive",
    githubUrl: "https://github.com/RaizenStyx/ReactCryptoApp",
    liveUrl: "https://csb-ez43x2.vercel.app/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

// --- TIMELINE DATA ---
export const timelineData: TimelineItem[] = [
  { year: 2019, text: 'Discovered passion for tech while fixing IT equipment. Enrolled in college for Computer Science with support from family.' },
  { year: 2020, text: 'Adapted to remote learning during COVID. Mastered Python fundamentals and built first WebApps with Vue.js.' },
  { year: 2021, text: 'Deep dive into OOP with Java. Quit day job to focus 100% on development. Built first React portfolio and retro games.' },
  { year: 2022, text: 'Team Lead for College Capstone (Python MVC). Graduated to Shopify Development via the Freemote community and landed first freelance contracts.' },
  { year: 2023, text: 'Hired by We Are Underground (Shopify Partner). Enrolled at SNHU for Game Development degree. Mastered Liquid and high-volume e-commerce architectures.' },
  { year: 2024, text: 'Balanced full-time agency work with Game Dev studies. Released Unreal Engine 5 Arena Shooter prototype and handled complex merchant custom requests.' },
  { year: 2025, text: 'Attending SNHU for Video Game Development. Exploring AI Automation Agencies and rebuilding personal brand after agency layoffs.' }
];

// --- STATS DATA ---
export const statsData: StatItem[] = [
  { value: 5, label: 'Full-Stack Apps' },
  { value: 50, label: 'Shopify Stores Built' },
  { value: 100, label: 'Themes Customized' },
  { value: 120, label: 'College Credits' },
];