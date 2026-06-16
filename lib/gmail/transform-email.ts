import {
     InboxMessage,
     InboxThread,
     InboxThreadDetail,
} from "@/types/gmail";

function getHeader(
     headers: any[] | undefined,
     name: string
) {
     return (
          headers?.find(
               (header) =>
                    header.name?.toLowerCase() ===
                    name.toLowerCase()
          )?.value ?? ""
     );
}

function extractBody(part: any): string {
     if (!part) return "";

     if (part.body?.data) {
          return Buffer.from(
               part.body.data,
               "base64"
          ).toString("utf8");
     }

     if (part.parts) {
          for (const child of part.parts) {
               const result = extractBody(child);

               if (result) return result;
          }
     }

     return "";
}

export function mapThread(
     thread: any
): InboxThread {
     const first =
          thread.messages?.[0];

     const headers =
          first?.payload?.headers ?? [];

     return {
          id: thread.id ?? "",
          subject:
               getHeader(headers, "Subject") ||
               "(No Subject)",

          sender:
               getHeader(headers, "From"),

          snippet:
               thread.snippet ?? "",

          unread:
               first?.labelIds?.includes(
                    "UNREAD"
               ) ?? false,

          starred:
               first?.labelIds?.includes(
                    "STARRED"
               ) ?? false,

          timestamp:
               first?.internalDate?.toString?.() ??
               "",
     };
}

export function mapThreadDetail(
     thread: any
): InboxThreadDetail {
     const messages =
          thread.messages?.map(
               (message: any): InboxMessage => {
                    const headers =
                         message.payload?.headers ??
                         [];

                    return {
                         id:
                              message.id ?? "",

                         threadId:
                              message.threadId ?? "",

                         subject:
                              getHeader(
                                   headers,
                                   "Subject"
                              ) || "(No Subject)",

                         from:
                              getHeader(
                                   headers,
                                   "From"
                              ),

                         body: extractBody(
                              message.payload
                         ),

                         timestamp:
                              message.internalDate?.toString?.() ??
                              "",

                         unread:
                              message.labelIds?.includes(
                                   "UNREAD"
                              ) ?? false,

                         starred:
                              message.labelIds?.includes(
                                   "STARRED"
                              ) ?? false,
                    };
               }
          ) ?? [];

     return {
          id: thread.id ?? "",

          subject:
               messages[0]?.subject ??
               "(No Subject)",

          participants:
               messages.map(
                    (m : any) => m.from
               ),

          messages,
     };
}