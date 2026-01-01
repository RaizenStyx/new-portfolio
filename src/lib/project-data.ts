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
  },

  // --- 2. SHOPIFY EXPERIENCE ---
  {
    id: "wau-experience",
    slug: "we-are-underground",
    title: "We Are Underground (Partner Developer)",
    shortDescription: "Theme development for high-volume merchants at a top Shopify Partner Agency.",
    fullDescription: "Served as a core developer for We Are Underground, a premier Shopify agency. My role involved taking designs from Figma and translating them into pixel-perfect Liquid code for high-traffic merchants. I specialized in solving complex 'app conflicts'—where third-party scripts broke themes—and implementing custom JavaScript functionality that standard theme settings couldn't handle, directly impacting conversion rates for client stores.",
    techStack: ["Shopify Liquid", "JavaScript", "HTML/CSS", "Theme Kit", "Git"],
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
    shortDescription: "A highly-optimized Dawn theme modification showcasing modern Shopify 2.0 features.",
    fullDescription: "This demo store serves as a sandbox for testing aggressive speed optimization techniques. I utilized the Shopify Dawn theme as a base to implement advanced features like metaobject-driven content, predictive search with the Storefront API, and critical CSS inlining. It demonstrates how a standard theme can be pushed to perform like a headless application.",
    techStack: ["Liquid", "Shopify CLI", "Metaobjects", "Dawn Theme"],
    category: "Shopify",
    imageUrl: "/images/coffeelogo.png", 
  },
  {
    id: "speed-seo-audit",
    slug: "shopify-speed-seo-audit",
    title: "Shopify Speed & SEO Audit",
    shortDescription: "Deep-dive performance analysis improving LCP and CLS metrics.",
    fullDescription: "A comprehensive case study on reducing 'Liquid Render Blocking' resources. By auditing the waterfall requests of a high-traffic store, I identified third-party apps injecting heavy JS into the head. The solution involved refactoring these scripts to defer loading and optimizing image delivery, resulting in a 25-point increase in Google Lighthouse Performance scores.",
    techStack: ["Liquid", "Lighthouse", "Chrome DevTools", "Pagespeed Insights"],
    category: "Shopify",
    imageUrl: "/images/lighthouse.png", 
  },

  // --- 3. GAME DEV ---
  {
    id: "magician-robber",
    slug: "magician-robber",
    title: "Magician Robber",
    shortDescription: "Team Lead for a 3rd-person stealth prototype in Unreal Engine 5.",
    fullDescription: "Served as Team Lead for a 4-person development squad during my Game Design coursework. Beyond writing the C++ logic for the player character, I managed the Git workflow to prevent merge conflicts—a common pitfall in Blueprint projects. The game features a stealth mechanic where the player must utilize line-of-sight logic to rob a bank while avoiding AI guards managed by Behavior Trees.",
    techStack: ["Unreal Engine 5", "Blueprints", "C++", "Git", "Jira"],
    category: "Game Dev",
    featured: true,
    githubUrl: "https://github.com/SNHU-Game-Dev/Team-Project",
    imageUrl: "/images/magrob.png",
  },
  {
    id: "platformer-ue5",
    slug: "prince-of-daggers",
    title: "Prince of Daggers",
    shortDescription: "Physics-based wall-running prototype inspired by Prince of Persia.",
    fullDescription: "An exploration into advanced character movement systems in Unreal Engine 5. The core challenge was implementing a 'Wall Run' mechanic that felt responsive. I achieved this using line traces (Raycasts) to detect wall normals and launching the character vector parallel to the surface, creating a fluid traversal system.",
    techStack: ["Unreal Engine 5", "Blueprints", "Vector Math", "Splines"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/PlatformerGameProject",
    imageUrl: "/images/platformer.png",
  },
  {
    id: "unreal-arena-shooter",
    slug: "unreal-arena-shooter",
    title: "Unreal Arena Shooter",
    shortDescription: "Fast-paced FPS featuring custom AI sensing and health systems.",
    fullDescription: "Built to master the Unreal Gameplay Framework (GameMode, PlayerController, Pawn). This project features a wave-based enemy system where AI agents utilize the 'PawnSensing' component to track the player. It includes a complete UI HUD loop for health, ammo, and score tracking, updated via Event Dispatchers.",
    techStack: ["Unreal Engine 5", "C++", "AI Behavior Trees", "UMG UI"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/ArenaShooterUnreal",
    imageUrl: "/images/unreal-arena.png", 
  },
  {
    id: "bulls-and-cows",
    slug: "bulls-and-cows",
    title: "Bulls and Cows",
    shortDescription: "Word-puzzle logic game implemented in C++.",
    fullDescription: "A pure C++ logic puzzle implemented within the Unreal framework. This project focuses less on graphics and more on string manipulation, algorithms, and separation of concerns. It demonstrates how to decouple game logic from the view layer in a game engine environment.",
    techStack: ["Unreal Engine 5", "C++", "Algorithms"],
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
    fullDescription: "Lore Forge goes beyond simple chat prompts by structuring the OpenAI API output into usable RPG elements. Users can generate cohesive worlds, NPCs, and items. The app utilizes complex state management to 'remember' the context of previous generations, allowing for continuity in the generated lore.",
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
    title: "Key and Dug",
    shortDescription: "A logic-puzzle platformer built with raw JavaScript.",
    fullDescription: "Help Dug find the key! This project builds a tile-based collision system from scratch. No game engines were used—just raw mathematics and the HTML5 Canvas API. It demonstrates a deep understanding of how game loops, friction, and gravity work under the hood.",
    techStack: ["JavaScript", "HTML5 Canvas", "Game Physics"],
    category: "Game Dev",
    liveUrl: "/games/KeyAndDug/keyanddug.html",
    imageUrl: "/images/keydun.png", 
  },
  {
    id: "galaga-clone",
    slug: "galaga-clone",
    title: "Galaga Clone",
    shortDescription: "Arcade shooter recreation with enemy wave logic.",
    fullDescription: "A tribute to the arcade classic. This project involves managing arrays of enemy objects, projectile pooling for performance, and simple state machines for enemy movement patterns.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/MyGalagaV0.1/index.html",
    imageUrl: "/images/galaga.png",
  },
  {
    id: "kill-the-blocks",
    slug: "kill-the-blocks",
    title: "Kill The Blocks",
    shortDescription: "High-APM chaotic survival shooter.",
    fullDescription: "An endurance game where efficiency is key. As blocks spawn with increasing frequency, the player must prioritize targets. This explores the concept of 'Game Feel' and difficulty scaling over time.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/KillTheBlocks/blocks.html",
    imageUrl: "/images/block.png",
  },
  {
    id: "racing-game",
    slug: "racing-game",
    title: "Retro Racing",
    shortDescription: "Top-down racing mechanics with car drift physics.",
    fullDescription: "Implementing car physics in 2D space. This project handles angular velocity and momentum to allow the car to 'drift' around corners rather than turning instantly.",
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
    fullDescription: "The Hello World of game dev. Implemented using a queue structure to track the snake's tail segments and grid-based movement.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Game Dev",
    liveUrl: "/games/Snake/snake.html",
    imageUrl: "/images/snake.png",
  },
  {
    id: "tennis-game",
    slug: "tennis-game",
    title: "Retro Tennis",
    shortDescription: "Pong-style physics with AI opponent.",
    fullDescription: "A study in simple AI. The opponent paddle calculates the ball's trajectory and moves to intercept, creating an endless rally loop.",
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
    liveUrl: "https://up-work-clone.vercel.app/"
  },
  {
    id: "oop-programs",
    slug: "oop-java-cpp",
    title: "OOP Console Programs",
    shortDescription: "Java & C++ console apps (Monster Gen, Farkle).",
    fullDescription: "A collection of command-line tools demonstrating key CS concepts: Inheritance, Polymorphism, Memory Management (pointers in C++), and File I/O.",
    techStack: ["Java", "C++", "C#"],
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