import { corsair } from "@/server/corsair";

import { getTenantId } from "./service";

interface UpdateEventInput {
     userId: string;
     eventId: string;
     title: string;
     description?: string;
     start: string;
     end: string;
}

export async function updateEvent(
     data: UpdateEventInput
) {
     const tenantId =
          await getTenantId(data.userId);

     return await corsair
          .withTenant(tenantId)
          .googlecalendar
          .api
          .events
          .update({
               calendarId: "primary",

               id: data.eventId,

               event: {
                    summary: data.title,

                    description:
                         data.description,

                    start: {
                         dateTime: data.start,
                         timeZone: "Asia/Kolkata",
                    },

                    end: {
                         dateTime: data.end,
                         timeZone: "Asia/Kolkata",
                    },
               },
          });
}