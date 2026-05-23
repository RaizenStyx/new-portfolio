import { Button } from "@/components/ui/button";
import { HeroAnimation } from "@/components/HeroAnimation";
import Link from "next/link";
import BentoGrid from "@/components/BentoGrid";

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
        <BentoGrid />

    </main>
  );
}

