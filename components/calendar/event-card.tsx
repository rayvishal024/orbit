"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditEventDialog }
     from "./edit-event-dialog";
import { CalendarEvent } from "@/types/calendar";

interface Props {
     event: CalendarEvent;
}

export function EventCard({
     event,
}: Props) {
     async function onDelete() {
          const confirmed =
               window.confirm(
                    "Delete this event?"
               );

          if (!confirmed) return;

          await fetch(
               `/api/calendar/events/${event.id}`,
               {
                    method: "DELETE",
               }
          );

          window.location.reload();
     }

     return (
          <div className="rounded-lg border p-4">
               <div className="flex items-start justify-between">
                    <div>
                         <h2 className="font-medium">
                              {event.title}
                         </h2>

                         <p className="text-sm text-muted-foreground">
                              {event.start}
                         </p>
                    </div>


                    <div className="flex gap-2">
                         <EditEventDialog
                              event={event}
                         />

                         <Button
                              size="icon"
                              variant="destructive"
                              onClick={onDelete}
                         >
                              <Trash2 size={16} />
                         </Button>
                    </div>
               </div>
          </div>
     );
}