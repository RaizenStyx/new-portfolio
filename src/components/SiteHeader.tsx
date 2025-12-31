"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, ArrowRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Connor Reed</span>
        </Link>

        {/* CENTER: DESKTOP NAV (Hidden on Mobile) */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* HOME LINK */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                   <Link href="/">Home</Link>
                </NavigationMenuLink>
               </NavigationMenuItem>


{/* PROJECTS DROPDOWN (HOVER) */}
<NavigationMenuItem>
  <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
  <NavigationMenuContent>
    {/* 1. WIDENED GRID CONTAINER */}
    <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[700px] lg:grid-cols-[1fr_1fr]">
      
      {/* LEFT COLUMN: Featured + "View All" Link */}
      <li className="row-span-3 flex flex-col justify-between gap-4">
        
        {/* Featured Project Card */}
        <NavigationMenuLink asChild>
          <Link
            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md border border-border/50"
            href="/projects/social-app"
          >
            {/* Placeholder Image Area */}
            <div className="mb-4 aspect-video w-full rounded-md bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground/50">
               <Icons.gitHub className="h-8 w-8 opacity-20" /> {/* Placeholder Icon */}
            </div>
            
            <div className="mb-2 text-lg font-medium">
              Coven / Nocta
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
              A Next.js 16 social platform with real-time widgets and community tools.
            </p>
          </Link>
        </NavigationMenuLink>

        {/* Separator & View All Link (Stacked underneath) */}
        <div className="space-y-2">
            <div className="h-px w-full bg-border/50" /> {/* Separator */}
            <NavigationMenuLink asChild>
                <Link 
                    href="/projects" 
                    className="group flex items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                    View All Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </NavigationMenuLink>
        </div>
      </li>
      
      {/* RIGHT COLUMN: List Items (Stacked normally) */}
      <div className="flex flex-col gap-2 justify-center h-full">
          <ListItem href="/projects/shopify" title="Shopify Development">
            Custom Liquid themes and e-commerce optimization.
          </ListItem>
          <ListItem href="/projects/games" title="Game Development">
            Unreal Engine 5 mechanics and C++ systems.
          </ListItem>
          <ListItem href="/projects/archive" title="Project Archive">
            Older OOP, Java, and HTML5 Canvas experiments.
          </ListItem>
      </div>

    </ul>
  </NavigationMenuContent>
</NavigationMenuItem>

              {/* ABOUT LINK */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 mr-2">
             <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/RaizenStyx" target="_blank">
                 <Icons.gitHub className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/connorreed-dev" target="_blank">
                 <Icons.linkedIn className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6" target="_blank">
                <Icons.upwork className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:me@connorreed.dev">
                <Icons.mail className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="tel:+4233675437">
                <Icons.phone className="h-6 w-6" />
              </Link>
            </Button>

            <span className="mx-2 h-4 w-[1px] bg-border" />
            <Button size="sm" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* MOBILE MENU (SHEET) */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-5">
               <SheetTitle className="text-left mb-4">Navigation</SheetTitle>
               <SheetDescription className="sr-only">Mobile Menu</SheetDescription>
              
              <div className="flex flex-col gap-4 mt-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium">Home</Link>
                
                {/* MOBILE: Projects (Split Link + Toggle) */}
                <Collapsible className="w-full">
                  <div className="flex items-center justify-between font-medium">
                    
                    {/* 1. THE TEXT IS A REAL LINK */}
                    <Link 
                      href="/projects" 
                      onClick={() => setOpen(false)} 
                      className="flex-1 text-lg hover:text-primary"
                    >
                      Projects
                    </Link>
                    
                    {/* 2. THE ARROW IS THE TOGGLE */}
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
                        <ChevronDown className="h-5 w-full transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                    
                  </div>

                  {/* 3. THE CONTENT */}
                  <CollapsibleContent className="flex flex-col gap-2 pl-4 pb-4">
                    <Link href="/projects/social-app" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">
                      Social App (Featured)
                    </Link>
                    <Link href="/projects/shopify" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">
                      Shopify Development
                    </Link>
                    <Link href="/projects/games" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary py-2">
                      Game Dev / Unreal
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-medium">About</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium">Contact</Link>
                
                <div className="mt-6 flex gap-4 border-t pt-6">
                   <Link href="https://github.com/RaizenStyx" target="_blank">
                     <Icons.gitHub className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                   </Link>
                   <Link href="https://linkedin.com/in/connorreed-dev" target="_blank">
                     <Icons.linkedIn className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                   </Link>
                    <Link href="https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6" target="_blank">
                    <Icons.upwork className="h-6 w-6" />
                    </Link>
                    <Link href="mailto:me@connorreed.dev" target="_blank">
                    <Icons.mail className="h-6 w-6" />
                    </Link>
                    <Link href="tel:+4233675437">
                    <Icons.phone className="h-6 w-6" />
                    </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// HELPER COMPONENT FOR THE MENU ITEMS
const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"