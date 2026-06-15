"use client";

import { Button } from "@/components/ui/button";

interface IntegrationCardProps {
     title: string;
     description: string;
     connected: boolean;
     pluginName: "gmail" | "googlecalendar";
}

export function IntegrationCard({
     title,
     description,
     connected,
     pluginName,
}: IntegrationCardProps) {
     const handleConnect = () => {
          window.location.href = `/api/connect?plugin=${pluginName}`;
     };

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
                              <span className="text-green-600 font-medium">✓ Connected</span>
                         ) : (
                              <span className="text-muted-foreground">
                                   Not Connected
                              </span>
                         )}
                    </div>
               </div>

               <Button
                    variant={connected ? "outline" : "default"}
                    className="mt-4"
                    onClick={handleConnect}
               >
                    {connected ? "Reconnect" : "Connect"}
               </Button>
          </div>
     );
}