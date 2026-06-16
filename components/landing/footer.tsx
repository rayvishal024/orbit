import Link from "next/link";

export function Footer() {
     return (
          <footer className="border-t">

               <div className="mx-auto max-w-7xl px-6 py-12">

                    <div className="grid gap-12 md:grid-cols-4">

                         <div>
                              <h3 className="font-bold text-xl">
                                   Orbit
                              </h3>

                              <p className="mt-4 text-muted-foreground">
                                   Email. Calendar. AI.
                              </p>
                         </div>

                         <div>
                              <h4 className="font-medium">
                                   Product
                              </h4>

                              <div className="mt-4 space-y-2">
                                   <Link href="#">Features</Link>
                              </div>
                         </div>

                         <div>
                              <h4 className="font-medium">
                                   Resources
                              </h4>

                              <div className="mt-4 space-y-2">
                                   <Link href="#">Docs</Link>
                              </div>
                         </div>

                         <div>
                              <h4 className="font-medium">
                                   Legal
                              </h4>

                              <div className="mt-4 space-y-2">
                                   <Link href="#">Privacy</Link>
                              </div>
                         </div>

                    </div>

               </div>

          </footer>
     );
}