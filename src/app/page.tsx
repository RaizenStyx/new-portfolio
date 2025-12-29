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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Code, Terminal, ShoppingBag, Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-4 md:p-8 lg:p-12">
      
      {/* HERO SECTION: GRID LAYOUT */}
      <section className="mb-16 mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="max-w-3xl z-10">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl mb-6 text-foreground">
            Building <span className="text-muted-foreground">digital</span> worlds <span className="text-muted-foreground">and scalable</span> apps.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
            I bridge the gap between complex game systems and modern web applications. 
            Specializing in <strong>Next.js</strong>, <strong>Unreal Engine</strong>, and <strong>E-commerce Architecture</strong>.
          </p>
          
          <div className="flex gap-4">
             <Button variant="outline" size="lg" asChild>
               <Link href="/projects/social-app">See Latest Work</Link>
             </Button>
          </div>
        </div>

        {/* RIGHT COLUMN: ANIMATION */}
        {/* On Mobile: Order-last makes it sit below text visually. */}
        <div className="w-full flex justify-center md:justify-end order-last md:order-none relative">
            <HeroAnimation />
        </div>
      </section>
      

      {/* BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3">
        
        {/* ITEM 1: FEATURED PROJECT (Social App) - Takes up 2x2 space */}
        <Card className="col-span-1 row-span-2 flex flex-col justify-between overflow-hidden border-primary/20 bg-secondary/10 md:col-span-2 lg:col-span-2">
          <CardHeader>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="default">Featured Project</Badge>
              <Badge variant="outline">Next.js 16</Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl">Coven / Nocta</CardTitle>
            <CardDescription className="text-base">
              A modern social media application built for niche communities. 
              Features real-time interactions, custom widgets, and a unique deity offering system.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            {/* Placeholder for your App Screenshot/Video */}
            <div className="aspect-video w-full rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground border-2 border-dashed">
              [ App Screen Recording / Image ]
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full gap-2" asChild>
              <Link href="/projects/social-app">
                View Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* ITEM 2: SHOPIFY EXPERTISE */}
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

        {/* ITEM 3: GAME DEV */}
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

        {/* ITEM 4: TECH STACK - Spans wide */}
        <Card className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Terminal className="h-5 w-5" /> Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {["React", "Next.js 16", "TypeScript", "Tailwind", "Supabase", "PostgreSQL", "Unreal Engine 5", "Shopify Liquid"].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>

         {/* ITEM 5: ABOUT ME SNIPPET */}
         <Card className="col-span-1 md:col-span-2 lg:col-span-2 bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Gamer Turned Programmer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I started this journey wanting to learn how video games were made. 
              Now, I build scalable web applications and intricate game systems with equal passion.
              Currently attending SNHU for Video Game Development.
            </p>
          </CardContent>
          <CardFooter>
             <Button variant="secondary" size="sm" asChild>
                <Link href="/about">Read My Story</Link>
             </Button>
          </CardFooter>
        </Card>

      </div>

    </main>
  );
}