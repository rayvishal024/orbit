import { prisma } from "@/lib/prisma";
import { corsair } from "@/server/corsair";


import { transformEvent } from "@/lib/calendar/transform-event";

export async function getTenantId(
     userId: string
): Promise<string> {
     const integration =
          await prisma.integration.findFirst({
               where: {
                    userId,
                    provider: "GMAIL",
                    connected: true,
               },
          });

     if (!integration?.connectionId) {
          throw new Error(
               "Gmail connection not found"
          );
     }

     return integration.connectionId;
}

export async function getEvents(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     const response =
          await corsair
               .withTenant(tenantId)
               .googlecalendar
               .api
               .events
               .getMany({
                    calendarId: "primary",
                    maxResults: 50,
               });

     const events =
          response.items ?? [];

    // console.log("events :", events)
     return events.map(
          transformEvent
     );
}