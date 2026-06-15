interface IntegrationCardProps {
     title: string;
     description: string;
     connected: boolean;
}

export function IntegrationCard({
     title,
     description,
     connected,
}: IntegrationCardProps) {
     return (
          <div className="rounded-xl border p-6">
               <div className="flex items-center justify-between">
                    <div>
                         <h3 className="font-semibold">
                              {title}
                         </h3>

                         <p className="mt-1 text-sm text-muted-foreground">
                              {description}
                         </p>
                    </div>

                    <div>
                         {connected ? (
                              <span className="text-green-500">
                                   Connected
                              </span>
                         ) : (
                              <span className="text-muted-foreground">
                                   Not Connected
                              </span>
                         )}
                    </div>
               </div>

               <button className="mt-4 rounded-lg border px-4 py-2">
                    {connected ? "Manage" : "Connect"}
               </button>
          </div>
     );
}