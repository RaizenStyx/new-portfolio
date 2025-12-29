import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug } from "@/lib/project-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/icons";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen py-12 px-4 md:px-8">
      
      {/* BACK BUTTON */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>

      {/* HEADER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* LEFT: INFO */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
             <Badge variant="outline" className="text-base py-1 px-4">{project.category}</Badge>
             {project.featured && <Badge className="text-base py-1 px-4">Featured</Badge>}
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <Button size="lg" asChild>
                <Link href={project.liveUrl} target="_blank">
                  Visit Site <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            
            {project.githubUrl && (
              <Button variant="outline" size="lg" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <Icons.gitHub className="mr-2 h-4 w-4" /> View Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* RIGHT: HERO IMAGE/MEDIA */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted/50 shadow-xl">
           {project.imageUrl ? (
              <Image 
                src={project.imageUrl} 
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
           ) : (
             <div className="flex h-full items-center justify-center text-muted-foreground">
               <span className="text-lg font-medium">No Preview Available</span>
             </div>
           )}
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* MAIN DESCRIPTION */}
        <div className="lg:col-span-2 space-y-8">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-bold mb-4">About the Project</h3>
            <p className="text-lg text-muted-foreground leading-loose whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>
        </div>

        {/* SIDEBAR: TECH STACK */}
        <div className="space-y-6">
           <div className="rounded-xl border bg-card p-6 shadow-sm">
             <h3 className="font-semibold mb-4 text-lg">Technologies</h3>
             <div className="flex flex-wrap gap-2">
               {project.techStack.map((tech) => (
                 <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                   {tech}
                 </Badge>
               ))}
             </div>
           </div>
        </div>
      </div>

    </main>
  );
}