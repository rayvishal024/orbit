export function AiShowcase() {
     return (
          <section className="py-32">

               <div className="mx-auto max-w-5xl px-6">

                    <div className="text-center">

                         <p className="font-medium text-primary">
                              AI POWERED
                         </p>

                         <h2 className="mt-4 text-5xl font-bold">
                              Ask Orbit anything
                         </h2>

                    </div>

                    <div className="mt-16 rounded-3xl border bg-card p-8">

                         <div className="rounded-xl border p-4">
                              Summarize today's unread emails
                         </div>

                         <div className="mt-8 rounded-xl bg-muted p-6">

                              <h3 className="font-medium">
                                   AI Response
                              </h3>

                              <p className="mt-4 text-muted-foreground">
                                   You have 3 important emails.
                                   One interview invitation,
                                   one security alert and one
                                   calendar update.
                              </p>

                         </div>

                    </div>

               </div>

          </section>
     );
}