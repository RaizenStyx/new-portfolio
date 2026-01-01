import Link from "next/link";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* COL 1: BRANDING */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">Connor Reed</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-stack developer specializing in Shopify ecosystems, React applications, and Game Development.
            </p>
          </div>

          {/* COL 2: PROJECTS */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">
                <Link href="/projects">Projects</Link>
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/projects/nyxus" className="hover:text-primary transition-colors">
                  Social App (Featured)
                </Link>
              </li>
              <li>
                <Link href="/projects/shopify" className="hover:text-primary transition-colors">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link href="/projects/games" className="hover:text-primary transition-colors">
                  Game Development
                </Link>
              </li>
              <li>
                <Link href="/projects/archive" className="hover:text-primary transition-colors">
                  Project Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: CONNECT */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">
                <Link href="/contact">Contact</Link>
            </h3>
            <div className="flex gap-4">
              <Link href="https://github.com/RaizenStyx" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/connorreed-dev" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.linkedIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.upwork.com/freelancers/~011890ee4ee1c9e2f6" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.upwork className="h-5 w-5" />
                <span className="sr-only">Upwork</span>
              </Link>
              <Link href="https://discord.com/users/250628009403351041" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.discord className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                 <Link href="mailto:me@connorreed.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    me@connorreed.dev
                 </Link>
                 <Link href="tel:+4233675437" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +1 (423) 367-5437
                 </Link>
            </div>
          </div>

           {/* COL 4: LEGAL / STATUS */}
           <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Status</h3>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to new opportunities
             </div>
             <p className="text-xs text-muted-foreground mt-auto">
                © {new Date().getFullYear()} Connor Reed. <br />
                Built with Next.js 16 & Tailwind.
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
}