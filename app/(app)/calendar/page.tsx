import { auth } from "@/auth";

import {
  getEvents,
} from "@/lib/calendar";

import { CreateEventDialog }
  from "@/components/calendar/create-event-dialog";
import { EventCard }
  from "@/components/calendar/event-card";
import { MonthCalendar } from "@/components/calendar/month-calendar";

export default async function CalendarPage() {
  const session =
    await auth();

  if (!session?.user?.id) {
    return null;
  }

  const events =
    await getEvents(
      session.user.id
    );


  return (
    <div className="p-6">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            Calendar
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage meetings and schedules
          </p>
        </div>

        <CreateEventDialog />
      </div>

      <MonthCalendar
        events={events}
      />

      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
          />
        ))}
      </div>

    </div>
  );
}
