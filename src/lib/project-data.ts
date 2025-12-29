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
  // 1. FEATURED: Social App (The Crown Jewel)
  {
    id: "social-app",
    slug: "coven-nocta",
    title: "Coven / Nocta",
    shortDescription: "A modern social media application built for niche communities with real-time widgets.",
    fullDescription: "Built with Next.js 16 and Supabase, this application redefines niche community interaction. It features a custom widget system allowing users to personalize their dashboards, real-time chat functionality, and a unique 'offering' system for community engagement. The app focuses on privacy, speed, and a highly customizable user interface.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind", "Supabase", "PostgreSQL"],
    category: "Web App",
    featured: true,
    githubUrl: "https://github.com/yourusername/coven", // Update this
    liveUrl: "https://coven-app.com", // Update this
  },

  // 2. SHOPIFY: We Are Underground (Professional Experience)
  {
    id: "wau-experience",
    slug: "we-are-underground",
    title: "We Are Underground (Partner Developer)",
    shortDescription: "Theme development for hundreds of merchants at a top Shopify Partner Agency.",
    fullDescription: "Collaborated with numerous merchants through We Are Underground, implementing custom Shopify solutions to enhance storefront design, usability, and performance. Provided front-end modifications using JavaScript and Liquid, ensuring seamless theme customization and improved customer experiences for high-volume stores.",
    techStack: ["Shopify Liquid", "JavaScript", "HTML/CSS", "Theme Kit"],
    category: "Shopify",
    featured: true,
    imageUrl: "/images/wau.png",
  },

  // 3. GAME DEV: Magician Robber (Team Lead Experience)
  {
    id: "magician-robber",
    slug: "magician-robber",
    title: "Magician Robber",
    shortDescription: "Team Lead for a 3rd-person Unreal Engine 5 prototype.",
    fullDescription: "This was a third-person game built as part of a team project for my Game Design class. As Team Lead, I managed the git workflow and prototyped the core mechanics in Unreal Engine 5. The game involves a magician robbing a bank to escape the police. This project honed my skills in project management and C++ blueprint integration.",
    techStack: ["Unreal Engine 5", "Blueprints", "C++", "Git"],
    category: "Game Dev",
    featured: true,
    githubUrl: "https://github.com/SNHU-Game-Dev/Team-Project",
    imageUrl: "/images/magrob.png",
  },

  // 4. WEB APP: Science News Summarizer
  {
    id: "science-news",
    slug: "science-news-summarizer",
    title: "Science News Summarizer",
    shortDescription: "AI-powered news aggregator using Hugging Face.",
    fullDescription: "A sleek, multi-page React + TypeScript web app that fetches the latest science, tech, and space news, allowing users to generate AI-powered summaries, take notes, and export their saved insights. Features include a dark tech UI, local data persistence, and Hugging Face integration.",
    techStack: ["React", "TypeScript", "Hugging Face AI", "Tailwind"],
    category: "Web App",
    liveUrl: "https://science-news-summarizer.vercel.app/",
    imageUrl: "/images/ai.png",
  },

  // 5. WEB APP: Lore Forge
  {
    id: "lore-forge",
    slug: "lore-forge",
    title: "TypeScript Lore Forge",
    shortDescription: "AI prompt app for RPG character creation.",
    fullDescription: "A TypeScript-based AI prompt app that allows users to create lore for their characters, worlds, and more. This project demonstrates my ability to work with AI prompts effectively and integrate them into a structured React application.",
    techStack: ["TypeScript", "React", "OpenAI API"],
    category: "Web App",
    liveUrl: "https://lore-forge-zeta.vercel.app/",
    imageUrl: "/images/ScreenshotLoreForge.png",
  },

  // 6. SHOPIFY: Hydrogen Demo
  {
    id: "hydrogen-demo",
    slug: "shopify-hydrogen",
    title: "Hydrogen Storefront",
    shortDescription: "Headless commerce demo using Shopify's Hydrogen framework.",
    fullDescription: "Fully functional development store built with Hydrogen (Shopify's React-based framework). This project demonstrates the future of headless commerce, utilizing server-side rendering for optimal performance.",
    techStack: ["Shopify Hydrogen", "React", "GraphQL"],
    category: "Shopify",
    liveUrl: "https://hydrogenteststore.vercel.app/",
    imageUrl: "/images/hydrogenlogo.png",
  },

  // 7. GAME DEV: Prince of Daggers
  {
    id: "platformer-ue5",
    slug: "prince-of-daggers",
    title: "Prince of Daggers",
    shortDescription: "Rapid platformer prototype with Prince of Persia style wall-running.",
    fullDescription: "A platformer game made in Unreal Engine 5. I added an extra challenge using splines and line tracing to create a copy-cat wall-run feature inspired by Prince of Persia.",
    techStack: ["Unreal Engine 5", "Blueprints", "Splines"],
    category: "Game Dev",
    githubUrl: "https://github.com/RaizenStyx/PlatformerGameProject",
    imageUrl: "/images/platformer.png",
  },

  // --- ARCHIVE (Older projects, keep for history but don't highlight) ---
  {
    id: "retro-games",
    slug: "canvas-retro-games",
    title: "Retro Canvas Games",
    shortDescription: "A collection of JS/HTML5 Canvas games (Snake, Tennis, Racing).",
    fullDescription: "Early programming projects where I learned game loop logic by rebuilding classics like Snake, Tennis, and a Racing game using raw JavaScript and the HTML5 Canvas API.",
    techStack: ["JavaScript", "HTML5 Canvas"],
    category: "Archive",
    githubUrl: "https://github.com/stars/RaizenStyx/lists/AllGames",
    imageUrl: "/images/retro.png",
  },
  {
    id: "upwork-clone",
    slug: "upwork-clone",
    title: "UpWork Clone",
    shortDescription: "React UI clone focusing on state management.",
    fullDescription: "A simplified clone of Upwork that showcases UI design and state management in React.",
    techStack: ["React", "CSS"],
    category: "Archive",
    liveUrl: "https://up-work-clone.vercel.app/",
    imageUrl: "/images/UpworkClone.png",
  },
  {
    id: "oop-programs",
    slug: "oop-java-cpp",
    title: "OOP Console Programs",
    shortDescription: "Random Monster Generator (Java) and Farkle (C++).",
    fullDescription: "Console-based programs demonstrating core Object-Oriented Programming paradigms including inheritance, polymorphism, and class management.",
    techStack: ["Java", "C++", "C#"],
    category: "Archive",
    githubUrl: "https://github.com/stars/RaizenStyx/lists/OOP",
    imageUrl: "/images/oop.png",
  }
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