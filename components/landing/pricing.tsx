export function Pricing() {
     return (
          <section id="pricing" className="py-32">

               <div className="mx-auto max-w-4xl px-6">

                    <div className="rounded-[32px] border bg-card p-12 text-center">

                         <p className="font-medium text-primary">
                              PRICING
                         </p>

                         <h2 className="mt-4 text-5xl font-bold">
                              Orbit Pro
                         </h2>

                         <div className="mt-6 text-6xl font-bold">
                              $19
                         </div>

                         <p className="text-muted-foreground">
                              per month
                         </p>

                         <ul className="mt-10 space-y-3">
                              <li>Email Integration</li>
                              <li>Calendar Integration</li>
                              <li>AI Assistant</li>
                              <li>Priority Access</li>
                         </ul>

                    </div>

               </div>

          </section>
     );
}