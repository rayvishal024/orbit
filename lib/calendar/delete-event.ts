import { corsair } from "@/server/corsair";
import { getTenantId } from "./service";

export async function deleteEvent(
     userId: string,
     eventId: string
) {
     const tenantId =
          await getTenantId(userId);

     return await corsair
          .withTenant(tenantId)
          .googlecalendar
          .api
          .events
          .delete({
               calendarId: "primary",

               id: eventId,
          });
}