import { projects } from "@/lib/project-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Lab",
  description: "Playable browser games and Unreal Engine 5 showcases.",
};

export default function GamesPage() {
  const games = projects.filter((p) => p.category === "Game Dev");

  return (
    <div className="container py-12 px-4 md:px-6">
       <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
        </Link>
      </Button>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Game Lab</h1>
            <p className="text-xl text-muted-foreground">
            Experiments in Unreal Engine 5, C++, and HTML5 Canvas.
            </p>
        </div>
      </div>

      {/* Grid Layout for Games */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div key={game.id} className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg hover:-translate-y-1">
            {/* Image Area */}
            <div className="relative aspect-[4/3] overflow-hidden bg-muted/50">
                {game.imageUrl ? (
                    <Image src={game.imageUrl} alt={game.title} fill className="object-cover transition-transform group-hover:scale-105" />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">No Image</div>
                )}
                
                {/* Overlay Play Button (Only if it has a liveUrl) */}
                {game.liveUrl && (
                    <a href={game.liveUrl} target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-[2px]">
                        <div className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground shadow-lg transform scale-90 transition-transform group-hover:scale-100">
                            <Play className="fill-current h-4 w-4" /> Play Now
                        </div>
                    </a>
                )}
                {/* Overlay Play Button (Only if it has a liveUrl) */}
                {game.githubUrl && (
                    <a href={game.githubUrl} target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-[2px]">
                        <div className="flex items-center gap-2 rounded-full bg-primary px-6 py-2 font-bold text-primary-foreground shadow-lg transform scale-90 transition-transform group-hover:scale-100">
                            <Play className="fill-current h-4 w-4" /> View Source
                        </div>
                    </a>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{game.shortDescription}</p>
                <div className="flex flex-wrap gap-1">
                    {game.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground border px-1.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}