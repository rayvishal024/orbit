import { prisma } from "@/lib/prisma";

export async function getUserIntegrations(userId: string) {
     const integrations = await prisma.integration.findMany({
               where: {
                    userId,
               },
          });

     return {
          gmail: integrations.some(
               (i) =>
                    i.provider === "GMAIL" &&
                    i.connected
          ),

          calendar: integrations.some(
               (i) =>
                    i.provider === "CALENDAR" &&
                    i.connected
          ),
     };
}
