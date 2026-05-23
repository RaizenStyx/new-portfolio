"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2, 
  Gamepad2, 
  Terminal, 
  Code, 
  Cpu, 
  Database, 
  Globe 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeaturedCarousel } from "./FeaturedCarousel";

export default function BentoGrid() {
  // State to track which project is featured in the main window
  const [activeProject, setActiveProject] = useState<"nebula" | "nyxus">("nebula");

  // Project data dictionary
  const projectData = {
    nebula: {
      title: "Project Nebula",
      techBadge: "Unreal Engine 5.5",
      description: (
        <>
          A complex Action-RPG featuring a robust C++ backend and modular Blueprints. Showcases a streamlined 3-star skill evolution model and an integrated Elemental Affinity system focusing on four base elements.
        </>
      ),
      imageSrc: "/images/nebula.png", 
      imageAlt: "Project Nebula Gameplay Preview",
      linkHref: "/projects/project-nebula",
    },
    nyxus: {
      title: "Nyxus",
      techBadge: "Next.js 16",
      description: (
        <>
          A bespoke social platform built for the <Link href="https://www.tarottraveler.com/" target="_blank" className="text-primary hover:underline">Tarot Traveler community</Link>. Features real-time deity offering widgets, live chat, and a highly personalized user dashboard.
        </>
      ),
      imageSrc: "/images/nyxus.png",
      imageAlt: "Nyxus Dashboard Preview",
      linkHref: "/projects/nyxus",
    }
  };

  const current = projectData[activeProject];

  return (
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
      
      {/* --- LEFT COLUMN (MAIN FEATURE) --- */}
      <Card className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden border-primary/20 bg-secondary/10">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="default">Featured Project</Badge>
            <Badge variant="outline">{current.techBadge}</Badge>
          </div>
          <CardTitle className="text-2xl md:text-3xl">{current.title}</CardTitle>
          <CardDescription className="text-base line-clamp-3 md:line-clamp-none">
            {current.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow min-h-[200px] relative p-0">
          <div className="absolute inset-0 h-full w-full bg-muted">
            <Image
              src={current.imageSrc}
              alt={current.imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>
        </CardContent>
        <CardFooter className="pt-4">
          <Button className="w-full gap-2" asChild>
            <Link href={current.linkHref}>
              View Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      {/* --- RIGHT COLUMN TOP 1 (WEB DEV TOGGLE) --- */}
      <Card 
        onClick={() => setActiveProject("nyxus")}
        className={`col-span-1 md:col-span-1 lg:col-span-1 cursor-pointer transition-all duration-300 hover:bg-secondary/50 ${
          activeProject === "nyxus" ? "ring-2 ring-primary border-primary bg-secondary/20" : "bg-card border-border"
        }`}
      >
        <CardHeader className="pb-2">
          <Code2 className="h-8 w-8 text-blue-500 mb-2" />
          <CardTitle>Full-Stack Developer</CardTitle>
          <CardDescription>
            Systems & Web Architecture
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Building scalable web applications using React and Node.js, with deep roots in Shopify theme development.
          </p>
        </CardContent>
      </Card>

      {/* --- RIGHT COLUMN TOP 2 (GAME DEV TOGGLE) --- */}
      <Card 
        onClick={() => setActiveProject("nebula")}
        className={`col-span-1 md:col-span-1 lg:col-span-1 cursor-pointer transition-all duration-300 hover:bg-secondary/50 ${
          activeProject === "nebula" ? "ring-2 ring-primary border-primary bg-secondary/20" : "bg-card border-border"
        }`}
      >
        <CardHeader className="pb-2">
          <Gamepad2 className="h-8 w-8 text-purple-500 mb-2" />
          <CardTitle>Game Dev</CardTitle>
          <CardDescription>
            Unreal Engine & C++
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Creating immersive worlds and mechanics. Currently engineering physics-based actor systems and dynamic skill logic.
          </p>
        </CardContent>
      </Card>

      {/* --- RIGHT COLUMN MIDDLE (TECH STACK) --- */}
      {/* Note: This sits directly under the two toggle cards to complete the right side of the top square */}
      <Card className="col-span-1 md:col-span-2 row-span-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-5 w-5" /> Technical Arsenal
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          
          {/* Group 1: Languages */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1">
              <Code className="h-3 w-3" /> Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["C++", "C#", "TypeScript", "JavaScript", "Python", "Java", "SQL", "Liquid"].map(t => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

          {/* Group 2: Frameworks & Engines */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1">
              <Cpu className="h-3 w-3" /> Frameworks & Engines
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Unreal Engine 5", "Next.js 16", "React", "Node.js", "Tailwind CSS"].map(t => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

          {/* Group 3: Tools & Specialized */}
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2 flex items-center gap-1">
              <Database className="h-3 w-3" /> Tools & Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Git", "Supabase", "PostgreSQL", "Figma", "OpenAI API", "HuggingFace", "Blueprints"].map(t => (
                <Badge key={t} variant="secondary">{t}</Badge>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>

      {/* --- BOTTOM ROW --- */}
      
      {/* BOTTOM LEFT: FEATURED CAROUSEL */}
      <div className="col-span-1 md:col-span-2">
        {/* Make sure your FeaturedCarousel component handles its own sizing or relies on this wrapper */}
        <FeaturedCarousel />
      </div>

      {/* BOTTOM RIGHT: GAMER STORY */}
      <Card className="col-span-1 md:col-span-2 bg-primary text-primary-foreground flex flex-col justify-center">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary-foreground/80" /> 
            Gamer Turned Programmer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="leading-relaxed opacity-90">
            I started this journey wanting to learn how video games were made. 
            Now, I build scalable web applications and intricate game systems with equal passion.
            Currently attending SNHU for Video Game Development.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm" asChild className="w-full md:w-auto">
            <Link href="/about">Read My Story</Link>
          </Button>
        </CardFooter>
      </Card>

    </div>
  );
}