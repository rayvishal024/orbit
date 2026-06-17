import {
     CalendarEvent,
     GoogleCalendarEvent,
} from "@/types/calendar";

export function transformEvent(
     event: GoogleCalendarEvent
): CalendarEvent {
     return {
          id: event.id ?? "",

          title: event.summary ?? "Untitled Event",

          description: event.description ?? "",

          location: event.location ?? "",

          start:
               event.start?.dateTime ??
               event.start?.date ??
               "",

          end:
               event.end?.dateTime ??
               event.end?.date ??
               "",

          attendees:
               event.attendees?.map(
                    (a) => a.email ?? ""
               ) ?? [],
     };
}