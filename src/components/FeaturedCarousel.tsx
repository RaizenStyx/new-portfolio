"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/project-data";
import { useState, useEffect } from "react";

export function FeaturedCarousel() {
  // 1. Get Featured projects (excluding the main 'social-app')
  const carouselProjects = projects.filter(
    (p) => p.featured && p.id !== "social-app"
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 2. Auto-Rotation Logic (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? carouselProjects.length - 1 : prev - 1
    );
  };

  const currentProject = carouselProjects[currentIndex];

  if (!currentProject) return null;

  return (
    <Card 
      className="col-span-1 md:col-span-2 flex flex-col justify-between overflow-hidden bg-muted/30 border-muted h-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex-1 min-h-[200px] w-full bg-background/50">
        {/* Background Image (Blurred/Darkened) */}
        {currentProject.imageUrl && (
            <Image
                src={currentProject.imageUrl}
                alt={currentProject.title}
                fill
                className="object-cover opacity-80 transition-all duration-500 hover:scale-105 hover:opacity-100"
            />
        )}
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
          <div className="flex justify-between items-end">
            <div>
                 <Badge variant="secondary" className="mb-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    More Featured Work
                 </Badge>
                <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
                    {currentProject.title}
                </h3>
                <p className="text-sm text-gray-300 line-clamp-2 max-w-md">
                    {currentProject.shortDescription}
                </p>
            </div>
            
            {/* Controls */}
            <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-black/50 border-white/20 hover:bg-white hover:text-black" onClick={prevSlide}>
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full bg-black/50 border-white/20 hover:bg-white hover:text-black" onClick={nextSlide}>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-4 border-t border-border/50 bg-card">
         <Button variant="ghost" size="sm" className="w-full justify-between group" asChild>
            <Link href={`/projects/${currentProject.slug}`}>
                View Project Details
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
         </Button>
      </div>
    </Card>
  );
}