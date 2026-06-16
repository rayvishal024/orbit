import { corsair } from "@/server/corsair";

import { getTenantId } from "./service";

interface CreateEventInput {
     userId: string;
     title: string;
     description?: string;
     start: string;
     end: string;
}

export async function createEvent(
     data: CreateEventInput
) {
     const tenantId = await getTenantId(
          data.userId
     );

     const startDate = new Date(
          data.start
     );

     const endDate = new Date(
          data.end
     );

     if (startDate >= endDate) {
          throw new Error(
               "End time must be after start time"
          );
     }

     const event = await corsair
          .withTenant(tenantId)
          .googlecalendar
          .api
          .events
          .create({
               calendarId: "primary",

               event: {
                    summary: data.title,

                    description:
                         data.description,

                    start: {
                         dateTime:
                              startDate.toISOString(),
                         timeZone:
                              "Asia/Kolkata",
                    },

                    end: {
                         dateTime:
                              endDate.toISOString(),
                         timeZone:
                              "Asia/Kolkata",
                    },
               },
          });

     return event;
}