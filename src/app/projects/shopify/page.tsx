import { projects } from "@/lib/project-data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development",
  description: "Custom Liquid themes, Headless commerce, and conversion optimization.",
};

export default function ShopifyPage() {
  // Filter for Shopify projects
  const shopifyProjects = projects.filter((p) => p.category === "Shopify");

  return (
    <div className="container py-12 px-4 md:px-6">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
        </Link>
      </Button>

      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Shopify Development</h1>
        <p className="text-xl text-muted-foreground">
          Specialized in high-volume custom themes, Headless commerce with Hydrogen, 
          and conversion rate optimization.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {shopifyProjects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
          >
            {project.imageUrl && (
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-1">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}