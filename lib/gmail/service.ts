import { prisma } from "@/lib/prisma";
import { corsair } from "@/server/corsair";

import { mapThread, mapThreadDetail,} from "./transform-email";

import { buildRawEmail } from "./build-raw-email";
import { SendEmailInput } from "@/types/compose";

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

export async function getThreads(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     const result =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .list({
                    maxResults: 25,
               });

     const threads =
          result.threads ?? [];

     const detailedThreads =
          await Promise.all(
               threads.map((thread) =>
                    corsair
                         .withTenant(tenantId)
                         .gmail
                         .api
                         .threads
                         .get({
                              id: thread.id!,
                              format: "full",
                         })
               )
          );

     return detailedThreads.map(
          mapThread
     );
}

export async function getThread(
     userId: string,
     threadId: string
) {
     const tenantId =
          await getTenantId(userId);

     const thread =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .get({
                    id: threadId,
                    format: "full",
               });

     return mapThreadDetail(thread);
}

export async function sendEmail(
     userId: string,
     input: SendEmailInput
) {
     const tenantId =
          await getTenantId(userId);

     if (!tenantId) {
          throw new Error(
               "Gmail not connected"
          );
     }

     const raw =
          buildRawEmail(input);

     return corsair
          .withTenant(tenantId)
          .gmail
          .api
          .messages
          .send({
               raw,
               threadId: input.threadId,
          });
}

export async function searchThreads(
     userId: string,
     query: string
) {
     const tenantId =
          await getTenantId(userId);

     const result =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .list({
                    q: query,
                    maxResults: 50,
               });

     const threads =
          result.threads ?? [];

     const detailedThreads =
          await Promise.all(
               threads.map((thread) =>
                    corsair
                         .withTenant(tenantId)
                         .gmail
                         .api
                         .threads
                         .get({
                              id: thread.id!,
                              format: "full",
                         })
               )
          );

     return detailedThreads.map(
          mapThread
     );
}

export async function getLabels(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     return corsair
          .withTenant(tenantId)
          .gmail
          .api
          .labels
          .list({});
}

export async function getSentThreads(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     const result =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .list({
                    labelIds: ["SENT"],
                    maxResults: 25,
               });

     const threads =
          result.threads ?? [];

     const detailedThreads =
          await Promise.all(
               threads.map((thread) =>
                    corsair
                         .withTenant(tenantId)
                         .gmail
                         .api
                         .threads
                         .get({
                              id: thread.id!,
                              format: "full",
                         })
               )
          );

     return detailedThreads.map(
          mapThread
     );
}

export async function getStarredThreads(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     const result =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .list({
                    q: "is:starred",
                    maxResults: 25,
               });

     const threads =
          result.threads ?? [];

     const detailedThreads =
          await Promise.all(
               threads.map((thread) =>
                    corsair
                         .withTenant(tenantId)
                         .gmail
                         .api
                         .threads
                         .get({
                              id: thread.id!,
                              format: "full",
                         })
               )
          );

     return detailedThreads.map(
          mapThread
     );
}

export async function getTrashThreads(
     userId: string
) {
     const tenantId =
          await getTenantId(userId);

     const result =
          await corsair
               .withTenant(tenantId)
               .gmail
               .api
               .threads
               .list({
                    q: "in:trash",
                    maxResults: 25,
               });

     const threads =
          result.threads ?? [];

     const detailedThreads =
          await Promise.all(
               threads.map((thread) =>
                    corsair
                         .withTenant(tenantId)
                         .gmail
                         .api
                         .threads
                         .get({
                              id: thread.id!,
                              format: "full",
                         })
               )
          );

     return detailedThreads.map(
          mapThread
     );
}