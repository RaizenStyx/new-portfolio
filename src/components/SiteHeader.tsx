"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; // Added for Mobile
import { useState } from "react";
import { cn } from "@/lib/utils";

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
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    
                    {/* FEATURED ITEM (Takes up left column) */}
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/projects/social-app"
                        >
                          <Icons.gitHub className="h-6 w-6" /> {/* Placeholder Icon */}
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Coven / Nocta
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            A Next.js 16 social platform with real-time widgets and community tools.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    
                    {/* LIST ITEMS (Right column) */}
                    <ListItem href="/projects/shopify" title="Shopify Development">
                      Custom Liquid themes and e-commerce optimization.
                    </ListItem>
                    <ListItem href="/projects/games" title="Game Development">
                      Unreal Engine 5 mechanics and C++ systems.
                    </ListItem>
                    <ListItem href="/projects/archive" title="Project Archive">
                      Older OOP, Java, and HTML5 Canvas experiments.
                    </ListItem>
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
              <Link href="https://github.com/yourusername" target="_blank">
                 <Icons.gitHub className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername" target="_blank">
                 <Icons.linkedIn className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://upwork.com/yourusername" target="_blank">
                <Icons.upwork className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Icons.mail className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank">
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
                
                {/* Mobile Accordion for Projects */}
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="py-0 text-lg font-medium hover:no-underline">
                        Projects
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-2 pt-2 pl-4">
                        <Link href="/projects/social-app" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">
                          Social App (Featured)
                        </Link>
                        <Link href="/projects/shopify" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">
                          Shopify Development
                        </Link>
                        <Link href="/projects/games" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary">
                          Game Dev / Unreal
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                <Link href="/about" onClick={() => setOpen(false)} className="text-lg font-medium">About</Link>
                <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium">Contact</Link>
                
                <div className="mt-6 flex gap-4 border-t pt-6">
                   <Link href="https://github.com/yourusername" target="_blank">
                     <Icons.gitHub className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                   </Link>
                   <Link href="https://linkedin.com/in/yourusername" target="_blank">
                     <Icons.linkedIn className="h-6 w-6 text-muted-foreground hover:text-foreground" />
                   </Link>
                    <Link href="https://github.com/yourusername" target="_blank">
                    <Icons.upwork className="h-6 w-6" />
                    </Link>
                    <Link href="https://github.com/yourusername" target="_blank">
                    <Icons.mail className="h-6 w-6" />
                    </Link>
                    <Link href="https://github.com/yourusername" target="_blank">
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
  React.ElementRef<"a">,
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