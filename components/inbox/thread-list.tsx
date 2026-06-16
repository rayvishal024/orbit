import Link from "next/link";

import { InboxThread } from "@/types/gmail";

interface Props {
     threads: InboxThread[];
     selectedThreadId?: string;
     basePath: string;
}

export function ThreadList({
     threads,
     selectedThreadId,
     basePath = "/inbox",
}: Props) {
     return (
          <div className="h-full overflow-y-auto">
               {threads.map((thread) => (
                    <Link
                         key={thread.id}
                         href={`${basePath}&thread=${thread.id}`}
                         className={`
            block border-b p-4
            ${selectedThreadId ===
                                   thread.id
                                   ? "bg-muted"
                                   : ""
                              }
          `}
                    >
                         <div className="flex items-center justify-between">
                              <span
                                   className={
                                        thread.unread
                                             ? "font-semibold"
                                             : ""
                                   }
                              >
                                   {thread.sender}
                              </span>
                         </div>

                         <div className="truncate">
                              {thread.subject}
                         </div>

                         <div className="truncate text-xs text-muted-foreground">
                              {thread.snippet}
                         </div>
                    </Link>
               ))}
          </div>
     );
}