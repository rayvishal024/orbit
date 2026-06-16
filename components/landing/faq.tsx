const faqs = [
     {
          q: "Does Orbit replace Gmail?",
          a: "No. Orbit connects with Gmail."
     },
     {
          q: "Do I need another account?",
          a: "No. Sign in with Google."
     },
     {
          q: "Is my data secure?",
          a: "Orbit only accesses authorized data."
     }
];

export function Faq() {
     return (
          <section id="faq" className="py-32">

               <div className="mx-auto max-w-4xl px-6">

                    <h2 className="mb-12 text-center text-5xl font-bold">
                         FAQ
                    </h2>

                    <div className="space-y-4">

                         {faqs.map((faq) => (
                              <div
                                   key={faq.q}
                                   className="rounded-2xl border p-6"
                              >
                                   <h3 className="font-medium">
                                        {faq.q}
                                   </h3>

                                   <p className="mt-2 text-muted-foreground">
                                        {faq.a}
                                   </p>
                              </div>
                         ))}

                    </div>

               </div>

          </section>
     );
}