import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroAnimation } from "@/components/HeroAnimation";
import { ArrowRight, Terminal, ShoppingBag, Gamepad2, Database, Cpu, Globe } from "lucide-react";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      
      {/* HERO SECTION */}
      <section className="mb-16 mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-1/2 mx-auto md:w-full flex justify-center md:justify-end order-first md:order-last relative">
            <HeroAnimation />
        </div>
        <div className="max-w-3xl z-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl mb-6 text-foreground">
            Building <span className="text-foreground md:text-muted-foreground"> digital </span> worlds <br className="md:hidden" /> <span className="text-foreground md:text-muted-foreground"> and scalable </span> apps.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
            I bridge the gap between complex game systems and modern web applications. 
            Specializing in <strong>Next.js</strong>, <strong>Unreal Engine</strong>, and <strong>E-commerce Architecture</strong>.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
             <Button variant="outline" size="lg" asChild>
               <Link href="/projects/nyxus">See Latest Work</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* BENTO GRID */}
      {/* 4 Columns Total */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
        
        {/* --- LEFT COLUMN (MAIN FEATURE) --- */}
        <Card className="col-span-1 md:col-span-2 md:row-span-2 flex flex-col justify-between overflow-hidden border-primary/20 bg-secondary/10">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="default">Featured Project</Badge>
              <Badge variant="outline">Next.js 16</Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl">Nyxus</CardTitle>
            <CardDescription className="text-base line-clamp-3 md:line-clamp-none">
              A bespoke social platform built for the <Link href="https://www.tarottraveler.com/" target="_blank" className="text-primary hover:underline">Tarot Traveler community</Link>. 
              Features real-time deity offering widgets, live chat, and a highly personalized user dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow min-h-[200px] relative p-0">
            <div className="absolute inset-0 h-full w-full bg-muted">
              <Image
                src="/images/nyxus.png"
                alt="Nyxus Dashboard Preview"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2" asChild>
              <Link href="/projects/nyxus">
                View Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

          {/* --- RIGHT COLUMN TOP (SPECIALTIES) --- */}
         <Card className="col-span-1 md:col-span-1 lg:col-span-1 bg-card">
           <CardHeader>
             <ShoppingBag className="h-8 w-8 text-green-500 mb-2" />
             <CardTitle>Shopify Expert</CardTitle>
             <CardDescription>
               Former Partner Theme Developer.
             </CardDescription>
           </CardHeader>
           <CardContent>
             <p className="text-sm text-muted-foreground">
               Specialized in Liquid, custom theme development, and performance optimization for e-commerce brands.
             </p>
           </CardContent>
         </Card>

         <Card className="col-span-1 md:col-span-1 lg:col-span-1 bg-card">
           <CardHeader>
             <Gamepad2 className="h-8 w-8 text-purple-500 mb-2" />
             <CardTitle>Game Dev</CardTitle>
             <CardDescription>
              Unreal Engine & C++
             </CardDescription>
           </CardHeader>
           <CardContent>
             <p className="text-sm text-muted-foreground">
               Creating immersive worlds and mechanics. Currently working on physics-based actor systems.
             </p>
           </CardContent>
        </Card>

        {/* --- RIGHT COLUMN MIDDLE (TECH STACK) --- */}
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
                    <CodeIcon className="h-3 w-3" /> Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                    {["TypeScript", "JavaScript", "C++", "C#", "Python", "Java", "SQL", "Liquid"].map(t => (
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
                    {["Next.js 16", "React", "Unreal Engine 5", "Node.js", "Tailwind CSS", "Android SDK"].map(t => (
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
                    {["Supabase", "PostgreSQL", "Git", "Figma", "OpenAI API", "HuggingFace", "HTML5 Canvas"].map(t => (
                        <Badge key={t} variant="secondary">{t}</Badge>
                    ))}
                </div>
            </div>

          </CardContent>
        </Card>

        {/* --- BOTTOM ROW --- */}
        
        {/* BOTTOM LEFT: FEATURED CAROUSEL */}
        <FeaturedCarousel />

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
    </main>
  );
}

// Simple Helper Icon for the Tech Stack
function CodeIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    )
}