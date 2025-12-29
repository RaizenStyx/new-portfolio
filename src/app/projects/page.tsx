import Link from "next/link";
import { projects } from "@/lib/project-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function ProjectsPage() {
  // Filter out Archive for the main grid (optional)
  const activeProjects = projects.filter(p => p.category !== "Archive");

  return (
    <main className="container mx-auto min-h-screen py-12 px-4 md:px-8">
      
      {/* HEADER */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">All Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of my work in Web Development, Shopify E-commerce, and Game Design.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activeProjects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full hover:border-primary/50 transition-colors">
            {/* Image Placeholder */}
            <div className="aspect-video w-full bg-muted/40 border-b flex items-center justify-center text-muted-foreground">
                {/* Image component | TODO: Make placeholder.png image */}
                <Image src={project.imageUrl || "/images/otherprogramming.png"} alt={project.title} width={400} height={225} className="object-cover w-full h-full" />
            </div>

            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="line-clamp-2 mt-2">
                {project.shortDescription}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => ( // Show only first 3 tags
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.techStack.length > 3 && (
                   <span className="text-xs text-muted-foreground self-center">+{project.techStack.length - 3} more</span>
                )}
              </div>
            </CardContent>

            <CardFooter className="flex gap-2 pt-4">
              <Button asChild className="w-auto flex-1" size="lg">
                <Link href={`/projects/${project.slug}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {project.githubUrl && (
                <Button variant="outline" size="icon" asChild>
                    <Link href={project.githubUrl} target="_blank">
                    <Icons.gitHub className="h-4 w-4" /> 
                    </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}