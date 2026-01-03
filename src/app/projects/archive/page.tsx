import { projects } from "@/lib/project-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Archive, ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

      <div className="rounded-md border bg-card">
        <Accordion type="single" collapsible className="w-full">
          {archiveProjects.map((project, index) => (
            <AccordionItem 
                key={project.id} 
                value={project.id} 
                className={index === archiveProjects.length - 1 ? "border-b-0" : ""}
            >
              <AccordionTrigger className="px-6 hover:bg-muted/50 hover:no-underline cursor-pointer">
                <div className="flex flex-1 items-center justify-between mr-4 text-left">
                    <div className="space-y-1">
                        <span className="font-semibold text-lg block">{project.title}</span>
                        <span className="text-sm text-muted-foreground font-normal line-clamp-1 block">
                            {project.shortDescription}
                        </span>
                    </div>
                    {/* Show Tech Badges on Desktop */}
                    <div className="hidden sm:flex gap-2">
                         {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full whitespace-nowrap">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-6 pb-6 bg-muted/10">
                 <div className="pt-4 space-y-4">
                    {/* Full Description */}
                    <p className="text-base leading-relaxed text-foreground/90 max-w-3xl">
                        {project.fullDescription}
                    </p>
                    
                    {/* Mobile Tech Stack (Shown only on small screens) */}
                    <div className="flex flex-wrap gap-2 sm:hidden">
                        {project.techStack.map(tech => (
                            <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-2">
                        {project.githubUrl && (
                            <Button variant="outline" size="sm" asChild>
                                <Link href={project.githubUrl} target="_blank">
                                    <Icons.gitHub className="mr-2 h-4 w-4" /> View Code
                                </Link>
                            </Button>
                        )}
                        {project.liveUrl && (
                             <Button variant="outline" size="sm" asChild>
                                <Link href={project.liveUrl} target="_blank">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                </Link>
                            </Button>
                        )}
                    </div>
                 </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}