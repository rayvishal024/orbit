const features = [
     {
          title: "Unified Inbox",
          description:
               "Manage communication without switching tabs."
     },
     {
          title: "Smart Calendar",
          description:
               "Meetings and schedules in one place."
     },
     {
          title: "AI Assistant",
          description:
               "Summaries, drafts and suggestions instantly."
     },
];

export function Features() {
     return (
          <section id="features" className="py-32">
               <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-16 text-center">
                         <h2 className="text-5xl font-bold">
                              Built for focus
                         </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                         {features.map((feature) => (
                              <div
                                   key={feature.title}
                                   className="
                rounded-3xl
                border
                bg-card
                p-8
                transition-all
                hover:-translate-y-2
              "
                              >
                                   <h3 className="text-xl font-semibold">
                                        {feature.title}
                                   </h3>

                                   <p className="mt-4 text-muted-foreground">
                                        {feature.description}
                                   </p>
                              </div>
                         ))}
                    </div>

               </div>
          </section>
     );
}