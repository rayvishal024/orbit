import { CalendarEvent } from "@/types/calendar";

export function transformEvent(
     event: any
) {
     return {
          id: event.id,

          title:
               event.summary ??
               "Untitled Event",

          description:
               event.description ?? "",

          location:
               event.location ?? "",

          start:
               event.start?.dateTime ??
               event.start?.date,

          end:
               event.end?.dateTime ??
               event.end?.date,

          attendees:
               event.attendees?.map(
                    (a: any) => a.email
               ) ?? [],
     };
}