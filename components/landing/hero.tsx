import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
     return (
          <section className="relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

               <div className="mx-auto max-w-7xl px-6 py-24">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                         <div>
                              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
                                   <span className="h-2 w-2 rounded-full bg-primary" />
                                   AI-Powered Communication Workspace
                              </div>

                              <h1 className="max-w-3xl text-5xl font-bold tracking-tight lg:text-6xl">
                                   Everything important.
                                   <br />
                                   One workspace.
                              </h1>

                              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                                   Orbit unifies email, calendar,
                                   and AI into a single workspace
                                   so you can focus on work instead
                                   of switching between tools.
                              </p>

                              <div className="mt-8 flex flex-wrap gap-4">
                                   <Link href="/login">
                                        <Button size="lg">
                                             Get Started Free
                                        </Button>
                                   </Link>

                                   <Button
                                        variant="outline"
                                        size="lg"
                                   >
                                        Watch Demo
                                   </Button>
                              </div>

                              <div className="mt-10 flex gap-8 text-sm text-muted-foreground">
                                   <div>
                                        <div className="font-semibold text-foreground">
                                             Gmail
                                        </div>
                                        Integration
                                   </div>

                                   <div>
                                        <div className="font-semibold text-foreground">
                                             Calendar
                                        </div>
                                        Scheduling
                                   </div>

                                   <div>
                                        <div className="font-semibold text-foreground">
                                             AI
                                        </div>
                                        Assistant
                                   </div>
                              </div>
                         </div>

                         <div className="relative">
                              <div className="rounded-3xl border bg-card p-6 shadow-sm">

                                   <div className="mb-6 flex items-center justify-between">
                                        <h3 className="font-semibold">
                                             Daily Brief
                                        </h3>

                                        <span className="text-sm text-muted-foreground">
                                             Today
                                        </span>
                                   </div>

                                   <div className="space-y-4">
                                        <div className="rounded-xl border p-4">
                                             <p className="text-sm text-muted-foreground">
                                                  Important Emails
                                             </p>

                                             <p className="mt-2 text-2xl font-bold">
                                                  5
                                             </p>
                                        </div>

                                        <div className="rounded-xl border p-4">
                                             <p className="text-sm text-muted-foreground">
                                                  Meetings
                                             </p>

                                             <p className="mt-2 text-2xl font-bold">
                                                  3
                                             </p>
                                        </div>

                                        <div className="rounded-xl border p-4">
                                             <p className="text-sm text-muted-foreground">
                                                  Suggested Actions
                                             </p>

                                             <ul className="mt-3 space-y-2 text-sm">
                                                  <li>
                                                       Reply to recruiter
                                                  </li>

                                                  <li>
                                                       Schedule interview
                                                  </li>

                                                  <li>
                                                       Review proposal
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>

                              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-primary/20" />
                              <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full border border-primary/20" />
                         </div>
                    </div>
               </div>
          </section>
     );
}