import { projects } from "@/lib/project-data";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured && p.category !== "Archive");

  return (
    <div className="container py-12 px-4 md:px-6">
      
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tight">All Projects</h1>
        <p className="text-xl text-muted-foreground">
          A collection of web applications, e-commerce systems, and game development experiments.
        </p>
      </div>

      {/* SECTION 1: FEATURED */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            🔥 Featured Work
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} priority={true} />
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: OTHER PROJECTS */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">More Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
           ))}
        </div>
      </div>
      
    </div>
  );
}

// Helper Component to keep code clean
function ProjectCard({ project, priority = false }: { project: any, priority?: boolean }) {
    return (
        <Link 
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/50"
        >
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={priority}
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">No Image</div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <div className="flex justify-between items-start mb-2">
                     <h3 className="text-xl font-semibold group-hover:underline decoration-primary decoration-2 underline-offset-4">{project.title}</h3>
                     {/* Badge Logic could go here */}
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                    {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech: string) => (
                        <span key={tech} className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    )
}