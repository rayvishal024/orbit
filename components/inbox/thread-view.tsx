import type { InboxThreadDetail } from "@/types/gmail";

import { ReplyBox } from "./reply-box";

export function ThreadView({
     thread,
}: {
     thread: InboxThreadDetail | null;
}) {
     if (!thread) {
          return (
               <div className="flex h-full items-center justify-center text-muted-foreground">
                    Select a conversation
               </div>
          );
     }

     return (
          <div className="flex h-full flex-col">
               {/* Header */}
               <div className="border-b px-8 py-6">
                    <h1 className="text-2xl font-semibold">
                         {thread.subject}
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                         {thread.participants.join(", ")}
                    </p>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto">
                    <div className="mx-auto max-w-4xl px-8 py-6">
                         {thread.messages.map((message) => (
                              <div
                                   key={message.id}
                                   className="mb-8 border-b pb-6"
                              >
                                   <div className="mb-4">
                                        <div className="font-medium">
                                             {message.from}
                                        </div>

                                        <div className="text-xs text-muted-foreground">
                                             {new Date(
                                                  Number(message.timestamp)
                                             ).toLocaleString()}
                                        </div>
                                   </div>

                                   <div className="whitespace-pre-wrap leading-7">
                                        {message.body}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>

               {/* Reply */}
               <div className="border-t px-8 py-6">
                    <ReplyBox
                         to={thread.messages[0]?.from ?? ""}
                         subject={thread.subject}
                         threadId={thread.id}
                    />
               </div>
          </div>
     );
}