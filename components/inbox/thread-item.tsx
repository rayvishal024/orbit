import { InboxThread } from "@/types/gmail";

interface Props {
     thread: InboxThread;
}

export function ThreadItem({
     thread,
}: Props) {
     return (
          <div
               className="
        cursor-pointer
        border-b
        px-4
        py-3
        hover:bg-muted/50
        transition-colors
      "
          >
               <div className="mb-1 flex items-center justify-between gap-3">
                    <span
                         className="
            truncate
            text-sm
            font-semibold
          "
                    >
                         {thread.sender}
                    </span>

                    <span
                         className="
            shrink-0
            text-xs
            text-muted-foreground
          "
                    >
                         {new Date(
                              Number(thread.timestamp)
                         ).toLocaleDateString()}
                    </span>
               </div>

               <div
                    className="
          truncate
          text-sm
          font-medium
        "
               >
                    {thread.subject}
               </div>

               <div
                    className="
          mt-1
          truncate
          text-xs
          text-muted-foreground
        "
               >
                    {thread.snippet}
               </div>
          </div>
     );
}