// components/calendar/month-calendar.tsx

"use client";

import {
     Calendar,
     dateFnsLocalizer,
} from "react-big-calendar";

import {
     format,
     parse,
     startOfWeek,
     getDay,
} from "date-fns";

import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {};

const localizer =
     dateFnsLocalizer({
          format,
          parse,
          startOfWeek,
          getDay,
          locales,
     });

interface Props {
     events: {
          id: string;
          title: string;
          start: string;
          end: string;
     }[];
}

export function MonthCalendar({
     events,
}: Props) {
     return (
          <div className="h-[800px] rounded-lg overflow-hidden border">
               <Calendar
                    localizer={localizer}
                    events={events.map(
                         (event) => ({
                              ...event,
                              start: new Date(
                                   event.start
                              ),
                              end: new Date(
                                   event.end
                              ),
                         })
                    )}
                    startAccessor="start"
                    endAccessor="end"
                    views={["month"]}
                    defaultView="month"
               />
          </div>
     );
}