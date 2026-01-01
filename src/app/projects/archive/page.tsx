import { projects } from "@/lib/project-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Archive } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archive",
  description: "Older projects, coding experiments, and early prototypes.",
};

export default function ArchivePage() {
  const archiveProjects = projects.filter((p) => p.category === "Archive");

  return (
    <div className="container py-12 px-4 md:px-6">
       <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
        </Link>
      </Button>

      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-muted">
            <Archive className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Project Archive</h1>
            <p className="text-muted-foreground">Older experiments, learning exercises, and simple clones.</p>
        </div>
      </div>

      <div className="divide-y divide-border rounded-md border bg-card">
        {archiveProjects.map((project) => (
          <div key={project.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 gap-4 hover:bg-muted/50 transition-colors">
            <div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xl">{project.shortDescription}</p>
                <div className="flex gap-2 mt-2">
                    {project.techStack.map(tech => (
                        <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
            
            <div className="flex items-center gap-2">
                {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">View Code</Link>
                    </Button>
                )}
                {project.liveUrl && (
                     <Button variant="outline" size="sm" asChild>
                        <Link href={project.liveUrl} target="_blank">Live Demo</Link>
                    </Button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}