import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { timelineData, statsData } from "@/lib/project-data";
import { ArrowRight, Download } from "lucide-react";
import { Icons } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "From IT Support to Full-Stack Engineering. Read about my journey, skills, and experience.",
};

export default function AboutPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      
      {/* 1. HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-24">
        {/* Image Column */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-muted shadow-xl">
           <Image 
             src="/images/me.png" 
             alt="Connor Reed" 
             fill 
             className="object-cover"
             priority
           />
        </div>
        
        {/* Text Column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
             From Hardware Support to <br className="hidden md:block" />
             <span className="text-primary">Full-Stack Engineer</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
            I build accessible, pixel-perfect, and performant web applications. 
            My journey started in IT support, moved through high-volume Shopify development, 
            and now focuses on complex React applications and Game Development in Unreal Engine 5.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
             <Button asChild size="lg">
                <Link href="/contact">
                   Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>
             <Button variant="outline" size="lg" asChild>
                <Link href="/Resume.pdf" target="_blank">
                   Download Resume <Download className="ml-2 h-4 w-4" />
                </Link>
             </Button>
          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
        {statsData.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:bg-muted/50 transition-colors">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </Card>
        ))}
      </section>

      {/* 3. TIMELINE SECTION */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">The Journey So Far</h2>
        <div className="relative border-l border-border/50 ml-4 md:ml-0 space-y-12">
            
            {timelineData.slice().reverse().map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    {/* Dot */}
                    <div className="absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                    
                    {/* Content */}
                    <div className="md:flex md:gap-8 group">
                         <div className="mb-2 md:mb-0 md:w-32 md:text-right shrink-0">
                            <span className="text-xl font-bold text-primary group-hover:underline decoration-2 underline-offset-4">{item.year}</span>
                         </div>
                         <div className="pb-8 border-b border-border/40 md:border-none last:border-none">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {item.text}
                            </p>
                         </div>
                    </div>
                </div>
            ))}

        </div>
      </section>

      {/* TECH STACK GRID */}
    <section className="mb-24">
    <h2 className="text-3xl font-bold mb-8 text-center">Technologies</h2>
    <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center">
        
        <div className="flex flex-col items-center gap-2">
        <Icons.tailwind className="h-12 w-12 text-[#00bcff]" />
        <span className="text-sm font-medium">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Icons.react className="h-12 w-12 text-[#61DAFB]" />
        <span className="text-sm font-medium">React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Icons.nextjs className="h-12 w-12" /> {/* Default white in dark mode */}
        <span className="text-sm font-medium">Next.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Icons.typescript className="h-12 w-12 text-[#3178C6]" />
        <span className="text-sm font-medium">TypeScript</span>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Icons.nodejs className="h-12 w-12" />
        <span className="text-sm font-medium">Node.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
        <Icons.python className="h-12 w-12 text-[#FFE873]" />
        <span className="text-sm font-medium">Python</span>
        </div>

    </div>
    </section>

    </div>
  );
}