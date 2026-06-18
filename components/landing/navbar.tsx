import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
     return (
          <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
               <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <Link
                         href="/"
                         className="flex items-center gap-3"
                    >
                         <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card">
                              <div className="h-3 w-3 rounded-full bg-primary" />
                         </div>

                         <span className="text-lg font-semibold">
                              Orbit
                         </span>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                         <Link
                              href="#features"
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                         >
                              Features
                         </Link>

                         <Link
                              href="#workflow"
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                         >
                              How It Works
                         </Link>

                         <Link
                              href="#pricing"
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                         >
                              Pricing
                         </Link>

                         <Link
                              href="#faq"
                              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                         >
                              FAQ
                         </Link>
                    </nav>

                    <div className="flex items-center gap-3">
                         <Link href="/login">
                              <Button variant="ghost">
                                   Login
                              </Button>
                         </Link>

                         <Link href="/login">
                              <Button>
                                   Get Started
                              </Button>
                         </Link>
                    </div>
               </div>
          </header>
     );
}
